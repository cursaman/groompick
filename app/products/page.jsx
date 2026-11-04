import Link from 'next/link';
import SiteHeader from '../components/site-header';
import SiteFooter from '../components/site-footer';
import ProductList from '../components/product-list';
import { listedProducts, importedAt } from '../../lib/catalog';

export const metadata = { title: '상품 보기 | 가위닥터 사사끼', description: '가위닥터의 일자·커브·숱·요술가위와 미용용품을 살펴보고 스마트스토어에서 구매하세요.' };
export default function ProductsPage() {
  return <><SiteHeader/><main className="catalog-main"><ol className="catalog-breadcrumb"><li><Link href="/">홈</Link></li><li aria-current="page">상품 보기</li></ol>
    <div className="catalog-intro"><p className="eyebrow">가위닥터의 미용 도구</p><h1>손에 맞는 가위, 함께 찾아보세요.</h1><p>일자 가위부터 커브·숱·요술가위까지.<br/>상품을 살펴보고 스마트스토어에서 구매하거나 전화로 상담하세요.</p></div>
    <ProductList products={listedProducts}/>
    <p className="catalog-source-note">상품 정보 갱신일 {new Intl.DateTimeFormat('ko-KR', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(importedAt))} · 최종 가격·옵션·재고·배송 조건은 스마트스토어에서 확인해주세요.</p>
  </main><SiteFooter/></>;
}
