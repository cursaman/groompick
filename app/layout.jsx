import './globals.css';

export const metadata = {
  title: 'GroomPick · 가위닥터 | 20년 경력의 가위 연마 장인',
  description: '약 1,000명의 고객과 함께하는 20년 경력의 가위닥터. 정밀 가위 연마와 날 복원, 미용·애견 가위 수리 및 구매 상담. 대표 강윤희, 010-9644-4689.',
};

export default function RootLayout({ children }) {
  return <html lang="ko"><body>{children}</body></html>;
}
