import Image from 'next/image';
import Link from 'next/link';
import Icon from './ui-icon';

export default function SiteHeader() {
  return <header className="header">
    <Link className="brand-badge" href="/" aria-label="가위닥터 사사끼 홈"><Image src="/images/scissor-doctor-brand.svg" alt="가위닥터 SINCE 1995" width={240} height={86}/></Link>
    <nav aria-label="주요 메뉴"><Link href="/#services"><Icon name="scissors"/>연마·수리</Link><Link href="/products"><Icon name="package"/>상품 보기</Link><Link href="/#repair-process"><Icon name="clipboard"/>접수 안내</Link><Link href="/#about"><Icon name="user"/>장인 소개</Link><Link href="/#contact"><Icon name="phone"/>상담 문의</Link></nav>
  </header>;
}
