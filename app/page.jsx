function Scissors({ curved = false, id = 'hero-scissors' }) {
  return <svg viewBox="0 0 320 220" fill="none" aria-hidden="true">
    <defs><linearGradient id={id} x1="60" y1="170" x2="270" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#7a8580"/><stop offset=".5" stopColor="#e5eae7"/><stop offset="1" stopColor="#929f97"/></linearGradient></defs>
    <g stroke={`url(#${id})`} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="88" cy="157" rx="24" ry="29" transform="rotate(-30 88 157)"/><ellipse cx="139" cy="177" rx="24" ry="29" transform="rotate(24 139 177)"/>
      <path d={curved ? 'M103 135 154 104 Q214 84 265 31' : 'M103 135 263 38'}/><path d={curved ? 'M132 149 154 104 Q183 60 211 23' : 'M132 149 211 23'}/>
      <path d="M68 162 53 171"/>
    </g><circle cx="154" cy="104" r="7" fill="#596b60"/><circle cx="154" cy="104" r="2" fill="#e5eae7"/>
  </svg>;
}

export default function Home() {
  return <>
    <header className="header"><a className="logo" href="#">가위닥터<span>·</span></a><nav aria-label="주요 메뉴"><a href="#services">연마·수리</a><a href="#about">장인 소개</a><a href="#contact">상담 문의</a></nav></header>
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">가위 연마 · 날 복원 · 수리 전문</p>
          <h1>가위의 날을 살리는<br/><span>20년 장인, 가위닥터.</span></h1>
          <p className="description">무뎌진 날, 달라진 절삭감.<br/>익숙한 가위를 다시 다듬는 일에 집중합니다.</p>
          <div className="hero-actions"><a className="button" href="tel:01096444689">가위닥터에게 상담하기 <span aria-hidden="true">↗</span></a><a className="text-link" href="#services">연마·수리 알아보기</a></div>
          <div className="credentials"><div><strong>20<span>년</span></strong><p>가위 연마 경력</p></div><div><strong><span>약 </span>1,000<span>명</span></strong><p>함께하는 고객</p></div></div>
        </div>
        <div className="hero-art"><div className="art-circle"/><Scissors/><span className="art-label">SCISSOR DOCTOR</span><span className="art-number">20년의 손길 · 정밀한 날 복원</span></div>
      </section>
      <section id="services" className="services">
        <div className="section-heading"><div><p className="eyebrow">가위닥터가 하는 일</p><h2>오래 쓰는 가위의 곁에서.</h2></div><p>미용 가위와 애견 가위, 연마부터 수리까지.</p></div>
        <div className="service-grid">
          <article><div className="service-art"><Scissors id="sharpening-scissors"/></div><p className="service-type">01 / 정밀 연마</p><h3>무뎌진 날을 다듬다</h3><p>잘 들지 않는 미용·애견 가위의 날을 연마합니다.<br/>매일의 커트를 위한 섬세한 손길.</p></article>
          <article><div className="service-art sage"><Scissors curved id="restoration-scissors"/></div><p className="service-type">02 / 날 복원</p><h3>절삭감을 되살리다</h3><p>가위날을 정교하게 다듬고 복원합니다.<br/>20년 동안 쌓아온 경험으로 날에 집중합니다.</p></article>
          <article><div className="service-art cream"><Scissors id="repair-scissors"/></div><p className="service-type">03 / 수리 · A/S</p><h3>불편한 가위를 살피다</h3><p>사사끼 가위와 타사 가위 수리 상담.<br/>사용 중 느낀 불편과 가위의 상태를 알려주세요.</p></article>
        </div>
      </section>
      <section id="about" className="about"><p className="eyebrow">20년, 가위와 함께한 시간</p><h2>한 길을 걸어온 장인.<br/>그 곁의 약 1,000명.</h2><p>가위닥터 강윤희는 가위를 갈아주는 일을 20년 동안 이어왔습니다.<br/>손에 익은 가위가 제 역할을 할 수 있도록,<br/>오늘도 가위 하나의 날을 섬세하게 다듬습니다.</p><span className="brand-sign">가위닥터</span><p className="owner">대표 강윤희 · 사사끼 가위 A/S</p></section>
      <section id="contact" className="contact"><div><p className="eyebrow">가위닥터 상담실</p><h2>가위가 예전 같지 않다면.</h2><p>가위 종류와 불편한 점을 말씀해주세요.<br/>연마·날 복원·수리 가능 여부를 전화로 상담해드립니다.</p></div><div className="contact-actions"><a className="phone" href="tel:01096444689" aria-label="가위닥터 전화 상담 010-9644-4689">010-9644-4689 <span aria-hidden="true">↗</span></a><a className="text-link" href="https://blog.naver.com/kuh4689/222617975844" target="_blank" rel="noopener noreferrer">가위닥터 작업 이야기 ↗</a></div></section>
    </main><footer><a className="logo" href="#">가위닥터<span>·</span></a><p>가위 연마 · 날 복원 · 수리 전문</p><small>© {new Date().getFullYear()} 가위닥터</small></footer>
  </>;
}
