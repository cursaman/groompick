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
    <header className="header"><a className="logo" href="#">GroomPick<span>·</span></a><nav aria-label="주요 메뉴"><a href="#collection">서비스</a><a href="#about">가위닥터</a><a href="#contact">문의</a></nav></header>
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">가위닥터 · 사사끼 / GROOMPICK</p>
          <h1>익숙한 가위에,<br/><span>다시 섬세한 날을.</span></h1>
          <p className="description">20년 경력의 가위 연마 장인.<br/>미용 가위부터 애견 가위까지, 정밀하게 다듬습니다.</p>
          <div className="hero-actions"><a className="button" href="tel:01096444689">연마·수리 문의 <span aria-hidden="true">↗</span></a><a className="text-link" href="#collection">서비스 알아보기</a></div>
          <div className="credentials"><div><strong>20<span>년</span></strong><p>가위 연마 경력</p></div><div><strong><span>약 </span>1,000<span>명</span></strong><p>함께하는 고객</p></div></div>
        </div>
        <div className="hero-art"><div className="art-circle"/><Scissors/><span className="art-label">PRECISION SCISSOR CARE</span><span className="art-number">20 YEARS / GROOMPICK</span></div>
      </section>
      <section id="collection" className="collection">
        <div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>가위의 쓰임을 이어가는 일.</h2></div><p>연마, 수리, 그리고 나에게 맞는 가위.</p></div>
        <div className="products">
          <article><div className="product-art"><Scissors id="sharpening-scissors"/></div><p className="product-type">PRECISION SHARPENING</p><h3>정밀 연마 · 날 복원</h3><p>무뎌진 날을 정교하게 다듬습니다.<br/>익숙한 가위의 절삭감을 위한 섬세한 손길.</p></article>
          <article><div className="product-art sage"><Scissors curved id="repair-scissors"/></div><p className="product-type">REPAIR &amp; AFTERCARE</p><h3>미용·애견 가위 수리</h3><p>사사끼 가위와 타사 가위 A/S 상담.<br/>가위의 상태와 불편한 점을 먼저 이야기해주세요.</p></article>
          <article><div className="product-art cream"><Scissors id="selection-scissors"/></div><p className="product-type">SCISSOR SELECTION</p><h3>가위 판매 · 구매 상담</h3><p>미용 가위와 애견 가위를 소개합니다.<br/>사용 목적에 맞는 가위를 함께 살펴보세요.</p></article>
        </div>
      </section>
      <section id="about" className="about"><p className="eyebrow">THE HANDS BEHIND THE CRAFT</p><h2>한 길을 걸어온 20년.<br/>그 곁의 약 1,000명.</h2><p>가위닥터는 가위를 갈아주는 일을 20년 동안 이어왔습니다.<br/>정밀한 날 복원과 미용·애견 가위 A/S.<br/>매일 사용하는 도구가 제 역할을 하도록 다듬습니다.</p><span className="brand-sign">가위닥터 · 사사끼</span><p className="owner">대표 강윤희</p></section>
      <section id="contact" className="contact"><div><p className="eyebrow">LET’S TALK ABOUT YOUR SCISSORS</p><h2>가위 고민, 편하게 이야기해주세요.</h2><p>연마·수리 가능 여부와 구매 상담은 전화로 안내해드립니다.</p></div><div className="contact-actions"><a className="phone" href="tel:01096444689">010-9644-4689 <span aria-hidden="true">↗</span></a><a className="text-link" href="https://blog.naver.com/kuh4689/222617975844" target="_blank" rel="noopener noreferrer">블로그에서 작업 소개 보기 ↗</a></div></section>
    </main><footer><a className="logo" href="#">GroomPick<span>·</span></a><p>20년 경력의 가위 연마 장인.</p><small>© {new Date().getFullYear()} GroomPick</small></footer>
  </>;
}
