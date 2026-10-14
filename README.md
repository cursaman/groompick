# 가위닥터

20년 경력의 가위 연마 장인 강윤희와 약 1,000명의 고객을 중심으로, 정밀 연마·날 복원·미용 및 애견 가위 수리·A/S를 소개하는 심플한 Next.js 웹사이트.

대표 강윤희의 전화 상담 및 네이버 블로그 연결 버튼을 제공합니다.

택배 접수, 미용학원 등 대량 수리 할인, 불만족 시 100% 환불 안내를 포함합니다. 가위 구매·현장 출장 판매는 상담 안내에만 간단히 소개합니다.

내용 참고: https://blog.naver.com/kuh4689/222617975844

메인 이미지: `public/images/scissor-doctor-craft.png`. 내장 이미지 생성 도구로 제작한 브랜드 이미지이며 실제 대표 또는 작업 현장을 촬영한 사진이 아닙니다.

서비스 카드의 `scissor-sharpening.png`, `scissor-restoration.png`, `scissor-repair.png`도 내장 도구로 제작했습니다. 제작 프롬프트는 `docs/service-image-prompts.md`에 기록했습니다.

## 실행

```sh
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 배포용 빌드

```sh
npm run build
npm start
```

브랜드 소개용 한 페이지이며 주문·결제 기능은 포함하지 않습니다.
