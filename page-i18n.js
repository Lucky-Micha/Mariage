// Shared i18n for about.html and privacy.html
const page_i18n = {
  ko: {
    // nav
    'nav-home':    '홈',
    'nav-about':   '서비스 소개',
    'nav-privacy': '개인정보처리방침',
    // footer
    'ft-home':    '홈',
    'ft-about':   '서비스 소개',
    'ft-privacy': '개인정보처리방침',
    'ft-copy':    '© 2025 Mariage. 본 서비스는 음주를 권장하지 않습니다. 음주는 19세 이상만 가능하며, 절주를 권고합니다.',
    // ── about.html ─────────────────────────────────────────────────────────
    'about-pg-title':       'Mariage란?',
    'about-lead':           '마시는 술과 그날의 날씨에 맞는 안주를 추천해 드리는 서비스입니다.',
    'about-s1-h2':          '서비스 소개',
    'about-s1-p1':          '<strong>Mariage(마리아쥬)</strong>는 프랑스어로 \'결혼, 결합\'을 뜻합니다. 와인 용어에서는 음식과 음료의 완벽한 조합을 가리키기도 하죠. 본 서비스는 이 개념에서 영감을 받아, 여러분이 오늘 마실 술과 날씨에 가장 잘 어울리는 안주를 찾아드립니다.',
    'about-s1-p2':          '여름 더위에 마시는 소주, 비 오는 날의 막걸리, 눈 내리는 밤의 와인—같은 술이라도 날씨에 따라 최고의 안주는 달라집니다. Mariage는 그 조합을 데이터와 경험을 바탕으로 추천합니다.',
    'about-s2-h2':          '지원하는 주류',
    'about-soju-h3':        '소주',
    'about-soju-p':         '진로, 참이슬, 처음처럼, 새로, 한라산, 화요 등 다양한 소주 브랜드를 지원합니다.',
    'about-beer-h3':        '맥주',
    'about-beer-p':         '카스, 테라 등 국산 맥주부터 하이네켄, 기네스, 아사히, 칭따오 등 수입 맥주까지.',
    'about-makgeolli-h3':   '막걸리',
    'about-makgeolli-p':    '지평 막걸리, 느린마을 막걸리 등 전통 막걸리의 안주를 추천합니다.',
    'about-wine-h3':        '와인',
    'about-wine-p':         '샤르도네, 소비뇽 블랑, 피노 누아, 카베르네 소비뇽, 리슬링, 샴페인 등 20여 가지 품종.',
    'about-whiskey-h3':     '위스키',
    'about-whiskey-p':      '발베니, 맥캘란, 글렌피딕 같은 싱글몰트부터 잭다니엘, 버번, 야마자키까지.',
    'about-cocktail-h3':    '칵테일',
    'about-cocktail-p':     '모히또, 마가리타, 네그로니, 올드패션드, 진토닉 등 클래식 칵테일.',
    'about-s3-h2':          '이용 방법',
    'about-step1-strong':   '술 이름 입력',
    'about-step1-p':        '마실 술의 이름을 입력하세요. 브랜드명(예: 발베니, 조니워커 블루)이나 종류(예: 막걸리, 레드와인)를 입력해도 됩니다.',
    'about-step2-strong':   '날씨 선택',
    'about-step2-p':        '오늘의 날씨를 선택하세요. 더운 날, 따뜻한 날, 선선한 날, 추운 날, 비 오는 날, 눈 오는 날 중에서 고를 수 있습니다.',
    'about-step3-strong':   '안주 추천 받기',
    'about-step3-p':        '버튼을 누르면 해당 술과 날씨에 최적화된 안주 3가지를 추천해 드립니다.',
    'about-step4-strong':   '술 정보 탐색',
    'about-step4-p':        '술 이름을 입력하면 역사, 특성, 어울리는 메뉴 탭에서 해당 술에 대한 상세 정보도 확인할 수 있습니다.',
    'about-s4-h2':          '음식·음료 페어링의 원칙',
    'about-s4-p1':          '좋은 페어링은 크게 세 가지 원칙을 따릅니다:',
    'about-s4-li1':         '<strong>보완(Complement)</strong> — 서로 다른 맛이 부족한 부분을 채워주는 조합. 예: 지방이 많은 삼겹살과 소주의 깔끔한 목 넘김.',
    'about-s4-li2':         '<strong>공명(Resonance)</strong> — 비슷한 향미끼리 시너지를 내는 조합. 예: 훈제 풍미의 싱글몰트 위스키와 훈제 연어.',
    'about-s4-li3':         '<strong>균형(Balance)</strong> — 강한 맛을 중화시키는 조합. 예: 매운 닭발 위에 시원한 맥주 한 잔.',
    'about-s4-p2':          'Mariage의 추천은 이 원칙들을 기반으로, 한국의 음주 문화와 계절·날씨의 특성을 결합하여 설계되었습니다.',
    'about-s5-h2':          '문의',
    'about-s5-p1':          '서비스 관련 문의나 제안이 있으시면 아래 이메일로 연락해 주세요.',
    'about-s5-p2':          '<strong>이메일:</strong> jelee.3na@gmail.com',
    // ── privacy.html ───────────────────────────────────────────────────────
    'priv-pg-title':  '개인정보처리방침',
    'priv-date':      '최종 업데이트: 2025년 5월',
    'priv-s1-h2':     '1. 개요',
    'priv-s1-p':      'Mariage(이하 "본 서비스")는 사용자의 개인정보를 매우 중요하게 여기며, 관련 법령을 준수합니다. 본 개인정보처리방침은 본 서비스가 수집하는 정보, 사용 방법, 보호 방법에 대해 설명합니다.',
    'priv-s2-h2':     '2. 수집하는 정보',
    'priv-s2-p1':     '본 서비스는 회원 가입, 로그인 등의 기능을 제공하지 않으며, 사용자가 직접 입력한 개인정보를 서버에 저장하지 않습니다.',
    'priv-s2-p2':     '단, 서비스 개선과 광고 제공을 위해 다음과 같은 정보가 자동으로 수집될 수 있습니다:',
    'priv-s2-li1':    '브라우저 종류 및 버전',
    'priv-s2-li2':    '운영 체제',
    'priv-s2-li3':    '방문 페이지 및 이용 시간',
    'priv-s2-li4':    '쿠키 및 유사 추적 기술을 통한 정보 (광고 제공 목적)',
    'priv-s3-h2':     '3. 쿠키(Cookie) 정책',
    'priv-s3-p1':     '본 서비스는 사용자 경험 향상 및 맞춤형 광고 제공을 위해 쿠키를 사용합니다. 쿠키는 사용자의 브라우저에 저장되는 소규모 텍스트 파일입니다.',
    'priv-s3-p2':     '브라우저 설정에서 쿠키를 거부할 수 있으나, 일부 서비스 기능이 정상적으로 작동하지 않을 수 있습니다.',
    'priv-s4-h2':     '4. 제3자 서비스 및 광고',
    'priv-s4-p1':     '본 서비스는 Google AdSense를 통해 광고를 제공합니다. Google은 사용자의 이전 방문 기록을 바탕으로 맞춤형 광고를 표시할 수 있습니다.',
    'priv-s4-p2':     'Google의 광고 쿠키 사용에 대한 자세한 내용은 <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">Google 광고 정책</a>을 참고해 주세요.',
    'priv-s4-p3':     '사용자는 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Google 광고 설정</a>에서 맞춤형 광고를 비활성화할 수 있습니다.',
    'priv-s5-h2':     '5. 이미지 저작권',
    'priv-s5-p':      '본 서비스에 사용된 음식 이미지는 <a href="https://www.pexels.com/license/" target="_blank" rel="noopener">Pexels 라이선스</a> 하에 제공됩니다. Pexels 이미지는 상업적·비상업적 용도로 무료 사용이 가능하며, 별도의 출처 표기가 필요하지 않습니다.',
    'priv-s6-h2':     '6. 외부 링크',
    'priv-s6-p':      '본 서비스는 외부 사이트로의 링크를 포함할 수 있습니다. 외부 사이트의 개인정보 처리에 대해서는 해당 사이트의 개인정보처리방침을 참고하시기 바랍니다.',
    'priv-s7-h2':     '7. 개인정보처리방침 변경',
    'priv-s7-p':      '본 개인정보처리방침은 관련 법령 변경 또는 서비스 업데이트에 따라 변경될 수 있습니다. 변경 시 본 페이지에 업데이트 날짜와 함께 공지됩니다.',
    'priv-s8-h2':     '8. 문의',
    'priv-s8-p1':     '개인정보처리방침에 관한 문의는 아래 이메일로 연락해 주세요.',
    'priv-s8-p2':     '<strong>이메일:</strong> jelee.3na@gmail.com',
  },
  en: {
    // nav
    'nav-home':    'Home',
    'nav-about':   'About',
    'nav-privacy': 'Privacy Policy',
    // footer
    'ft-home':    'Home',
    'ft-about':   'About',
    'ft-privacy': 'Privacy Policy',
    'ft-copy':    '© 2025 Mariage. This service does not promote alcohol consumption. Drinking is for those aged 19 and over. Please drink responsibly.',
    // ── about.html ─────────────────────────────────────────────────────────
    'about-pg-title':       'What is Mariage?',
    'about-lead':           "A service that recommends the perfect pairing for your drink and the day's weather.",
    'about-s1-h2':          'About the Service',
    'about-s1-p1':          "Mariage is a French word meaning 'marriage' or 'union.' In wine culture, it describes the perfect harmony between food and drink. This service is inspired by that concept — helping you find the ideal pairing for your drink and the weather outside.",
    'about-s1-p2':          'Soju on a sweltering summer day, makgeolli on a rainy afternoon, wine by the window as snow falls — the best snack changes with the season. Mariage finds those combinations, drawing on data and experience.',
    'about-s2-h2':          'Supported Drinks',
    'about-soju-h3':        'Soju',
    'about-soju-p':         'Supports Jinro, Chamisul, Cheoeum-cheoreom, Saero, Hallasan, Hwayo, and more.',
    'about-beer-h3':        'Beer',
    'about-beer-p':         'From Korean domestics like Cass and Terra to imports like Heineken, Guinness, Asahi, and Tsingtao.',
    'about-makgeolli-h3':   'Makgeolli',
    'about-makgeolli-p':    'Traditional rice wine pairings including Jipyeong and Neuleunn Maeul makgeolli.',
    'about-wine-h3':        'Wine',
    'about-wine-p':         '20+ varietals: Chardonnay, Sauvignon Blanc, Pinot Noir, Cabernet Sauvignon, Riesling, Champagne, and more.',
    'about-whiskey-h3':     'Whisky',
    'about-whiskey-p':      'Single malts (Balvenie, Macallan, Glenfiddich), blends, Bourbon, Tennessee, and Japanese whisky.',
    'about-cocktail-h3':    'Cocktail',
    'about-cocktail-p':     'Classic cocktails including Mojito, Margarita, Negroni, Old Fashioned, and Gin & Tonic.',
    'about-s3-h2':          'How to Use',
    'about-step1-strong':   'Enter Your Drink',
    'about-step1-p':        'Type what you are drinking. Brand names (e.g., Balvenie, Johnnie Walker Blue) or categories (e.g., makgeolli, red wine) both work.',
    'about-step2-strong':   'Select the Weather',
    'about-step2-p':        "Choose today's weather — hot, warm, cool, cold, rainy, or snowy.",
    'about-step3-strong':   'Get Recommendations',
    'about-step3-p':        'Press the button to receive 3 snacks optimized for your drink and the weather.',
    'about-step4-strong':   'Explore Drink Info',
    'about-step4-p':        'Type a drink name to explore its story, characteristics, and pairing notes in the info panel.',
    'about-s4-h2':          'Pairing Principles',
    'about-s4-p1':          'Good pairing follows three core principles:',
    'about-s4-li1':         "<strong>Complement</strong> — Contrasting flavors that fill each other's gaps. Example: fatty samgyeopsal with the clean finish of soju.",
    'about-s4-li2':         '<strong>Resonance</strong> — Similar flavors that amplify each other. Example: smoky single malt with smoked salmon.',
    'about-s4-li3':         '<strong>Balance</strong> — Strong flavors that neutralize each other. Example: a cold beer after spicy chicken feet.',
    'about-s4-p2':          "Mariage's recommendations are built on these principles, blended with Korean drinking culture and the character of each season.",
    'about-s5-h2':          'Contact',
    'about-s5-p1':          'For inquiries or suggestions about the service, please reach out by email.',
    'about-s5-p2':          '<strong>Email:</strong> jelee.3na@gmail.com',
    // ── privacy.html ───────────────────────────────────────────────────────
    'priv-pg-title':  'Privacy Policy',
    'priv-date':      'Last updated: May 2025',
    'priv-s1-h2':     '1. Overview',
    'priv-s1-p':      'Mariage ("the Service") takes your privacy seriously and complies with applicable laws. This Privacy Policy explains what information the Service collects, how it is used, and how it is protected.',
    'priv-s2-h2':     '2. Information We Collect',
    'priv-s2-p1':     'The Service does not offer sign-up or login features, and does not store any personally submitted information on our servers.',
    'priv-s2-p2':     'However, the following information may be collected automatically to improve the Service and serve advertising:',
    'priv-s2-li1':    'Browser type and version',
    'priv-s2-li2':    'Operating system',
    'priv-s2-li3':    'Pages visited and time spent',
    'priv-s2-li4':    'Information collected via cookies and similar tracking technologies (for advertising purposes)',
    'priv-s3-h2':     '3. Cookie Policy',
    'priv-s3-p1':     'The Service uses cookies to enhance your experience and deliver personalized advertising. Cookies are small text files stored in your browser.',
    'priv-s3-p2':     'You may disable cookies in your browser settings; however, some features of the Service may not function correctly.',
    'priv-s4-h2':     '4. Third-Party Services & Advertising',
    'priv-s4-p1':     'The Service displays advertisements through Google AdSense. Google may show personalized ads based on your browsing history.',
    'priv-s4-p2':     'For more information on Google\'s use of advertising cookies, see <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">Google\'s Advertising Policy</a>.',
    'priv-s4-p3':     'You can opt out of personalized advertising at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Google Ad Settings</a>.',
    'priv-s5-h2':     '5. Image Licensing',
    'priv-s5-p':      'Food images used in this Service are provided under the <a href="https://www.pexels.com/license/" target="_blank" rel="noopener">Pexels License</a>. Pexels images are free to use for commercial and personal purposes; no attribution is required.',
    'priv-s6-h2':     '6. External Links',
    'priv-s6-p':      'The Service may contain links to external websites. Please refer to those websites\' own privacy policies regarding their data practices.',
    'priv-s7-h2':     '7. Changes to This Policy',
    'priv-s7-p':      'This Privacy Policy may be updated in response to changes in applicable law or service updates. Any changes will be posted on this page with an updated date.',
    'priv-s8-h2':     '8. Contact',
    'priv-s8-p1':     'For questions about this Privacy Policy, please contact us by email.',
    'priv-s8-p2':     '<strong>Email:</strong> jelee.3na@gmail.com',
  },
};

function setLang(lang) {
  localStorage.setItem('mariage-lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });
  const t = page_i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang === 'en' ? 'en' : 'ko';
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('mariage-lang');
  if (saved === 'en') setLang('en');
});
