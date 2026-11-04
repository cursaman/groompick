export const STORE_URL = 'https://smartstore.naver.com/kwdt-sasak-dog';
export const CATEGORIES = ['일자·민가위', '커브 가위', '숱·요술가위', '세트', '미용용품'];
export const money = value => new Intl.NumberFormat('ko-KR').format(value) + '원';
export const purchaseUrl = id => `${STORE_URL}/products/${id}`;
export function classify(name) {
  if (/가위집|가위.?가방|파우치|고무링|클리퍼|바리깡|이발기|브러|브러쉬|빗/.test(name)) return '미용용품';
  if (/세트|셋트/.test(name)) return '세트';
  if (/숱|요술|매직/.test(name)) return '숱·요술가위';
  if (/커브/.test(name)) return '커브 가위';
  return '일자·민가위';
}
export function selectProducts(products, { query = '', category = '', leftHanded = false, sort = 'recommended' } = {}) {
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const result = products.filter(product => product.visible && (!category || product.category === category) && (!leftHanded || product.leftHanded) && terms.every(term => `${product.name} ${product.brand} ${product.code}`.toLocaleLowerCase().includes(term)));
  return result.sort((a, b) => sort === 'price-low' ? a.price - b.price || a.order - b.order : sort === 'price-high' ? b.price - a.price || a.order - b.order : sort === 'newest' ? b.createdAt.localeCompare(a.createdAt) || a.order - b.order : Number(b.featured) - Number(a.featured) || a.order - b.order);
}
