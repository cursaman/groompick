import './globals.css';

export const metadata = {
  title: '가위닥터 | 20년 장인의 가위 연마·날 복원·수리',
  description: '20년 경력의 가위 연마 장인, 가위닥터 강윤희. 약 1,000명의 고객과 함께하는 미용·애견 가위 정밀 연마, 날 복원 및 A/S 상담. 010-9644-4689.',
  applicationName: '가위닥터',
  openGraph: {
    title: '가위닥터 | 가위의 날을 살리는 20년 장인',
    description: '미용·애견 가위 연마, 날 복원, 수리 상담. 대표 강윤희 · 010-9644-4689',
    siteName: '가위닥터',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return <html lang="ko"><body>{children}</body></html>;
}
