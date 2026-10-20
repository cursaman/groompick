'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Icon from './ui-icon';

const slides = [
  { label: '30년 장인의 정밀 연마', title: '가위 수리는 역시,', accent: '가위닥터', description: '30년 장인의 손길로 정교하게 복원하는 가위날.', image: '/images/hero-sharpening-autumn.png', alt: '가을 햇살이 비치는 숫돌 위의 일자 가위, 정밀 연마 광고', action: '연마·수리 상담' },
  { label: '헤어 미용 가위 케어', title: '매일 손에 익은 가위,', accent: '다시 섬세하게.', description: '헤어 미용 가위의 무뎌진 날과 불편한 절삭감을 상담해주세요.', image: '/images/hero-hair-autumn.png', alt: '크림색 린넨과 헤어 빗 옆의 일자 미용 가위 광고', action: '헤어 가위 상담' },
  { label: '애견미용 가위 케어', title: '둥근 라인도 부드럽게,', accent: '섬세한 날의 차이.', description: '애견미용 커브 가위도, 가위의 쓰임에 맞춰 정교하게 다듬습니다.', image: '/images/hero-pet-autumn.png', alt: '따뜻한 가을 색감의 린넨 위 애견미용 커브 가위 광고', action: '애견미용 가위 상담' },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const startPoint = useRef(null);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!playing || hovered || focused || reducedMotion) return;
    const timer = window.setTimeout(() => setActive(value => (value + 1) % slides.length), 6500);
    return () => window.clearTimeout(timer);
  }, [active, playing, hovered, focused, reducedMotion]);

  function goTo(value) {
    setPlaying(false);
    setActive((value + slides.length) % slides.length);
  }

  return <section className="hero-carousel" aria-label="가위닥터 가위 케어 광고" aria-roledescription="캐러셀" tabIndex={0}
    onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(true); }} onPointerLeave={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
    onKeyDown={event => { if (event.target !== event.currentTarget) return; if (event.key === 'ArrowRight') { event.preventDefault(); goTo(active + 1); } if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(active - 1); } }}>
    <h1 className="sr-only">가위 수리는 역시, 가위닥터 사사끼</h1>
    <div className="carousel-viewport">
      <div className="carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {slides.map((slide, index) => <div className="carousel-slide" key={slide.image} role="group" aria-roledescription="슬라이드" aria-label={`${index + 1} / ${slides.length}: ${slide.label}`} aria-hidden={active !== index} inert={active !== index}>
          <div className="carousel-copy">
            <p className="eyebrow"><Icon name="scissors"/>{slide.label}</p>
            <h2>{slide.title}<br/><span>{slide.accent}</span></h2>
            <p className="carousel-description">{slide.description}</p>
            <p className="carousel-caption">헤어 미용 가위부터 애견미용 가위까지 섬세하게</p>
            <div className="carousel-actions"><a className="button" href="tel:01065644992"><Icon name="phone"/>{slide.action}</a><a className="text-link" href="#repair-process">접수 안내 ↗</a></div>
          </div>
          <div className="carousel-image" onPointerDown={event => { startPoint.current = { x: event.clientX, y: event.clientY }; event.currentTarget.setPointerCapture(event.pointerId); }}
            onPointerCancel={() => { startPoint.current = null; }}
            onPointerUp={event => { const start = startPoint.current; startPoint.current = null; if (!start) return; const dx = event.clientX - start.x; const dy = event.clientY - start.y; if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) goTo(active + (dx < 0 ? 1 : -1)); }}>
            <Image src={slide.image} alt={slide.alt} fill priority={index === 0} sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1000px) 48vw, 520px" draggable={false}/>
            <span className="carousel-image-label">G A W I  D O C T O R <span>SCISSOR CARE</span></span>
          </div>
        </div>)}
      </div>
    </div>
    <div className="carousel-toolbar">
      <span className="carousel-region">전국 및 부산 가위 연마 · 사사끼 코리아 A/S 센터</span>
      <div className="carousel-controls">
        <button type="button" onClick={() => goTo(active - 1)} aria-label="이전 광고">←</button>
        <div className="carousel-dots" aria-label="광고 선택">{slides.map((slide, index) => <button type="button" key={slide.image} aria-label={`${index + 1}번 광고: ${slide.label}`} aria-current={active === index ? 'true' : undefined} className={active === index ? 'is-active' : ''} onClick={() => goTo(index)}><span/></button>)}</div>
        <button type="button" onClick={() => goTo(active + 1)} aria-label="다음 광고">→</button>
        {!reducedMotion && <button type="button" className="carousel-play" onClick={() => setPlaying(value => !value)} aria-label={playing ? '자동 재생 정지' : '자동 재생 시작'}>{playing ? 'Ⅱ' : '▶'}</button>}
        <span className="carousel-counter" aria-live={playing ? 'off' : 'polite'}>{String(active + 1).padStart(2, '0')} / 03</span>
      </div>
    </div>
    <div className="carousel-credentials"><span><Icon name="award"/><strong>30년</strong> 가위 연마 경력</span><span><Icon name="users"/><strong>약 1,000명</strong> 함께하는 고객</span><span><Icon name="package"/>전국 택배 접수</span></div>
  </section>;
}
