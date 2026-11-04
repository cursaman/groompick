import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Papa from 'papaparse';
import { classify } from '../lib/catalog-utils.js';

const source = process.argv[2];
if (!source) throw new Error('사용법: npm run import:products -- "CSV 파일 절대 경로"');
const target = fileURLToPath(new URL('../data/products.json', import.meta.url));
const bytes = await fs.readFile(source);
let text;
try { text = new TextDecoder('utf-8', { fatal: true }).decode(bytes); }
catch { text = new TextDecoder('euc-kr', { fatal: true }).decode(bytes); }
const parsed = Papa.parse(text.replace(/^\uFEFF/, ''), { header: true, skipEmptyLines: 'greedy', transformHeader: value => value.trim() });
if (parsed.errors.length) throw new Error(`CSV 형식 오류: ${parsed.errors[0].message}`);
for (const key of ['상품번호(스마트스토어)', '상품명', '판매가', '할인가', '대표이미지 URL', '판매상태', '전시상태', '재고수량']) if (!parsed.meta.fields.includes(key)) throw new Error(`필수 열 없음: ${key}`);
let previous = { products: [] };
try { previous = JSON.parse(await fs.readFile(target, 'utf8')); } catch (error) { if (error.code !== 'ENOENT') throw error; }
const previousById = new Map(previous.products.map(product => [product.id, product]));
const seen = new Set();
function number(value, label) { const text = String(value).replaceAll(',', '').trim(); const result = Number(text); if (!text || !Number.isSafeInteger(result) || result < 0) throw new Error(`${label}: 음수가 아닌 정수가 필요합니다.`); return result; }
const incoming = parsed.data.map((row, order) => {
  const id = row['상품번호(스마트스토어)'].trim();
  if (!/^\d+$/.test(id) || seen.has(id)) throw new Error(`잘못되거나 중복된 상품번호: ${id}`);
  seen.add(id);
  const name = row['상품명'].trim();
  if (!name) throw new Error(`상품명 없음: ${id}`);
  const originalPrice = number(row['판매가'], name);
  const price = row['할인가']?.trim() ? number(row['할인가'], name) : originalPrice;
  if (price > originalPrice) throw new Error(`할인가가 판매가보다 높음: ${name}`);
  const image = new URL(row['대표이미지 URL'].trim());
  if (!['http:', 'https:'].includes(image.protocol)) throw new Error(`잘못된 이미지 URL: ${id}`);
  image.protocol = 'https:';
  if (/^shop\d*\.phinf\.naver\.net$/.test(image.hostname)) image.hostname = 'shop-phinf.pstatic.net';
  const old = previousById.get(id);
  return { id, name, category: classify(name), code: row['판매자상품코드'] || '', brand: row['브랜드명'] || '', model: row['모델명'] || '', price, originalPrice, stock: number(row['재고수량'], name), saleStatus: row['판매상태'], visible: row['전시상태'] === '전시중' && row['판매상태'] === '판매중', featured: old?.featured ?? order < 6, order: old?.order ?? order, leftHanded: /왼손/.test(name), hasOptions: row['옵션'] === 'Y', image: image.href, description: old?.description || '', shippingType: row['배송비유형'] || '', shippingFee: number(row['기본배송비'] || '0', name), createdAt: row['상품등록일'] || '', sourceUpdatedAt: row['최종수정일'] || '' };
});
// CSV에서 빠진 상품은 자동 삭제하지 않습니다. 진열은 visible로 관리합니다.
const retained = previous.products.filter(product => !seen.has(product.id));
const catalog = { importedAt: new Date().toISOString(), source: path.basename(source), products: [...incoming, ...retained] };
await fs.mkdir(path.dirname(target), { recursive: true });
await fs.writeFile(`${target}.tmp`, JSON.stringify(catalog, null, 2) + '\n');
await fs.rename(`${target}.tmp`, target);
console.log(`상품 ${incoming.length}개 가져오기 완료 / 기존 유지 ${retained.length}개 / 총 ${catalog.products.length}개`);
