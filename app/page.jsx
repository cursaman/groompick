function Scissors({ curved = false }) {
  return <svg viewBox="0 0 320 220" fill="none" aria-hidden="true">
    <defs><linearGradient id={curved ? 'curve' : 'straight'} x1="60" y1="170" x2="270" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#7a8580"/><stop offset=".5" stopColor="#e5eae7"/><stop offset="1" stopColor="#929f97"/></linearGradient></defs>
    <g stroke={`url(#${curved ? 'curve' : 'straight'})`} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="88" cy="157" rx="24" ry="29" transform="rotate(-30 88 157)"/><ellipse cx="139" cy="177" rx="24" ry="29" transform="rotate(24 139 177)"/>
      <path d={curved ? 'M103 135 154 104 Q214 84 265 31' : 'M103 135 263 38'}/><path d={curved ? 'M132 149 154 104 Q183 60 211 23' : 'M132 149 211 23'}/>
      <path d="M68 162 53 171"/>
    </g><circle cx="154" cy="104" r="7" fill="#596b60"/><circle cx="154" cy="104" r="2" fill="#e5eae7"/>
  </svg>;
}

export default function Home() {
  return <>
    <header className="header"><a className="logo" href="#">GroomPick<span>·</span></a><nav aria-label="주요 메뉴"><a href="#collection">제품 소개</a><a href="#about">브랜드 소개</a></nav></header>
    <main>
      <section className="hero"><div className="hero-copy"><p className="eyebrow">FOR EVERY LITTLE DETAIL</p><h1>작은 디테일이 만드는<br/><span>아름다운 변화.</span></h1><p className="description">반려견을 위한 섬세한 손길.<br/>그 손길에 어울리는 미용 도구를 소개합니다.</p><a className="button" href="#collection">그룸픽 살펴보기 <span aria-hidden="true">↗</span></a></div><div className="hero-art"><div className="art-circle"/><Scissors/><span className="art-label">THE GROOMING ESSENTIALS</span><span className="art-number">01 / GROOMPICK</span></div></section>
      <section id="collection" className="collection"><div className="section-heading"><div><p className="eyebrow">OUR COLLECTION</p><h2>미용의 기본, 그룸픽.</h2></div><p>꼭 필요한 도구부터, 차근차근.</p></div><div className="products"><article><div className="product-art"><Scissors/></div><p className="product-type">STRAIGHT SCISSORS</p><h3>일자 가위</h3><p>기본 커트와 깔끔한 라인을 위한 선택.</p></article><article><div className="product-art sage"><Scissors curved/></div><p className="product-type">CURVED SCISSORS</p><h3>커브 가위</h3><p>둥근 실루엣을 섬세하게 완성하는 도구.</p></article><article><div className="product-art cream"><svg viewBox="0 0 320 220" fill="none" aria-hidden="true"><g transform="rotate(-25 160 110)" stroke="#8b978d" strokeWidth="5" strokeLinecap="round"><path d="M70 85H250" strokeWidth="12"/>{Array.from({length:23},(_,i)=><path key={i} d={`M${74+i*7.7} 89v48`}/>)}</g></svg></div><p className="product-type">GROOMING TOOLS</p><h3>미용용품</h3><p>매일의 빗질부터 마무리까지 함께.</p></article></div></section>
      <section id="about" className="about"><p className="eyebrow">LESS, BUT BETTER</p><h2>좋은 도구가 함께하는<br/>다정한 미용 시간.</h2><p>그룸픽은 반려견 미용에 필요한 기본을 생각합니다.<br/>복잡함을 덜고, 도구 하나의 쓰임에 집중합니다.</p><span className="brand-sign">GroomPick.</span></section>
    </main><footer><a className="logo" href="#">GroomPick<span>·</span></a><p>반려견을 위한 섬세한 선택.</p><small>© {new Date().getFullYear()} GroomPick</small></footer>
  </>;
}
