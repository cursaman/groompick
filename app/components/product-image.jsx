'use client';

import { useState } from 'react';
import Image from 'next/image';
import Icon from './ui-icon';

export default function ProductImage({ src, name, eager = false }) {
  const [failed, setFailed] = useState(false);
  return <div className="catalog-image">{failed ? <div className="catalog-image-fallback"><Icon name="scissors"/><span>상품 이미지를 불러오지 못했습니다</span></div> : <Image src={src} alt={name} priority={eager} width={640} height={640} sizes={eager ? '(max-width: 700px) 90vw, (max-width: 1000px) 45vw, 560px' : '(max-width: 700px) 45vw, (max-width: 1000px) 30vw, 360px'} onError={() => setFailed(true)}/>}</div>;
}
