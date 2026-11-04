'use client';

import { useState } from 'react';
import ProductCard from './product-card';
import { CATEGORIES, selectProducts } from '../../lib/catalog-utils';

const PAGE_SIZE = 12;
export default function ProductList({ products }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [leftHanded, setLeftHanded] = useState(false);
  const [sort, setSort] = useState('recommended');
  const [page, setPage] = useState(1);
  const filtered = selectProducts(products, { query, category, leftHanded, sort });
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pages);
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  function reset() { setQuery(''); setCategory(''); setLeftHanded(false); setSort('recommended'); setPage(1); }
  function changePage(value) { setPage(value); document.getElementById('catalog-results').scrollIntoView({ block: 'start' }); }
  return <>
    <div className="catalog-filters">
      <label className="catalog-search">상품 검색<input type="search" value={query} placeholder="상품명, 모델명, 인치로 검색" onChange={event => { setQuery(event.target.value); setPage(1); }}/></label>
      <div className="catalog-category-buttons" aria-label="상품 분류">{['', ...CATEGORIES].map(value => <button type="button" key={value} aria-pressed={category === value} className={category === value ? 'selected' : ''} onClick={() => { setCategory(value); setPage(1); }}>{value || '전체'}</button>)}</div>
      <div className="catalog-filter-bottom"><label className="catalog-checkbox"><input type="checkbox" checked={leftHanded} onChange={event => { setLeftHanded(event.target.checked); setPage(1); }}/>왼손용만 보기</label><label className="catalog-sort">정렬<select aria-label="상품 정렬" value={sort} onChange={event => { setSort(event.target.value); setPage(1); }}><option value="recommended">추천순</option><option value="newest">최신 등록순</option><option value="price-low">낮은 가격순</option><option value="price-high">높은 가격순</option></select></label></div>
    </div>
    <div id="catalog-results" className="catalog-results-heading"><p aria-live="polite">상품 <strong>{filtered.length}</strong>개</p>{(query || category || leftHanded) && <button type="button" className="catalog-reset" onClick={reset}>검색 조건 초기화</button>}</div>
    {visible.length ? <div className="catalog-grid">{visible.map(product => <ProductCard product={product} key={product.id}/>)}</div> : <div className="catalog-empty"><h2>검색 결과가 없습니다.</h2><p>다른 검색어나 분류를 선택해보세요.</p><button type="button" onClick={reset}>전체 상품 보기</button></div>}
    {pages > 1 && <nav className="catalog-pagination" aria-label="상품 목록 페이지"><button type="button" disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>이전</button>{Array.from({ length: pages }, (_, index) => index + 1).map(value => <button type="button" key={value} aria-label={`${value}페이지`} aria-current={value === currentPage ? 'page' : undefined} onClick={() => changePage(value)}>{value}</button>)}<button type="button" disabled={currentPage === pages} onClick={() => changePage(currentPage + 1)}>다음</button></nav>}
  </>;
}
