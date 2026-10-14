import './globals.css';

export const metadata = {
  title: 'GroomPick | 반려견을 위한 섬세한 선택',
  description: '반려견 미용 가위와 미용용품을 소개하는 GroomPick입니다.',
};

export default function RootLayout({ children }) {
  return <html lang="ko"><body>{children}</body></html>;
}
