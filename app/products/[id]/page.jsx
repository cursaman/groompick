import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '../../components/site-header';
import SiteFooter from '../../components/site-footer';
import ProductImage from '../../components/product-image';
import ProductCard from '../../components/product-card';
import Icon from '../../components/ui-icon';
import { getProduct, listedProducts, importedAt } from '../../../lib/catalog';
import { money, purchaseUrl } from '../../../lib/catalog-utils';

export const dynamicParams = false;
export function generateStaticParams() { return listedProducts.map(product => ({ id: product.id })); }
export async function generateMetadata({ params }) { const { id } = await params; const product = getProduct(id); return product ? { title: `${product.name} | 가위닥터`, description: `${product.name} 상품 정보와 구매 안내`, openGraph: { title: product.name, description: '가위닥터 사사끼 상품 안내', images: [{ url: product.image }] } } : { title: '상품을 찾을 수 없습니다 | 가위닥터' }; }
export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();
  const related = listedProducts.filter(item => item.id !== id && item.category === product.category).slice(0, 4);
  const shipping = product.shippingType === '무료' ? '무료배송' : product.shippingType === '조건부 무료' ? `${money(product.shippingFee)} / 조건부 무료 (조건은 스마트스토어 확인)` : money(product.shippingFee);
  return <><SiteHeader/><main className="catalog-main"><ol className="catalog-breadcrumb"><li><Link href="/">홈</Link></li><li><Link href="/products">상품 보기</Link></li><li aria-current="page">{product.category}</li></ol>
    <section className="product-detail"><ProductImage src={product.image} name={product.name} eager/><div className="product-detail-copy"><p className="eyebrow">{product.category}{product.leftHanded ? ' · 왼손용' : ''}</p><h1>{product.name}</h1>
      <div className="product-detail-price">{product.originalPrice > product.price && <del>{money(product.originalPrice)}</del>}<strong>{money(product.price)}</strong></div>
      <p className="catalog-purchase-note">표시 가격은 가져온 상품 정보 기준입니다.<br/>최종 결제 금액과 재고는 스마트스토어에서 확인해주세요.</p>
      <dl className="product-specs">{product.brand && <div><dt>브랜드</dt><dd>{product.brand}</dd></div>}{product.model && <div><dt>모델명</dt><dd>{product.model}</dd></div>}<div><dt>배송 안내</dt><dd>{shipping}</dd></div><div><dt>옵션</dt><dd>{product.hasOptions ? '스마트스토어에서 규격·옵션을 선택해주세요.' : '옵션 및 구성은 스마트스토어 상품 상세를 확인해주세요.'}</dd></div><div><dt>상품번호</dt><dd>{product.id}</dd></div></dl>
      <div className="product-purchase-actions"><a className="smartstore-buy" href={purchaseUrl(id)} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">N</span>스마트스토어에서 구매 ↗</a><a className="catalog-call" href="tel:01065644992"><Icon name="phone"/>상품 상담 010-6564-4992</a></div>
    </div></section>
    <section className="product-information"><h2>상품 안내</h2>{product.description ? <p>{product.description}</p> : <p>정확한 규격과 재질, 상세 사진, 구성품은 스마트스토어에서 확인하실 수 있습니다. 손에 맞는 가위 선택이 고민되면 전화로 상담해주세요.</p>}<div className="product-info-note"><Icon name="shield"/><p>구매 상품의 교환·반품 및 A/S 조건은 스마트스토어의 해당 상품 안내를 확인해주세요. 연마·수리 서비스의 환불 안내와는 별도로 적용됩니다.</p></div><a className="text-link" href={purchaseUrl(id)} target="_blank" rel="noopener noreferrer">스마트스토어 상세 설명 보기 ↗</a><small>상품 정보 갱신일 {new Intl.DateTimeFormat('ko-KR', { timeZone: 'Asia/Seoul' }).format(new Date(importedAt))}</small></section>
    {related.length > 0 && <section className="catalog-related"><div className="section-heading"><h2>함께 살펴볼 상품</h2><Link href="/products" className="text-link">전체 상품 보기 ↗</Link></div><div className="catalog-grid">{related.map(item => <ProductCard product={item} key={item.id}/>)}</div></section>}
  </main><SiteFooter/></>;
}
