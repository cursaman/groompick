import Link from 'next/link';
import ProductImage from './product-image';
import { money } from '../../lib/catalog-utils';

export default function ProductCard({ product }) {
  const discounted = product.originalPrice > product.price;
  return <article className="catalog-card"><Link href={`/products/${product.id}`} className="catalog-card-link">
    <div className="catalog-card-photo"><ProductImage src={product.illustration || product.image} name={product.illustration ? `${product.name} 일러스트` : product.name}/>{product.leftHanded && <span className="catalog-photo-badge">왼손용</span>}</div>
    <div className="catalog-card-info"><p className="catalog-category">{product.category}</p><h3>{product.name}</h3>
      <div className="catalog-pricing">{discounted && <del>{money(product.originalPrice)}</del>}<p>{discounted && <span className="catalog-discount">{Math.round((1 - product.price / product.originalPrice) * 100)}%</span>}<strong>{money(product.price)}</strong></p></div>
      <div className="catalog-tags">{product.shippingType === '무료' && <span>무료배송</span>}{product.hasOptions && <span>옵션 상품</span>}{(product.stock === 0 || product.saleStatus !== '판매중') && <span>판매 상태 확인</span>}</div>
    </div>
  </Link></article>;
}
