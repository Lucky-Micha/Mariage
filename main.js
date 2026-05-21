// ── Weather context (title/desc/tip per category+weather) ─────────────────
const weatherCtx = {
  soju: {
    hot:   { emoji:'🧊', desc:'더운 날엔 차가운 소주 한 잔! 짭조름하고 시원한 안주가 잘 어울려요.', tip:'소주는 4~6도로 차갑게 마시면 더 맛있어요.' },
    warm:  { emoji:'🥩', desc:'날씨처럼 기분도 좋은 날, 소주와 고기의 환상 콤보를 즐겨보세요.', tip:'고기 구울 때 쌈채소와 된장을 곁들이면 더욱 풍성해요.' },
    cool:  { emoji:'🍖', desc:'선선한 날씨에 소주 한 잔, 든든한 안주와 함께해요.', tip:'보쌈에 새우젓을 살짝 올리면 소주와 정말 잘 어울려요.' },
    cold:  { emoji:'🍲', desc:'칼바람 부는 날, 따뜻한 국물 안주로 몸을 녹여요.', tip:'국물 안주는 소주 한 잔 마신 후 한 숟가락씩 떠먹으면 최고예요.' },
    rainy: { emoji:'🌧️', desc:'빗소리와 함께라면 파전 한 장이 제일이죠.', tip:'비 오는 날 전 부치는 소리는 빗소리와 닮았다고 하죠.' },
    snowy: { emoji:'❄️', desc:'창밖에 눈이 내리면 따끈한 안주와 소주 한 잔!', tip:'눈 오는 날엔 창가에서 따뜻한 국물 안주와 함께하면 운치 있어요.' },
  },
  beer: {
    hot:   { emoji:'🍺', desc:'시원한 생맥주엔 바삭한 안주가 최고예요!', tip:'맥주는 얼음컵에 따르면 더 시원하게 즐길 수 있어요.' },
    warm:  { emoji:'🌭', desc:'따뜻한 날 야외에서 맥주 한 캔, 바비큐 안주 어때요?', tip:'야외에서 맥주를 마실 땐 아이스박스에 넣어 차갑게 유지해요.' },
    cool:  { emoji:'🍟', desc:'선선한 날씨에 캔맥 한 캔, 바삭한 안주와 함께해요.', tip:'맥주와 피자는 영원한 단짝이에요!' },
    cold:  { emoji:'🧀', desc:'추운 날엔 실내에서 따뜻하게, 든든한 안주와 맥주 한 잔!', tip:'다크 맥주는 추운 날씨에 잘 어울려요.' },
    rainy: { emoji:'🍕', desc:'비 오는 날엔 배달 시켜 집에서 맥주 파티!', tip:'비 오는 날은 배달 음식과 맥주의 날이에요.' },
    snowy: { emoji:'🍻', desc:'창밖에 눈을 보며 아늑하게 맥주 한 잔!', tip:'크래프트 맥주는 눈 오는 날의 분위기와 잘 맞아요.' },
  },
  makgeolli: {
    hot:   { emoji:'🥒', desc:'여름 더위에 시원한 막걸리 한 사발!', tip:'막걸리는 흔들어 마시면 탄산이 살아나 더 맛있어요.' },
    warm:  { emoji:'🥞', desc:'꽃구경, 단풍구경 하며 막걸리 한 잔!', tip:'막걸리는 유산균이 풍부해 건강에도 좋아요.' },
    cool:  { emoji:'🥞', desc:'서늘한 바람에 전 한 장과 막걸리가 딱이에요.', tip:'전을 부칠 때 막걸리를 반죽에 넣으면 더 바삭해요.' },
    cold:  { emoji:'🥟', desc:'추운 날엔 따뜻하게 데운 막걸리와 뜨거운 안주를!', tip:'막걸리는 따뜻하게 데워 마셔도 맛있어요.' },
    rainy: { emoji:'🌧️', desc:'비 소리와 막걸리, 그리고 전은 영원한 조합이에요.', tip:'막걸리는 전의 기름진 맛을 깔끔하게 잡아줘요.' },
    snowy: { emoji:'⛄', desc:'하얀 눈을 바라보며 막걸리 한 사발, 운치 있죠.', tip:'눈 오는 날 처마 밑에서 마시는 막걸리는 낭만 그 자체예요.' },
  },
  wine: {
    hot:   { emoji:'🍷', desc:'더운 날엔 가볍고 신선한 안주와 화이트 와인을!', tip:'화이트 와인은 8~12도로 냉장 후 마시면 좋아요.' },
    warm:  { emoji:'🧀', desc:'봄가을 야외 피크닉에 와인 한 잔, 근사한 안주와 함께!', tip:'레드와인엔 숙성 치즈, 화이트엔 신선 치즈가 잘 어울려요.' },
    cool:  { emoji:'🍇', desc:'서늘한 날씨엔 풀바디 레드 와인과 함께해요.', tip:'레드 와인은 16~18도 실온에서 마시면 풍미가 살아나요.' },
    cold:  { emoji:'🥩', desc:'추운 겨울 저녁, 따뜻한 음식과 와인 한 잔의 여유!', tip:'겨울엔 와인을 조금 데워 뮬드 와인으로 즐기는 것도 좋아요.' },
    rainy: { emoji:'🫕', desc:'빗소리를 들으며 와인과 함께 로맨틱한 시간을!', tip:'비 오는 날엔 조금 더 무거운 레드 와인이 어울려요.' },
    snowy: { emoji:'🏔️', desc:'눈 내리는 창밖을 바라보며 와인 한 잔의 사치!', tip:'눈 오는 날엔 따뜻한 뱅쇼(mulled wine)도 훌륭한 선택이에요.' },
  },
  whiskey: {
    hot:   { emoji:'🥃', desc:'더운 날엔 온더락 위스키와 가벼운 안주를!', tip:'더운 날엔 위스키를 얼음과 함께 온더락으로 즐겨요.' },
    warm:  { emoji:'🥩', desc:'따뜻한 날 저녁 노을 보며 위스키 한 잔!', tip:'위스키는 혀 위에서 굴려 모든 풍미를 느껴보세요.' },
    cool:  { emoji:'🍫', desc:'서늘한 날씨, 위스키의 깊은 풍미를 천천히 즐겨요.', tip:'싱글몰트 위스키는 물을 몇 방울 넣으면 향이 더 살아나요.' },
    cold:  { emoji:'🔥', desc:'혹한의 날씨, 위스키 한 잔으로 몸을 녹여요.', tip:'추운 날엔 꿀·레몬·뜨거운 물을 넣은 핫토디가 최고예요.' },
    rainy: { emoji:'⚡', desc:'빗소리와 위스키 향이 어우러지는 특별한 밤!', tip:'아이라 위스키의 피트향은 비 오는 날 더욱 매력적이에요.' },
    snowy: { emoji:'🌨️', desc:'조용히 눈이 쌓이는 밤, 위스키 한 잔의 고요함!', tip:'눈 오는 날엔 버번 위스키의 달콤함이 특히 잘 어울려요.' },
  },
  cocktail: {
    hot:   { emoji:'🍹', desc:'트로피컬 분위기의 칵테일과 상큼한 안주!', tip:'열대 과일과 민트를 함께 곁들이면 칵테일 분위기가 살아나요.' },
    warm:  { emoji:'🌺', desc:'따뜻한 날 테라스에서 칵테일과 함께 여유를!', tip:'꽃을 띄운 칵테일은 봄 분위기를 더욱 살려줘요.' },
    cool:  { emoji:'🍸', desc:'칵테일 바 분위기로 근사한 저녁을!', tip:'선선할 땐 클래식 칵테일(네그로니, 맨하탄)이 잘 어울려요.' },
    cold:  { emoji:'🍊', desc:'추운 날엔 핫 칵테일과 따뜻한 안주를!', tip:'아이리시 커피나 핫 토디 같은 따뜻한 칵테일을 도전해보세요.' },
    rainy: { emoji:'🌈', desc:'집에서 직접 만드는 홈 칵테일과 간편 안주!', tip:'진저비어를 넣은 모스코 뮬은 집에서 쉽게 만들 수 있어요.' },
    snowy: { emoji:'✨', desc:'눈 내리는 특별한 밤, 반짝이는 칵테일과 함께!', tip:'크리스마스 분위기로 에그노그나 스파이스 사이다를 만들어 보세요.' },
  },
};

// ── Drink Database ────────────────────────────────────────────────────────
const drinkDatabase = [
  {
    key: '발베니',
    aliases: ['발베니', 'balvenie'],
    category: 'whiskey',
    fullName: 'The Balvenie',
    badge: '스카치 싱글몰트 · 스페이사이드',
    abv: '40~47.8%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '1892년 윌리엄 그랜트가 설립한 스페이사이드 증류소입니다. 스코틀랜드에서 자체 보리를 재배하고 전통 플로어 몰팅을 유지하는 몇 안 되는 증류소 중 하나로, 더블우드·포트우드 등 다양한 캐스크 숙성으로 유명합니다.',
    characteristics: '꿀과 바닐라의 달콤한 향이 주를 이루며, 신선한 과일과 오크의 섬세한 균형이 돋보입니다. 더블우드는 버번과 셰리 캐스크에서 이중 숙성해 복합적인 풍미를 냅니다. 위스키 입문자에게도 권장되는 부드럽고 풍부한 스타일입니다.',
    flavorTags: ['꿀', '바닐라', '신선한 과일', '오크', '부드러움'],
    items: ['다크 초콜릿', '꿀 리코타 크로스티니', '블루치즈', '호두', '말린 무화과'],
    pairingNote: '발베니의 달콤한 꿀·바닐라 풍미는 다크 초콜릿과 견과류, 부드러운 치즈와 완벽한 조화를 이룹니다.',
  },
  {
    key: '맥캘란',
    aliases: ['맥캘란', 'macallan', '맥켈란'],
    category: 'whiskey',
    fullName: 'The Macallan',
    badge: '스카치 싱글몰트 · 스페이사이드',
    abv: '40~43%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '1824년 스코틀랜드 스페이사이드에 설립된 스카치 위스키의 왕입니다. 최고급 셰리 캐스크만을 선별해 숙성하는 것으로 유명하며, 위스키 경매 시장에서 최고가를 기록하는 컬렉터 브랜드이기도 합니다.',
    characteristics: '진한 셰리의 달콤함과 건포도·오렌지 필·생강의 따뜻한 스파이스가 어우러집니다. 입 안에서 초콜릿과 오크의 여운이 오래 남으며, 풀바디의 묵직하고 복합적인 풍미가 특징입니다.',
    flavorTags: ['셰리', '건포도', '오렌지 필', '초콜릿', '스파이스'],
    items: ['훈제연어', '체다 치즈', '말린 자두', '살구 타르트', '다크 초콜릿'],
    pairingNote: '맥캘란의 셰리·건과일 풍미는 훈제 생선과 숙성 치즈, 달콤한 페이스트리와 놀라운 시너지를 냅니다.',
  },
  {
    key: '글렌피딕',
    aliases: ['글렌피딕', 'glenfiddich'],
    category: 'whiskey',
    fullName: 'Glenfiddich',
    badge: '스카치 싱글몰트 · 스페이사이드',
    abv: '40%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '1887년 윌리엄 그랜트가 설립한, 세계에서 가장 많이 팔리는 싱글몰트 위스키입니다. 가족 경영을 고수하며 동일한 가문이 135년 넘게 운영하고 있습니다.',
    characteristics: '싱그러운 배·사과·꽃향기가 앞에 나오고, 가벼운 오크와 은은한 바닐라가 따라옵니다. 가볍고 상쾌한 스타일로 입문자에게 가장 친화적인 싱글몰트입니다.',
    flavorTags: ['배', '사과', '꽃향기', '바닐라', '가벼운 오크'],
    items: ['카망베르 치즈', '연어 타르타르', '사과 크럼블', '구운 아몬드', '그린샐러드'],
    pairingNote: '글렌피딕의 가볍고 과일향 넘치는 풍미는 신선한 생선, 크리미한 치즈, 과일 디저트와 잘 어울립니다.',
  },
  {
    key: '라프로익',
    aliases: ['라프로익', 'laphroaig', '라프로이그'],
    category: 'whiskey',
    fullName: 'Laphroaig',
    badge: '스카치 싱글몰트 · 아이라',
    abv: '40~48%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '1815년 아이라 섬에 설립된 증류소로, 찰스 3세가 즐겨 마시는 위스키로 유명합니다. "Friends of Laphroaig" 멤버십으로 아이라 섬의 땅 한 평을 증정하는 독특한 마케팅으로도 알려져 있습니다.',
    characteristics: '강렬한 피트 연기, 해양의 짠맛, 아이오딘 향이 압도적입니다. 좋아하거나 싫어하거나 극명하게 나뉘는 개성 강한 위스키로, 뒤에서 달콤한 바닐라와 과일 향이 피어납니다.',
    flavorTags: ['피트 연기', '해양', '아이오딘', '짠맛', '바닐라'],
    items: ['생굴', '훈제 고등어', '블루치즈', '소금 크래커', '미소된장 수프'],
    pairingNote: '라프로익의 강렬한 피트·해양 풍미는 짭조름한 굴과 훈제 생선, 강한 치즈와 이상적인 대비를 이룹니다.',
  },
  {
    key: '탈리스커',
    aliases: ['탈리스커', 'talisker'],
    category: 'whiskey',
    fullName: 'Talisker',
    badge: '스카치 싱글몰트 · 스카이섬',
    abv: '45.8%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '1830년 스코틀랜드 스카이섬에 설립된 섬 위스키의 대표 브랜드입니다. 소설가 로버트 루이스 스티븐슨이 "진정한 섬의 맛"이라고 극찬한 것으로 유명합니다.',
    characteristics: '강렬한 후추·향신료와 달콤한 피트 연기, 바다의 짠맛이 복합적으로 어우러집니다. 섬 위스키 특유의 야성적이고 거친 풍미 속에 건포도와 과일의 단맛이 균형을 잡습니다.',
    flavorTags: ['후추', '피트', '해양', '건포도', '향신료'],
    items: ['훈제 굴', '훈제연어', '피클', '블루치즈', '훈제 소시지'],
    pairingNote: '탈리스커의 후추·해양 풍미는 훈제 식재료와 짠맛 나는 안주와 만났을 때 풍미가 한층 깊어집니다.',
  },
  {
    key: '아벨라워',
    aliases: ['아벨라워', 'aberlour'],
    category: 'whiskey',
    fullName: 'Aberlour',
    badge: '스카치 싱글몰트 · 스페이사이드',
    abv: '40~43%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '1879년 설립된 스페이사이드 증류소로, 풍부한 셰리 캐스크 숙성으로 유명합니다. "a\'bunadh(아부나)"라는 캐스크 스트렝스 버전이 마니아들에게 특히 인기입니다.',
    characteristics: '계피·정향의 따뜻한 스파이스, 체리·건자두의 달콤한 과일 풍미, 셰리의 깊은 풍미가 조화를 이룹니다. 맥캘란보다 가볍지만 개성이 뚜렷한 스페이사이드 스타일입니다.',
    flavorTags: ['계피', '체리', '건자두', '셰리', '스파이스'],
    items: ['치즈 플레이터', '살라미', '견과류 믹스', '말린 무화과', '다크 초콜릿'],
    pairingNote: '아벨라워의 스파이시한 셰리 풍미는 염장 육류, 숙성 치즈, 건과일과 만났을 때 깊이를 더합니다.',
  },
  {
    key: '글렌리벳',
    aliases: ['글렌리벳', 'glenlivet', '더 글렌리벳'],
    category: 'whiskey',
    fullName: 'The Glenlivet',
    badge: '스카치 싱글몰트 · 스페이사이드',
    abv: '40%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '1824년 스코틀랜드 최초로 합법적인 면허를 받은 증류소로, 스페이사이드 위스키의 표준을 만든 브랜드입니다. 부드럽고 접근하기 쉬운 스타일로 북미에서 가장 많이 팔리는 싱글몰트입니다.',
    characteristics: '달콤한 열대과일과 꽃향기가 가볍게 피어나고, 복숭아·살구·바닐라의 섬세한 풍미가 이어집니다. 거친 맛이 없는 부드럽고 균형잡힌 스타일로 어떤 자리에서도 무난하게 즐길 수 있습니다.',
    flavorTags: ['살구', '복숭아', '꽃향기', '바닐라', '부드러움'],
    items: ['카프레제', '카망베르 치즈', '구운 아몬드', '훈제연어', '사과 크럼블'],
    pairingNote: '글렌리벳의 가벼운 과일·꽃 풍미는 신선한 샐러드, 부드러운 치즈, 담백한 생선 요리와 잘 어울립니다.',
  },
  {
    key: '조니워커 블루',
    aliases: ['조니워커 블루', 'johnnie walker blue', '조니 워커 블루', '블루라벨', '조니블루'],
    category: 'whiskey',
    fullName: 'Johnnie Walker Blue Label',
    badge: '블렌디드 스카치 · 최상급',
    abv: '40%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '1992년 출시된 조니워커 라인의 최고급 버전입니다. 1만 병 중 1병만 선별된 희귀 원액들을 블렌딩한 것으로, 각각의 원액은 더 이상 구하기 어려운 희귀 증류소에서 왔습니다.',
    characteristics: '꿀·바닐라·말린 과일의 달콤함에 가벼운 스모키 풍미가 어우러집니다. 극도로 부드럽고 실키한 질감이 특징으로, 여운이 매우 길고 복합적입니다.',
    flavorTags: ['꿀', '바닐라', '말린 과일', '실키함', '긴 여운'],
    items: ['캐비어', '훈제연어', '생굴', '다크 초콜릿 트러플', '파르미지아노'],
    pairingNote: '블루라벨의 극도의 부드러움과 복합미는 최고급 재료—캐비어, 굴, 트러플 초콜릿—와 격을 맞춥니다.',
  },
  {
    key: '조니워커 블랙',
    aliases: ['조니워커 블랙', 'johnnie walker black', '조니 워커 블랙', '블랙라벨', '조니블랙'],
    category: 'whiskey',
    fullName: 'Johnnie Walker Black Label',
    badge: '블렌디드 스카치 · 12년',
    abv: '40%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '12년 이상 숙성된 원액만 블렌딩한 조니워커의 시그니처 라인입니다. 1820년 존 워커가 창립한 이후 전 세계 프리미엄 블렌디드 스카치 시장의 기준이 되었습니다.',
    characteristics: '달콤한 바닐라·과일과 섬세한 스모키 풍미, 미디엄 바디의 균형잡힌 맛이 특징입니다. 가볍지도 무겁지도 않은 완성도 높은 일상 위스키입니다.',
    flavorTags: ['스모키', '바닐라', '달콤한 과일', '미디엄 바디', '균형'],
    items: ['스테이크', '체다 치즈', '피클', '훈제 소시지', '다크 초콜릿'],
    pairingNote: '블랙라벨의 균형잡힌 스모키·달콤함은 그릴 요리와 숙성 치즈, 피클류와 환상적인 조화를 이룹니다.',
  },
  {
    key: '시바스리갈',
    aliases: ['시바스리갈', 'chivas regal', '시바스', 'chivas'],
    category: 'whiskey',
    fullName: 'Chivas Regal 12',
    badge: '블렌디드 스카치 · 12년',
    abv: '40%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '1801년 설립된 시바스 브라더스에서 만드는 블렌디드 스카치입니다. 스코틀랜드 왕실 납품업체 출신으로, 19세기부터 귀족들이 즐겨 마신 정통 명가의 위스키입니다.',
    characteristics: '꿀·바닐라·과일의 달콤함과 크리미한 질감이 매력적입니다. 부드럽고 접근하기 쉬운 스타일로 위스키 입문자에게 훌륭한 선택이며, 온더락이나 하이볼로도 잘 어울립니다.',
    flavorTags: ['꿀', '바닐라', '복숭아', '크리미', '부드러움'],
    items: ['카망베르 치즈', '구운 아몬드', '사과 크럼블', '크래커', '견과류'],
    pairingNote: '시바스의 부드럽고 달콤한 풍미는 크리미한 치즈, 견과류, 과일 디저트와 편안한 조화를 이룹니다.',
  },
  {
    key: '발렌타인',
    aliases: ['발렌타인', 'ballantine', 'ballantines', '발란타인'],
    category: 'whiskey',
    fullName: "Ballantine's 17",
    badge: '블렌디드 스카치 · 17년',
    abv: '40%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '1827년 조지 발렌타인이 에든버러에서 창립했습니다. 50종 이상의 싱글몰트와 그레인 위스키를 블렌딩하며, 아시아권에서 특히 인기 있는 프리미엄 스카치입니다.',
    characteristics: '꽃향기와 은은한 과일 향이 먼저 다가오고, 바닐라·오크의 부드러운 풍미가 이어집니다. 균형잡힌 중후한 맛으로 식사 전후 어디서나 즐길 수 있는 올라운더입니다.',
    flavorTags: ['꽃향기', '과일', '바닐라', '오크', '균형'],
    items: ['다크 초콜릿', '살라미', '견과류', '치즈 플레이터', '살구 타르트'],
    pairingNote: '발렌타인의 균형잡힌 풍미는 짭조름한 샤퀴테리, 숙성 치즈, 달콤한 과일 타르트 모두와 잘 맞습니다.',
  },
  {
    key: '잭다니엘',
    aliases: ['잭다니엘', 'jack daniels', "jack daniel's", '잭다니엘스', '잭 다니엘'],
    category: 'whiskey',
    fullName: "Jack Daniel's Old No.7",
    badge: '테네시 위스키 · 미국',
    abv: '40%', flag: '🇺🇸',
    history: '1866년 재스퍼 다니엘이 미국 테네시주 린치버그에서 창립했습니다. 숯 필터링 과정인 "링컨 카운티 프로세스"를 거쳐 버번과 구별되는 테네시 위스키만의 부드러운 풍미를 만들어냅니다.',
    characteristics: '캐러멜·바닐라·달콤한 오크의 친숙한 향에 은은한 숯 연기가 더해집니다. 부드럽고 달콤한 끝맛으로 콜라와 혼합하거나 온더락으로 즐기기 좋습니다.',
    flavorTags: ['캐러멜', '바닐라', '오크', '숯향', '달콤함'],
    items: ['바베큐 폭립', '맥앤치즈', '캐러멜 팝콘', '체다버거', '피칸 파이'],
    pairingNote: '잭다니엘의 달콤한 캐러멜·바닐라 풍미는 미국식 BBQ와 치즈 요리, 달콤한 견과류 디저트와 찰떡 조합입니다.',
  },
  {
    key: '버팔로트레이스',
    aliases: ['버팔로트레이스', 'buffalo trace'],
    category: 'whiskey',
    fullName: 'Buffalo Trace',
    badge: '켄터키 버번 · 미국',
    abv: '45%', flag: '🇺🇸',
    history: '1787년부터 이어지는 켄터키 증류 역사를 가진 미국 최장수 증류소 중 하나입니다. 이글 레어, 블랜튼 등 수많은 프리미엄 버번을 생산하는 버번 성지입니다.',
    characteristics: '바닐라·캐러멜·민트·레몬 제스트가 균형 있게 어우러집니다. 고전적인 버번 스타일로 적당한 탄닌과 긴 여운이 특징이며, 가격 대비 품질이 뛰어난 버번의 교과서입니다.',
    flavorTags: ['바닐라', '캐러멜', '민트', '레몬', '탄닌'],
    items: ['스테이크', '피칸 파이', '훈제 체다치즈', '피클', '바베큐 립'],
    pairingNote: '버팔로트레이스의 클래식 버번 풍미는 그릴 요리와 훈제 치즈, 달콤쌉싸름한 피칸 파이와 이상적입니다.',
  },
  {
    key: '메이커스마크',
    aliases: ['메이커스마크', "maker's mark", '메이커스'],
    category: 'whiskey',
    fullName: "Maker's Mark",
    badge: '켄터키 버번 · 밀 위스키',
    abv: '45%', flag: '🇺🇸',
    history: '1953년 빌 사뮤엘스 시니어가 창립했습니다. 호밀 대신 밀을 사용해 부드럽고 달콤한 버번 스타일을 개척했으며, 손으로 찍은 빨간 밀랍 봉인이 상징입니다.',
    characteristics: '달콤한 밀 버번 특유의 부드럽고 크리미한 질감에 바닐라·꽃향기·가벼운 과일이 어우러집니다. 호밀 특유의 스파이시함이 없어 달콤하고 둥근 풍미가 두드러집니다.',
    flavorTags: ['밀의 단맛', '바닐라', '꽃향기', '크리미', '부드러움'],
    items: ['구운 복숭아', '브리 치즈 구이', '피칸', '체다 치즈', '프루트 타르트'],
    pairingNote: '메이커스마크의 부드럽고 달콤한 밀 버번 풍미는 과일 디저트, 크리미한 치즈와 감각적으로 어울립니다.',
  },
  {
    key: '야마자키',
    aliases: ['야마자키', 'yamazaki', '山崎'],
    category: 'whiskey',
    fullName: 'Yamazaki 12',
    badge: '재패니즈 싱글몰트 · 산토리',
    abv: '43%', flag: '🇯🇵',
    history: '1923년 산토리가 설립한 일본 최초의 위스키 증류소입니다. 스코틀랜드 전통을 일본 장인 정신으로 재해석해 독자적인 스타일을 구축했으며, 2003년 세계 최고 싱글몰트 수상 이후 일본 위스키 붐을 이끌었습니다.',
    characteristics: '복숭아·파인애플의 달콤한 과일 향에 미즈나라 오크 특유의 백단향과 은은한 생강 스파이스가 어우러집니다. 섬세하고 복합적인 풍미로 스카치와 전혀 다른 동양적 우아함이 있습니다.',
    flavorTags: ['복숭아', '파인애플', '미즈나라', '생강', '섬세함'],
    items: ['연어 니기리', '가리비 구이', '화이트 초콜릿 트러플', '우메보시', '고르곤졸라'],
    pairingNote: '야마자키의 섬세한 과일·우드 풍미는 일식 해산물과 화이트 초콜릿, 독특한 발효 식재료와 잘 어울립니다.',
  },
  {
    key: '히비키',
    aliases: ['히비키', 'hibiki', '響'],
    category: 'whiskey',
    fullName: 'Hibiki 17',
    badge: '재패니즈 블렌디드 · 산토리',
    abv: '43%', flag: '🇯🇵',
    history: '1989년 출시된 산토리 최고의 블렌디드 위스키입니다. 24개 면으로 된 병은 일본의 24절기를 상징하며, 섬세한 블렌딩 기술의 결정체로 꼽힙니다.',
    characteristics: '로즈·리치·귤껍질의 우아한 꽃향기와 과일 풍미가 핵심입니다. 화이트 오크의 섬세한 여운과 함께 일본 위스키 최고의 균형미와 정교함을 보여줍니다.',
    flavorTags: ['로즈', '리치', '귤껍질', '화이트 오크', '우아함'],
    items: ['버터구이 가리비', '유자 소르베', '훈제연어', '카망베르 치즈', '구운 아몬드'],
    pairingNote: '히비키의 꽃향기와 섬세한 과일 풍미는 버터 풍미의 해산물, 시트러스 디저트, 크리미한 치즈와 조화롭습니다.',
  },
  {
    key: '진로',
    aliases: ['진로', 'jinro', '진로이즈백', '진로 이즈백'],
    category: 'soju',
    fullName: '진로 이즈백',
    badge: '소주 · 하이트진로',
    abv: '16.5%', flag: '🇰🇷',
    history: '1924년 창립된 하이트진로의 대표 소주 브랜드입니다. 세계에서 가장 많이 팔리는 증류주 브랜드로 기네스 기록을 보유하고 있습니다. 2019년 뉴트로 감성을 살린 두꺼비 캐릭터로 리뉴얼해 큰 인기를 얻었습니다.',
    characteristics: '깔끔하고 중성적인 맛에 미세한 단맛이 느껴집니다. 자극적이지 않은 부드러운 끝맛으로 어떤 안주와도 잘 어울리는 국민 소주입니다.',
    flavorTags: ['깔끔함', '부드러움', '중성', '미세한 단맛', '청량감'],
    items: ['삼겹살', '두부김치', '계란말이', '오이소박이', '파전'],
    pairingNote: '진로의 깔끔한 풍미는 기름진 고기와 짭조름한 김치류의 맛을 잡아주며 어떤 안주와도 무난하게 어울립니다.',
  },
  {
    key: '참이슬',
    aliases: ['참이슬', 'chamisul', '참이슬 후레쉬'],
    category: 'soju',
    fullName: '참이슬 후레쉬',
    badge: '소주 · 하이트진로',
    abv: '16.9%', flag: '🇰🇷',
    history: '1998년 출시된 하이트진로의 베스트셀러 소주입니다. 대나무 활성탄 4회 필터링 공법으로 불순물을 제거해 깨끗하고 부드러운 맛이 특징입니다.',
    characteristics: '대나무 활성탄 필터링으로 만들어진 깨끗하고 청량한 맛입니다. 쓴맛이 적고 끝맛이 깔끔해 한국 소주 시장의 표준으로 자리 잡았습니다.',
    flavorTags: ['청량함', '깔끔함', '쓴맛 적음', '활성탄 여과', '부드러움'],
    items: ['삼겹살', '제육볶음', '파전', '닭발', '계란말이'],
    pairingNote: '참이슬의 청량하고 깔끔한 맛은 매콤하고 기름진 한국 음식의 강한 맛을 상쾌하게 씻어줍니다.',
  },
  {
    key: '처음처럼',
    aliases: ['처음처럼', '처음 처럼', 'cheoeum'],
    category: 'soju',
    fullName: '처음처럼',
    badge: '소주 · 롯데칠성',
    abv: '16%', flag: '🇰🇷',
    history: '2006년 롯데주류에서 출시한 소주입니다. 알칼리 환원수를 사용해 만들어 기존 소주보다 부드럽고 달콤한 맛으로 큰 인기를 얻었습니다.',
    characteristics: '알칼리 환원수로 만든 부드럽고 살짝 달콤한 맛이 특징입니다. 쓴맛이 거의 없어 소주 입문자와 여성들에게 특히 인기 있습니다.',
    flavorTags: ['부드러움', '달콤함', '쓴맛 없음', '알칼리 환원수', '순함'],
    items: ['삼겹살', '해물파전', '제육볶음', '두부김치', '어묵탕'],
    pairingNote: '처음처럼의 부드럽고 달콤한 특성은 해물 요리와 전류, 두부 요리의 담백한 맛과 조화롭습니다.',
  },
  {
    key: '새로',
    aliases: ['새로', 'saero'],
    category: 'soju',
    fullName: '새로',
    badge: '제로슈거 소주 · 하이트진로',
    abv: '16.9%', flag: '🇰🇷',
    history: '2022년 하이트진로에서 MZ세대를 타겟으로 출시한 제로슈거 소주입니다. 설탕 없이 깔끔한 단맛을 구현해 출시 직후 품귀 현상을 빚을 만큼 큰 인기를 끌었습니다.',
    characteristics: '제로슈거임에도 깔끔한 단맛이 느껴지는 신개념 소주입니다. 칼로리에 민감한 소비자들에게 인기 있으며 깔끔하고 가벼운 끝맛이 특징입니다.',
    flavorTags: ['제로슈거', '깔끔함', '가벼움', '청량감', '드라이'],
    items: ['회', '조개구이', '생굴', '두부조림', '파전'],
    pairingNote: '새로의 깔끔하고 드라이한 특성은 신선한 해산물과 담백한 두부 요리의 풍미를 해치지 않고 받쳐줍니다.',
  },
  {
    key: '하이네켄',
    aliases: ['하이네켄', 'heineken'],
    category: 'beer',
    fullName: 'Heineken',
    badge: '필스너 라거 · 네덜란드',
    abv: '5%', flag: '🇳🇱',
    history: '1873년 헤라르트 하이네켄이 암스테르담에서 창립했습니다. 독특한 A-효모를 사용해 특유의 청량한 쓴맛을 내며, 초록 병과 빨간 별 로고로 세계적으로 친숙한 프리미엄 라거입니다.',
    characteristics: '청량하고 균형잡힌 홉의 쓴맛과 가벼운 몰트 단맛이 조화롭습니다. 깔끔하고 시원한 마무리로 어떤 음식과도 잘 어울리는 만능 페어링 맥주입니다.',
    flavorTags: ['청량함', '홉 쓴맛', '가벼운 몰트', '균형', '깔끔함'],
    items: ['피자', '나초', '감자튀김', '치즈버거', '에다마메'],
    pairingNote: '하이네켄의 균형잡힌 청량함은 짭조름하고 기름진 스낵류와 치즈 요리의 느끼함을 깔끔히 정리해줍니다.',
  },
  {
    key: '기네스',
    aliases: ['기네스', 'guinness'],
    category: 'beer',
    fullName: 'Guinness Draught',
    badge: '아이리시 스타우트 · 아일랜드',
    abv: '4.2%', flag: '🇮🇪',
    history: '1759년 아서 기네스가 더블린에서 창립한 스타우트의 대명사입니다. 250년이 넘는 역사를 가진 세계에서 가장 유명한 흑맥주로, 질소 가스를 이용한 크리미한 거품이 특징입니다.',
    characteristics: '진한 로스팅 맥아의 커피·초콜릿 풍미와 크리미한 거품이 인상적입니다. 도수에 비해 묵직한 바디감이 있지만 쓴맛은 절제되어 부드럽게 마실 수 있습니다.',
    flavorTags: ['로스팅', '커피', '초콜릿', '크리미', '묵직함'],
    items: ['아이리시 스튜', '생굴', '훈제 체다치즈', '브라운 브레드', '뱅어즈앤매쉬'],
    pairingNote: '기네스의 진한 로스팅 풍미는 아이리시 전통 음식, 굴, 스모키한 치즈와 만났을 때 풍미가 완성됩니다.',
  },
  {
    key: '아사히',
    aliases: ['아사히', 'asahi', '아사히 수퍼드라이', '아사히 슈퍼드라이'],
    category: 'beer',
    fullName: 'Asahi Super Dry',
    badge: '드라이 라거 · 일본',
    abv: '5%', flag: '🇯🇵',
    history: '1987년 출시되어 일본 맥주 시장을 뒤흔든 "슈퍼 드라이" 스타일의 원조입니다. 당분을 완전히 발효시켜 극도로 드라이하고 청량한 맛을 구현한 혁신적인 맥주입니다.',
    characteristics: '극도로 드라이하고 날카로운 청량감이 가장 큰 특징입니다. 맛과 향이 가볍고 깔끔해 음식의 맛을 방해하지 않으며, 기름진 튀김 요리를 깔끔하게 정리해줍니다.',
    flavorTags: ['드라이', '청량함', '날카로움', '깔끔함', '가벼움'],
    items: ['야키토리', '가라아게', '에다마메', '교자', '연어 니기리'],
    pairingNote: '아사히 슈퍼드라이의 극도로 드라이한 청량감은 일식 요리와 튀김류의 기름기를 깔끔하게 씻어줍니다.',
  },
  {
    key: '카스',
    aliases: ['카스', 'cass', '카스 맥주'],
    category: 'beer',
    fullName: 'CASS Fresh',
    badge: '라거 · 한국',
    abv: '4.5%', flag: '🇰🇷',
    history: '1994년 오비맥주에서 출시한 대한민국 점유율 1위 맥주입니다. 부드럽고 청량한 맛으로 치킨, 삼겹살 등 한국 음식과 특히 잘 어울리는 국민 맥주입니다.',
    characteristics: '가볍고 청량한 맛과 부드러운 거품이 특징입니다. 강한 개성 없이 깔끔하고 시원한 맛으로 한국 음식 전반과 편안하게 어울립니다.',
    flavorTags: ['청량함', '가벼움', '부드러움', '깔끔함', '시원함'],
    items: ['치킨', '피자', '감자튀김', '어니언링', '핫도그'],
    pairingNote: '카스의 가볍고 청량한 맛은 기름진 한국식 튀김류와 패스트푸드의 느끼함을 상쾌하게 잡아줍니다.',
  },
  {
    key: '테라',
    aliases: ['테라', 'terra', '테라 맥주'],
    category: 'beer',
    fullName: 'Terra',
    badge: '라거 · 한국 하이트진로',
    abv: '4.6%', flag: '🇰🇷',
    history: '2019년 하이트진로에서 출시한 신흥 강자입니다. 호주산 청보리와 리얼탄산을 사용해 기존 국산 맥주와 차별화된 청량감으로 빠르게 시장 점유율을 높였습니다.',
    characteristics: '청보리 특유의 신선하고 깔끔한 맛과 강한 탄산감이 특징입니다. 기존 국산 맥주보다 풍미가 살아 있으면서도 가벼운 마무리가 인상적입니다.',
    flavorTags: ['청보리', '강한 탄산', '신선함', '깔끔함', '풍미'],
    items: ['치킨', '삼겹살', '족발', '감자튀김', '소시지구이'],
    pairingNote: '테라의 강한 탄산과 청량감은 기름진 고기 요리와 튀김류를 먹은 후 입 안을 개운하게 해줍니다.',
  },
  {
    key: '지평 막걸리',
    aliases: ['지평', '지평막걸리', '지평 막걸리', 'jipyeong'],
    category: 'makgeolli',
    fullName: '지평 막걸리',
    badge: '쌀 막걸리 · 경기 양평',
    abv: '6%', flag: '🇰🇷',
    history: '1925년 경기도 양평 지평양조장에서 시작된 100년 전통의 막걸리입니다. 한때 사라질 뻔했으나 전통 방식을 고수하며 부활, 현재는 서울 주요 식당에서 가장 많이 팔리는 프리미엄 막걸리가 되었습니다.',
    characteristics: '단맛과 신맛의 조화, 부드러운 탄산감, 진한 쌀의 풍미가 특징입니다. 인공 감미료를 사용하지 않는 자연스러운 단맛이 다른 막걸리와 구별됩니다.',
    flavorTags: ['쌀 풍미', '자연스러운 단맛', '신맛', '부드러운 탄산', '구수함'],
    items: ['해물파전', '감자전', '두부김치', '김치전', '빈대떡'],
    pairingNote: '지평 막걸리의 구수하고 균형잡힌 맛은 전 요리와 두부 요리의 담백함을 고스란히 살려줍니다.',
  },
  {
    key: '샤도네이',
    aliases: ['샤도네이', '샤르도네', 'chardonnay'],
    category: 'wine',
    fullName: 'Chardonnay',
    badge: '화이트 와인 · 부르고뉴 원산',
    abv: '12~14%', flag: '🍾',
    history: '프랑스 부르고뉴가 원산지인 세계에서 가장 많이 재배되는 화이트 와인 품종입니다. 오크 숙성 여부에 따라 버터리한 스타일부터 미네랄하고 날카로운 스타일(샤블리)까지 다양하며, 캘리포니아·호주·뉴질랜드 등 전 세계에서 개성 있는 스타일로 생산됩니다.',
    characteristics: '서늘한 산지(샤블리)에서는 청사과·레몬·미네랄의 날카로운 풍미가, 따뜻한 산지(캘리포니아·호주)에서는 망고·바나나·열대과일의 풍성한 향이 납니다. 말로락틱 발효(MLF)를 거치면 버터·헤이즐넛이, 오크 숙성을 거치면 바닐라·토스트·스모크의 풍미가 더해집니다.',
    flavorTags: ['사과', '레몬', '버터', '바닐라', '열대과일'],
    items: ['로스트 치킨', '버터구이 새우', '훈제연어', '브리 치즈 구이', '버섯 크림 수프'],
    pairingNote: '오크 숙성 샤도네이의 버터리한 풍미는 로스트 치킨·크림 소스와 완벽하게 어울리고, 무오크(샤블리) 스타일은 생굴·가벼운 해산물과 이상적입니다.',
  },
  {
    key: '피노누아',
    aliases: ['피노누아', '피노 누아', 'pinot noir'],
    category: 'wine',
    fullName: 'Pinot Noir',
    badge: '레드 와인 · 부르고뉴 원산',
    abv: '12~14%', flag: '🍾',
    history: '프랑스 부르고뉴가 원산지인 가장 재배하기 까다로운 품종입니다. 제대로 만들어졌을 때 타의 추종을 불허하는 복합미를 보여주며, 부르고뉴 최고가 와인들이 모두 이 품종으로 만들어집니다.',
    characteristics: '어릴 때는 체리·라즈베리·딸기의 선명한 붉은 과일 향이, 숙성되면 버섯·젖은 낙엽·육류적 뉘앙스가 더해집니다. 레드 와인 중 탄닌이 가장 가볍고 산도는 중간 수준으로, 섬세한 식재료와 함께할 때 진가를 발휘합니다.',
    flavorTags: ['체리', '라즈베리', '버섯', '흙향', '낮은 탄닌'],
    items: ['오리가슴살', '연어구이', '버섯요리', '카망베르 치즈', '연어 타르타르'],
    pairingNote: '피노 누아의 낮은 탄닌과 밝은 산도는 연어·오리처럼 지방이 적당한 단백질, 그리고 버섯처럼 흙향 나는 식재료와 보완적 마리아주를 이룹니다.',
  },
  {
    key: '카베르네 소비뇽',
    aliases: ['카베르네 소비뇽', '카베르네', 'cabernet sauvignon', 'cab sav'],
    category: 'wine',
    fullName: 'Cabernet Sauvignon',
    badge: '레드 와인 · 보르도 원산',
    abv: '13~15%', flag: '🍾',
    history: '프랑스 보르도가 원산지인 세계에서 가장 많이 재배되는 레드 와인 품종입니다. 카베르네 프랑과 소비뇽 블랑의 자연 교배로 탄생했으며, 장기 숙성력이 뛰어난 풀바디 와인을 만들어냅니다.',
    characteristics: '서늘한 지역(보르도)에서는 블랙커런트·피망, 따뜻한 지역(나파)에서는 블랙체리·올리브 풍미가 납니다. 숙성되면 유칼립투스·민트·삼나무·담배·시가박스의 복합적인 뉘앙스가 발전합니다. 강한 탄닌은 육류의 단백질과 결합해 풍미를 폭발시키며, 장기 숙성 능력이 탁월합니다.',
    flavorTags: ['블랙커런트', '삼나무', '민트', '강한 탄닌', '풀바디'],
    items: ['스테이크', '양고기구이', '다크 초콜릿', '포르치니 버섯', '체다 치즈'],
    pairingNote: '카베르네 소비뇽의 강한 탄닌은 붉은 육류의 단백질과 결합해 쓴맛을 부드럽게 하고 풍미를 극대화합니다. 고지방 육류와의 시너지가 최고이며, 맵고 자극적인 요리는 피하는 것이 좋습니다.',
  },
  // ── 화이트 와인 ──────────────────────────────────────────────────────────
  {
    key: '소비뇽 블랑',
    aliases: ['소비뇽 블랑', '소비뇽블랑', '쇼비뇽', 'sauvignon blanc', 'sauvignon'],
    category: 'wine',
    fullName: 'Sauvignon Blanc',
    badge: '화이트 와인 · 프랑스 루아르 / 뉴질랜드 말버러',
    abv: '11~13%', flag: '🍾',
    history: '프랑스 루아르 밸리와 보르도가 원산지이며, 현재는 뉴질랜드 말버러가 세계 최고의 산지로 자리잡았습니다. 상큼하고 허브향이 강렬한 화이트 와인으로, 뉴질랜드가 1980년대 이후 현대적 스타일을 완성해 전 세계에 유행시켰습니다.',
    characteristics: '서늘한 지역에서는 풀·피망·쐐기풀의 날카로운 식물성 향과 자몽·라임이, 따뜻한 지역에서는 패션프루트·망고의 열대과일 향이 납니다. 높은 산도와 드라이한 스타일로, 오크 숙성 없이 신선하게 출시됩니다. 스시·해산물과 잘 어울리는 몇 안 되는 화이트 와인으로 알려져 있습니다.',
    flavorTags: ['자몽', '구스베리', '허브', '패션프루트', '미네랄'],
    items: ['생굴', '염소 치즈', '회', '새우칵테일', '그린샐러드'],
    pairingNote: '소비뇽 블랑의 높은 산도와 허브향은 신선한 해산물·스시와 이상적이며, 쉐브르(염소치즈)의 새콤함과 산도가 맞아 클래식 페어링을 이룹니다.',
  },
  {
    key: '리슬링',
    aliases: ['리슬링', 'riesling'],
    category: 'wine',
    fullName: 'Riesling',
    badge: '화이트 와인 · 독일 모젤 / 프랑스 알자스',
    abv: '7~13%', flag: '🍾',
    history: '독일 모젤·라인 지역이 원산지인 귀족적인 화이트 와인 품종입니다. 달콤한 슈패트레제·아우스레제부터 완전히 드라이한 트로켄 스타일까지 다양하며, 장기 숙성 시 특유의 석유향(페트롤 노트)이 나타나는 독특한 매력으로 세계 최고의 화이트 와인 중 하나로 꼽힙니다.',
    characteristics: '어릴 때는 꽃향·복숭아·살구·사과·자몽이, 숙성되면 꿀·연기·석유(페트롤) 향이 납니다. 세계에서 산도가 가장 높은 화이트 와인 중 하나로, 달콤한 스타일도 산도 덕분에 전혀 무겁지 않습니다. 태국·중국 요리 등 강한 향신료와 함께할 수 있는 몇 안 되는 와인입니다.',
    flavorTags: ['복숭아', '살구', '꿀', '미네랄', '페트롤(숙성)'],
    items: ['훈제 고등어', '목살구이', '생선구이', '블루치즈', '사과 크럼블'],
    pairingNote: '리슬링의 높은 산도와 잔당의 달콤함이 고염분 요리와 향신료를 균형있게 잡아주며, 지방 풍부한 생선·돼지고기와 최고의 궁합을 자랑합니다.',
  },
  {
    key: '모스카토',
    aliases: ['모스카토', '모스카토 다스티', '무스카', '아스티', 'moscato', 'muscat', 'asti'],
    category: 'wine',
    fullName: "Moscato d'Asti",
    badge: '스위트 스파클링 · 이탈리아 피에몬테',
    abv: '5~7%', flag: '🍾',
    history: "이탈리아 피에몬테 아스티 지역의 모스카토 비앙코 품종으로 만드는 세계에서 가장 사랑스러운 스위트 스파클링 와인입니다. 무스카 품종은 수천 년 역사의 가장 오래된 포도 품종 중 하나로, 고대 그리스·로마 시대부터 재배되었습니다.",
    characteristics: '복숭아·살구·오렌지 꽃·머스크의 향긋하고 달콤한 아로마가 넘칩니다. 낮은 알코올과 섬세한 버블, 풍부한 당도가 특징이며, 가볍고 상쾌한 여운 덕분에 와인 입문자에게도 최고의 선택입니다.',
    flavorTags: ['복숭아', '오렌지 꽃', '꿀', '살구', '섬세한 버블'],
    items: ['프루트 타르트', '사과 크럼블', '구운 아몬드', '카망베르 치즈', '견과류'],
    pairingNote: '모스카토의 달콤한 과일 향과 섬세한 버블은 가벼운 과일 디저트와 부드러운 치즈와 환상적인 조화를 이룹니다.',
  },
  {
    key: '피노 그리지오',
    aliases: ['피노 그리지오', '피노그리지오', '피노 그리', 'pinot grigio', 'pinot gris'],
    category: 'wine',
    fullName: 'Pinot Grigio',
    badge: '화이트 와인 · 이탈리아 북부 / 프랑스 알자스',
    abv: '11~13%', flag: '🍾',
    history: '이탈리아 트렌티노-알토 아디제와 프리울리 베네치아 줄리아 지역이 대표 산지입니다. 프랑스 알자스에서는 피노 그리(Pinot Gris)라는 이름으로 더 풍성한 스타일로 생산됩니다. 전 세계에서 가장 많이 팔리는 화이트 와인 중 하나로, 이탈리안 레스토랑의 대표 와인입니다.',
    characteristics: '레몬·청사과·흰 복숭아·미네랄의 가볍고 청아한 아로마가 특징입니다. 라이트~미디엄 바디에 산뜻한 산도와 깔끔한 피니시로, 어떤 음식과도 부담없이 어울리는 친근한 스타일입니다.',
    flavorTags: ['레몬', '청사과', '흰 복숭아', '미네랄', '산뜻함'],
    items: ['봉골레 파스타', '카프레제', '새우칵테일', '훈제연어', '그린샐러드'],
    pairingNote: '피노 그리지오의 산뜻한 산도와 미네랄리티는 해산물 파스타와 신선한 전채요리의 바다 풍미를 한껏 끌어올립니다.',
  },
  {
    key: '게뷔르츠트라미너',
    aliases: ['게뷔르츠트라미너', '게뷔르츠', '게부르츠', 'gewürztraminer', 'gewurztraminer', 'gewurz'],
    category: 'wine',
    fullName: 'Gewürztraminer',
    badge: '화이트 와인 · 프랑스 알자스',
    abv: '12~14%', flag: '🍾',
    history: '프랑스 알자스와 독일이 원산지인 매우 향긋한 화이트 와인 품종입니다. "향신료(Gewürz) + 트라미너 마을"의 합성어로, 독특하고 화려한 아로마가 한 번 맡으면 절대 잊을 수 없는 강렬한 인상을 남깁니다. 알자스 와인의 빅5 품종 중 하나로, 방당주 타르디브(늦수확) 스타일은 디저트 와인의 정점으로 꼽힙니다.',
    characteristics: '리치·장미꽃·생강·복숭아·향신료의 매우 강렬하고 이국적인 아로마가 가장 큰 특징입니다. 오프-드라이~스위트 스타일이 많고 풀바디에 낮은 산도, 긴 스파이시한 여운이 특징입니다.',
    flavorTags: ['리치', '장미꽃', '생강', '향신료', '이국적'],
    items: ['오리가슴살', '푸아그라', '카망베르 치즈', '블루치즈', '사과 크럼블'],
    pairingNote: '게뷔르츠트라미너의 이국적인 향신료 아로마는 기름진 푸아그라와 향신료 강한 요리와 환상적인 대조 마리아주를 이룹니다.',
  },
  // ── 스파클링 와인 ─────────────────────────────────────────────────────────
  {
    key: '샴페인',
    aliases: ['샴페인', '크레망', '뱅무소', 'champagne', 'moët', 'veuve clicquot', 'krug'],
    category: 'wine',
    fullName: 'Champagne',
    badge: '스파클링 와인 · 프랑스 샹파뉴',
    abv: '11~13%', flag: '🥂',
    history: '프랑스 샹파뉴 지역에서만 만들어지는 세계 최고의 스파클링 와인입니다. 17세기 동 페리뇽 수도사가 발포성 와인을 완성했다는 전설이 있으며, 이후 축제·의식·승리의 상징이 되었습니다. 모에 샹동·뵈브 클리코·크뤼그·루이 로드레르 등 유명 하우스들이 각자의 스타일을 고집합니다.',
    characteristics: '사과·레몬·토스트·효모·브리오슈의 복합적인 향이 특징입니다. 섬세한 지속 버블과 높은 산도, 긴 여운이 매력으로, 논빈티지(NV)부터 프레스티지 퀴베(동 페리뇽·크리스탈)까지 다양한 스타일이 존재합니다.',
    flavorTags: ['사과', '레몬', '토스트', '브리오슈', '섬세한 버블'],
    items: ['생굴', '캐비어', '훈제연어', '카나페', '새우칵테일'],
    pairingNote: '샴페인의 높은 산도와 섬세한 버블은 캐비어·생굴 등 최고급 해산물의 풍미를 완벽하게 받쳐주는 최상의 파트너입니다.',
  },
  {
    key: '프로세코',
    aliases: ['프로세코', 'prosecco', 'prosecco doc', 'prosecco docg'],
    category: 'wine',
    fullName: 'Prosecco',
    badge: '스파클링 와인 · 이탈리아 베네토',
    abv: '10~12%', flag: '🥂',
    history: '이탈리아 베네토·프리울리 지역에서 글레라 품종으로 만드는 스파클링 와인입니다. 샴페인보다 가볍고 과일 풍미가 풍부하며, 베네치아 스프리츠의 베이스로 사용됩니다. 이탈리아 아페리티보(식전주) 문화를 상징하는 와인으로, 벨리니 칵테일의 주재료이기도 합니다.',
    characteristics: '복숭아·배·사과·흰 꽃의 가볍고 산뜻한 아로마가 특징입니다. 샴페인보다 버블이 크고 과일 향이 더 직접적이며, 드라이(Brut)부터 달콤한(Extra Dry) 스타일까지 다양합니다.',
    flavorTags: ['복숭아', '배', '사과', '흰 꽃', '가벼운 버블'],
    items: ['카프레제', '과일 플레이터', '브루스케타', '안티파스토', '살라미'],
    pairingNote: '프로세코의 상큼한 과일 향과 가벼운 버블은 이탈리안 전채요리와 핑거푸드와 완벽한 아페리티보 궁합을 이룹니다.',
  },
  {
    key: '로제 와인',
    aliases: ['로제', '로제와인', '프로방스 로제', 'rosé', 'rose', 'rose wine'],
    category: 'wine',
    fullName: 'Rosé (Provence)',
    badge: '로제 와인 · 프랑스 프로방스',
    abv: '11~13%', flag: '🍾',
    history: '세계에서 가장 유명한 로제 와인은 프랑스 프로방스에서 생산됩니다. 연한 살몬핑크 색상이 특징인 프로방스 로제는 그르나슈·시라·무르베드르 블렌딩으로 만들어지며, 지중해 라이프스타일과 여름을 상징하는 와인이 되었습니다. 당젤루스 등 보르도 유명 샤토들도 프로방스 로제를 생산합니다.',
    characteristics: '딸기·수박·복숭아·장미꽃·허브의 신선하고 섬세한 아로마가 특징입니다. 드라이하고 가벼운 바디에 상쾌한 산도로, 화이트 와인의 신선함과 레드 와인의 과일 풍미를 동시에 즐길 수 있습니다.',
    flavorTags: ['딸기', '수박', '복숭아', '장미꽃', '프레시'],
    items: ['그린샐러드', '훈제연어', '새우칵테일', '카프레제', '올리브'],
    pairingNote: '로제 와인의 신선한 과일 향과 드라이한 피니시는 지중해 스타일의 가벼운 요리와 이상적인 여름 마리아주를 완성합니다.',
  },
  // ── 레드 와인 (보르도/론 계열) ────────────────────────────────────────────
  {
    key: '메를로',
    aliases: ['메를로', '메를레', 'merlot'],
    category: 'wine',
    fullName: 'Merlot',
    badge: '레드 와인 · 프랑스 보르도 우안',
    abv: '13~15%', flag: '🍾',
    history: '프랑스 보르도 우안(포므롤·생테밀리옹)을 대표하는 품종으로, 세계에서 가장 많이 재배되는 레드 와인 품종 중 하나입니다. 포므롤의 페트뤼스와 르팽은 메를로 단일 또는 주요 블렌딩으로 만들어지는 세계 최고가 와인들입니다.',
    characteristics: '서늘한 지역에서는 딸기·자두·적베리·삼나무·담배가, 따뜻한 지역에서는 블랙베리·자두·초콜릿·케이크 풍미가 납니다. 오크 숙성 시 카라멜·코코아·바닐라·모카가 더해집니다. 카베르네 소비뇽보다 탄닌이 부드럽고 일찍 숙성되며, 벨벳처럼 매끄러운 질감이 매력입니다.',
    flavorTags: ['자두', '블랙체리', '초콜릿', '바닐라', '벨벳 탄닌'],
    items: ['스테이크', '연어구이', '버섯요리', '가리비 구이', '포르치니 버섯'],
    pairingNote: '메를로의 부드러운 탄닌은 연어·가리비처럼 지방이 있는 해산물과도 어울리고, 그릴에 구운 육류·버섯과의 상호 보완적 풍미가 탁월합니다.',
  },
  {
    key: '시라',
    aliases: ['시라', '쉬라즈', '쉬라', 'syrah', 'shiraz'],
    category: 'wine',
    fullName: 'Syrah / Shiraz',
    badge: '레드 와인 · 프랑스 북부 론 / 호주 바로사',
    abv: '13~15%', flag: '🍾',
    history: '프랑스 북부 론 밸리가 원산지이며, 호주에서는 쉬라즈라는 이름으로 독자적인 스타일을 완성했습니다. 에르미타주와 코트-로티는 시라 단일 와인의 정점으로 꼽히며, 호주 바로사 밸리에는 세계에서 가장 오래된(150년 이상) 시라 포도나무가 남아 있습니다.',
    characteristics: '온화한 기후(북부 론·왈라왈라)에서는 블랙베리·민트·후추에 미디엄-하이 탄닌이, 더운 기후(바로사·맥라렌 베일)에서는 잼 과일·감초·아니스·정향의 풍성한 과일 향이 납니다. 숙성될수록 가죽·젖은 낙엽·트러플이 더해집니다. 높은 탄닌과 산도로 15년 이상 장기 숙성이 가능합니다.',
    flavorTags: ['블랙베리', '후추', '감초', '가죽', '스파이시'],
    items: ['양고기구이', '바베큐 립', '스테이크', '훈제 소시지', '다크 초콜릿'],
    pairingNote: '시라의 스파이시한 후추·감초 풍미와 강한 탄닌은 훈제·탄화된 구이 육류와 이상적이며, 다크 초콜릿의 쓴맛과도 보완적 마리아주를 이룹니다.',
  },
  {
    key: '말벡',
    aliases: ['말벡', 'malbec'],
    category: 'wine',
    fullName: 'Malbec',
    badge: '레드 와인 · 아르헨티나 멘도사',
    abv: '13~15%', flag: '🍾',
    history: '원래 프랑스 카오르가 원산지이지만, 현재는 아르헨티나 멘도사가 세계 최고의 말벡 산지로 자리잡았습니다. 19세기 중반 아르헨티나로 이식된 후 안데스산맥 고지대(해발 800~1500m)의 환경에서 독자적으로 발전해 풍성하고 부드러운 레드 와인으로 진화했습니다.',
    characteristics: '아르헨티나(멘도사)산은 블랙베리·자두·바이올렛의 풍성한 과일 향에 벨벳 질감이 특징이며, 프랑스 카오르산은 강한 탄닌과 자두·건포도·마늘·담배의 묵직한 스타일입니다. 고지대 포도원일수록 농축도와 구조감이 뛰어납니다.',
    flavorTags: ['블랙베리', '자두', '바이올렛', '초콜릿', '부드러운 탄닌'],
    items: ['스테이크', '양고기구이', '바베큐 립', '다크 초콜릿', '블루치즈'],
    pairingNote: '말벡의 풍성한 탄닌과 진한 자두·초콜릿 향은 고기 단백질과 결합해 풍미를 증폭시키며, 안데스식 구이요리(아사도)와의 조합이 전통적인 최고 페어링입니다.',
  },
  // ── 레드 와인 (이탈리아) ──────────────────────────────────────────────────
  {
    key: '산지오베제',
    aliases: ['산지오베제', '산조베제', '키안티', '브루넬로', 'sangiovese', 'chianti', 'brunello'],
    category: 'wine',
    fullName: 'Sangiovese (Chianti)',
    badge: '레드 와인 · 이탈리아 토스카나',
    abv: '12~14%', flag: '🍾',
    history: '이탈리아 토스카나를 대표하는 품종으로, 키안티·브루넬로 디 몬탈치노·비노 노빌레 디 몬테풀치아노 등 토스카나 최고의 와인들이 이 품종으로 만들어집니다. "조비스(유피테르)의 피"라는 뜻을 지닌 이탈리아 와인의 영혼과 같은 존재입니다.',
    characteristics: '어릴 때는 새콤한 체리·딸기·흙향·차잎 노트가, 숙성되면 타르·가죽·오크 풍미가 납니다. 높은 산도와 미디엄 탄닌, 라이트~미디엄 바디로 "음식 없이는 제 맛이 안 난다"는 말이 있을 정도로 대표적인 푸드 와인입니다. 토마토의 산도와 산지오베제의 산도가 공명하는 것이 이탈리안 식탁의 핵심 원리입니다.',
    flavorTags: ['새콤한 체리', '토마토', '허브', '흙향', '높은 산도'],
    items: ['토마토 파스타', '피자', '허브 구이', '브루스케타', '파르미지아노'],
    pairingNote: '산지오베제의 높은 산도는 토마토 소스의 산도와 공명하며 이탈리안 요리와 세계 최고의 궁합을 이룹니다. 바질·타임·세이지 허브 시즈닝 요리와도 탁월합니다.',
  },
  {
    key: '네비올로',
    aliases: ['네비올로', '바롤로', '바르바레스코', 'nebbiolo', 'barolo', 'barbaresco'],
    category: 'wine',
    fullName: 'Nebbiolo (Barolo)',
    badge: '레드 와인 · 이탈리아 피에몬테',
    abv: '13~15%', flag: '🍾',
    history: '"이탈리아 와인의 왕" 바롤로와 "이탈리아 와인의 여왕" 바르바레스코가 모두 이 품종으로 만들어집니다. 안개(nebbia)에서 이름이 유래했으며, 피에몬테의 란게 언덕에서만 최고의 품질이 나옵니다. 10년 이상 숙성 후에야 진가를 발휘하는 장기 숙성 와인의 대명사입니다.',
    characteristics: '어릴 때는 장미·타르·체리·라즈베리가, 숙성되면 바이올렛·야생 허브·체리·트러플·담배·가죽이 납니다. 세계 최고 수준의 탄닌과 산도로 최소 10년, 프리미엄 바롤로는 30년 이상 숙성됩니다. 숙성된 네비올로의 벽돌색 가장자리(brick-orange rim)는 숙성의 상징입니다.',
    flavorTags: ['장미', '타르', '트러플', '가죽', '강한 탄닌'],
    items: ['트러플 리조또', '스테이크', '포르치니 버섯', '양고기구이', '파르미지아노'],
    pairingNote: '네비올로의 강한 탄닌은 적어도 10년 이상 숙성 후 충분한 식사 파트너가 필요합니다. 트러플·포르치니·숙성 치즈의 깊은 감칠맛이 와인의 복합미를 최대로 끌어올립니다.',
  },
  // ── 레드 와인 (스페인) ────────────────────────────────────────────────────
  {
    key: '템프라니요',
    aliases: ['템프라니요', '리오하', '리베라', 'tempranillo', 'rioja', 'ribera del duero'],
    category: 'wine',
    fullName: 'Tempranillo (Rioja)',
    badge: '레드 와인 · 스페인 리오하',
    abv: '12~14%', flag: '🍾',
    history: '스페인을 대표하는 레드 와인 품종으로, 리오하·리베라 델 두에로 등에서 스페인 최고의 레드 와인이 생산됩니다. "이른"을 뜻하는 템프라노에서 유래한 이름처럼 일찍 익는 품종이며, 오크 숙성에 따라 크리안자·레세르바·그란 레세르바로 등급이 나뉩니다.',
    characteristics: '루비 레드 색상에 자두·딸기·담배·바닐라·가죽·허브의 균형잡힌 과일 향이 특징입니다. 아메리칸 오크 숙성(리오하 전통)에서는 코코넛·바닐라, 프렌치 오크에서는 가죽·흙향·시가가 발전합니다. 산도와 당분이 낮아 블렌딩 파트너로도 활용되며, 크리안자-레세르바-그란 레세르바 등급으로 숙성 기간이 분류됩니다.',
    flavorTags: ['딸기', '자두', '담배', '바닐라', '가죽'],
    items: ['이베리코 하몽', '만체고 치즈', '양고기구이', '초리소', '올리브'],
    pairingNote: '템프라니요의 균형잡힌 탄닌과 아메리칸 오크의 바닐라 향은 이베리코 하몽·만체고 치즈 등 스페인 식재료와 함께할 때 가장 스페인다운 마리아주를 완성합니다.',
  },
];

// ── Food image prompts for Pollinations AI ────────────────────────────────
const foodPrompts = {
  // 한식 안주
  '오이소박이':'Korean cucumber kimchi oisobaegi, spicy stuffed cucumber side dish, Korean food photography',
  '파전':'Korean green onion pancake pajeon, crispy golden, cast iron pan, food photography',
  '문어숙회':'Korean blanched octopus slices with sesame dipping sauce, seafood platter, food photography',
  '삼겹살':'Korean BBQ grilled pork belly samgyeopsal sizzling on charcoal grill, close-up food photography',
  '목살구이':'Korean grilled pork neck slice moksal on charcoal grill, golden char marks, food photography',
  '닭발':'Korean spicy braised chicken feet dakbal in deep red sauce, food photography',
  '보쌈':'Korean boiled pork belly bossam slices with napa cabbage wraps and shrimp paste, food photography',
  '족발':'Korean braised pig trotters jokbal, glossy soy glaze, thinly sliced, food photography',
  '순대국':'Korean blood sausage soup sundaeguk, clear broth with offal and vegetables in stone bowl, food photography',
  '감자탕':'Korean pork spine potato soup gamjatang, spicy red broth with potatoes, food photography',
  '해장국':'Korean hangover soup haejangguk, spicy beef bone broth with vegetables and rice, food photography',
  '순대국밥':'Korean sundae rice soup, blood sausage and rice in savory broth, food photography',
  '김치전':'Korean kimchi pancake kimchijeon, crispy golden edges, sliced, served with dipping sauce, food photography',
  '도토리묵':'Korean acorn jelly doktorimuk, silky dark grey slices with soy sesame sauce, food photography',
  '굴전':'Korean oyster pancake guljeon, fresh oysters in golden egg batter, food photography',
  '대구탕':'Korean codfish soup daegutang, whole cod in clear mild broth with vegetables, food photography',
  '육개장':'Korean spicy shredded beef soup yukgaejang, deep red broth with fern vegetables, food photography',
  '어묵탕':'Korean fish cake soup odeng tang, skewered fish cakes in clear dashi broth, food photography',
  '오이무침':'Korean cucumber salad oimuchim with sesame oil and chili, refreshing cold side dish, food photography',
  '미나리전':'Korean water parsley pancake minari jeon, thin crispy herb pancake, food photography',
  '열무김chi':'Korean young radish kimchi yeolmukimchi, fresh vibrant green, food photography',
  '열무김치':'Korean young radish kimchi yeolmukimchi, fresh vibrant green, food photography',
  '빈대떡':'Korean mung bean pancake bindaetteok, thick golden crispy, food photography',
  '해물파전':'Korean seafood green onion pancake haemul pajeon, shrimp squid, golden crispy, food photography',
  '도토리묵무침':'Korean acorn jelly salad dotori muk muchim, sesame sauce and green onions, food photography',
  '동동주전':'Korean rice wine pancake, crispy savory, food photography',
  '장떡':'Korean doenjang miso pancake jangteok, crispy pan-fried, food photography',
  '감자전':'Korean potato pancake gamjajeon, crispy shredded potato, food photography',
  '수육':'Korean boiled pork belly slices suyuk, tender white, with kimchi and garlic, food photography',
  '편육':'Korean chilled sliced pork pyeonyuk, thin cold cuts with mustard sauce, food photography',
  '닭볶음탕':'Korean spicy braised chicken dakbokkumtang, red sauce with potatoes and carrots, food photography',
  '생굴':'fresh raw oysters on half shell on crushed ice, seaside food photography',
  '연포탕':'Korean octopus soup yeonpotang, whole octopus in clear broth, food photography',
  '배추전':'Korean napa cabbage pancake baechu jeon, thin green pancake, food photography',
  '고추전':'Korean stuffed pepper pancake gochu jeon, egg-battered green peppers, food photography',
  '굴보쌈':'Korean oyster bossam, boiled pork with fresh oysters and cabbage, food photography',
  '생선구이':'Korean whole grilled salted fish, crispy golden skin, food photography',
  '두부조림':'Korean braised spicy tofu dubu jorim, golden pan-fried tofu in red sauce, food photography',
  '묵무침':'Korean jelly salad muk muchim, seasoned with sesame, food photography',
  '두부김치':'Korean stir-fried kimchi with pan-fried tofu, food photography',
  '계란말이':'Korean rolled egg omelette gyeranmari, golden yellow roll sliced, food photography',
  '김치찌개':'Korean kimchi stew kimchi jjigae with pork and tofu in stone pot, food photography',
  '제육볶음':'Korean spicy stir-fried pork jeyuk bokkeum, red sauce with vegetables, food photography',
  '홍어무침':'Korean fermented skate salad with pork and kimchi, food photography',
  '꼴뚜기볶음':'Korean stir-fried small squid with spicy sauce, food photography',
  '새우젓 두부':'Korean tofu with fermented shrimp saeujeot, soft tofu with seasoning, food photography',
  '미역냉국':'Korean cold seaweed soup miyeok naengguk, chilled cucumber slices, food photography',
  '동태찌개':'Korean pollack stew dongtae jjigae, whole fish in red spicy broth, food photography',
  '돼지국밥':'Korean pork rice soup dwaeji gukbap, milky bone broth with pork slices, food photography',
  '닭볶음탕':'Korean braised spicy chicken dakbokkumtang, chunky red sauce, food photography',
  '회':'fresh Korean sashimi soe, thinly sliced raw fish assortment on ice plate, food photography',
  '조개구이':'Korean grilled clams on half shell with butter, food photography',
  '야키토리':'Japanese grilled chicken skewers yakitori with tare sauce, food photography',
  '가라아게':'Japanese crispy fried chicken karaage, golden nuggets with lemon, food photography',
  '교자':'Japanese pan-fried gyoza dumplings, crispy bottom, food photography',
  // 서양 안주
  '치킨':'crispy golden Korean fried chicken, juicy, food photography',
  '감자튀김':'golden crispy french fries in basket, food photography',
  '나초':'nachos with melted cheese, jalapeños and guacamole, food photography',
  '소시지구이':'grilled bratwurst sausages on plate with mustard, food photography',
  '팝콘':'popcorn in striped bucket, food photography',
  '소시지':'grilled sausages with herbs on wooden board, food photography',
  '치즈버거':'classic cheeseburger with melted cheddar, lettuce, tomato, sesame bun, food photography',
  '콘도그':'corn dog on stick with ketchup and mustard, food photography',
  '바베큐 립':'BBQ pork ribs with smoky glaze, charred, food photography',
  '옥수수구이':'grilled corn on the cob with butter and herbs, food photography',
  '피자':'Neapolitan pizza margherita with melted mozzarella and basil, food photography',
  '어니언링':'crispy golden onion rings with dipping sauce, food photography',
  '핫도그':'hot dog in bun with mustard relish, food photography',
  '새우튀김':'crispy tempura shrimp, golden batter, food photography',
  '치즈 플레이터':'artisan cheese board with brie cheddar blue cheese, grapes, crackers and honey, food photography',
  '스테이크':'grilled ribeye steak medium-rare with herb butter, food photography',
  '버섯볶음':'sautéed mixed mushrooms with garlic and herbs in pan, food photography',
  '핫윙':'crispy buffalo chicken wings with hot sauce, food photography',
  '감자퓨레':'creamy mashed potato with butter, food photography',
  '프레첼':'soft pretzel with coarse salt and beer mustard, food photography',
  '치즈스틱':'crispy fried mozzarella sticks with marinara dipping sauce, food photography',
  '트러플 팝콘':'gourmet truffle parmesan popcorn in bowl, food photography',
  '스모크 소시지':'smoked sausages sliced on cutting board, food photography',
  '견과류':'mixed nuts assortment walnuts almonds cashews in wooden bowl, food photography',
  '카프레제':'caprese salad fresh mozzarella, ripe tomato slices, fresh basil leaves, olive oil drizzle, food photography',
  '그린샐러드':'fresh mixed green salad with vinaigrette, food photography',
  '새우칵테일':'shrimp cocktail on ice with cocktail sauce, food photography',
  '쉬림프 칵테일':'shrimp cocktail on ice with cocktail sauce, food photography',
  '훈제연어':'smoked salmon slices with capers lemon and cream cheese, food photography',
  '냉파스타':'cold pasta salad with vegetables and herbs, food photography',
  '바게트':'rustic French baguette sliced with butter, food photography',
  '올리브':'marinated green and black olives in olive oil bowl, food photography',
  '포도':'fresh purple and green grapes cluster on vine, food photography',
  '리조또':'creamy mushroom risotto with parmesan shavings, Italian food photography',
  '버섯요리':'sautéed gourmet mushrooms with thyme and garlic, food photography',
  '치즈파스타':'creamy cheese pasta fettuccine alfredo, food photography',
  '그라탕':'golden baked potato gratin with cream and cheese crust, food photography',
  '양고기구이':'grilled lamb chops with rosemary and garlic, food photography',
  '소꼬리찜':'braised oxtail in rich dark sauce, food photography',
  '치즈퐁뒤':'Swiss cheese fondue in pot with bread cubes for dipping, food photography',
  '뮬드와인':'mulled wine with cinnamon sticks orange and spices, warm winter drink, food photography',
  '브루스케타':'bruschetta with diced tomatoes fresh basil on toasted baguette, food photography',
  '홍합찜':'moules marinières steamed mussels in white wine broth, food photography',
  '오리 콩피':'duck confit with crispy golden skin on plate, French food photography',
  '뇨키':'homemade potato gnocchi with tomato sauce and basil, food photography',
  '트러플 리조또':'black truffle risotto with parmesan, gourmet food photography',
  '라클렛':'raclette melted cheese poured over boiled potatoes, Swiss food photography',
  '크루통 수프':'French onion soup gratinée with croutons and melted gruyere, food photography',
  '빵과 버터':'artisan sourdough bread with cultured butter, food photography',
  '훈제 치즈':'smoked gouda cheese on wooden board with crackers, food photography',
  '살라미':'salami charcuterie slices with cornichons, food photography',
  '다크 초콜릿':'dark chocolate squares with cocoa powder dusting, food photography',
  '체다 치즈':'aged cheddar cheese wedge with crackers, food photography',
  '크래커':'artisan crackers assortment, food photography',
  '블루치즈':'blue cheese crumbled with honey walnuts on board, food photography',
  '호두':'cracked walnuts in bowl with shell halves, food photography',
  '피클':'assorted pickles in jar with dill, food photography',
  '하몽':'Spanish jamón ibérico thin slices on white plate, food photography',
  '핫토디':'hot toddy cocktail with lemon honey cinnamon and whiskey, food photography',
  '삶은 달걀':'soft boiled egg halved showing runny yolk, food photography',
  '훈제 소시지':'smoked sausage sliced with mustard on wooden board, food photography',
  '구운 감자':'baked potato with sour cream and chives, food photography',
  '치즈스프':'creamy cheese soup in bowl with croutons, food photography',
  '블랙 올리브':'black Kalamata olives in white bowl with olive oil, food photography',
  '파테':'smooth chicken liver pâté with cornichons and baguette slices, food photography',
  '무화과잼':'fig jam in glass jar with fresh figs, food photography',
  '캐러멜 팝콘':'caramel popcorn in rustic box, glossy candied, food photography',
  '트러플 치즈':'truffle-infused cheese on slate board, gourmet food photography',
  '견과류 믹스':'premium mixed nuts assortment in bowl, food photography',
  '훈제 굴':'smoked oysters on half shell with lemon, food photography',
  '꿀':'amber honey dripping from wooden dipper, food photography',
  '과일 플레이터':'fresh fruit platter with strawberries grapes melon kiwi, food photography',
  '아보카도 딥':'fresh guacamole with tortilla chips and lime, food photography',
  '콜드 타파스':'Spanish tapas assortment cold platter, food photography',
  '카나페':'elegant canapés assorted party appetizers on serving platter, food photography',
  '미니 브루스케타':'mini bruschetta with tomato basil on toasted rounds, food photography',
  '바질 카프레제':'caprese salad with basil and mozzarella, balsamic glaze, food photography',
  '피타 칩':'crispy pita chips with hummus dip, food photography',
  '후무스':'smooth hummus with olive oil and paprika, food photography',
  '올리브 핑거푸드':'assorted olive and antipasti finger foods, food photography',
  '미니 타코':'mini street tacos with salsa and cilantro, food photography',
  '스프링롤':'crispy Vietnamese spring rolls with dipping sauce, food photography',
  '에다마메':'steamed edamame pods with sea salt, food photography',
  '핫 바질 스프':'hot creamy basil soup with cream swirl, food photography',
  '브리 치즈 구이':'baked brie cheese with honey walnuts and rosemary, food photography',
  '미트볼':'Italian meatballs in tomato sauce with basil, food photography',
  '브레드 볼 수프':'bread bowl filled with creamy soup, food photography',
  '피자 슬라이스':'single pizza slice with melted cheese and pepperoni, food photography',
  '치즈 딥 & 칩스':'warm cheese dip with tortilla chips, food photography',
  '쿠키':'assorted fresh-baked cookies on parchment, food photography',
  '초콜릿':'chocolate assortment pieces, food photography',
  '초콜릿 퐁뒤':'chocolate fondue pot with strawberries marshmallows for dipping, food photography',
  '마시멜로':'toasted golden marshmallows on skewers, food photography',
  '크림 치즈 딥':'whipped cream cheese dip with herbs on plate, food photography',
  '생강쿠키':'gingerbread cookies decorated, food photography',
  // 드링크 전용 안주
  '꿀 리코타 크로스티니':'ricotta crostini with honey and walnuts on toast, food photography',
  '말린 무화과':'dried figs halved on wooden board, food photography',
  '말린 자두':'dried prunes in bowl, food photography',
  '살구 타르트':'apricot tart with pastry cream, food photography',
  '연어 타르타르':'salmon tartare with avocado and capers, food photography',
  '카망베르 치즈':'camembert cheese wheel with baked crust, food photography',
  '사과 크럼블':'apple crumble with golden oat topping and vanilla ice cream, food photography',
  '구운 아몬드':'roasted almonds with rosemary and sea salt in bowl, food photography',
  '훈제 고등어':'Korean smoked mackerel fillet, food photography',
  '소금 크래커':'thin salted crackers on plate, food photography',
  '미소된장 수프':'Japanese miso soup with tofu and wakame in wooden bowl, food photography',
  '캐비어':'black caviar on blini with crème fraîche, gourmet food photography',
  '다크 초콜릿 트러플':'dark chocolate truffles with cocoa powder, food photography',
  '파르미지아노':'Parmigiano-Reggiano aged cheese block with grater, food photography',
  '바베큐 폭립':'BBQ pork spare ribs with sticky smoky glaze, food photography',
  '맥앤치즈':'macaroni and cheese baked golden crust, comfort food photography',
  '체다버거':'smashed burger with melted cheddar and caramelized onions, food photography',
  '피칸 파이':'pecan pie slice with golden filling, food photography',
  '피칸':'whole pecans in bowl, food photography',
  '구운 복숭아':'grilled peach halves with honey and thyme, food photography',
  '프루트 타르트':'French fruit tart with pastry cream and berries, food photography',
  '훈제 체다치즈':'smoked cheddar cheese wedge on board, food photography',
  '연어 니기리':'salmon nigiri sushi on wooden board, food photography',
  '가리비 구이':'pan-seared scallops with butter and herbs, food photography',
  '화이트 초콜릿 트러플':'white chocolate truffles with coconut, food photography',
  '우메보시':'Japanese pickled plum umeboshi in bowl, food photography',
  '고르곤졸라':'gorgonzola blue cheese crumbled on plate, food photography',
  '버터구이 가리비':'butter-basted scallops seared golden, food photography',
  '유자 소르베':'yuzu citrus sorbet in glass, food photography',
  '아이리시 스튜':'Irish lamb stew with root vegetables, hearty food photography',
  '브라운 브레드':'Irish brown soda bread rustic loaf, food photography',
  '뱅어즈앤매쉬':'British bangers and mash with onion gravy, food photography',
  '크림파스타':'creamy fettuccine pasta with parmesan, food photography',
  '버터구이 새우':'butter-basted shrimp with garlic and herbs, food photography',
  '오리가슴살':'duck breast sliced showing pink interior with crispy skin, food photography',
  '포르치니 버섯':'porcini mushrooms sautéed with butter and thyme, food photography',
  '토마토 파스타':'spaghetti pomodoro with fresh tomato sauce and basil, food photography',
  '봉골레 파스타':'spaghetti alle vongole clam pasta in white wine sauce, food photography',
  '안티파스토':'Italian antipasto platter with cured meats olives and cheeses, food photography',
  '푸아그라':'foie gras terrine with brioche toast and fig jam, food photography',
  '이베리코 하몽':'Ibérico ham thin slices on plate, Spanish food photography',
  '만체고 치즈':'manchego cheese sliced with quince paste membrillo, food photography',
  '초리소':'sliced chorizo with olives, Spanish food photography',
  '로스트 치킨':'golden roast chicken with herbs and vegetables, food photography',
  '버섯 크림 수프':'creamy mushroom soup in white bowl with cream swirl, food photography',
  '염소 치즈':'fresh chèvre goat cheese with herbs and honey, food photography',
  '연어구이':'grilled salmon fillet with lemon herb butter, food photography',
  '허브 구이':'herb-crusted roasted meat with rosemary thyme, food photography',
  '생선구이':'Korean whole grilled fish with crispy golden skin, food photography',
};

const foodFallbackEmoji = {
  '삼겹살':'🥩','목살구이':'🥩','닭발':'🍗','두부김치':'🥬','계란말이':'🥚',
  '보쌈':'🥩','족발':'🦵','순대국':'🍲','제육볶음':'🌶️','김치찌개':'🍲',
  '감자탕':'🍲','해장국':'🍲','동태찌개':'🐟','돼지국밥':'🍲',
  '파전':'🥞','오이소박이':'🥒','문어숙회':'🐙','미역냉국':'🌿',
  '김치전':'🥞','도토리묵':'🟫','꼴뚜기볶음':'🦑','굴전':'🦪',
  '대구탕':'🐟','육개장':'🍲','어묵탕':'🍢','홍어무침':'🐟',
  '치킨':'🍗','감자튀김':'🍟','나초':'🌮','소시지구이':'🌭','팝콘':'🍿',
  '소시지':'🌭','치즈버거':'🍔','콘도그':'🌭','바베큐 립':'🍖','옥수수구이':'🌽',
  '피자':'🍕','어니언링':'🧅','핫도그':'🌭','새우튀김':'🍤',
  '치즈 플레이터':'🧀','스테이크':'🥩','버섯볶음':'🍄','핫윙':'🍗',
  '프레첼':'🥨','치즈스틱':'🧀','트러플 팝콘':'🍿','견과류':'🥜',
  '카프레제':'🍅','그린샐러드':'🥗','새우칵테일':'🍤','훈제연어':'🐟',
  '바게트':'🥖','올리브':'🫒','포도':'🍇','리조또':'🍚','홍합찜':'🦪',
  '뮬드와인':'🍷','치즈퐁뒤':'🧀','양고기구이':'🥩','브루스케타':'🍞',
  '다크 초콜릿':'🍫','블루치즈':'🧀','호두':'🥜','피클':'🥒','하몽':'🥓',
  '꿀':'🍯','훈제 굴':'🦪','캐러멜 팝콘':'🍿','무화과잼':'🫙',
  '과일 플레이터':'🍓','아보카도 딥':'🥑','미니 타코':'🌮','스프링롤':'🥢',
  '에다마메':'🫛','초콜릿 퐁뒤':'🍫','마시멜로':'🍬','생강쿠키':'🍪',
  '꿀 리코타 크로스티니':'🍯','말린 무화과':'🌰','말린 자두':'🍑',
  '살구 타르트':'🥧','연어 타르타르':'🐟','카망베르 치즈':'🧀',
  '사과 크럼블':'🍎','구운 아몬드':'🥜','훈제 고등어':'🐟',
  '소금 크래커':'🫓','미소된장 수프':'🍜','캐비어':'🫧',
  '다크 초콜릿 트러플':'🍫','파르미지아노':'🧀','바베큐 폭립':'🍖',
  '맥앤치즈':'🧀','체다버거':'🍔','피칸 파이':'🥧','피칸':'🥜',
  '구운 복숭아':'🍑','프루트 타르트':'🥧','훈제 체다치즈':'🧀',
  '연어 니기리':'🍣','가리비 구이':'🦪','화이트 초콜릿 트러플':'🍫',
  '우메보시':'🫐','고르곤졸라':'🧀','버터구이 가리비':'🦪','유자 소르베':'🍋',
  '아이리시 스튜':'🍲','브라운 브레드':'🍞','뱅어즈앤매쉬':'🌭',
  '야키토리':'🍡','가라아게':'🍗','교자':'🥟','조개구이':'🐚',
  '회':'🐟','크림파스타':'🍝','버터구이 새우':'🍤','오리가슴살':'🦆',
  '포르치니 버섯':'🍄',
  '토마토 파스타':'🍝','봉골레 파스타':'🍝',
  '안티파스토':'🫒','푸아그라':'🍽️',
  '이베리코 하몽':'🥓','만체고 치즈':'🧀','초리소':'🌭',
  '로스트 치킨':'🍗','버섯 크림 수프':'🍄',
  '염소 치즈':'🧀','연어구이':'🐟',
  '허브 구이':'🌿','생선구이':'🐟',
};

// ── Helpers ───────────────────────────────────────────────────────────────
function hashStr(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  return (Math.abs(h) % 9000) + 1000;
}

function foodImgUrl(name) {
  const prompt = foodPrompts[name] || `${name}, appetizing food photography, close-up, professional`;
  const seed = hashStr(name);
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=400&height=533&seed=${seed}&model=turbo`;
}

function makeFoodCard(name) {
  const emoji = foodFallbackEmoji[name] || '🍽️';
  const card = document.createElement('div');
  card.className = 'food-card';
  card.innerHTML = `
    <div class="food-card-img-wrap">
      <div class="food-card-skeleton"></div>
      <div class="food-card-fallback">${emoji}</div>
      <img src="${foodImgUrl(name)}" alt="${name}" class="loading"/>
    </div>
    <div class="food-card-label">${name}</div>`;
  const img = card.querySelector('img');
  const skeleton = card.querySelector('.food-card-skeleton');
  const fallback = card.querySelector('.food-card-fallback');
  let retried = false;
  img.addEventListener('load', () => {
    img.classList.remove('loading');
    skeleton.style.display = 'none';
  });
  img.addEventListener('error', () => {
    if (!retried) {
      retried = true;
      setTimeout(() => { img.src = foodImgUrl(name) + '&r=1'; }, 2000);
    } else {
      img.style.display = 'none';
      skeleton.style.display = 'none';
      fallback.style.display = 'flex';
    }
  });
  return card;
}

// ── findDrink ─────────────────────────────────────────────────────────────
function findDrink(input) {
  const q = input.trim().toLowerCase();
  if (!q) return null;
  return drinkDatabase.find(d => d.aliases.some(a => q.includes(a.toLowerCase()) || a.toLowerCase().includes(q))) || null;
}

// ── Keyword fallback classify ─────────────────────────────────────────────
const drinkKeywords = {
  soju:      ['소주','진로','참이슬','처음처럼','새로','한라산','화요','이슬톡톡','청하','좋은데이'],
  beer:      ['맥주','카스','테라','한맥','하이네켄','기네스','아사히','삿포로','칭따오','호가든','버드와이저','코로나','에일','ipa','라거','스타우트','밀맥주','흑맥주','캔맥'],
  makgeolli: ['막걸리','동동주','탁주','생막걸리','느린마을','지평','복순도가','서울장수'],
  wine:      ['와인','샤도네이','샤르도네','카베르네','피노누아','소비뇽','소비뇽블랑','소비뇽 블랑','리슬링','모스카토','아스티','샴페인','프로세코','로제','보르도','부르고뉴','말벡','시라','쉬라즈','뱅쇼','스파클링','메를로','산지오베제','키안티','브루넬로','네비올로','바롤로','바르바레스코','템프라니요','리오하','리베라','피노그리지오','피노그리','게뷔르츠트라미너','게뷔르츠','알자스','피에몬테','토스카나'],
  whiskey:   ['위스키','위스꺼','발베니','조니워커','잭다니엘','글렌피딕','맥캘란','글렌리벳','라프로익','달모어','아벨라워','탈리스커','버팔로트레이스','메이커스마크','짐빔','야마자키','히비키','발렌타인','시바스리갈','스카치','버번','싱글몰트','블렌디드','라가불린','글렌모렌지','아드벡'],
  cocktail:  ['칵테일','모히또','마가리타','코스모폴리탄','네그로니','올드패션드','맨하탄','다이키리','진토닉','보드카','럼','테킬라','압생트','아페롤','캄파리'],
};
const categoryLabel = { soju:'소주 계열', beer:'맥주 계열', makgeolli:'막걸리 계열', wine:'와인 계열', whiskey:'위스키 계열', cocktail:'칵테일 계열' };

function classifyDrink(input) {
  const q = input.trim().toLowerCase();
  if (!q) return null;
  for (const [cat, kws] of Object.entries(drinkKeywords)) {
    if (kws.some(k => q.includes(k.toLowerCase()) || k.toLowerCase().includes(q))) return cat;
  }
  return null;
}

// ── Drink info panel ──────────────────────────────────────────────────────
let currentTab = 'history';

function showDrinkInfo(drink) {
  document.getElementById('di-flag').textContent     = drink.flag;
  document.getElementById('di-fullname').textContent = drink.fullName;
  document.getElementById('di-badge').textContent    = drink.badge;
  document.getElementById('di-abv').textContent      = 'ABV ' + drink.abv;
  document.getElementById('di-history').textContent  = drink.history;
  document.getElementById('di-chars').textContent    = drink.characteristics;

  const tags = document.getElementById('di-flavor-tags');
  tags.innerHTML = drink.flavorTags.map(t => `<span class="flavor-tag">${t}</span>`).join('');

  const list = document.getElementById('di-pairing-list');
  list.innerHTML = drink.items.map(i => `<span class="pairing-item">${i}</span>`).join('');
  document.getElementById('di-pairing-note').textContent = drink.pairingNote;

  switchTab('history');
  document.getElementById('drink-info').classList.add('visible');
}

function hideDrinkInfo() {
  document.getElementById('drink-info').classList.remove('visible');
}

function switchTab(tab) {
  currentTab = tab;
  ['history','chars','pairing'].forEach(t => {
    document.getElementById('di-' + t).classList.toggle('hidden', t !== tab);
    document.querySelector(`.di-tab[data-tab="${t}"]`).classList.toggle('active', t === tab);
  });
}

// ── Input listener ────────────────────────────────────────────────────────
document.getElementById('drink-input').addEventListener('input', function () {
  const hint = document.getElementById('drink-category-hint');
  const msg  = document.getElementById('unrecognized-msg');
  msg.classList.add('hidden');

  const val  = this.value.trim();
  const drink = findDrink(val);

  if (drink) {
    hint.textContent = drink.fullName + ' · ' + drink.badge;
    hint.classList.remove('hidden');
    showDrinkInfo(drink);
  } else {
    hideDrinkInfo();
    const cat = classifyDrink(val);
    if (val && cat) {
      hint.textContent = categoryLabel[cat] + '로 인식했어요';
      hint.classList.remove('hidden');
    } else {
      hint.classList.add('hidden');
    }
  }
});

// ── recommend ─────────────────────────────────────────────────────────────
const weatherMood = {
  hot:   n => `${n}과(와) 함께하는 여름밤`,
  warm:  n => `${n}에 어울리는 따뜻한 저녁`,
  cool:  n => `${n}과(와) 선선한 가을 저녁`,
  cold:  n => `${n}과(와) 함께하는 겨울밤`,
  rainy: n => `${n}과(와) 빗소리 내리는 밤`,
  snowy: n => `${n}과(와) 눈 내리는 조용한 밤`,
};

function recommend() {
  const drinkInput = document.getElementById('drink-input').value.trim();
  const weather    = document.getElementById('weather-select').value;
  const msg        = document.getElementById('unrecognized-msg');
  msg.classList.add('hidden');

  if (!drinkInput) { document.getElementById('drink-input').focus(); return; }
  if (!weather) { alert('날씨를 선택해주세요!'); return; }

  const drink    = findDrink(drinkInput);
  const category = drink ? drink.category : classifyDrink(drinkInput);

  if (!category) {
    msg.textContent = `"${drinkInput}"은(는) 아직 인식하지 못했어요. 술 이름을 더 구체적으로 입력해보세요.`;
    msg.classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    return;
  }

  const ctx   = weatherCtx[category][weather];
  const fallbackItems = {
    soju:      { hot:['오이소박이','파전','문어숙회'], warm:['삼겹살','목살구이','닭발'], cool:['보쌈','족발','순대국'], cold:['감자탕','해장국','순대국밥'], rainy:['김치전','파전','도토리묵'], snowy:['굴전','대구탕','육개장'] },
    beer:      { hot:['치킨','감자튀김','나초'], warm:['소시지','치즈버거','콘도그'], cool:['피자','치킨','어니언링'], cold:['치즈 플레이터','스테이크','버섯볶음'], rainy:['치킨','피자','감자튀김'], snowy:['프레첼','치즈스틱','트러플 팝콘'] },
    makgeolli: { hot:['오이무침','미나리전','열무김치'], warm:['빈대떡','해물파전','도토리묵무침'], cool:['김치전','파전','감자전'], cold:['수육','편육','닭볶음탕'], rainy:['해물파전','감자전','배추전'], snowy:['굴보쌈','생선구이','두부조림'] },
    wine:      { hot:['카프레제','그린샐러드','새우칵테일'], warm:['치즈 플레이터','바게트','올리브'], cool:['스테이크','리조또','버섯요리'], cold:['양고기구이','소꼬리찜','치즈퐁뒤'], rainy:['치즈퐁뒤','홍합찜','오리 콩피'], snowy:['라클렛','크루통 수프','빵과 버터'] },
    whiskey:   { hot:['올리브','견과류','훈제 치즈'], warm:['스테이크','훈제연어','소시지'], cool:['다크 초콜릿','블루치즈','호두'], cold:['핫토디','삶은 달걀','훈제 소시지'], rainy:['생굴','훈제연어','블랙 올리브'], snowy:['캐러멜 팝콘','트러플 치즈','견과류 믹스'] },
    cocktail:  { hot:['과일 플레이터','쉬림프 칵테일','아보카도 딥'], warm:['카나페','미니 브루스케타','바질 카프레제'], cool:['올리브 핑거푸드','치즈 플레이터','미니 타코'], cold:['핫 바질 스프','브리 치즈 구이','미트볼'], rainy:['피자 슬라이스','치즈 딥 & 칩스','쿠키'], snowy:['초콜릿 퐁뒤','마시멜로','크림 치즈 딥'] },
  };
  const items = fallbackItems[category][weather];

  const title = drink ? weatherMood[weather](drink.fullName) : `${categoryLabel[category]}에 어울리는 안주`;
  const tip   = drink ? drink.pairingNote : ctx.tip;

  document.getElementById('result-emoji').textContent = ctx.emoji;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-desc').textContent  = ctx.desc;
  document.getElementById('result-tip').textContent   = '💡 ' + tip;

  const itemsEl = document.getElementById('result-items');
  itemsEl.innerHTML = '';
  items.forEach(n => itemsEl.appendChild(makeFoodCard(n)));

  const resultBox = document.getElementById('result');
  resultBox.classList.remove('hidden');
  resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
