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
    <header className="header"><a className="logo" href="#">GroomPick<span>·</span></a><nav aria-label="주요 메뉴"><a href="#collection">서비스 소개</a><a href="#about">장인 소개</a></nav></header>
    <main>
      <section className="hero"><div className="hero-copy"><p className="eyebrow">20 YEARS OF CRAFTSMANSHIP</p><h1>가위를 갈아온 20년.<br/><span>손끝의 차이를 압니다.</span></h1><p className="description">20년 경력의 가위 연마 장인.<br/>약 1,000명의 고객과 함께하는 그룸픽입니다.</p><a className="button" href="#collection">연마 서비스 살펴보기 <span aria-hidden="true">↗</span></a></div><div className="hero-art"><div className="art-circle"/><Scissors/><span className="art-label">SCISSOR SHARPENING</span><span className="art-number">20 YEARS / GROOMPICK</span></div></section>
      <section id="collection" className="collection"><div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>익숙한 가위에, 다시 날을.</h2></div><p>가위 연마부터 미용 도구까지.</p></div><div className="products"><article><div className="product-art"><Scissors/></div><p className="product-type">SCISSOR SHARPENING</p><h3>가위 연마</h3><p>무뎌진 미용 가위의 날을 다듬는 일.</p></article><article><div className="product-art sage"><Scissors curved/></div><p className="product-type">GROOMING SCISSORS</p><h3>미용 가위</h3><p>애견 미용에 필요한 가위를 소개합니다.</p></article><article><div className="product-art cream"><svg viewBox="0 0 320 220" fill="none" aria-hidden="true"><g transform="rotate(-25 160 110)" stroke="#8b978d" strokeWidth="5" strokeLinecap="round"><path d="M70 85H250" strokeWidth="12"/>{Array.from({length:23},(_,i)=><path key={i} d={`M${74+i*7.7} 89v48`}/>)}</g></svg></div><p className="product-type">GROOMING TOOLS</p><h3>미용용품</h3><p>미용에 필요한 기본 도구를 소개합니다.</p></article></div></section>
      <section id="about" className="about"><p className="eyebrow">THE HANDS BEHIND GROOMPICK</p><h2>한 길을 걸어온 20년.<br/>그 곁의 약 1,000명.</h2><p>가위를 갈아주는 일을 20년 동안 이어왔습니다.<br/>약 1,000명의 고객과 함께, 오늘도 가위 앞에 앉습니다.</p><span className="brand-sign">GroomPick.</span></section>
    </main><footer><a className="logo" href="#">GroomPick<span>·</span></a><p>20년 경력의 가위 연마 장인.</p><small>© {new Date().getFullYear()} GroomPick</small></footer>
  </>;
}
