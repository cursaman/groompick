import Image from 'next/image';

export default function Home() {
  return <>
    <header className="header"><a className="logo" href="#">가위닥터 사사끼<span>·</span></a><nav aria-label="주요 메뉴"><a href="#services">연마·수리</a><a href="#about">장인 소개</a><a href="#contact">상담 문의</a></nav></header>
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">전국 및 부산 가위 연마 · 사사끼 코리아 A/S 센터</p>
          <h1>가위 수리는 역시,<br/><span>가위닥터</span></h1>
          <p className="description">30년 장인의 손길로 정교하게 복원하는 가위날.<br/>헤어 미용 가위부터 애견미용 가위까지 섬세하게</p>
          <div className="hero-actions"><a className="button" href="tel:01065644992">가위닥터 사사끼에게 상담하기 <span aria-hidden="true">↗</span></a><a className="text-link" href="#services">연마·수리 알아보기</a></div>
          <div className="credentials"><div><strong>30<span>년</span></strong><p>가위 연마 경력</p></div><div><strong><span>약 </span>1,000<span>명</span></strong><p>함께하는 고객</p></div></div>
        </div>
        <div className="hero-art hero-photo hero-portrait"><Image src="/images/scissor-doctor-portrait-autumn.png" alt="단풍과 가을 햇살이 있는 바닷가에서 미소 짓는 인물의 애니메이션 초상화" fill priority sizes="(max-width: 700px) calc(100vw - 48px), 440px"/><div className="photo-caption"><span>가위닥터 사사끼</span><p>가위 하나에 담는, 30년의 손길.</p></div></div>
      </section>
      <section id="services" className="services">
        <div className="section-heading"><div><p className="eyebrow">가위닥터 사사끼의 서비스</p><h2>오래 쓰는 가위의 곁에서.</h2></div><p>미용 가위와 애견 가위, 연마부터 수리까지.</p></div>
        <div className="service-grid">
          <article><div className="service-art service-photo"><Image src="/images/scissor-sharpening-autumn.png" alt="숫돌 위에 놓인 일자 미용 가위, 정밀 연마 서비스 이미지" fill sizes="(max-width: 700px) calc(100vw - 48px), 360px"/></div><p className="service-type">01 / 정밀 연마</p><h3>무뎌진 날을 다듬다</h3><p>잘 들지 않는 미용·애견 가위의 날을 연마합니다.<br/>매일의 커트를 위한 섬세한 손길.</p></article>
          <article><div className="service-art service-photo"><Image src="/images/scissor-restoration-autumn.png" alt="가을 햇살이 비치는 크림색 린넨 위 커브 가위, 날 복원 서비스 이미지" fill sizes="(max-width: 700px) calc(100vw - 48px), 360px"/></div><p className="service-type">02 / 날 복원</p><h3>절삭감을 되살리다</h3><p>날을 섬세하게 다듬는 정밀 복원.<br/>가위날 하나에도 30년의 경험을 담습니다.</p></article>
          <article><div className="service-art service-photo"><Image src="/images/scissor-repair-autumn.png" alt="숱 가위와 정밀 드라이버, 수리 A/S 서비스 이미지" fill sizes="(max-width: 700px) calc(100vw - 48px), 360px"/></div><p className="service-type">03 / 수리 · A/S</p><h3>불편한 가위를 살피다</h3><p>사사끼 코리아 가위 A/S와 타사 가위 수리.<br/>미용·애견 가위의 불편을 상담해주세요.</p></article>
        </div>
        <div className="service-notes" aria-label="수리 서비스 안내">
          <div><span className="note-number">01</span><h3>택배 접수 가능</h3><p>택배로 가위 수리를 맡기실 수 있습니다.<br/>발송 전 전화로 접수 안내를 받아주세요.</p></div>
          <div><span className="note-number">02</span><h3>대량 수리 할인</h3><p>미용학원 등 대량 수리 요청 시 할인 적용.<br/>수량과 가위 종류를 말씀해주세요.</p></div>
          <div><span className="note-number">03</span><h3>불만족 시 100% 환불</h3><p>수리 결과에 대한 책임을 약속합니다.<br/>불편한 점이 있다면 연락해주세요.</p></div>
        </div>
      </section>
      <section id="about" className="about"><p className="eyebrow">SINCE 1995 · 30년, 가위와 함께한 시간</p><h2>한 길을 걸어온 장인.<br/>그 곁의 약 1,000명.</h2><p>안녕하세요. 가위닥터 사사끼, 대표 김태희입니다.<br/>30년 동안 쌓아온 경험으로 가위날을 정교하게 복원합니다.<br/>손에 익은 가위가 제 역할을 할 수 있도록,<br/>오늘도 가위 하나에 집중합니다.</p><span className="brand-sign">가위닥터 사사끼</span><p className="owner">대표 김태희 · 사사끼 코리아 가위 A/S 센터</p></section>
      <section id="contact" className="contact"><div><p className="eyebrow">가위닥터 사사끼 상담실</p><h2>가위가 예전 같지 않다면.</h2><p>연마·날 복원·수리부터 택배 접수까지 친절하게 안내해드립니다.<br/>가위 종류와 불편한 점을 말씀해주세요.</p><p className="secondary-service">미용·애견 가위 구매 및 현장 출장 판매도 전화로 문의해주세요.</p></div><div className="contact-actions"><a className="phone" href="tel:01065644992" aria-label="가위닥터 사사끼 전화 상담 010-6564-4992">010-6564-4992 <span aria-hidden="true">↗</span></a><a className="phone" href="tel:01096444689" aria-label="가위닥터 사사끼 전화 상담 010-9644-4689">010-9644-4689 <span aria-hidden="true">↗</span></a><a className="text-link" href="https://blog.naver.com/kuh4689/222617975844" target="_blank" rel="noopener noreferrer">가위닥터 사사끼 작업 이야기 ↗</a></div></section>
    </main>
    <footer className="business-footer">
      <div className="footer-heading"><a className="logo" href="#">가위닥터 사사끼<span>·</span></a><p>가위 연마 · 날 복원 · 수리 전문</p></div>
      <dl className="business-info" aria-label="사업자 정보">
        <div><dt>상호</dt><dd>가위닥터 사사끼 가위</dd></div>
        <div><dt>대표자</dt><dd>김태희</dd></div>
        <div><dt>사업자등록번호</dt><dd>656-15-01771</dd></div>
        <div className="business-address"><dt>사업장 주소</dt><dd>부산광역시 수영구 광남로172번길 10, 2동 102호 (민락동, 화신맨션)</dd></div>
        <div><dt>상담 전화</dt><dd><a href="tel:01065644992">010-6564-4992</a> · <a href="tel:01096444689">010-9644-4689</a></dd></div>
        <div><dt>업종</dt><dd>미용가위 수리 · 미용가위 소매 · 전자상거래(미용가위)</dd></div>
      </dl>
      <small>© {new Date().getFullYear()} 가위닥터 사사끼</small>
    </footer>
  </>;
}
