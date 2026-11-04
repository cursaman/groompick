# 상품 목록 운영

고객용 상품 목록·상세 페이지와 메인 추천 상품을 제공합니다. 관리자·자체 결제·회원·장바구니 기능은 없습니다. 구매 버튼은 아래 스마트스토어의 해당 상품번호로 연결됩니다.

https://smartstore.naver.com/kwdt-sasak-dog

## 최초 데이터

사용자가 제공한 `Product_20261104_132248.csv`에서 62개 상품을 가져왔습니다. CSV의 판매·전시 상태를 적용해 공개 상품은 61개입니다. 전시 안 함 상품은 데이터에 보관하지만 목록·추천·상세 페이지에서 공개하지 않습니다.

- 상품번호: 스마트스토어 상품번호를 문자열로 저장
- 가격: 할인가가 있으면 할인가, 없으면 판매가
- 정상가: 판매가. 할인가보다 높은 경우에만 취소선과 할인율 표시
- 옵션: CSV의 사용 여부만 표시. 실제 구성은 스마트스토어에서 확인
- 대표 이미지: 구형 `shop1.phinf.naver.net` 계열 주소를 정상 HTTPS CDN `shop-phinf.pstatic.net`으로 보정
- 분류: 상품명 기반으로 자동 분류. 왼손용은 별도 필터
- 상세 설명: 원본에 없어 추가 설명을 지어내지 않고 스마트스토어 상세로 안내

가격·재고는 실시간 동기화가 아닙니다. 고객에게 갱신일과 스마트스토어 최종 확인 안내를 제공합니다. 구매 상품의 교환·반품 조건은 수리 서비스 환불 안내와 구분했습니다.

## 새 CSV로 갱신

```powershell
npm run import:products -- "C:/Users/HP/Downloads/새로운상품.csv"
npm test
npm run build
```

결과는 `data/products.json`에 저장됩니다. 상품번호를 기준으로 갱신하며 기존의 추천 여부(`featured`), 진열 순서(`order`), 수동 설명(`description`)을 유지합니다. CSV에서 빠진 상품은 자동 삭제하지 않으므로 판매 종료 시 `visible`을 false로 바꾸거나 판매·전시 상태를 반영한 CSV를 사용하세요. 가져오기에 포함된 상품의 판매·전시 여부는 새 CSV를 따릅니다.

새 상품을 포함하는 경우 저장된 진열 순서를 검토하세요. 세부 분류(`category`), 추천 여부, 순서, 추가 설명은 코드의 JSON에서 수정할 수 있습니다. 다음 CSV 가져오기는 분류를 다시 계산합니다. 추천 상품은 공개 상품 중 featured가 true인 상품을 order 순으로 최대 6개 표시합니다.

중복 상품번호, 필수 열 누락, 음수·잘못된 숫자, 정상가보다 높은 할인가, 잘못된 이미지 주소가 있으면 가져오기를 중단하고 기존 파일을 유지합니다. UTF-8과 EUC-KR, 따옴표 안 쉼표·줄바꿈을 처리합니다.

검토 후 변경 파일을 커밋하고 main에 푸시하면 연결된 배포에서 반영할 수 있습니다. 운영 저장소나 관리자 비밀번호 설정은 필요하지 않습니다.

## 구현 위치

- `app/products/page.jsx`: 상품 목록
- `app/products/[id]/page.jsx`: 공개 상품별 상세 및 구매 연결
- `app/components/product-list.jsx`: 검색·분류·정렬·페이지 이동
- `app/components/product-image.jsx`: 이미지 로딩 및 실패 시 대체 안내
- `app/components/site-header.jsx`, `site-footer.jsx`: 사이트 공통 메뉴·연락처
- `scripts/import-products.mjs`: CSV 가져오기
- `scripts/catalog.test.mjs`: 분류·검색·CSV 오류 처리 검증
