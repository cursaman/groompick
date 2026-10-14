import './globals.css';

export const metadata = {
  title: 'GroomPick | 20년 경력의 가위 연마 장인',
  description: '20년 경력의 가위 연마 장인, 약 1,000명의 고객과 함께하는 GroomPick. 가위 연마와 애견 미용 가위·용품을 소개합니다.',
};

export default function RootLayout({ children }) {
  return <html lang="ko"><body>{children}</body></html>;
}
