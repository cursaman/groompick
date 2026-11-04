import Icon from './ui-icon';
export default function SiteFooter() { return <>
    <footer className="business-footer">
      <div className="footer-heading"><a className="logo" href="/"><Icon name="scissors"/>가위닥터 사사끼<span>·</span></a><p>가위 연마 · 날 복원 · 수리 전문</p></div>
      <dl className="business-info" aria-label="사업자 정보">
        <div><dt>상호</dt><dd>가위닥터 사사끼 가위</dd></div>
        <div><dt>대표자</dt><dd>김태희</dd></div>
        <div><dt>사업자등록번호</dt><dd>656-15-01771</dd></div>
        <div className="business-address"><dt><Icon name="pin"/>사업장 주소</dt><dd>부산광역시 수영구 광남로172번길 10, 2동 102호 (민락동, 화신맨션)</dd></div>
        <div><dt><Icon name="phone"/>상담 전화</dt><dd><a href="tel:01065644992">010-6564-4992</a> · <a href="tel:01096444689">010-9644-4689</a></dd></div>
        <div><dt>업종</dt><dd>미용가위 수리 · 미용가위 소매 · 전자상거래(미용가위)</dd></div>
      </dl>
      <small>© {new Date().getFullYear()} 가위닥터 사사끼</small>
    </footer>
    <aside className="mobile-contact-bar" aria-label="빠른 전화 상담">
      <a className="mobile-process-link" href="/#repair-process"><Icon name="clipboard"/>접수 안내</a>
      <a className="mobile-call-link" href="tel:01065644992" aria-label="가위닥터 사사끼 전화 상담 010-6564-4992">
        <Icon name="phone"/>
        <span>전화 상담 <strong>010-6564-4992</strong></span>
      </a>
    </aside>
</>; }
