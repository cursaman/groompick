import Link from 'next/link';
import SiteHeader from './components/site-header';
import SiteFooter from './components/site-footer';

export default function NotFound() { return <><SiteHeader/><main className="catalog-main catalog-empty"><p className="eyebrow">404</p><h1>페이지를 찾을 수 없습니다.</h1><p>상품이 변경되었거나 주소가 올바르지 않습니다.</p><Link className="button" href="/products">상품 목록으로 이동</Link></main><SiteFooter/></>; }
