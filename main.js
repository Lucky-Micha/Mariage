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
    history: '프랑스 부르고뉴가 원산지인 세계에서 가장 많이 재배되는 화이트 와인 품종입니다. 오크 숙성 여부에 따라 버터리한 스타일부터 미네랄하고 날카로운 스타일까지 다양하게 만들어집니다.',
    characteristics: '사과·레몬·배의 신선한 과일 향에 오크 숙성을 거치면 버터·토스트·바닐라의 풍미가 더해집니다. 미디엄~풀바디로 다양한 스타일이 존재하며 적절한 산도가 음식과 잘 어울립니다.',
    flavorTags: ['사과', '레몬', '버터', '바닐라', '오크'],
    items: ['크림파스타', '버터구이 새우', '훈제연어', '브리 치즈 구이', '리조또'],
    pairingNote: '샤도네이의 버터리한 풍미와 적절한 산도는 크리미한 소스 요리와 버터 풍미 해산물과 완벽히 어울립니다.',
  },
  {
    key: '피노누아',
    aliases: ['피노누아', '피노 누아', 'pinot noir'],
    category: 'wine',
    fullName: 'Pinot Noir',
    badge: '레드 와인 · 부르고뉴 원산',
    abv: '12~14%', flag: '🍾',
    history: '프랑스 부르고뉴가 원산지인 가장 재배하기 까다로운 품종입니다. 제대로 만들어졌을 때 타의 추종을 불허하는 복합미를 보여주며, 부르고뉴 최고가 와인들이 모두 이 품종으로 만들어집니다.',
    characteristics: '체리·딸기·라즈베리의 붉은 과일 향과 흙향·버섯의 어스시한 뉘앙스가 특징입니다. 탄닌이 부드럽고 실크처럼 매끄러운 질감으로, 레드 와인 중 가장 우아한 스타일입니다.',
    flavorTags: ['체리', '딸기', '흙향', '실크 탄닌', '우아함'],
    items: ['오리가슴살', '연어 타르타르', '버섯요리', '카망베르 치즈', '리조또'],
    pairingNote: '피노누아의 우아한 과일 풍미와 부드러운 탄닌은 오리·연어·버섯 등 섬세한 식재료와 이상적으로 어울립니다.',
  },
  {
    key: '카베르네 소비뇽',
    aliases: ['카베르네 소비뇽', '카베르네', 'cabernet sauvignon', 'cab sav'],
    category: 'wine',
    fullName: 'Cabernet Sauvignon',
    badge: '레드 와인 · 보르도 원산',
    abv: '13~15%', flag: '🍾',
    history: '프랑스 보르도가 원산지인 세계에서 가장 많이 재배되는 레드 와인 품종입니다. 카베르네 프랑과 소비뇽 블랑의 자연 교배로 탄생했으며, 장기 숙성력이 뛰어난 풀바디 와인을 만들어냅니다.',
    characteristics: '블랙커런트·블랙베리의 진한 과일 향에 삼나무·담배·가죽의 복합적인 뉘앙스가 더해집니다. 강한 탄닌과 높은 산도로 장기 숙성이 가능하며, 풀바디의 묵직한 와인입니다.',
    flavorTags: ['블랙커런트', '삼나무', '강한 탄닌', '풀바디', '장기 숙성'],
    items: ['스테이크', '양고기구이', '블루치즈', '포르치니 버섯', '하몽'],
    pairingNote: '카베르네 소비뇽의 강한 탄닌과 풀바디는 붉은 육류의 단백질과 결합해 풍미를 극대화합니다.',
  },
];

// ── Food image keywords & fallback emoji ─────────────────────────────────
const foodImageKeywords = {
  '오이소박이':'cucumber,kimchi', '파전':'korean,scallion-pancake',
  '문어숙회':'octopus,seafood', '새우젓 두부':'tofu,korean', '미역냉국':'seaweed,soup',
  '삼겹살':'pork-belly,grilled', '목살구이':'grilled-pork,bbq', '닭발':'chicken,spicy',
  '두부김치':'kimchi,tofu', '계란말이':'egg-roll,korean', '보쌈':'boiled-pork,korean',
  '족발':'braised-pork,korean', '순대국':'korean,soup', '제육볶음':'spicy-pork,stir-fry',
  '김치찌개':'kimchi-stew,korean', '감자탕':'pork-bone,soup', '해장국':'hangover-soup,korean',
  '순대국밥':'korean-sausage,soup', '동태찌개':'fish-stew,korean', '돼지국밥':'pork-soup,korean',
  '김치전':'kimchi-pancake,korean', '도토리묵':'jelly,korean-food', '꼴뚜기볶음':'squid,spicy',
  '굴전':'oyster,korean-pancake', '대구탕':'fish,soup', '육개장':'beef,spicy-soup',
  '어묵탕':'fish-cake,soup', '홍어무침':'fermented-fish,korean',
  '치킨':'fried-chicken,crispy', '감자튀김':'french-fries,crispy', '나초':'nachos,chips',
  '소시지구이':'grilled-sausage', '팝콘':'popcorn,snack', '소시지':'sausage,beer',
  '치즈버거':'cheeseburger,food', '콘도그':'corn-dog,street-food', '바베큐 립':'bbq-ribs,grilled',
  '옥수수구이':'grilled-corn,street', '피자':'pizza,food', '어니언링':'onion-rings,fried',
  '핫도그':'hot-dog,food', '새우튀김':'fried-shrimp,tempura',
  '치즈 플레이터':'cheese-board,platter', '스테이크':'steak,grilled',
  '버섯볶음':'mushroom,stir-fry', '핫윙':'chicken-wings,spicy', '감자퓨레':'mashed-potato',
  '프레첼':'pretzel,snack', '치즈스틱':'mozzarella-sticks,fried',
  '트러플 팝콘':'popcorn,gourmet', '스모크 소시지':'smoked-sausage,meat', '견과류':'mixed-nuts,snack',
  '오이무침':'cucumber-salad,korean', '미나리전':'korean-pancake,herb',
  '열무김치':'radish-kimchi,korean', '콩국수':'soy-noodles,korean', '냉채':'cold-salad,korean',
  '빈대떡':'mung-bean-pancake,korean', '해물파전':'seafood-pancake,korean',
  '도토리묵무침':'acorn-jelly,korean', '동동주전':'rice-wine,korean-pancake',
  '장떡':'doenjang-pancake,korean', '감자전':'potato-pancake,korean',
  '녹두전':'mung-bean-pancake', '부추전':'chive-pancake,korean',
  '수육':'boiled-pork-slices,korean', '편육':'sliced-pork,korean',
  '닭볶음탕':'spicy-chicken-stew,korean', '생굴':'fresh-oyster,seafood',
  '연포탕':'octopus-soup,korean', '배추전':'cabbage-pancake,korean',
  '고추전':'pepper-pancake,korean', '굴보쌈':'oyster,pork',
  '생선구이':'grilled-fish,korean', '두부조림':'braised-tofu,korean', '묵무침':'jelly-salad,korean',
  '카프레제':'caprese-salad,tomato', '그린샐러드':'green-salad,fresh',
  '새우칵테일':'shrimp-cocktail,seafood', '훈제연어':'smoked-salmon',
  '냉파스타':'cold-pasta,italian', '바게트':'baguette,bread', '올리브':'olives,appetizer',
  '포도':'grapes,fruit', '리조또':'risotto,italian', '버섯요리':'mushroom-dish,gourmet',
  '치즈파스타':'cheese-pasta,creamy', '그라탕':'gratin,baked',
  '양고기구이':'lamb-chops,grilled', '소꼬리찜':'oxtail-stew,braised',
  '치즈퐁뒤':'cheese-fondue,melted', '뮬드와인':'mulled-wine,warm',
  '브루스케타':'bruschetta,italian', '홍합찜':'steamed-mussels,seafood',
  '오리 콩피':'duck-confit,french', '뇨키':'gnocchi,italian',
  '트러플 리조또':'truffle-risotto,gourmet', '라클렛':'raclette,cheese',
  '크루통 수프':'french-onion-soup', '빵과 버터':'bread-butter',
  '훈제 치즈':'smoked-cheese', '살라미':'salami,charcuterie',
  '다크 초콜릿':'dark-chocolate', '체다 치즈':'cheddar-cheese', '크래커':'crackers,cheese',
  '블루치즈':'blue-cheese', '호두':'walnuts,nuts', '피클':'pickles,jar',
  '하몽':'jamon,prosciutto', '핫토디':'hot-toddy,whiskey', '삶은 달걀':'boiled-eggs',
  '훈제 소시지':'smoked-sausage', '구운 감자':'baked-potato', '치즈스프':'cheese-soup',
  '블랙 올리브':'black-olives', '파테':'pate,charcuterie', '무화과잼':'fig-jam',
  '캐러멜 팝콘':'caramel-popcorn', '트러플 치즈':'truffle-cheese',
  '견과류 믹스':'mixed-nuts', '훈제 굴':'smoked-oysters', '꿀':'honey,jar',
  '과일 플레이터':'fruit-platter,colorful', '쉬림프 칵테일':'shrimp-cocktail',
  '아보카도 딥':'guacamole,avocado', '콜드 타파스':'tapas,spanish',
  '카나페':'canape,appetizer', '미니 브루스케타':'bruschetta,mini',
  '바질 카프레제':'caprese,basil', '피타 칩':'pita-chips,dip', '후무스':'hummus,chickpea',
  '올리브 핑거푸드':'olives,finger-food', '미니 타코':'mini-tacos,mexican',
  '스프링롤':'spring-rolls,asian', '에다마메':'edamame,soybean',
  '핫 바질 스프':'basil-soup,warm', '브리 치즈 구이':'baked-brie,cheese',
  '미트볼':'meatballs,italian', '브레드 볼 수프':'bread-bowl,soup',
  '피자 슬라이스':'pizza-slice', '치즈 딥 & 칩스':'cheese-dip,chips',
  '쿠키':'cookies,baked', '초콜릿':'chocolate,sweet', '초콜릿 퐁뒤':'chocolate-fondue',
  '마시멜로':'marshmallow,sweet', '크림 치즈 딥':'cream-cheese-dip', '생강쿠키':'gingerbread-cookie',
  // 술별 전용 안주
  '꿀 리코타 크로스티니':'ricotta,crostini,honey', '말린 무화과':'dried-figs,gourmet',
  '말린 자두':'dried-prunes,fruit', '살구 타르트':'apricot-tart,pastry',
  '연어 타르타르':'salmon-tartare,raw', '카망베르 치즈':'camembert,cheese',
  '사과 크럼블':'apple-crumble,dessert', '구운 아몬드':'roasted-almonds,nuts',
  '훈제 고등어':'smoked-mackerel,fish', '소금 크래커':'salt-crackers,snack',
  '미소된장 수프':'miso-soup,japanese', '캐비어':'caviar,gourmet',
  '다크 초콜릿 트러플':'chocolate-truffle,dark', '파르미지아노':'parmesan,cheese',
  '바베큐 폭립':'bbq-ribs,pork-ribs', '맥앤치즈':'mac-and-cheese,comfort',
  '체다버거':'cheeseburger,cheddar', '피칸 파이':'pecan-pie,dessert', '피칸':'pecans,nuts',
  '구운 복숭아':'grilled-peach,fruit', '프루트 타르트':'fruit-tart,pastry',
  '훈제 체다치즈':'smoked-cheddar,cheese', '연어 니기리':'salmon-sushi,nigiri',
  '가리비 구이':'grilled-scallops,seafood', '화이트 초콜릿 트러플':'white-chocolate-truffle',
  '우메보시':'pickled-plum,japanese', '고르곤졸라':'gorgonzola,blue-cheese',
  '버터구이 가리비':'scallop-butter,grilled', '유자 소르베':'yuzu-sorbet,citrus',
  '아이리시 스튜':'irish-stew,hearty', '브라운 브레드':'brown-bread,rustic',
  '뱅어즈앤매쉬':'sausage-mash,british', '야키토리':'yakitori,grilled-chicken',
  '가라아게':'karaage,fried-chicken', '교자':'gyoza,dumplings',
  '조개구이':'grilled-clams,seafood', '회':'sashimi,raw-fish',
  '크림파스타':'cream-pasta,italian', '버터구이 새우':'butter-shrimp,seafood',
  '오리가슴살':'duck-breast,french', '포르치니 버섯':'porcini,mushroom',
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
};

// ── Helpers ───────────────────────────────────────────────────────────────
function hashStr(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  return (Math.abs(h) % 9000) + 1000;
}

function foodImgUrl(name) {
  const kw = foodImageKeywords[name] || name.replace(/\s+/g, '-') + ',food';
  return `https://loremflickr.com/400/533/${encodeURIComponent(kw)}?lock=${hashStr(name)}`;
}

function makeFoodCard(name) {
  const emoji = foodFallbackEmoji[name] || '🍽️';
  const card = document.createElement('div');
  card.className = 'food-card';
  card.innerHTML = `
    <div class="food-card-img-wrap">
      <div class="food-card-skeleton"></div>
      <div class="food-card-fallback">${emoji}</div>
      <img src="${foodImgUrl(name)}" alt="${name}" class="loading" loading="lazy"/>
    </div>
    <div class="food-card-label">${name}</div>`;
  const img = card.querySelector('img');
  const skeleton = card.querySelector('.food-card-skeleton');
  const fallback = card.querySelector('.food-card-fallback');
  img.addEventListener('load', () => { img.classList.remove('loading'); skeleton.style.display = 'none'; });
  img.addEventListener('error', () => { img.style.display = 'none'; skeleton.style.display = 'none'; fallback.style.display = 'flex'; });
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
  wine:      ['와인','샤도네이','카베르네','피노누아','소비뇽','리슬링','모스카토','샴페인','프로세코','로제','보르도','부르고뉴','말벡','시라','뱅쇼','스파클링'],
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
    soju:      { hot:['오이소박이','파전','문어숙회','새우젓 두부','미역냉국'], warm:['삼겹살','목살구이','닭발','두부김치','계란말이'], cool:['보쌈','족발','순대국','제육볶음','김치찌개'], cold:['감자탕','해장국','순대국밥','동태찌개','돼지국밥'], rainy:['김치전','파전','도토리묵','꼴뚜기볶음','어묵탕'], snowy:['굴전','대구탕','육개장','어묵탕','홍어무침'] },
    beer:      { hot:['치킨','감자튀김','나초','소시지구이','팝콘'], warm:['소시지','치즈버거','콘도그','바베큐 립','옥수수구이'], cool:['피자','치킨','어니언링','핫도그','새우튀김'], cold:['치즈 플레이터','스테이크','버섯볶음','핫윙','감자퓨레'], rainy:['치킨','피자','감자튀김','어니언링','핫도그'], snowy:['프레첼','치즈스틱','트러플 팝콘','스모크 소시지','견과류'] },
    makgeolli: { hot:['오이무침','미나리전','열무김치','콩국수','냉채'], warm:['빈대떡','해물파전','도토리묵무침','동동주전','장떡'], cool:['김치전','파전','감자전','녹두전','부추전'], cold:['수육','편육','닭볶음탕','생굴','연포탕'], rainy:['해물파전','감자전','배추전','고추전','어묵탕'], snowy:['굴보쌈','생선구이','두부조림','묵무침','김치전'] },
    wine:      { hot:['카프레제','그린샐러드','새우칵테일','훈제연어','냉파스타'], warm:['치즈 플레이터','바게트','올리브','포도','견과류'], cool:['스테이크','리조또','버섯요리','치즈파스타','그라탕'], cold:['양고기구이','소꼬리찜','치즈퐁뒤','뮬드와인','브루스케타'], rainy:['치즈퐁뒤','홍합찜','오리 콩피','뇨키','트러플 리조또'], snowy:['라클렛','크루통 수프','빵과 버터','치즈 플레이터','견과류'] },
    whiskey:   { hot:['올리브','견과류','훈제 치즈','살라미','다크 초콜릿'], warm:['스테이크','훈제연어','소시지','체다 치즈','크래커'], cool:['다크 초콜릿','블루치즈','호두','피클','하몽'], cold:['핫토디','삶은 달걀','훈제 소시지','구운 감자','치즈스프'], rainy:['생굴','훈제연어','블랙 올리브','파테','무화과잼'], snowy:['캐러멜 팝콘','트러플 치즈','견과류 믹스','훈제 굴','꿀'] },
    cocktail:  { hot:['과일 플레이터','쉬림프 칵테일','아보카도 딥','나초','에다마메'], warm:['카나페','미니 브루스케타','바질 카프레제','피타 칩','후무스'], cool:['올리브 핑거푸드','치즈 플레이터','미니 타코','스프링롤','에다마메'], cold:['핫 바질 스프','브리 치즈 구이','미트볼','브레드 볼 수프','핫도그'], rainy:['피자 슬라이스','치즈 딥 & 칩스','쿠키','팝콘','초콜릿'], snowy:['초콜릿 퐁뒤','마시멜로','크림 치즈 딥','프레첼','생강쿠키'] },
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
