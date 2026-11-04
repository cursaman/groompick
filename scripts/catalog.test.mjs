import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import Papa from 'papaparse';
import { classify, selectProducts, purchaseUrl } from '../lib/catalog-utils.js';

test('종류 분류: 액세서리·세트·커브 숱가위', () => {
  assert.equal(classify('애견미용가위 5정 수납 파우치'), '미용용품');
  assert.equal(classify('미용가위 민 커브 숱 세트'), '세트');
  assert.equal(classify('왼손 커브 요술 7.5인치'), '숱·요술가위');
});
test('검색·왼손 필터·가격 정렬은 비공개 상품을 제외한다', () => {
  const items = [
    { id: '1', name: 'V10 커브 7인치', brand: '', code: '', category: '커브 가위', price: 200000, order: 0, visible: true, leftHanded: false },
    { id: '2', name: 'V10 왼손 커브 7인치', brand: '', code: '', category: '커브 가위', price: 170000, order: 1, visible: true, leftHanded: true },
    { id: '3', name: 'V10 커브 7인치', brand: '', code: '', category: '커브 가위', price: 1, order: 2, visible: false, leftHanded: true },
  ];
  assert.deepEqual(selectProducts(items, { query: 'V10 7인치', sort: 'price-low' }).map(p => p.id), ['2', '1']);
  assert.deepEqual(selectProducts(items, { leftHanded: true }).map(p => p.id), ['2']);
  assert.equal(selectProducts(items, { query: '없는상품' }).length, 0);
  assert.equal(purchaseUrl('13771846998'), 'https://smartstore.naver.com/kwdt-sasak-dog/products/13771846998');
});
test('잘못된 CSV는 기존 상품 파일을 변경하지 않는다', async () => {
  const dataPath = fileURLToPath(new URL('../data/products.json', import.meta.url));
  const before = await fs.readFile(dataPath, 'utf8');
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'groompick-csv-'));
  const fixture = { '상품번호(스마트스토어)': '123', '상품명': '테스트 가위', '판매가': '100', '할인가': '90', '대표이미지 URL': 'https://example.com/product.jpg', '판매상태': '판매중', '전시상태': '전시중', '재고수량': '1' };
  const cases = [ [fixture, fixture], [{ ...fixture, '할인가': '101' }], [{ ...fixture, '판매가': '' }], [{ ...fixture, '대표이미지 URL': 'javascript:alert(1)' }] ];
  try {
    for (let index = 0; index < cases.length; index++) {
      const csvPath = path.join(directory, `${index}.csv`);
      await fs.writeFile(csvPath, Papa.unparse(cases[index]));
      const result = spawnSync(process.execPath, [fileURLToPath(new URL('./import-products.mjs', import.meta.url)), csvPath], { encoding: 'utf8' });
      assert.notEqual(result.status, 0);
      assert.equal(await fs.readFile(dataPath, 'utf8'), before);
    }
  } finally {
    for (let index = 0; index < cases.length; index++) await fs.unlink(path.join(directory, `${index}.csv`));
    await fs.rmdir(directory);
  }
});
