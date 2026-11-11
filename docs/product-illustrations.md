# 상품 일러스트

공개 상품 61개의 대표 이미지를 원본 사진을 기준으로 내장 ImageGen에서 스타일 변환했습니다. 원본 사진을 함께 쓰는 상품은 같은 일러스트를 사용하므로 결과 이미지 파일은 57개입니다.

- 일러스트: `public/images/catalog-illustrations/*.webp`
- 상품번호별 원본 및 일러스트 연결: `data/product-illustrations.json`
- 추천·상품 목록·상세 페이지는 일러스트를 표시하고, 상세에서 원본 사진을 열 수 있습니다.
- CSV를 다시 가져와 원본 이미지 주소가 바뀐 상품은 기존 일러스트 대신 새 원본을 표시합니다. 새로 추가한 상품 역시 연결된 일러스트가 없다면 원본을 표시합니다.
- 일러스트는 원본 사진을 참고한 표현입니다. 치수, 실제 색상, 날의 세부 구조와 구성은 원본 사진과 상품 상세를 기준으로 확인합니다.

## 생성 프롬프트

Edit this exact reference photo into a warm Studio Ghibli-inspired hand-painted animation catalog illustration: delicate pencil outlines, restrained gouache and watercolor texture, creamy ivory paper background, soft daylight and a subtle painted shadow. Preserve the merchandise exactly: number of products, silhouette, angles, orientation, materials, original colors, proportions, cutouts, handles, hardware, hinge, finger rests, and shape and density of any toothed edge. Preserve all separate products in a photographed set. Do not mirror or add, remove, bend, redesign or replace any product part. Remove non-product backgrounds, hands, animals and overlay text. Do not render any letters, numbers, model names, origin claims, engravings, captions, graphic labels, logos or watermarks. Use a square canvas, fit the entire product with comfortable padding and keep it clearly legible. Faithful merchandise first, decorative scenery absent. Product identification only, not visible text: [상품명]
