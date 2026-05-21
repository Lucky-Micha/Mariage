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


// ── English weather context ───────────────────────────────────────────────
const weatherCtx_en = {
  soju: {
    hot:   { emoji:'🧊', desc:"Hot day calls for ice-cold soju! Salty, refreshing bites are the perfect match.", tip:"Serve soju at 4–6°C for the cleanest, crispest sip." },
    warm:  { emoji:'🥩', desc:"A warm evening with soju and grilled meat — a combination that never fails.", tip:"Add perilla leaves and doenjang for a full ssam experience." },
    cool:  { emoji:'🍖', desc:"Cool weather calls for soju and something hearty to warm you up.", tip:"A touch of saeujeot on bossam takes the pairing to the next level." },
    cold:  { emoji:'🍲', desc:"Biting cold? Warm broth alongside soju will thaw you right out.", tip:"Alternate a shot of soju with a spoonful of hot stew — pure comfort." },
    rainy: { emoji:'🌧️', desc:"Rain on the roof, pajeon on the pan — the ultimate rainy-day ritual.", tip:"The sizzle of jeon batter is said to sound just like falling rain." },
    snowy: { emoji:'❄️', desc:"Snow outside, warm bites inside — soju is the perfect company.", tip:"A warm broth snack by the window on a snowy night is pure atmosphere." },
  },
  beer: {
    hot:   { emoji:'🍺', desc:"Nothing beats ice-cold beer with crispy snacks on a scorching day!", tip:"Pour into a chilled glass for the coldest, most refreshing sip." },
    warm:  { emoji:'🌭', desc:"Warm evening, open air, a cold can of beer, and some BBQ — perfection.", tip:"Keep your beer in an ice bucket when drinking outdoors." },
    cool:  { emoji:'🍟', desc:"A cool day, a can of beer, and something crispy — simple pleasures.", tip:"Beer and pizza are eternal companions — never fails." },
    cold:  { emoji:'🧀', desc:"Cold out? Stay cozy indoors with a hearty snack and a pint.", tip:"Dark beers like stouts and porters suit cold weather perfectly." },
    rainy: { emoji:'🍕', desc:"Rainy day = delivery food and a home beer session. No debate.", tip:"Rain outside means delivery food and beer inside — treat yourself." },
    snowy: { emoji:'🍻', desc:"Watch the snow fall from a warm spot with a glass of beer in hand.", tip:"A craft beer pairs perfectly with the cozy mood of a snowy evening." },
  },
  makgeolli: {
    hot:   { emoji:'🥒', desc:"A bowl of cold makgeolli on a sweltering day is pure refreshment.", tip:"Shake the bottle before pouring to revive the natural carbonation." },
    warm:  { emoji:'🥞', desc:"Cherry blossoms or autumn leaves — makgeolli belongs outdoors.", tip:"Makgeolli is rich in lactobacillus and gentle on the stomach." },
    cool:  { emoji:'🥞', desc:"A cool breeze and a crispy jeon with makgeolli — a timeless pairing.", tip:"Adding makgeolli to jeon batter makes the pancake extra crispy." },
    cold:  { emoji:'🥟', desc:"On a cold day, try warm makgeolli alongside hot, comforting snacks.", tip:"Makgeolli can be gently warmed and served hot — surprisingly good." },
    rainy: { emoji:'🌧️', desc:"Rain + makgeolli + pajeon = the holy trinity of Korean rainy-day drinking.", tip:"The mild acidity of makgeolli cuts through the oiliness of fried pancakes beautifully." },
    snowy: { emoji:'⛄', desc:"Watch the snow pile up with a bowl of makgeolli — utterly Korean.", tip:"Drinking makgeolli under the eaves during snowfall is pure romance." },
  },
  wine: {
    hot:   { emoji:'🍷', desc:"Hot days call for a chilled white wine and something light and fresh.", tip:"Serve white wine at 8–12°C straight from the fridge." },
    warm:  { emoji:'🧀', desc:"An outdoor picnic, a glass of wine, and a lovely spread — spring or autumn perfection.", tip:"Aged cheese with red; fresh cheese with white — a reliable guide." },
    cool:  { emoji:'🍇', desc:"Cool evenings are made for full-bodied reds and slow, satisfying food.", tip:"Serve red wine at 16–18°C to bring out its full aromatic complexity." },
    cold:  { emoji:'🥩', desc:"A winter evening calls for rich food, warmth, and a generous pour of wine.", tip:"In winter, try mulled wine (vin chaud) — a warm, spiced delight." },
    rainy: { emoji:'🫕', desc:"A rainy evening, candlelight, wine, and good food — romance defined.", tip:"On a rainy day, reach for a slightly heavier red wine to match the mood." },
    snowy: { emoji:'🏔️', desc:"Snow outside, wine inside — pure indulgence.", tip:"On snowy nights, mulled wine is a wonderful choice — warm and aromatic." },
  },
  whiskey: {
    hot:   { emoji:'🥃', desc:"On a hot day, whisky on the rocks with something light and savory.", tip:"A large ice sphere melts slowly, diluting your whisky at a perfect pace." },
    warm:  { emoji:'🥩', desc:"Watch the sunset with a dram of whisky and a satisfying snack.", tip:"Roll the whisky around your palate to catch every layer of flavor." },
    cool:  { emoji:'🍫', desc:"A cool evening is the ideal time to slowly savor the depth of whisky.", tip:"A few drops of water unlock hidden aromas in a single malt — try it." },
    cold:  { emoji:'🔥', desc:"Bitter cold calls for whisky — the finest internal warming system.", tip:"A hot toddy (whisky, honey, lemon, hot water) is the classic cold-weather dram." },
    rainy: { emoji:'⚡', desc:"Rain and whisky: a moody, atmospheric pairing that demands nothing else.", tip:"The peaty, smoky character of Islay whisky is especially evocative on rainy nights." },
    snowy: { emoji:'🌨️', desc:"As the snow falls quietly, a dram of whisky makes the silence perfect.", tip:"The sweet vanilla and caramel notes of bourbon are particularly fitting in winter." },
  },
  cocktail: {
    hot:   { emoji:'🍹', desc:"Tropical vibes, a refreshing cocktail, and bright, zesty snacks!", tip:"Fresh tropical fruit and mint elevate any cocktail into summer mode." },
    warm:  { emoji:'🌺', desc:"A warm terrace, a gorgeous cocktail, and the feeling that all is right.", tip:"A flower garnish in your cocktail amplifies the spring atmosphere." },
    cool:  { emoji:'🍸', desc:"A cool night at a cocktail bar with classic drinks and fine bites.", tip:"On cool evenings, lean toward classic cocktails: Negroni, Manhattan." },
    cold:  { emoji:'🍊', desc:"Cold nights call for warm cocktails and cozy, hearty snacks.", tip:"Try a hot Irish coffee or a spiced hot toddy to warm up." },
    rainy: { emoji:'🌈', desc:"Stay in, mix your own cocktails, and enjoy a lazy rainy-day session.", tip:"A Moscow Mule with ginger beer is easy to make at home — give it a go." },
    snowy: { emoji:'✨', desc:"A sparkling cocktail to match the magic of a snowy night.", tip:"Try an eggnog or spiced cider to capture that winter holiday feeling." },
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
    history: '1892년 윌리엄 그랜트가 스페이사이드에 설립했습니다. 자체 보리 농장과 전통 플로어 몰팅을 130년 넘게 고집하며, 어느 날 밤 남은 캐스크를 우연히 교체하면서 이중 숙성(더블우드)을 발견했습니다. 그 실수가 현재 브랜드의 시그니처가 됐습니다.',
    characteristics: '꿀과 바닐라가 부드럽게 열리고, 뒤이어 신선한 복숭아·살구의 과일 향이 피어납니다. 더블우드는 아메리칸 버번 캐스크의 밝은 단맛 위에 올로로소 셰리 캐스크의 건과일과 따뜻한 스파이스를 더해 이중 풍미를 완성합니다. 크리미하고 부드러운 질감이 길게 이어지며, 강렬하지 않으면서도 복합적인 이 스타일은 처음 싱글몰트를 시작하는 사람과 오랜 애호가 모두에게 사랑받습니다.',
    flavorTags: ['꿀', '바닐라', '신선한 과일', '오크', '부드러움'],
    items: ['다크 초콜릿', '꿀 리코타 크로스티니', '블루치즈', '호두', '말린 무화과'],
    pairingNote: '발베니의 꿀·바닐라 단맛은 다크 초콜릿의 쌉쌀한 카카오와 완벽한 대비를 이루며, 호두·아몬드 같은 견과류의 고소함과도 잘 어울립니다. 블루치즈의 짭조름함이 단맛을 균형 있게 잡아주고, 말린 무화과의 쫀득한 당도가 셰리 캐스크의 건과일 풍미와 기분 좋게 공명합니다. 식후 디저트 위스키로도 훌륭합니다.',
  },
  {
    key: '맥캘란',
    aliases: ['맥캘란', 'macallan', '맥켈란'],
    category: 'whiskey',
    fullName: 'The Macallan',
    badge: '스카치 싱글몰트 · 스페이사이드',
    abv: '40~43%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '1824년 스페이사이드에 설립된 스카치의 왕입니다. 수십 년간 블렌디드 위스키 원액으로 비밀리에 사용되다가 싱글몰트로 독립했으며, 셰리 캐스크를 스페인 헤레스 현지에서 직접 제조·검수 후 스코틀랜드로 운반하는 집착적인 품질 관리가 신화의 배경입니다.',
    characteristics: '스페인 헤레스에서 직접 제조·검수해 공수한 셰리 캐스크가 건포도·자두·오렌지 필의 풍부한 과일 풍미를 부여합니다. 생강·계피의 따뜻한 스파이스와 다크 초콜릿의 쌉쌀함이 겹겹이 쌓이며, 풀바디의 묵직한 질감 위에 오크의 긴 여운이 남습니다. 수십 년 셰리 캐스크 집착의 산물로 "왕의 위스키"라 불리는 데 이견이 없습니다.',
    flavorTags: ['셰리', '건포도', '오렌지 필', '초콜릿', '스파이스'],
    items: ['훈제연어', '체다 치즈', '말린 자두', '살구 타르트', '다크 초콜릿'],
    pairingNote: '맥캘란의 셰리 풍미는 훈제연어의 지방과 짠맛을 한층 풍부하게 끌어올립니다. 체다나 콩테처럼 오래 숙성된 치즈의 결정질 질감이 와인의 바디와 공명하고, 살구 타르트의 달콤쌉쌀함이 셰리 캐스크의 건과일 노트를 거울처럼 반사합니다. 다크 초콜릿은 길고 쌉쌀한 피니시와 함께 완벽한 마무리를 선사합니다.',
  },
  {
    key: '글렌피딕',
    aliases: ['글렌피딕', 'glenfiddich'],
    category: 'whiskey',
    fullName: 'Glenfiddich',
    badge: '스카치 싱글몰트 · 스페이사이드',
    abv: '40%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '1887년 크리스마스에 윌리엄 그랜트와 일곱 자녀가 직접 돌을 쌓아 증류소를 지었습니다. 1957년 선반에서 눈에 띄도록 삼각형 병을 도입했고, 수사슴 로고는 그 이후 단 한 번도 바뀌지 않았습니다. 같은 가문의 5대손이 지금도 경영합니다.',
    characteristics: '신선한 배·청사과·멜론의 밝은 과일 향이 주도하고, 흰 꽃과 은은한 바닐라가 부드럽게 뒤를 잇습니다. 구리 워시백에서의 짧은 발효가 만들어낸 깨끗하고 청아한 스타일은 거친 오크 느낌이 전혀 없으며, 전 세계 소믈리에들이 싱글몰트 입문자에게 가장 먼저 권하는 스페이사이드의 아이콘입니다.',
    flavorTags: ['배', '사과', '꽃향기', '바닐라', '가벼운 오크'],
    items: ['카망베르 치즈', '연어 타르타르', '사과 크럼블', '구운 아몬드', '그린샐러드'],
    pairingNote: '글렌피딕의 가벼운 배·사과 풍미는 연어 타르타르나 담백한 흰살생선을 압도하지 않고 어우러집니다. 카망베르처럼 크리미하고 부드러운 치즈는 바닐라 노트를 증폭시키고, 사과 크럼블이나 배 타르트 같은 과일 디저트는 증류소 시그니처의 과수원 캐릭터를 자연스럽게 공명시킵니다.',
  },
  {
    key: '라프로익',
    aliases: ['라프로익', 'laphroaig', '라프로이그'],
    category: 'whiskey',
    fullName: 'Laphroaig',
    badge: '스카치 싱글몰트 · 아이라',
    abv: '40~48%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '1815년 아이라 섬에 설립됐습니다. 현지 이탄습지에서 직접 피트를 캐고 보리를 건조하던 생존 방식이 오늘날의 강렬한 특성이 됐습니다. 찰스 3세가 애음자로 왕실 납품 허가를 부여했으며, 멤버십 가입 시 아이라 섬 땅 한 평의 임차권을 주는 전통이 유명합니다.',
    characteristics: '피트 연기·해초·아이오딘 향이 글라스를 채우는 순간 호불호가 갈립니다. 처음에는 압도적인 훈연과 해양성 짠맛이 밀려오지만, 공기와 충분히 접촉하면 바닐라·꿀·열대과일의 달콤한 대비가 드러납니다. 아이라 섬 현지 이탄습지에서 직접 캔 피트를 사용하는 수백 년 방식이 이 극단적 개성의 원천입니다.',
    flavorTags: ['피트 연기', '해양', '아이오딘', '짠맛', '바닐라'],
    items: ['생굴', '훈제 고등어', '블루치즈', '소금 크래커', '미소된장 수프'],
    pairingNote: '라프로익의 아이오딘·바닷물 풍미는 날굴에 천연 조미료처럼 작용해 평범한 굴을 드라마틱하게 변신시킵니다. 훈제 고등어는 피트 연기와 같은 훈연 계열로 공명하고, 소금 크래커의 짭조름함이 단맛 대비를 극대화합니다. 미소된장 수프의 발효 감칠맛은 해양 풍미와 의외로 완벽한 동양적 마리아주를 이룹니다.',
  },
  {
    key: '탈리스커',
    aliases: ['탈리스커', 'talisker'],
    category: 'whiskey',
    fullName: 'Talisker',
    badge: '스카치 싱글몰트 · 스카이섬',
    abv: '45.8%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '1830년 스카이섬 해안가에 설립됐습니다. 바닷바람이 들이치는 지형 탓에 여러 차례 폐쇄 위기를 넘겼지만, 독특한 해양성 풍미가 오히려 전 세계 마니아를 끌어들였습니다. 구식 웜텁 냉각기가 오일리하고 묵직한 질감의 비결입니다. 스티븐슨은 "진정한 섬의 맛"이라고 극찬했습니다.',
    characteristics: '첫 모금에 강렬한 후추와 해양성 피트 연기가 입 안을 압도하고, 이어 건포도·과일의 달콤함과 따뜻한 생강 스파이스가 복잡하게 얽힙니다. 구식 웜텁 냉각기가 만들어내는 오일리하고 묵직한 바디감이 이 거친 야성미의 핵심이며, 스카이 섬의 거센 바닷바람이 한 잔에 담긴 듯한 날것 그대로의 표현력이 특징입니다.',
    flavorTags: ['후추', '피트', '해양', '건포도', '향신료'],
    items: ['훈제 굴', '훈제연어', '피클', '블루치즈', '훈제 소시지'],
    pairingNote: '탈리스커의 후추·피트 조합은 훈제 굴과 만나 서로를 증폭시키는 강력한 공명 페어링을 만듭니다. 훈제 소시지의 달콤쌉쌀한 지방이 위스키의 오일리한 바디와 어우러지고, 블루치즈의 강한 개성이 이 위스키의 야성미와 맞설 수 있는 몇 안 되는 상대입니다. 피클의 산미는 구개를 리셋해 다음 모금을 새롭게 열어줍니다.',
  },
  {
    key: '아벨라워',
    aliases: ['아벨라워', 'aberlour'],
    category: 'whiskey',
    fullName: 'Aberlour',
    badge: '스카치 싱글몰트 · 스페이사이드',
    abv: '40~43%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: "1879년 켈트어로 '재잘거리는 샘의 입'을 뜻하는 성지 근처에 설립됐습니다. 1898년 화재로 전소됐다가 재건됐고, 마스터 디스틸러가 가장 좋은 캐스크만 추려 무가수·무냉각 여과로 병입한 a'bunadh(아부나)가 우연한 시도에서 시작된 컬트 제품이 됐습니다.",
    characteristics: '계피·정향·육두구의 따뜻한 스파이스가 가장 먼저 코를 자극하고, 체리·건자두·오렌지 필의 달콤한 과일 풍미가 셰리 캐스크의 깊은 풍미와 함께 전개됩니다. 맥캘란보다 가벼운 바디지만 스파이스의 개성이 더 뚜렷하고, 피니시에서 다크 초콜릿의 쌉쌀한 여운이 길게 남아 식후주로도 훌륭한 선택입니다.',
    flavorTags: ['계피', '체리', '건자두', '셰리', '스파이스'],
    items: ['치즈 플레이터', '살라미', '견과류 믹스', '말린 무화과', '다크 초콜릿'],
    pairingNote: '아벨라워의 스파이시한 셰리 풍미는 살라미나 하몽처럼 숙성된 염장 육류의 짠맛·기름기와 극적인 보완 관계를 이룹니다. 견과류의 고소한 쓴맛이 계피 스파이스와 공명하고, 말린 무화과나 건자두는 셰리 캐스크의 건과일 노트를 증폭시킵니다. 다크 초콜릿은 피니시의 쌉쌀한 여운을 완벽하게 이어받습니다.',
  },
  {
    key: '글렌리벳',
    aliases: ['글렌리벳', 'glenlivet', '더 글렌리벳'],
    category: 'whiskey',
    fullName: 'The Glenlivet',
    badge: '스카치 싱글몰트 · 스페이사이드',
    abv: '40%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '1824년 조지 스미스는 하일랜즈에서 최초로 면허를 받은 증류업자가 됐습니다. 불법 밀주업자들의 협박 속에서도 면허를 고수했고, 그의 위스키가 유명해지자 27개 증류소가 "Glenlivet"을 이름에 붙였습니다. 법정 싸움 끝에 스미스만이 "The Glenlivet"을 단독 사용할 권리를 얻었습니다.',
    characteristics: '파인애플·망고·패션프루트의 열대과일 향이 꽃향기와 함께 가볍게 피어오르고, 복숭아·살구의 섬세한 핵과 풍미와 버터 같은 바닐라가 뒤를 잇습니다. 아메리칸 오크 캐스크의 긴 숙성이 만들어낸 이 부드럽고 균형잡힌 스타일은 거친 느낌이 전혀 없어 북미에서 수십 년간 싱글몰트 판매 1위를 지킨 비결입니다.',
    flavorTags: ['살구', '복숭아', '꽃향기', '바닐라', '부드러움'],
    items: ['카프레제', '카망베르 치즈', '구운 아몬드', '훈제연어', '사과 크럼블'],
    pairingNote: '글렌리벳의 가벼운 열대과일·꽃 풍미는 카망베르나 브리처럼 크리미하고 담백한 치즈와 만나 서로를 방해하지 않는 편안한 마리아주를 만듭니다. 훈제연어의 지방과 짠맛이 단맛을 돋보이게 하고, 사과 크럼블이나 살구 타르트는 증류소의 과일 캐릭터를 자연스럽게 공명시킵니다.',
  },
  {
    key: '조니워커 블루',
    aliases: ['조니워커 블루', 'johnnie walker blue', '조니 워커 블루', '블루라벨', '조니블루'],
    category: 'whiskey',
    fullName: 'Johnnie Walker Blue Label',
    badge: '블렌디드 스카치 · 최상급',
    abv: '40%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '1992년 출시된 조니워커의 최상급 라인입니다. 마스터 블렌더가 1만 캐스크 중 단 1개만 선별하며, 이미 폐쇄된 "유령 증류소"의 희귀 원액을 포함합니다. 병마다 고유 일련번호가 부여되고 개별 승인 절차를 거치는, 컬렉터들이 경매에서 쫓는 블렌디드 스카치입니다.',
    characteristics: '꿀·바닐라·말린 과일의 달콤한 레이어에 이미 폐쇄된 증류소들의 희귀 원액이 더하는 묘한 스모키·해양 뉘앙스가 조화롭게 어우러집니다. 오래된 그레인 위스키 특유의 극도로 실키하고 부드러운 질감이 압도적이며, 마지막 한 모금의 여운이 수 분 이상 이어지는 풍부하고 복합적인 경험입니다.',
    flavorTags: ['꿀', '바닐라', '말린 과일', '실키함', '긴 여운'],
    items: ['캐비어', '훈제연어', '생굴', '다크 초콜릿 트러플', '파르미지아노'],
    pairingNote: '블루라벨의 섬세한 복합미는 동급의 재료를 요구합니다. 캐비어의 바다 향과 짠맛이 위스키의 해양 뉘앙스를 깨우고, 신선한 생굴의 미네랄리티가 실키한 질감과 공명합니다. 다크 초콜릿 트러플의 쌉쌀한 카카오가 건과일 노트와 대비를 이루며, 파르미지아노의 결정질 짠맛이 긴 피니시에 완벽한 마침표를 찍습니다.',
  },
  {
    key: '조니워커 블랙',
    aliases: ['조니워커 블랙', 'johnnie walker black', '조니 워커 블랙', '블랙라벨', '조니블랙'],
    category: 'whiskey',
    fullName: 'Johnnie Walker Black Label',
    badge: '블렌디드 스카치 · 12년',
    abv: '40%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '1820년 존 워커가 식료품점에서 자신만의 블렌딩을 시작한 것이 출발점입니다. 아들 알렉산더가 12년 이상 원액만 사용하는 블랙 라벨 공식을 완성했고, 병의 기울어진 라벨은 같은 면적에 더 많은 텍스트를 넣기 위한 실용적 아이디어였습니다—그것이 지금 가장 유명한 위스키 포장 아이콘이 됐습니다.',
    characteristics: '앞부분에서 달콤한 바닐라와 잘 익은 사과·배 향이 부드럽게 펼쳐지고, 중간에서 블렌디드의 시그니처인 섬세한 스모키 선이 균형을 잡습니다. 미디엄 바디의 균형잡힌 풍미는 온더락·하이볼·니트 어떤 방식으로도 장점을 잃지 않으며, 12년 이상 숙성 원액만 사용한 완성도 높은 일상의 위스키입니다.',
    flavorTags: ['스모키', '바닐라', '달콤한 과일', '미디엄 바디', '균형'],
    items: ['스테이크', '체다 치즈', '피클', '훈제 소시지', '다크 초콜릿'],
    pairingNote: '블랙라벨의 스모키·달콤한 균형은 그릴에 구워 탄 스테이크 표면과 공명하며, 체다 치즈의 묵직한 지방이 스모키 풍미를 부드럽게 감쌉니다. 훈제 소시지의 짭조름한 기름기가 단맛과 절묘한 대비를 만들고, 피클의 산미가 구개를 리셋해 다음 모금의 풍미를 새롭게 열어줍니다.',
  },
  {
    key: '시바스리갈',
    aliases: ['시바스리갈', 'chivas regal', '시바스', 'chivas'],
    category: 'whiskey',
    fullName: 'Chivas Regal 12',
    badge: '블렌디드 스카치 · 12년',
    abv: '40%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '제임스와 존 시바스는 1801년 애버딘의 식료품상이었습니다. 왕실에 납품하며 왕실 납품 허가를 취득했고, 미국 시장을 겨냥해 최초로 만들어진 럭셔리 블렌디드 스카치로서 전 세계에 "스카치 위스키"의 이미지를 심었습니다.',
    characteristics: '꿀·바닐라·복숭아의 달콤하고 크리미한 첫인상이 편안하게 다가오고, 은은한 헤더 꿀과 아몬드의 고소함이 뒤를 잇습니다. 전혀 자극적이지 않은 부드러운 질감 덕분에 위스키 입문자에게 이상적이며, 온더락으로 차갑게 하면 청량감이 살아나고 하이볼에서는 가벼운 파티 드링크로 변신합니다.',
    flavorTags: ['꿀', '바닐라', '복숭아', '크리미', '부드러움'],
    items: ['카망베르 치즈', '구운 아몬드', '사과 크럼블', '크래커', '견과류'],
    pairingNote: '시바스의 달콤하고 크리미한 풍미는 카망베르처럼 둥글고 부드러운 치즈와 만나면 서로의 밀키한 풍성함을 배가합니다. 구운 아몬드의 고소함이 헤더 꿀 노트와 공명하고, 사과 크럼블이나 복숭아 타르트 같은 가벼운 과일 디저트는 이 위스키의 달콤한 과일 캐릭터를 자연스럽게 이어받습니다.',
  },
  {
    key: '발렌타인',
    aliases: ['발렌타인', 'ballantine', 'ballantines', '발란타인'],
    category: 'whiskey',
    fullName: "Ballantine's 17",
    badge: '블렌디드 스카치 · 17년',
    abv: '40%', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    history: '1827년 조지 발렌타인이 에든버러 식료품점에서 시작했습니다. 빅토리아 여왕에게 왕실 납품 허가를 받았고, 40종 이상의 몰트와 그레인을 블렌딩하는 17년산은 1930년대에 출시돼 수십 년째 아시아 프리미엄 스카치 시장 1위를 지키고 있습니다.',
    characteristics: '헤더 꽃향기와 은은한 토피·꿀이 가장 먼저 다가오고, 잘 익은 복숭아·살구의 과일 풍미가 오크의 안정적인 구조감 위에 부드럽게 전개됩니다. 40가지 이상의 몰트와 그레인을 블렌딩한 17년산의 복잡한 레이어는 식전주로도 식후주로도 모나지 않는 올라운더로서 수십 년간 아시아 블렌디드 1위를 지킨 비결입니다.',
    flavorTags: ['꽃향기', '과일', '바닐라', '오크', '균형'],
    items: ['다크 초콜릿', '살라미', '견과류', '치즈 플레이터', '살구 타르트'],
    pairingNote: '발렌타인의 꽃향기·과일 풍미는 살라미·하몽처럼 염장된 샤퀴테리의 짠맛·기름기와 보완적인 조화를 이룹니다. 견과류가 들어간 치즈 플레이터는 오크의 구조감과 공명하며, 살구 타르트의 달콤쌉쌀함이 발렌타인 17년의 복숭아·살구 과일 캐릭터를 거울처럼 반사합니다.',
  },
  {
    key: '잭다니엘',
    aliases: ['잭다니엘', 'jack daniels', "jack daniel's", '잭다니엘스', '잭 다니엘'],
    category: 'whiskey',
    fullName: "Jack Daniel's Old No.7",
    badge: '테네시 위스키 · 미국',
    abv: '40%', flag: '🇺🇸',
    history: '잭 다니엘은 흑인 증류 장인 네이선 그린에게 기술을 배웠습니다. 1866년 등록된 미국 최고(最古) 증류소로, 10피트 높이의 사탕단풍 숯으로 원액을 걸러내는 "링컨 카운티 프로세스"는 잭의 발명입니다. 이 공정이 지금도 동일하게 진행돼 세계 최다 판매 아메리칸 위스키 지위를 유지합니다.',
    characteristics: '링컨 카운티 프로세스의 10피트 사탕단풍 숯 여과가 잡아낸 부드러운 캐러멜·바닐라 향에, 새 오크 통이 더하는 달콤한 나무 풍미와 은은한 숯 연기가 층층이 쌓입니다. 버번보다 가볍고 부드러운 이 친숙한 달콤함 덕분에 콜라·하이볼 등 믹서와의 궁합이 완벽하며, 세계 판매량 1위 아메리칸 위스키의 자리를 굳건히 지킵니다.',
    flavorTags: ['캐러멜', '바닐라', '오크', '숯향', '달콤함'],
    items: ['바베큐 폭립', '맥앤치즈', '캐러멜 팝콘', '체다버거', '피칸 파이'],
    pairingNote: '잭다니엘의 캐러멜·바닐라 단맛은 미국식 BBQ 폭립의 연기 나는 달콤한 소스와 거의 같은 계열의 풍미로 자연스러운 공명 페어링을 만듭니다. 맥앤치즈의 크리미한 치즈 지방이 부드러운 질감을 배가하고, 피칸 파이의 달콤쌉쌀한 너트 풍미가 오크·캐러멜 노트와 남부식 마리아주를 완성합니다.',
  },
  {
    key: '버팔로트레이스',
    aliases: ['버팔로트레이스', 'buffalo trace'],
    category: 'whiskey',
    fullName: 'Buffalo Trace',
    badge: '켄터키 버번 · 미국',
    abv: '45%', flag: '🇺🇸',
    history: '1787년부터 켄터키강 버팔로 이동 경로에 자리잡은 증류소입니다. 금주법 시대에는 "의약용" 허가로 유일하게 합법 생산을 유지했습니다. 세계 최초 싱글배럴 버번 블랜튼스를 탄생시킨 곳으로, 버팔로 트레이스 자체는 1999년에야 대중에게 판매를 시작했습니다.',
    characteristics: '새 오크 통의 탄화층이 부여한 바닐라·캐러멜이 달콤하게 열리고, 이어 민트·레몬 제스트의 상쾌한 브라이트니스가 복잡한 뒤층을 형성합니다. 45% ABV의 적절한 농도가 칵테일에서도 니트에서도 존재감을 유지하며, 버번의 교과서라 불릴 만한 구조감·균형·긴 피니시를 가성비 있는 가격대에서 제공합니다.',
    flavorTags: ['바닐라', '캐러멜', '민트', '레몬', '탄닌'],
    items: ['스테이크', '피칸 파이', '훈제 체다치즈', '피클', '바베큐 립'],
    pairingNote: '버팔로트레이스의 바닐라·캐러멜은 그릴 스테이크의 탄화된 표면과 공명하며 육류의 단백질이 탄닌을 부드럽게 만들어줍니다. 훈제 체다치즈의 진한 지방이 단맛 레이어와 대비를 이루고, 피칸 파이의 달콤쌉쌀한 너트 풍미가 오크·캐러멜 노트와 켄터키 전통 마리아주를 완성합니다.',
  },
  {
    key: '메이커스마크',
    aliases: ['메이커스마크', "maker's mark", '메이커스'],
    category: 'whiskey',
    fullName: "Maker's Mark",
    badge: '켄터키 버번 · 밀 위스키',
    abv: '45%', flag: '🇺🇸',
    history: '빌 사뮤엘스는 창업 전에 170년된 가문의 호밀 위스키 레시피를 직접 불태웠습니다. 모든 곡물 조합으로 식빵을 구워 맛을 비교한 끝에 밀을 선택했고, 아내 마지가 왁스 봉인 디자인을 직접 고안했습니다. 그 빨간 밀랍 봉인은 단 한 번도 재현된 적 없는 고유 공식입니다.',
    characteristics: '호밀 대신 붉은 겨울 밀을 사용한 덕분에 다른 버번의 스파이시함이 없고, 바닐라·꽃향기·부드러운 캐러멜이 둥글고 크리미하게 펼쳐집니다. 마지가 고안한 빨간 밀랍 봉인 속에 담긴 이 달콤하고 섬세한 풍미는 밀 버번(wheated bourbon)이라는 카테고리를 탄생시킨, 업계 기준점이 된 위스키입니다.',
    flavorTags: ['밀의 단맛', '바닐라', '꽃향기', '크리미', '부드러움'],
    items: ['구운 복숭아', '브리 치즈 구이', '피칸', '체다 치즈', '프루트 타르트'],
    pairingNote: '메이커스마크의 부드럽고 달콤한 밀 버번 풍미는 구운 복숭아의 카라멜화된 당분과 만나 서로를 배가시키는 환상적인 조합을 이룹니다. 브리 치즈의 크리미한 지방이 스파이시함 없는 둥근 바디감을 한층 풍부하게 하고, 피칸의 부드러운 고소함이 바닐라·꽃향기 노트와 공명하며 프루트 타르트의 달콤쌉쌀함이 여운을 완성합니다.',
  },
  {
    key: '야마자키',
    aliases: ['야마자키', 'yamazaki', '山崎'],
    category: 'whiskey',
    fullName: 'Yamazaki 12',
    badge: '재패니즈 싱글몰트 · 산토리',
    abv: '43%', flag: '🇯🇵',
    history: '1923년 도리 신지로가 교토 남쪽 야마자키 계곡에 일본 최초 위스키 증류소를 세웠습니다. 스코틀랜드 연수를 마친 다케쓰루 마사타카는 습도 높은 계곡이 위스키를 망칠 것이라 반대했지만 틀렸습니다—습윤한 기후가 숙성을 빠르게 가속해 전혀 새로운 동양적 스타일이 탄생했습니다.',
    characteristics: '복숭아·파인애플·서양배의 달콤한 과일 풍미가 첫 번째 물결로 밀려오고, 미즈나라 오크 특유의 백단향·인센스 노트가 스카치에서는 절대 경험할 수 없는 동양적 뉘앙스를 더합니다. 은은한 생강 스파이스의 여운이 길게 남으며, 습윤한 야마자키 계곡 기후가 가속시킨 독자적 숙성 스타일의 걸작입니다.',
    flavorTags: ['복숭아', '파인애플', '미즈나라', '생강', '섬세함'],
    items: ['연어 니기리', '가리비 구이', '화이트 초콜릿 트러플', '우메보시', '고르곤졸라'],
    pairingNote: '야마자키의 섬세한 백단향·과일 풍미는 연어 니기리나 가리비구이 같은 일식 해산물의 깊은 감칠맛을 방해하지 않고 어우러집니다. 화이트 초콜릿 트러플의 부드러운 달콤함이 과일 노트를 공명시키고, 우메보시의 강렬한 짠맛·신맛이 예상치 못한 흥미로운 대비 마리아주를 만들어냅니다.',
  },
  {
    key: '히비키',
    aliases: ['히비키', 'hibiki', '響'],
    category: 'whiskey',
    fullName: 'Hibiki 17',
    badge: '재패니즈 블렌디드 · 산토리',
    abv: '43%', flag: '🇯🇵',
    history: '1989년 출시된 산토리의 최고급 블렌디드 위스키입니다. 24면체 병은 일본의 24절기를 상징하며, 하루 중 빛이 달라질 때마다 다른 면이 빛납니다. 수석 블렌더 후쿠요 신지는 야마자키·하쿠슈·치타 원액의 비율을 매년 미세하게 조정해 재고가 노화해도 일관된 풍미를 유지합니다.',
    characteristics: '리치·장미꽃잎·귤껍질의 화사하고 우아한 꽃향기가 24면체 병에서 흘러나오는 순간 이미 세계 최고의 블렌디드 위스키임을 예감합니다. 야마자키의 과일·우드, 하쿠슈의 허브·민트, 치타의 가벼운 그레인이 수석 블렌더의 손 아래 정교하게 조화를 이루며, 화이트 오크의 섬세한 바닐라 구조 위에 길고 꽃향기 나는 피니시를 남깁니다.',
    flavorTags: ['로즈', '리치', '귤껍질', '화이트 오크', '우아함'],
    items: ['버터구이 가리비', '유자 소르베', '훈제연어', '카망베르 치즈', '구운 아몬드'],
    pairingNote: '히비키의 섬세한 꽃향기와 과일 풍미는 버터로 지진 가리비의 고소하고 달콤한 풍미와 만나 아름다운 조화를 이룹니다. 유자 소르베의 시트러스 산미가 리치·귤껍질 노트와 공명하고, 훈제연어의 지방이 부드러운 질감을 배가하며, 카망베르의 크리미한 풍성함이 꽃향기를 한층 화사하게 끌어올립니다.',
  },
  {
    key: '진로',
    aliases: ['진로', 'jinro', '진로이즈백', '진로 이즈백'],
    category: 'soju',
    fullName: '진로 이즈백',
    badge: '소주 · 하이트진로',
    abv: '16.5%', flag: '🇰🇷',
    history: '1924년 평양에서 창업한 진로는 한국전쟁 당시 38선을 넘어 남쪽에서 재창업했습니다. 초록 유리병과 두꺼비 캐릭터는 수십 년간 한국 주류 문화의 상징이 됐습니다. 2019년 복고 감성의 파란 병으로 리뉴얼하자 편의점에서 1인당 2병 구매 제한이 걸릴 만큼 MZ세대에게 폭발적 반응을 얻었습니다.',
    characteristics: '쌀과 고구마를 원료로 탄소 필터링을 거쳐 탄생한 깔끔하고 중성적인 맛이 특징입니다. 자극적인 쓴맛이 없고 미세한 단맛이 느껴지는 16.5%의 부드러운 알코올감은, 어떤 안주의 맛도 방해하지 않고 뒤에서 조용히 받쳐주는 세계에서 가장 음식 친화적인 증류주입니다.',
    flavorTags: ['깔끔함', '부드러움', '중성', '미세한 단맛', '청량감'],
    items: ['삼겹살', '두부김치', '계란말이', '오이소박이', '파전'],
    pairingNote: '진로의 중성적이고 깔끔한 풍미는 삼겹살의 기름진 지방을 씻어내는 팔레트 클렌저 역할을 합니다. 두부김치나 오이소박이의 짭조름하고 아삭한 맛을 돋보이게 하며, 어떤 안주 앞에서도 제 색을 드러내지 않고 조용히 조화를 이루는 것이 국민 소주의 진정한 덕목입니다.',
  },
  {
    key: '참이슬',
    aliases: ['참이슬', 'chamisul', '참이슬 후레쉬'],
    category: 'soju',
    fullName: '참이슬 후레쉬',
    badge: '소주 · 하이트진로',
    abv: '16.9%', flag: '🇰🇷',
    history: '1998년 출시된 하이트진로의 베스트셀러 소주입니다. 대나무 활성탄으로 4회 필터링해 불순물을 제거하는 공법을 도입해 기존 소주의 거친 뒷맛을 없앴습니다. 20년 이상 전 세계 판매량 1위 증류주 타이틀을 지킨, 사실상 소주의 국제 표준입니다.',
    characteristics: '대나무를 태워 만든 활성탄으로 4회 정밀 여과하는 공법이 기존 소주의 거친 잡맛을 모두 걷어냅니다. 깨끗하고 청량한 첫인상에 미세한 곡물 단맛이 느껴지고, 쓴맛이 극히 적은 깔끔한 끝맛 덕분에 세계 판매량 1위 증류주 자리를 20년 넘게 지키고 있는 한국 소주의 국제 표준입니다.',
    flavorTags: ['청량함', '깔끔함', '쓴맛 적음', '활성탄 여과', '부드러움'],
    items: ['삼겹살', '제육볶음', '파전', '닭발', '계란말이'],
    pairingNote: '참이슬의 청량하고 깔끔한 풍미는 삼겹살의 기름진 돼지 지방을 매번 깔끔히 씻어내는 완벽한 구개 리셋 역할을 합니다. 제육볶음의 매콤달콤한 강한 맛 뒤에 한 모금 마시면 입 안이 새로워지고, 닭발이나 파전처럼 자극적인 요리와 먹을 때도 적절한 균형을 만들어줍니다.',
  },
  {
    key: '처음처럼',
    aliases: ['처음처럼', '처음 처럼', 'cheoeum'],
    category: 'soju',
    fullName: '처음처럼',
    badge: '소주 · 롯데칠성',
    abv: '16%', flag: '🇰🇷',
    history: '2006년 롯데칠성이 선보인 알칼리 환원수 소주입니다. 전해조를 통해 pH를 높인 물을 사용해 소주의 쓴맛 원인인 유기산을 중화하는 원리입니다. 진로의 오랜 독주 체제에 처음으로 도전한 소주로, 부드럽고 달콤한 맛 덕에 소주 입문자와 여성 고객층을 새롭게 개척했습니다.',
    characteristics: '전해조를 통해 pH를 높인 알칼리 환원수가 유기산을 중화해 기존 소주의 쓴맛을 거의 없앱니다. 부드럽고 살짝 달콤한 첫맛에 벨벳처럼 매끄러운 질감이 더해져 16%의 낮은 도수와 함께 소주를 처음 접하는 입문자와 가벼운 음주를 선호하는 분들에게 큰 인기를 얻고 있습니다.',
    flavorTags: ['부드러움', '달콤함', '쓴맛 없음', '알칼리 환원수', '순함'],
    items: ['삼겹살', '해물파전', '제육볶음', '두부김치', '어묵탕'],
    pairingNote: '처음처럼의 부드럽고 달콤한 스타일은 강한 소주로는 묻혀버릴 담백하고 섬세한 해물 요리와 특히 잘 어울립니다. 해물파전의 바다 향·고소함이 알칼리 환원수의 부드러운 마무리와 편안하게 조화를 이루고, 두부김치의 담백하고 구수한 맛이 달콤한 끝맛을 포근하게 감싸줍니다.',
  },
  {
    key: '새로',
    aliases: ['새로', 'saero'],
    category: 'soju',
    fullName: '새로',
    badge: '제로슈거 소주 · 하이트진로',
    abv: '16.9%', flag: '🇰🇷',
    history: '2022년 9월 하이트진로가 MZ세대의 건강 관심에 맞춰 출시한 제로슈거 소주입니다. 에리스리톨과 스테비아를 조합해 설탕 없이도 달콤한 맛을 구현했고, 출시 첫 달 편의점마다 1인 2병 한정 판매를 시행할 만큼 폭발적인 품귀 현상이 이어졌습니다.',
    characteristics: '에리스리톨과 스테비아의 조합으로 설탕 없이 구현한 달콤함은 시간이 지나도 입 안에 남지 않아 더 드라이한 인상을 줍니다. 16.9%의 알코올도수로 클래식 참이슬과 같지만 잔당이 없어 더 어른스럽고 절제된 피니시가 특징이며, 건강과 맛을 동시에 추구하는 MZ세대의 새로운 소주 기준입니다.',
    flavorTags: ['제로슈거', '깔끔함', '가벼움', '청량감', '드라이'],
    items: ['회', '조개구이', '생굴', '두부조림', '파전'],
    pairingNote: '새로의 드라이하고 깔끔한 피니시는 당도가 있는 소주로는 방해받을 섬세한 생선회나 조개구이의 바다 풍미를 그대로 살려줍니다. 신선한 생굴의 미네랄리티와 잘 조화되고, 두부조림의 은은한 짠맛·감칠맛이 잔당 없는 깔끔한 끝맛과 만나 가벼운 음주 경험을 만들어냅니다.',
  },
  {
    key: '하이네켄',
    aliases: ['하이네켄', 'heineken'],
    category: 'beer',
    fullName: 'Heineken',
    badge: '필스너 라거 · 네덜란드',
    abv: '5%', flag: '🇳🇱',
    history: '1864년 암스테르담의 22세 청년 헤라르트 하이네켄이 낡은 양조장을 인수했습니다. 1886년 파스퇴르 연구소 출신 화학자를 고용해 라거 전용 A-효모를 분리해냈고, 이 효모 하나가 전 세계 모든 하이네켄 공장에서 동일한 맛을 보장하는 핵심 비밀입니다.',
    characteristics: '1886년 파스퇴르 연구소 출신 화학자가 분리한 A-효모가 더하는 은은한 과일 에스테르가 이 맥주를 저가 라거와 구분 짓습니다. 밝은 홉의 쓴맛과 가벼운 몰트 단맛이 세밀하게 균형을 이루고, 빠르고 깔끔한 탄산감이 기름진 음식을 매번 리셋해 프리미엄 라거의 교과서라는 명성을 전 세계에서 유지합니다.',
    flavorTags: ['청량함', '홉 쓴맛', '가벼운 몰트', '균형', '깔끔함'],
    items: ['피자', '나초', '감자튀김', '치즈버거', '에다마메'],
    pairingNote: '하이네켄의 균형잡힌 홉 쓴맛은 피자 치즈의 기름기를 칼처럼 잘라내며 다음 한 입을 신선하게 만들어줍니다. 나초·감자튀김처럼 짭조름하고 바삭한 스낵류는 맥주의 탄산과 쓴맛이 지방과 소금을 중화해 완벽한 짝이 되고, 에다마메의 채소성 고소함은 홉의 풀향과 자연스럽게 공명합니다.',
  },
  {
    key: '기네스',
    aliases: ['기네스', 'guinness'],
    category: 'beer',
    fullName: 'Guinness Draught',
    badge: '아이리시 스타우트 · 아일랜드',
    abv: '4.2%', flag: '🇮🇪',
    history: '1759년 아서 기네스는 더블린의 빈 양조장을 9,000년 임차 계약으로 인수했습니다. 맥아를 과도하게 볶는 실수에서 탄생한 검은빛이 오늘날의 정체성이 됐고, 1959년에는 CO₂에 질소를 추가해 크리미한 캐스케이드 거품을 구현했습니다. 119.5초 기다리는 "투파트 푸어" 의식은 과학이자 문화입니다.',
    characteristics: '과도하게 볶은 보리 맥아에서 나오는 에스프레소·비터 초콜릿 풍미가 진하게 펼쳐지고, 질소 시스템이 만들어낸 크리미하고 벨벳 같은 거품이 산미를 부드럽게 완화합니다. 4.2%라는 낮은 도수에도 묵직한 풀바디 인상을 주며, 119.5초를 기다리는 투파트 푸어 의식은 단순한 전통이 아닌 최적의 거품 밀도를 위한 과학입니다.',
    flavorTags: ['로스팅', '커피', '초콜릿', '크리미', '묵직함'],
    items: ['아이리시 스튜', '생굴', '훈제 체다치즈', '브라운 브레드', '뱅어즈앤매쉬'],
    pairingNote: '기네스와 생굴의 조합은 아일랜드에서 수백 년간 검증된 클래식 마리아주입니다. 스타우트의 로스팅 쓴맛이 굴의 짭조름한 바다 향에 천연 조미료처럼 작용하고, 아이리시 스튜의 진한 감칠맛이 맥주의 묵직한 바디와 공명하며, 훈제 체다치즈의 스모키함이 커피·초콜릿 풍미를 더욱 깊게 만들어줍니다.',
  },
  {
    key: '아사히',
    aliases: ['아사히', 'asahi', '아사히 수퍼드라이', '아사히 슈퍼드라이'],
    category: 'beer',
    fullName: 'Asahi Super Dry',
    badge: '드라이 라거 · 일본',
    abv: '5%', flag: '🇯🇵',
    history: '1987년 아사히가 출시한 슈퍼 드라이는 일본 맥주사를 하룻밤에 바꿨습니다. 당분을 거의 완전 발효시켜 전례 없는 드라이함(카라구치)을 구현했고, 2년 만에 50년간 시장을 지배하던 기린을 꺾었습니다. "드라이 맥주"라는 개념 자체를 전 세계 양조업계에 전파한 혁신 제품입니다.',
    characteristics: '당분을 거의 완전히 발효시키는 독자 공법이 전례 없는 드라이함(카라구치)을 구현합니다. 단맛이 없고 홉 쓴맛도 순식간에 사라지는 극도의 중성적 피니시가 음식의 섬세한 풍미를 정확하게 살려주며, 가라아게나 야키토리처럼 기름진 일식 요리와 먹으면 맥주가 사라지는 것이 아니라 음식이 더 맛있어지는 경험을 제공합니다.',
    flavorTags: ['드라이', '청량함', '날카로움', '깔끔함', '가벼움'],
    items: ['야키토리', '가라아게', '에다마메', '교자', '연어 니기리'],
    pairingNote: '아사히 슈퍼드라이의 극도로 드라이하고 중성적인 피니시는 야키토리의 탄화된 간장 풍미, 가라아게의 튀긴 기름기를 매번 완전히 씻어냅니다. 교자의 바삭한 껍질과 육즙을 먹은 뒤 한 모금 마시면 입 안이 새로 리셋되고, 연어 니기리의 섬세한 풍미는 맥주의 중성적 성격 덕분에 전혀 방해받지 않습니다.',
  },
  {
    key: '카스',
    aliases: ['카스', 'cass', '카스 맥주'],
    category: 'beer',
    fullName: 'CASS Fresh',
    badge: '라거 · 한국',
    abv: '4.5%', flag: '🇰🇷',
    history: '1994년 오비맥주가 성장하는 한국 소비자 시장을 겨냥해 안호이저-부시와 합작으로 출시했습니다. 치킨과 맥주를 묶은 "치맥" 문화와 함께 성장해 대한민국 점유율 1위를 수년간 유지했고, 치맥 산업은 연간 수조 원 규모의 독립적 식문화가 됐습니다.',
    characteristics: '1994년 안호이저-부시와의 합작으로 탄생한 한국형 라거로, 가벼운 바디에 부드러운 거품, 적은 쓴맛이 특징입니다. 강한 개성 대신 깔끔하고 시원한 투명함을 선택한 이 설계 덕분에 치킨·피자·삼겹살·족발 등 한국 전반의 음식과 충돌 없이 편안하게 어울리는 치맥 문화의 상징입니다.',
    flavorTags: ['청량함', '가벼움', '부드러움', '깔끔함', '시원함'],
    items: ['치킨', '피자', '감자튀김', '어니언링', '핫도그'],
    pairingNote: '카스는 치맥의 상징입니다. 프라이드 치킨의 기름진 튀김옷을 매 모금 깔끔하게 씻어내 계속 먹고 싶게 만드는 역할에 최적화되어 있습니다. 양념치킨의 달콤매콤한 소스와도 잘 어울리며, 피자·감자튀김·어니언링 등 기름기 있는 음식이라면 어떤 것이든 이 가벼운 청량함이 느끼함을 정리해줍니다.',
  },
  {
    key: '테라',
    aliases: ['테라', 'terra', '테라 맥주'],
    category: 'beer',
    fullName: 'Terra',
    badge: '라거 · 한국 하이트진로',
    abv: '4.6%', flag: '🇰🇷',
    history: '2019년 하이트진로가 카스에 빼앗긴 시장을 되찾기 위해 출시했습니다. 호주 몰닝턴 반도의 보리와 "리얼탄산" 공정을 브랜드 핵심으로 내세웠고, 하이네켄을 연상시키는 초록 병 디자인이 주목받았습니다. 출시 1년 만에 국산 라거 시장 40%를 점유한 유례없는 성장 속도를 기록했습니다.',
    characteristics: '호주 몰닝턴 반도의 청보리가 주는 신선한 곡물 향이 기존 국산 라거보다 뚜렷하게 살아 있으며, 리얼탄산 공정의 강한 탄산감이 활기차고 생생한 청량감을 만들어냅니다. 풍미와 가벼움을 동시에 추구해 출시 1년 만에 국산 시장 40%를 점유한, 새 세대 한국 라거의 기준이 됩니다.',
    flavorTags: ['청보리', '강한 탄산', '신선함', '깔끔함', '풍미'],
    items: ['치킨', '삼겹살', '족발', '감자튀김', '소시지구이'],
    pairingNote: '테라의 강한 탄산과 청보리의 곡물 풍미는 삼겹살의 기름진 돼지 지방을 적극적으로 씻어내는 클렌징 효과를 제공합니다. 족발의 쫄깃한 지방이 풍부한 부위와도 강한 탄산감이 대비를 이루고, 소시지구이의 짭조름하고 달콤한 풍미는 청보리의 신선한 곡물 향과 자연스럽게 어우러집니다.',
  },
  {
    key: '지평 막걸리',
    aliases: ['지평', '지평막걸리', '지평 막걸리', 'jipyeong'],
    category: 'makgeolli',
    fullName: '지평 막걸리',
    badge: '쌀 막걸리 · 경기 양평',
    abv: '6%', flag: '🇰🇷',
    history: '1925년 경기 양평에서 시작한 100년 전통 양조장입니다. 1990년대엔 폐업 직전까지 몰렸으나 전통 제법을 지키며 버텼고, 2013년경 서울 식당가에서 셰프와 음식 평론가들이 인공감미료 없는 막걸리로 재발견하면서 입소문이 퍼졌습니다. 1L 병이 미식 식당의 상징이 됐습니다.',
    characteristics: '인공 감미료 없이 쌀 전분과 유산균 발효만으로 만들어내는 자연스러운 단맛과 신맛의 조화가 이 막걸리의 핵심입니다. 활성 효모에 의한 섬세하고 지속적인 버블이 크리미한 질감과 어우러지며, 깔끔하고 약간 새콤한 마무리가 오래 남습니다. 100년 양조장의 고집이 만들어낸 프리미엄 막걸리의 새로운 기준입니다.',
    flavorTags: ['쌀 풍미', '자연스러운 단맛', '신맛', '부드러운 탄산', '구수함'],
    items: ['해물파전', '감자전', '두부김치', '김치전', '빈대떡'],
    pairingNote: '지평 막걸리의 자연스러운 유산균 산미는 해물파전이나 감자전의 기름기를 매번 씻어내는 완벽한 팔레트 클렌저 역할을 합니다. 두부김치의 짭조름하고 구수한 맛이 막걸리의 쌀 풍미와 발효 향을 공명시키고, 빈대떡의 구수한 녹두 향과도 편안하게 조화를 이루어 한국 전통 식문화의 정수를 보여줍니다.',
  },
  {
    key: '샤도네이',
    aliases: ['샤도네이', '샤르도네', 'chardonnay'],
    category: 'wine',
    fullName: 'Chardonnay',
    badge: '화이트 와인 · 부르고뉴 원산',
    abv: '12~14%', flag: '🍾',
    history: '부르고뉴 원산의 화이트 품종 중 가장 많이 재배되는 품종입니다. 강한 개성이 없어 테루아와 양조 방식을 그대로 반영하는 "백지 캔버스"입니다. 샤블리의 석회암 토양에서는 미네랄리티, 나파 밸리의 햇볕에서는 열대과일, 부르고뉴 코트 드 본에서는 버터 풍미로 변신합니다.',
    characteristics: '스타일이 산지와 양조 방식에 따라 완전히 달라집니다. 서늘한 샤블리에서는 청사과·레몬·분필 같은 미네랄리티가, 따뜻한 캘리포니아·호주에서는 망고·파인애플의 열대과일이 납니다. 말로락틱 발효(MLF)를 거치면 버터·헤이즐넛이 더해지고, 오크 숙성은 바닐라·토스트·스모크를 입혀 세계에서 가장 다양한 스타일의 화이트 와인을 만들어냅니다.',
    flavorTags: ['사과', '레몬', '버터', '바닐라', '열대과일'],
    items: ['로스트 치킨', '버터구이 새우', '훈제연어', '브리 치즈 구이', '버섯 크림 수프'],
    pairingNote: '오크 숙성 샤도네이의 버터·바닐라 풍미는 로스트 치킨 껍질의 기름기나 버섯 크림 수프의 농도와 함께할 때 서로를 배가시킵니다. 무오크 스타일(샤블리)은 생굴과 새우의 바다 향을 미네랄리티로 증폭시키는 클래식 페어링이며, 훈제연어는 두 스타일 모두와 잘 어울리는 만능 파트너입니다.',
  },
  {
    key: '피노누아',
    aliases: ['피노누아', '피노 누아', 'pinot noir'],
    category: 'wine',
    fullName: 'Pinot Noir',
    badge: '레드 와인 · 부르고뉴 원산',
    abv: '12~14%', flag: '🍾',
    history: '부르고뉴 원산의 레드 와인 중 재배가 가장 까다로운 품종입니다. 껍질이 얇아 서리·병충해·변이에 취약하지만, 완벽한 조건이 맞으면 어떤 포도도 넘보지 못할 복합미를 냅니다. 로마네 콩티 한 병의 가격이 1,000만 원을 넘는 이유는 마케팅이 아니라 진짜 희소성입니다.',
    characteristics: '어릴 때는 체리·라즈베리·딸기의 선명한 붉은 과일 향과 장미꽃 아로마가, 숙성되면 버섯·젖은 낙엽·건장미·가죽의 복합적 풍미가 더해집니다. 레드 와인 중 탄닌이 가장 가벼워 섬세한 식재료와 함께할 때 진가를 발휘하며, 높은 산도는 수십 년 장기 숙성을 가능케 하는 핵심 구조입니다.',
    flavorTags: ['체리', '라즈베리', '버섯', '흙향', '낮은 탄닌'],
    items: ['오리가슴살', '연어구이', '버섯요리', '카망베르 치즈', '연어 타르타르'],
    pairingNote: '피노 누아의 낮은 탄닌과 밝은 산도는 지방이 풍부한 연어·오리가슴살과 만나면 서로의 부족한 부분을 채워주는 교과서적 보완 마리아주를 이룹니다. 버섯이나 오리 콩피처럼 흙향·감칠맛 나는 식재료는 이 와인의 숲 바닥 뉘앙스와 자연스럽게 공명합니다.',
  },
  {
    key: '카베르네 소비뇽',
    aliases: ['카베르네 소비뇽', '카베르네', 'cabernet sauvignon', 'cab sav'],
    category: 'wine',
    fullName: 'Cabernet Sauvignon',
    badge: '레드 와인 · 보르도 원산',
    abv: '13~15%', flag: '🍾',
    history: '보르도에서 카베르네 프랑과 소비뇽 블랑이 우연히 교배되어 탄생했습니다. 1976년 파리 블라인드 테이스팅에서 캘리포니아 카베르네가 보르도 최고급 와인을 이기는 충격적인 사건("파리의 심판")이 일어났고, 그 이후 이 품종은 전 세계 와이너리의 필수 품종이 됐습니다.',
    characteristics: '서늘한 지역(보르도)에서는 블랙커런트·피망, 따뜻한 지역(나파)에서는 블랙체리·올리브 풍미가 납니다. 숙성되면 삼나무·담배·시가박스·흑연의 복합적인 뉘앙스가 발전합니다. 레드 와인 중 탄닌이 가장 강해 육류의 단백질과 결합하면 탄닌의 떫음이 줄고 풍미가 폭발하며, 최고 보르도는 50년 이상 숙성됩니다.',
    flavorTags: ['블랙커런트', '삼나무', '민트', '강한 탄닌', '풀바디'],
    items: ['스테이크', '양고기구이', '다크 초콜릿', '포르치니 버섯', '체다 치즈'],
    pairingNote: '카베르네 소비뇽의 강한 탄닌은 스테이크의 단백질·지방과 화학적으로 결합해 탄닌의 떫음을 줄이고 육류의 풍미를 폭발시킵니다. 포르치니 버섯의 감칠맛이 와인의 흙향과 공명하고, 다크 초콜릿의 쌉쌀함이 긴 여운을 이어받습니다. 맵고 자극적인 요리는 탄닌을 더 거칠게 만들어 피하는 것이 좋습니다.',
  },
  // ── 화이트 와인 ──────────────────────────────────────────────────────────
  {
    key: '소비뇽 블랑',
    aliases: ['소비뇽 블랑', '소비뇽블랑', '쇼비뇽', 'sauvignon blanc', 'sauvignon'],
    category: 'wine',
    fullName: 'Sauvignon Blanc',
    badge: '화이트 와인 · 프랑스 루아르 / 뉴질랜드 말버러',
    abv: '11~13%', flag: '🍾',
    history: '루아르 밸리 원산이지만 뉴질랜드 말버러가 현재 세계 최고 산지입니다. 1979년 말버러 첫 상업 양조가 이루어진 후, 클라우디 베이의 구스베리·풀향이 10년 만에 세계 소믈리에 필수 목록에 올랐습니다. 뉴질랜드 와인을 세계 무대에 올린 품종입니다.',
    characteristics: '서늘한 지역에서는 풀·피망·구스베리의 날카로운 식물성 향과 자몽·라임이, 따뜻한 지역에서는 패션프루트·망고의 열대과일 향이 납니다. 항상 드라이하고 높은 산도를 유지하며 오크 숙성 없이 신선하게 출시되어 스시·해산물과 잘 어울리는 몇 안 되는 화이트 와인으로, 뉴질랜드 말버러가 세계 소믈리에 목록에 올린 품종입니다.',
    flavorTags: ['자몽', '구스베리', '허브', '패션프루트', '미네랄'],
    items: ['생굴', '염소 치즈', '회', '새우칵테일', '그린샐러드'],
    pairingNote: '소비뇽 블랑의 날카로운 산도는 염소 치즈의 새콤한 풍미와 만나 둘 다를 더욱 생생하게 만드는 클래식 페어링입니다. 생굴과 회의 바다 미네랄리티를 이 와인의 허브향이 증폭시키고, 새우칵테일의 신선한 단맛과 그린샐러드의 채소 향도 자연스럽게 어우러집니다.',
  },
  {
    key: '리슬링',
    aliases: ['리슬링', 'riesling'],
    category: 'wine',
    fullName: 'Riesling',
    badge: '화이트 와인 · 독일 모젤 / 프랑스 알자스',
    abv: '7~13%', flag: '🍾',
    history: '독일 모젤이 원산지인 화이트 품종입니다. 1970~80년대 저가 스위트 제품이 시장에 넘치면서 이미지가 추락했지만, 소믈리에들은 세계 최고 화이트로 평가합니다. 드라이부터 귀부(TBA)까지 같은 품질 수준에서 다양한 당도가 가능한 유일한 화이트 품종이며, 50년 이상 숙성도 가능합니다.',
    characteristics: '어릴 때는 꽃향·복숭아·살구·라임이, 숙성되면 꿀·석유(페트롤, TDN 화합물) 향이 납니다. 세계에서 산도가 가장 높은 화이트 와인 중 하나로 드라이(트로켄)부터 달콤한(아우스레제, TBA)까지 같은 품질 수준에서 다양한 당도를 구현하며, 태국·중국 요리처럼 강한 향신료와 함께할 수 있는 몇 안 되는 와인입니다.',
    flavorTags: ['복숭아', '살구', '꿀', '미네랄', '페트롤(숙성)'],
    items: ['훈제 고등어', '목살구이', '생선구이', '블루치즈', '사과 크럼블'],
    pairingNote: '리슬링의 높은 산도와 잔당의 달콤함이 훈제 고등어의 기름진 지방과 짠맛을 균형 있게 잡아줍니다. 목살구이처럼 지방이 풍부한 돼지고기 요리는 이 와인의 최고 파트너이며, 달콤한 스파이스가 들어간 요리와도 탁월한 궁합을 자랑합니다. 블루치즈의 강한 개성도 리슬링의 높은 산도 앞에서 균형을 찾습니다.',
  },
  {
    key: '모스카토',
    aliases: ['모스카토', '모스카토 다스티', '무스카', '아스티', 'moscato', 'muscat', 'asti'],
    category: 'wine',
    fullName: "Moscato d'Asti",
    badge: '스위트 스파클링 · 이탈리아 피에몬테',
    abv: '5~7%', flag: '🍾',
    history: '피에몬테 아스티의 모스카토 비앙코로 만드는 스위트 스파클링 와인입니다. 무스카 품종은 고대 이집트까지 거슬러 올라가는 가장 오래된 포도 중 하나입니다. 2011년 드레이크의 가사에 "모스카토"가 등장하면서 전 세계 힙합 세대에게 이탈리아 스파클링 와인을 소개한 문화적 사건이 됐습니다.',
    characteristics: '복숭아·살구·오렌지 꽃·머스크의 향긋하고 달콤한 아로마가 글라스를 채웁니다. 5~7%의 낮은 알코올과 섬세한 프리잔테(frizzante) 버블, 풍부한 당도가 특징으로 무겁지 않고 상쾌하게 마실 수 있습니다. 와인 입문자부터 마니아까지 즐거운 식후주·아페리티보로 사랑받는 이탈리아 피에몬테의 여름 선물입니다.',
    flavorTags: ['복숭아', '오렌지 꽃', '꿀', '살구', '섬세한 버블'],
    items: ['프루트 타르트', '사과 크럼블', '구운 아몬드', '카망베르 치즈', '견과류'],
    pairingNote: '모스카토의 달콤한 복숭아·오렌지 꽃 아로마는 프루트 타르트나 사과 크럼블처럼 가벼운 과일 디저트와 서로를 배가시키는 환상적인 공명 페어링을 만듭니다. 카망베르처럼 부드러운 치즈는 달콤한 풍미와 크리미한 대비를 이루고, 구운 아몬드의 고소함이 섬세한 버블과 함께 기분 좋은 여운을 만들어냅니다.',
  },
  {
    key: '피노 그리지오',
    aliases: ['피노 그리지오', '피노그리지오', '피노 그리', 'pinot grigio', 'pinot gris'],
    category: 'wine',
    fullName: 'Pinot Grigio',
    badge: '화이트 와인 · 이탈리아 북부 / 프랑스 알자스',
    abv: '11~13%', flag: '🍾',
    history: '이탈리아와 프랑스 알자스에서 완전히 다른 두 스타일로 표현되는 품종입니다. 같은 포도지만 이탈리아에서는 "피노 그리지오"로 가볍고 산뜻하게, 알자스에서는 "피노 그리"로 황금빛 풀바디로 만들어집니다. 이탈리아 스타일은 2000년대 전 세계에서 가장 많이 팔리는 스틸 화이트 와인이 됐습니다.',
    characteristics: '레몬·청사과·흰 복숭아·미네랄의 가볍고 청아한 아로마가 특징입니다. 이탈리안 스타일은 라이트~미디엄 바디에 산뜻한 산도와 깔끔한 피니시로 어떤 음식과도 부담 없이 어울리고, 알자스 스타일(피노 그리)은 풀바디에 훈제 아몬드·생강·화이트 트러플의 풍성한 풍미로 완전히 다른 경험을 선사합니다.',
    flavorTags: ['레몬', '청사과', '흰 복숭아', '미네랄', '산뜻함'],
    items: ['봉골레 파스타', '카프레제', '새우칵테일', '훈제연어', '그린샐러드'],
    pairingNote: '피노 그리지오의 산뜻한 산도와 미네랄리티는 봉골레 파스타의 조개 향을 한껏 끌어올리고 파스타의 기름기를 깔끔하게 정리해줍니다. 카프레제의 신선한 토마토·바질과도 자연스럽게 어우러지고, 새우칵테일의 달콤하고 신선한 해산물 풍미도 이 와인의 가벼운 미네랄리티와 훌륭하게 조화됩니다.',
  },
  {
    key: '게뷔르츠트라미너',
    aliases: ['게뷔르츠트라미너', '게뷔르츠', '게부르츠', 'gewürztraminer', 'gewurztraminer', 'gewurz'],
    category: 'wine',
    fullName: 'Gewürztraminer',
    badge: '화이트 와인 · 프랑스 알자스',
    abv: '12~14%', flag: '🍾',
    history: '이름 자체가 "향신료(Gewürz) + 트라미노 마을"의 합성어입니다. 남티롤의 트라미노 마을에서 유래해 알자스로 건너간 품종으로, 1980~90년대에는 "너무 이국적"이라는 이유로 외면받았습니다. 지금은 가장 즉각적이고 강렬한 아로마 덕에 소믈리에들이 블라인드 테이스팅에서 가장 먼저 맞히는 품종이 됐습니다.',
    characteristics: '리치·장미꽃·생강·향신료의 매우 강렬하고 이국적인 아로마가 글라스를 코에 대기 전부터 방 안을 채웁니다. 오프-드라이~스위트 스타일이 많고 풀바디에 낮은 산도, 긴 스파이시한 여운이 특징입니다. 소믈리에들이 블라인드 테이스팅에서 가장 먼저 맞히는, 세계에서 가장 즉각적으로 인식 가능한 화이트 와인입니다.',
    flavorTags: ['리치', '장미꽃', '생강', '향신료', '이국적'],
    items: ['오리가슴살', '푸아그라', '카망베르 치즈', '블루치즈', '사과 크럼블'],
    pairingNote: '게뷔르츠트라미너의 이국적인 향신료 아로마는 푸아그라의 풍부한 기름진 지방과 와인의 향기로운 달콤함이 만나는 알자스의 전통적인 클래식 페어링입니다. 오리가슴살의 진한 감칠맛과도 잘 어울리며, 블루치즈의 자극적인 짠맛·곰팡이향이 와인의 강렬함과 맞서는 흥미로운 대비 마리아주를 만들어냅니다.',
  },
  // ── 스파클링 와인 ─────────────────────────────────────────────────────────
  {
    key: '샴페인',
    aliases: ['샴페인', '크레망', '뱅무소', 'champagne', 'moët', 'veuve clicquot', 'krug'],
    category: 'wine',
    fullName: 'Champagne',
    badge: '스파클링 와인 · 프랑스 샹파뉴',
    abv: '11~13%', flag: '🥂',
    history: '동 페리뇽 수도사는 샴페인을 발명한 것이 아니라 기포를 없애려 평생 싸웠습니다—병이 폭발했으니까요. 1772년 뵈브 클리코의 르뮈아주(gyropalette) 발명으로 흐린 와인 문제가 해결됐고 현대 샴페인 산업이 시작됐습니다. 지금도 샹파뉴 319개 코뮌만이 이 이름을 사용할 수 있습니다.',
    characteristics: '청사과·레몬의 날카로운 과일 향과 이스트 숙성이 더하는 브리오슈·토스트의 복합적 향이 특징입니다. 섬세하고 지속적인 버블이 향기를 코로 효율적으로 전달하며, 논빈티지(NV)부터 20~40년 숙성이 가능한 프레스티지 퀴베(동 페리뇽·크리스탈)까지 다양한 스타일이 존재하는 세계 최고 복합성의 스파클링 와인입니다.',
    flavorTags: ['사과', '레몬', '토스트', '브리오슈', '섬세한 버블'],
    items: ['생굴', '캐비어', '훈제연어', '카나페', '새우칵테일'],
    pairingNote: '샴페인의 높은 산도와 섬세한 버블은 캐비어의 짠맛·지방을 동시에 증폭하고 중화해 그 어떤 음료도 대체할 수 없는 천상의 조합을 만듭니다. 생굴은 두 재료 모두의 바다 미네랄리티가 공명하는 클래식이며, 훈제연어·카나페·새우칵테일 등 파티 핑거푸드 전반과도 완벽하게 어울립니다.',
  },
  {
    key: '프로세코',
    aliases: ['프로세코', 'prosecco', 'prosecco doc', 'prosecco docg'],
    category: 'wine',
    fullName: 'Prosecco',
    badge: '스파클링 와인 · 이탈리아 베네토',
    abv: '10~12%', flag: '🥂',
    history: '베네토의 글레라 품종으로 만드는 이탈리아 스파클링 와인입니다. 2차 발효를 병 속이 아닌 탱크에서 진행하는 샤르마 방식으로 샴페인보다 빠르고 저렴하게 만들어집니다. 2010년대 아페롤 스프리츠의 폭발적 유행이 프로세코를 전 세계 칵테일 바에 등장시킨 결정적 계기가 됐습니다.',
    characteristics: '복숭아·배·사과·흰 꽃의 가볍고 산뜻한 아로마가 샴페인보다 더 직접적이고 접근하기 쉽습니다. 탱크 2차 발효(샤르마 방식)의 큰 버블이 부드럽고 친근한 청량감을 주며, 브루트(Brut)부터 엑스트라 드라이(Extra Dry)까지 다양한 당도 스타일이 있고 2~3년 내 신선할 때 즐기는 것이 최적입니다.',
    flavorTags: ['복숭아', '배', '사과', '흰 꽃', '가벼운 버블'],
    items: ['카프레제', '과일 플레이터', '브루스케타', '안티파스토', '살라미'],
    pairingNote: '프로세코의 상큼한 복숭아·배 과일 향과 가벼운 버블은 브루스케타·카프레제·살라미 같은 이탈리안 아페리티보 전채 요리와 완벽한 궁합을 자랑합니다. 과일 플레이터의 신선한 단맛과도 자연스럽게 어우러지며, 안티파스토의 다양한 풍미를 압도하지 않고 가볍게 뒷받침하는 역할을 합니다.',
  },
  {
    key: '로제 와인',
    aliases: ['로제', '로제와인', '프로방스 로제', 'rosé', 'rose', 'rose wine'],
    category: 'wine',
    fullName: 'Rosé (Provence)',
    badge: '로제 와인 · 프랑스 프로방스',
    abv: '11~13%', flag: '🍾',
    history: '프로방스는 기원전 600년 그리스인이 마르세유 근방에 포도를 심은 프랑스 최고(最古) 와인 산지입니다. 20세기까지 저가 지역 와인이었으나, 2000년대 유명인 소유 샤토들이 프리미엄 이미지를 구축했고 인스타그램이 연한 살몬핑크 색을 전 세계 여름 미학으로 만들었습니다.',
    characteristics: '딸기·수박·복숭아·장미꽃·허브의 신선하고 섬세한 아로마가 특징입니다. 껍질을 12~24시간만 접촉해 만들어내는 연한 살몬핑크 색상은 법적으로 허용되는 가장 옅은 로제이며, 드라이하고 가벼운 바디에 상쾌한 산도로 화이트 와인의 신선함과 레드 와인의 과일 풍미를 동시에 즐길 수 있습니다.',
    flavorTags: ['딸기', '수박', '복숭아', '장미꽃', '프레시'],
    items: ['그린샐러드', '훈제연어', '새우칵테일', '카프레제', '올리브'],
    pairingNote: '로제 와인의 신선한 과일 향과 드라이한 피니시는 그린샐러드·카프레제처럼 가볍고 신선한 지중해 요리와 이상적인 여름 마리아주를 완성합니다. 훈제연어의 지방이 와인의 신선함으로 균형을 잡고, 새우칵테일의 달콤하고 시원한 해산물 풍미가 로제의 딸기·복숭아 아로마와 자연스럽게 조화됩니다.',
  },
  // ── 레드 와인 (보르도/론 계열) ────────────────────────────────────────────
  {
    key: '메를로',
    aliases: ['메를로', '메를레', 'merlot'],
    category: 'wine',
    fullName: 'Merlot',
    badge: '레드 와인 · 프랑스 보르도 우안',
    abv: '13~15%', flag: '🍾',
    history: '보르도 우안 포므롤을 대표하는 품종입니다. 2004년 영화 "사이드웨이스"에서 주인공이 "메를로는 절대 안 마셔!"라고 외치는 장면이 나온 뒤 전 세계 메를로 판매량이 하룻밤에 2% 감소했습니다. 아이러니하게도 그가 영화 내내 예찬한 와인(페트뤼스)이 거의 순수 메를로였습니다.',
    characteristics: '서늘한 지역(보르도 우안)에서는 딸기·자두·삼나무가, 따뜻한 지역(나파·칠레)에서는 블랙베리·자두·초콜릿·케이크 풍미가 납니다. 오크 숙성 시 모카·카라멜·바닐라가 더해지며, 카베르네 소비뇽보다 탄닌이 부드럽고 일찍 숙성되는 벨벳처럼 매끄러운 질감이 이 품종의 최대 매력입니다.',
    flavorTags: ['자두', '블랙체리', '초콜릿', '바닐라', '벨벳 탄닌'],
    items: ['스테이크', '연어구이', '버섯요리', '가리비 구이', '포르치니 버섯'],
    pairingNote: '메를로의 부드러운 탄닌은 연어·가리비처럼 지방이 있는 해산물과도 어울리는, 레드 와인 중 보기 드문 유연성을 보여줍니다. 그릴에 구운 스테이크의 단백질이 탄닌을 부드럽게 하고 풍미를 배가하며, 포르치니 버섯의 깊은 감칠맛이 와인의 흙향과 공명하는 보완적 마리아주를 만듭니다.',
  },
  {
    key: '시라',
    aliases: ['시라', '쉬라즈', '쉬라', 'syrah', 'shiraz'],
    category: 'wine',
    fullName: 'Syrah / Shiraz',
    badge: '레드 와인 · 프랑스 북부 론 / 호주 바로사',
    abv: '13~15%', flag: '🍾',
    history: '수백 년간 페르시아 시라즈 도시가 원산지라는 낭만적 전설이 있었지만, 1999년 DNA 분석이 프랑스 북부 론 토착 품종임을 밝혔습니다. 1840년대 호주에 이식된 포도나무 중 일부가 아직 살아 있어, 바로사 밸리에는 세계에서 가장 오래된 150년 이상의 시라 나무들이 있습니다.',
    characteristics: '온화한 기후(북부 론)에서는 블랙베리·민트·후추의 세이버리한 스타일이, 더운 기후(호주 바로사)에서는 잼 과일·감초·아니스·정향의 풍성한 스타일이 납니다. 숙성될수록 가죽·트러플이 더해지며, 높은 탄닌과 산도로 15년 이상 장기 숙성이 가능한 힘 있는 레드 와인입니다.',
    flavorTags: ['블랙베리', '후추', '감초', '가죽', '스파이시'],
    items: ['양고기구이', '바베큐 립', '스테이크', '훈제 소시지', '다크 초콜릿'],
    pairingNote: '시라의 스파이시한 후추·감초 풍미와 강한 탄닌은 양고기구이나 바베큐 립처럼 훈제·탄화된 육류와 만날 때 서로의 거친 개성이 하나로 합쳐지는 강렬한 마리아주를 만들어냅니다. 훈제 소시지의 향신료 풍미와도 잘 어울리며, 다크 초콜릿의 쌉쌀한 쓴맛이 긴 피니시를 완성합니다.',
  },
  {
    key: '말벡',
    aliases: ['말벡', 'malbec'],
    category: 'wine',
    fullName: 'Malbec',
    badge: '레드 와인 · 아르헨티나 멘도사',
    abv: '13~15%', flag: '🍾',
    history: '프랑스 카오르 원산이지만 1956년 보르도를 강타한 대서리가 프랑스 재배지를 거의 전멸시켰습니다. 다행히 1850년대 아르헨티나로 이식된 포도나무가 살아남았고, 안데스 고지(해발 800~1500m)의 강한 자외선과 일교차가 프랑스에서보다 오히려 더 농축된 스타일을 만들어냈습니다.',
    characteristics: '아르헨티나 멘도사(해발 800~1500m)산은 블랙베리·자두·바이올렛의 풍성한 과일 향에 안데스의 강한 자외선과 큰 일교차가 더해져 벨벳처럼 부드러운 탄닌과 높은 농축도를 만들어냅니다. 프랑스 카오르산은 더 강한 탄닌과 자두·담배의 묵직한 스타일로 같은 품종이지만 완전히 다른 경험을 선사합니다.',
    flavorTags: ['블랙베리', '자두', '바이올렛', '초콜릿', '부드러운 탄닌'],
    items: ['스테이크', '양고기구이', '바베큐 립', '다크 초콜릿', '블루치즈'],
    pairingNote: '말벡의 풍성한 탄닌과 진한 자두·바이올렛 향은 스테이크나 양고기구이의 단백질과 결합해 탄닌의 떫음을 줄이고 풍미를 폭발시킵니다. 아르헨티나 아사도(나무 불 위 소고기 직화구이)와의 조합은 세계 최고의 지역 마리아주 중 하나로, 다크 초콜릿의 쌉쌀함이 긴 피니시를 우아하게 마무리합니다.',
  },
  // ── 레드 와인 (이탈리아) ──────────────────────────────────────────────────
  {
    key: '산지오베제',
    aliases: ['산지오베제', '산조베제', '키안티', '브루넬로', 'sangiovese', 'chianti', 'brunello'],
    category: 'wine',
    fullName: 'Sangiovese (Chianti)',
    badge: '레드 와인 · 이탈리아 토스카나',
    abv: '12~14%', flag: '🍾',
    history: '"유피테르의 피"라는 뜻의 이탈리아 토스카나 대표 품종입니다. 20세기 정부 규정이 화이트 포도 혼합을 의무화해 키안티 품질이 추락하자, 1970년대 반항적인 생산자들이 규정을 어기며 순수 산지오베제 와인을 만들어 더 높은 가격을 받는 "슈퍼 투스칸" 현상을 촉발했고 이탈리아 와인법을 재작성하게 했습니다.',
    characteristics: '어릴 때는 새콤한 체리·딸기·흙향·차잎 노트가, 숙성되면 타르·가죽·발사믹·다크 초콜릿이 납니다. 높은 산도와 미디엄 탄닌으로 혼자 마시면 거칠게 느껴지지만 토마토 소스 파스타와 함께하면 두 재료의 산도가 공명해 완벽한 화음을 만드는, 세계 최고의 푸드 와인입니다.',
    flavorTags: ['새콤한 체리', '토마토', '허브', '흙향', '높은 산도'],
    items: ['토마토 파스타', '피자', '허브 구이', '브루스케타', '파르미지아노'],
    pairingNote: '산지오베제의 높은 산도는 토마토 소스의 산도와 같은 키로 공명해 둘 다를 더 맛있게 만드는 이탈리안 식탁의 핵심 원리입니다. 피자의 바삭한 반죽과 치즈가 탄닌을 부드럽게 하고, 바질·타임·오레가노 허브 시즈닝 요리가 와인의 흙향과 자연스럽게 어우러집니다.',
  },
  {
    key: '네비올로',
    aliases: ['네비올로', '바롤로', '바르바레스코', 'nebbiolo', 'barolo', 'barbaresco'],
    category: 'wine',
    fullName: 'Nebbiolo (Barolo)',
    badge: '레드 와인 · 이탈리아 피에몬테',
    abv: '13~15%', flag: '🍾',
    history: '이름이 안개(nebbia)에서 유래했으며, 피에몬테 란게 언덕의 10월 서리 안개 속에서 수확됩니다. 전통 바롤로는 대형 슬라보니아 오크 통에서 7~10년 숙성 후 출시했고, 손자 세대를 위한 와인이라 불렸습니다. 지금도 최소 10년이 지나야 제 맛을 내며, 세계에서 가장 탄닌이 강한 레드 와인입니다.',
    characteristics: '어릴 때는 장미·타르·체리가, 숙성되면 바이올렛·트러플·가죽·담배의 깊은 복합미가 납니다. 세계 최고 수준의 탄닌과 산도로 최소 10년 이상 숙성해야 제 맛이 나며, 프리미엄 바롤로는 30년 이상도 거뜬합니다. 숙성된 네비올로의 벽돌색 가장자리는 와인이 드디어 마실 준비가 됐다는 신호입니다.',
    flavorTags: ['장미', '타르', '트러플', '가죽', '강한 탄닌'],
    items: ['트러플 리조또', '스테이크', '포르치니 버섯', '양고기구이', '파르미지아노'],
    pairingNote: '네비올로의 강한 탄닌은 트러플 리조또나 포르치니 버섯처럼 깊은 감칠맛을 가진 재료와 만나야 비로소 균형을 찾습니다. 스테이크나 양고기구이의 풍부한 단백질이 탄닌을 부드럽게 하고, 파르미지아노의 결정질 짠맛·감칠맛이 와인의 복합미를 최대로 끌어올립니다.',
  },
  // ── 레드 와인 (스페인) ────────────────────────────────────────────────────
  {
    key: '템프라니요',
    aliases: ['템프라니요', '리오하', '리베라', 'tempranillo', 'rioja', 'ribera del duero'],
    category: 'wine',
    fullName: 'Tempranillo (Rioja)',
    badge: '레드 와인 · 스페인 리오하',
    abv: '12~14%', flag: '🍾',
    history: '"이른"을 뜻하는 템프라노에서 유래했으며, 다른 레드 품종보다 한 달 일찍 익습니다. 순례자들이 산티아고 가는 카미노 길을 따라 수도원에 가지치기를 남겨 스페인 전역에 퍼졌습니다. 아메리칸 오크 숙성에 따라 크리안자·레세르바·그란 레세르바로 등급을 나누는 리오하 분류 체계는 이 품종을 위해 만들어졌습니다.',
    characteristics: '자두·딸기·담배·바닐라·가죽·허브의 균형잡힌 과일 향이 특징입니다. 아메리칸 오크 숙성(리오하 전통)에서는 코코넛·바닐라가, 프렌치 오크에서는 가죽·흙향·시가가 발전합니다. 크리안자·레세르바·그란 레세르바 등급으로 숙성 기간이 분류되며, 그란 레세르바는 병 출시 후에도 20년 이상 숙성이 가능합니다.',
    flavorTags: ['딸기', '자두', '담배', '바닐라', '가죽'],
    items: ['이베리코 하몽', '만체고 치즈', '양고기구이', '초리소', '올리브'],
    pairingNote: '템프라니요의 흙향과 아메리칸 오크의 바닐라는 이베리코 하몽의 달콤하고 짭조름한 숙성 풍미와 스페인 최고의 지역 마리아주를 완성합니다. 만체고 치즈의 양젖 특유의 고소함이 와인의 탄닌을 부드럽게 하고, 초리소의 향신료·파프리카 풍미가 담배·허브 노트와 자연스럽게 공명합니다.',
  },
];

// Food photos from Pexels (https://www.pexels.com)
// Pexels License: Free for commercial and personal use. Attribution not required.
// Full license: https://www.pexels.com/license/
const foodPhotoIds = {
  // 한식
  '오이소박이': 15059716, '파전': 15622969,    '문어숙회': 16944381,
  '삼겹살':     8954245,  '목살구이': 8914998,  '닭발': 32149258,
  '보쌈':       1109024,  '족발': 27556975,     '순대국': 11089809,
  '감자탕':     6063231,  '해장국': 29479439,   '순대국밥': 6426069,
  '김치전':     15622969, '도토리묵': 6919802,  '굴전': 15622969,
  '대구탕':     6063231,  '육개장': 11089809,   '오이무침': 15059716,
  '미나리전':   15622969, '열무김치': 797646,   '빈대떡': 15622969,
  '해물파전':   15622969, '도토리묵무침': 6919802, '감자전': 15622969,
  '수육':       1109024,  '편육': 1109024,      '닭볶음탕': 35532826,
  '배추전':     15622969, '굴보쌈': 20627995,   '생선구이': 8352785,
  '두부조림':   6646097,
  // 공통 서양
  '치킨':         9872916,  '감자튀김': 15656541, '나초': 7033831,
  '소시지':       37128347, '치즈버거': 11220676, '콘도그': 24738516,
  '피자':         6068717,  '어니언링': 37358770, '치즈 플레이터': 28603409,
  '스테이크':     18824031, '버섯볶음': 5848426,  '버섯요리': 6605639,
  '프레첼':       4651969,  '치즈스틱': 31206989, '트러플 팝콘': 7676079,
  '카프레제':     5639959,  '바질 카프레제': 5639959, '그린샐러드': 36285423,
  '새우칵테일':   28525132, '쉬림프 칵테일': 28525132, '바게트': 28164994,
  '빵과 버터':    3789032,  '올리브': 29204840,   '블랙 올리브': 29204446,
  '올리브 핑거푸드': 29204840,
  '리조또':       18078967, '양고기구이': 37080275, '소꼬리찜': 27556975,
  '치즈퐁뒤':     12664803, '홍합찜': 26586517,   '오리 콩피': 14459160,
  '라클렛':       28833190, '크루통 수프': 34583386,
  '견과류':       35846638, '견과류 믹스': 5472169,
  '훈제 치즈':    28603409, '트러플 치즈': 28603409,
  '훈제연어':     3296274,  '다크 초콜릿': 4113345,
  '블루치즈':     11065342, '호두': 34415758,
  '삶은 달걀':    2402495,  '훈제 소시지': 37128347,
  '생굴':         12955611, '캐러멜 팝콘': 7676079,
  '과일 플레이터': 33776460, '아보카도 딥': 5737452,
  '카나페':       21328233, '미니 브루스케타': 2532006, '브루스케타': 2532006,
  '미니 타코':    34831922, '브리 치즈 구이': 37610758,
  '미트볼':       36958915, '피자 슬라이스': 6068717,
  '치즈 딥 & 칩스': 7033831, '쿠키': 10489152,
  '초콜릿 퐁뒤':  32287219, '마시멜로': 7858574,
};

function foodImgUrl(name) {
  const id = foodPhotoIds[name];
  if (!id) return null;
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=400&h=533&fit=crop`;
}

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


const foodNameEn = {
  '가라아게':           'Karaage',
  '가리비 구이':        'Grilled Scallops',
  '감자전':             'Potato Pancake',
  '감자탕':             'Pork Bone Soup',
  '감자튀김':           'French Fries',
  '견과류':             'Mixed Nuts',
  '견과류 믹스':        'Nut Mix',
  '계란말이':           'Rolled Omelette',
  '고르곤졸라':         'Gorgonzola',
  '과일 플레이터':      'Fruit Platter',
  '교자':               'Gyoza',
  '구운 복숭아':        'Grilled Peach',
  '구운 아몬드':        'Roasted Almonds',
  '굴보쌈':             'Oyster Bossam',
  '굴전':               'Oyster Pancake',
  '그린샐러드':         'Green Salad',
  '김치전':             'Kimchi Pancake',
  '꿀 리코타 크로스티니': 'Honey Ricotta Crostini',
  '나초':               'Nachos',
  '다크 초콜릿':        'Dark Chocolate',
  '다크 초콜릿 트러플': 'Dark Chocolate Truffle',
  '닭발':               'Spicy Chicken Feet',
  '닭볶음탕':           'Spicy Braised Chicken',
  '대구탕':             'Codfish Soup',
  '도토리묵':           'Acorn Jelly',
  '도토리묵무침':       'Acorn Jelly Salad',
  '두부김치':           'Tofu with Kimchi',
  '두부조림':           'Braised Tofu',
  '라클렛':             'Raclette',
  '로스트 치킨':        'Roast Chicken',
  '리조또':             'Risotto',
  '마시멜로':           'Marshmallows',
  '만체고 치즈':        'Manchego',
  '말린 무화과':        'Dried Figs',
  '말린 자두':          'Dried Prunes',
  '맥앤치즈':           'Mac & Cheese',
  '목살구이':           'Grilled Pork Neck',
  '문어숙회':           'Poached Octopus',
  '미나리전':           'Water Parsley Pancake',
  '미니 브루스케타':    'Mini Bruschetta',
  '미니 타코':          'Mini Tacos',
  '미소된장 수프':      'Miso Soup',
  '미트볼':             'Meatballs',
  '바게트':             'Baguette',
  '바베큐 립':          'BBQ Ribs',
  '바베큐 폭립':        'BBQ Spare Ribs',
  '바질 카프레제':      'Basil Caprese',
  '배추전':             'Cabbage Pancake',
  '뱅어즈앤매쉬':       'Bangers & Mash',
  '버섯 크림 수프':     'Mushroom Cream Soup',
  '버섯볶음':           'Sautéed Mushrooms',
  '버섯요리':           'Mushroom Dish',
  '버터구이 가리비':    'Butter-Grilled Scallops',
  '버터구이 새우':      'Butter-Grilled Shrimp',
  '보쌈':               'Bossam',
  '봉골레 파스타':      'Vongole Pasta',
  '브라운 브레드':      'Brown Bread',
  '브루스케타':         'Bruschetta',
  '브리 치즈 구이':     'Baked Brie',
  '블랙 올리브':        'Black Olives',
  '블루치즈':           'Blue Cheese',
  '빈대떡':             'Mung Bean Pancake',
  '빵과 버터':          'Bread & Butter',
  '사과 크럼블':        'Apple Crumble',
  '살구 타르트':        'Apricot Tart',
  '살라미':             'Salami',
  '삶은 달걀':          'Soft-Boiled Egg',
  '삼겹살':             'Samgyeopsal',
  '새우칵테일':         'Shrimp Cocktail',
  '생굴':               'Fresh Oysters',
  '생선구이':           'Grilled Fish',
  '소금 크래커':        'Salted Crackers',
  '소꼬리찜':           'Braised Oxtail',
  '소시지':             'Sausage',
  '소시지구이':         'Grilled Sausage',
  '수육':               'Boiled Pork Slices',
  '순대국':             'Korean Sausage Soup',
  '순대국밥':           'Sausage Rice Soup',
  '쉬림프 칵테일':      'Shrimp Cocktail',
  '스테이크':           'Steak',
  '아보카도 딥':        'Avocado Dip',
  '아이리시 스튜':      'Irish Stew',
  '안티파스토':         'Antipasto',
  '야키토리':           'Yakitori',
  '양고기구이':         'Grilled Lamb',
  '어니언링':           'Onion Rings',
  '어묵탕':             'Fish Cake Soup',
  '에다마메':           'Edamame',
  '연어 니기리':        'Salmon Nigiri',
  '연어 타르타르':      'Salmon Tartare',
  '연어구이':           'Grilled Salmon',
  '열무김치':           'Young Radish Kimchi',
  '염소 치즈':          'Goat Cheese',
  '오리 콩피':          'Duck Confit',
  '오리가슴살':         'Duck Breast',
  '오이무침':           'Cucumber Salad',
  '오이소박이':         'Stuffed Cucumber Kimchi',
  '올리브':             'Olives',
  '올리브 핑거푸드':    'Olive Finger Food',
  '우메보시':           'Umeboshi',
  '유자 소르베':        'Yuzu Sorbet',
  '육개장':             'Spicy Beef Soup',
  '이베리코 하몽':      'Ibérico Ham',
  '제육볶음':           'Spicy Pork Stir-Fry',
  '조개구이':           'Grilled Clams',
  '족발':               "Pig's Trotters",
  '체다 치즈':          'Cheddar Cheese',
  '체다버거':           'Cheddar Burger',
  '초리소':             'Chorizo',
  '초콜릿 퐁뒤':        'Chocolate Fondue',
  '치즈 딥 & 칩스':     'Cheese Dip & Chips',
  '치즈 플레이터':      'Cheese Platter',
  '치즈버거':           'Cheeseburger',
  '치즈스틱':           'Cheese Sticks',
  '치즈퐁뒤':           'Cheese Fondue',
  '치킨':               'Fried Chicken',
  '카나페':             'Canapés',
  '카망베르 치즈':      'Camembert',
  '카프레제':           'Caprese',
  '캐러멜 팝콘':        'Caramel Popcorn',
  '캐비어':             'Caviar',
  '콘도그':             'Corn Dog',
  '쿠키':               'Cookies',
  '크래커':             'Crackers',
  '크루통 수프':        'Crouton Soup',
  '크림 치즈 딥':       'Cream Cheese Dip',
  '토마토 파스타':      'Tomato Pasta',
  '트러플 리조또':      'Truffle Risotto',
  '트러플 치즈':        'Truffle Cheese',
  '트러플 팝콘':        'Truffle Popcorn',
  '파르미지아노':       'Parmigiano',
  '파전':               'Pajeon',
  '편육':               'Sliced Boiled Meat',
  '포르치니 버섯':      'Porcini Mushrooms',
  '푸아그라':           'Foie Gras',
  '프레첼':             'Pretzel',
  '프루트 타르트':      'Fruit Tart',
  '피자':               'Pizza',
  '피자 슬라이스':      'Pizza Slice',
  '피칸':               'Pecans',
  '피칸 파이':          'Pecan Pie',
  '피클':               'Pickles',
  '핫 바질 스프':       'Hot Basil Soup',
  '핫도그':             'Hot Dog',
  '핫토디':             'Hot Toddy',
  '해물파전':           'Seafood Pancake',
  '해장국':             'Hangover Soup',
  '허브 구이':          'Herb Roast',
  '호두':               'Walnuts',
  '홍합찜':             'Steamed Mussels',
  '화이트 초콜릿 트러플': 'White Choc. Truffle',
  '회':                 'Sashimi',
  '훈제 고등어':        'Smoked Mackerel',
  '훈제 굴':            'Smoked Oysters',
  '훈제 소시지':        'Smoked Sausage',
  '훈제 체다치즈':      'Smoked Cheddar',
  '훈제 치즈':          'Smoked Cheese',
  '훈제연어':           'Smoked Salmon',
};

function makeFoodCard(name) {
  const label = (currentLang === 'en' && foodNameEn[name]) ? foodNameEn[name] : name;
  const emoji = foodFallbackEmoji[name] || '🍽️';
  const url = foodImgUrl(name);
  const card = document.createElement('div');
  card.className = 'food-card';
  if (url) {
    card.innerHTML = `
      <div class="food-card-img-wrap">
        <div class="food-card-skeleton"></div>
        <div class="food-card-fallback">${emoji}</div>
        <img src="${url}" alt="${label}" class="loading"/>
      </div>
      <div class="food-card-label">${label}</div>`;
    const img = card.querySelector('img');
    const skeleton = card.querySelector('.food-card-skeleton');
    const fallback = card.querySelector('.food-card-fallback');
    img.addEventListener('load', () => {
      img.classList.remove('loading');
      skeleton.style.display = 'none';
    });
    img.addEventListener('error', () => {
      img.style.display = 'none';
      skeleton.style.display = 'none';
      fallback.style.display = 'flex';
    });
  } else {
    card.innerHTML = `
      <div class="food-card-emoji">${emoji}</div>
      <div class="food-card-label">${label}</div>`;
  }
  return card;
}

// ── UI string translations ───────────────────────────────────────────────
const ui_i18n = {
  ko: {
    'nav-about':           '서비스 소개',
    'nav-privacy':         '개인정보처리방침',
    'footer-home':         '홈',
    'footer-about':        '서비스 소개',
    'footer-privacy':      '개인정보처리방침',
    'h1':                  '오늘의 안주 추천',
    'subtitle':            '술과 날씨를 선택하면 딱 맞는 안주를 알려드려요',
    'label-drink-html':    '술 이름 <span class="label-hint">브랜드명도 OK (예: 발베니, 조니워커 블루)</span>',
    'label-weather':       '날씨',
    'weather-empty':       '선택하세요',
    'weather-hot':         '더운 날 (30도 이상)',
    'weather-warm':        '따뜻한 날 (20~29도)',
    'weather-cool':        '선선한 날 (10~19도)',
    'weather-cold':        '추운 날 (10도 이하)',
    'weather-rainy':       '비 오는 날',
    'weather-snowy':       '눈 오는 날',
    'btn-recommend':       '안주 추천받기',
    'tab-history':         '스토리',
    'tab-chars':           '특성',
    'tab-pairing':         '어울리는 메뉴',
    'info-h2':             '왜 술과 날씨에 따라 안주가 달라질까요?',
    'info-p':              '같은 술이라도 더운 여름날과 추운 겨울날에 끌리는 안주는 전혀 다릅니다. 더운 날에는 가볍고 시원한 안주가 입맛을 살려주고, 추운 날에는 뜨끈하고 기름진 안주가 몸을 데워줍니다. Mariage는 이런 날씨와 술의 특성을 분석해 최적의 안주를 추천합니다.',
    'card-soju-h3':        '🍶 소주 페어링',
    'card-soju-p':         '소주의 깔끔한 목 넘김은 기름진 고기나 자극적인 안주와 잘 어울립니다. 삼겹살, 닭발, 파전은 소주의 클래식 파트너입니다.',
    'card-beer-h3':        '🍺 맥주 페어링',
    'card-beer-p':         '맥주의 청량감과 탄산은 치킨, 피자, 감자튀김 같은 기름진 음식의 느끼함을 씻어줍니다. 더운 날엔 특히 최고의 조합입니다.',
    'card-wine-h3':        '🍷 와인 페어링',
    'card-wine-p':         '레드 와인의 타닌은 단백질이 풍부한 육류와 결합해 떫은맛을 줄여줍니다. 화이트 와인의 산미는 해산물과 치즈를 더욱 빛나게 합니다.',
    'card-whiskey-h3':     '🥃 위스키 페어링',
    'card-whiskey-p':      '위스키의 복합적인 향은 훈제 음식, 견과류, 다크 초콜릿과 공명합니다. 아이리시 위스키는 치즈와, 버번은 달콤한 음식과 잘 맞습니다.',
    'disclaimer-html':     '⚠️ 본 서비스는 <strong>만 19세 이상</strong>을 대상으로 합니다. 음주는 건강에 해롭습니다. 임신 중 음주는 태아에게 위험합니다. 음주 후 운전은 금지되어 있습니다.',
    'footer-copy-html':    '© 2025 Mariage. 이미지 제공: <a href="https://www.pexels.com" target="_blank" rel="noopener">Pexels</a>',
    'input-ph':            '마실 술을 입력하세요',
    'alert-weather':       '날씨를 선택해주세요!',
  },
  en: {
    'nav-about':           'About',
    'nav-privacy':         'Privacy Policy',
    'footer-home':         'Home',
    'footer-about':        'About',
    'footer-privacy':      'Privacy Policy',
    'h1':                  "Today's Pairing",
    'subtitle':            "Choose your drink and weather — we'll find the perfect pairing",
    'label-drink-html':    'Drink Name <span class="label-hint">Brand names OK (e.g., Balvenie, Johnnie Walker Blue)</span>',
    'label-weather':       'Weather',
    'weather-empty':       'Select weather',
    'weather-hot':         'Hot day (30°C+)',
    'weather-warm':        'Warm day (20–29°C)',
    'weather-cool':        'Cool day (10–19°C)',
    'weather-cold':        'Cold day (below 10°C)',
    'weather-rainy':       'Rainy day',
    'weather-snowy':       'Snowy day',
    'btn-recommend':       'Get Recommendations',
    'tab-history':         'Story',
    'tab-chars':           'Characteristics',
    'tab-pairing':         'Pairings',
    'info-h2':             'Why Does Pairing Change with Weather?',
    'info-p':              "Even with the same drink, the ideal snack differs between hot summer and cold winter. Hot days call for light, refreshing bites; cold days need something warm and hearty. Mariage analyzes your drink and the weather to recommend the perfect pairing.",
    'card-soju-h3':        '🍶 Soju Pairing',
    'card-soju-p':         "Soju's clean, crisp finish pairs beautifully with fatty meats and bold flavors. Samgyeopsal, spicy chicken feet, and pajeon are classic partners.",
    'card-beer-h3':        '🍺 Beer Pairing',
    'card-beer-p':         "Beer's carbonation and refreshing fizz cut through the richness of fried chicken, pizza, and fries. Especially perfect on a hot day.",
    'card-wine-h3':        '🍷 Wine Pairing',
    'card-wine-p':         "Red wine tannins bind with proteins in meat, softening astringency. White wine's acidity makes seafood and cheese shine brighter.",
    'card-whiskey-h3':     '🥃 Whisky Pairing',
    'card-whiskey-p':      "Whisky's complex aromas resonate with smoked foods, nuts, and dark chocolate. Irish whisky shines with cheese; bourbon pairs with sweet bites.",
    'disclaimer-html':     '⚠️ This service is intended for those <strong>aged 19 and over</strong>. Alcohol is harmful to health. Do not drink during pregnancy. Never drink and drive.',
    'footer-copy-html':    '© 2025 Mariage. Photos by <a href="https://www.pexels.com" target="_blank" rel="noopener">Pexels</a>',
    'input-ph':            'Enter your drink',
    'alert-weather':       'Please select the weather!',
  },
};

// ── i18n ─────────────────────────────────────────────────────────────────
let currentLang = 'ko';

const drinks_i18n = {
  en: {
    '발베니': {
      story: 'Founded in 1892 by William Grant in Speyside, The Balvenie is one of the last distilleries in Scotland to maintain its own barley farm and traditional floor maltings. The signature DoubleWood undergoes two distinct cask finishes—American bourbon then Oloroso sherry—a technique Grant pioneered after noticing how leftover barrels changed whisky overnight.',
      characteristics: "Honey and vanilla lead, followed by fresh orchard fruit and a delicate spice. DoubleWood's dual maturation adds a rich dried-fruit layer. The result is approachable yet complex—a soft, creamy texture that makes it one of the best entry points into single malt whisky.",
      pairingNote: "Balvenie's honeyed sweetness mirrors dark chocolate's bitter cocoa, while its creaminess cushions salty blue cheese. Walnuts and dried figs echo the vanilla and dried-fruit notes of the cask.",
    },
    '맥캘란': {
      story: 'Established in 1824 on the banks of the River Spey, The Macallan earned a Royal Warrant and became the cornerstone of blended Scotch for over a century—so prized that master blenders kept it secret. Today it defines sherry-cask maturation, sourcing every cask directly from Jerez cooperages and inspecting each barrel by hand before shipping to Scotland.',
      characteristics: 'Intense dried-fruit richness—raisins, oranges, figs—layered with warming ginger and Christmas spice. A long finish of dark chocolate and polished oak. Full-bodied and opulent, the Macallan rewards patience with a complexity that unfolds slowly in the glass.',
      pairingNote: 'The Macallan\'s sherry and dried-fruit character is amplified by smoked salmon\'s fat and salt, and by aged cheddar\'s crystalline texture. Apricot pastry mirrors the stone-fruit notes in the cask.',
    },
    '글렌피딕': {
      story: 'On Christmas Day 1887, William Grant and his seven children built Glenfiddich distillery by hand—literally laying the stones themselves. The iconic triangular bottle was introduced in 1957 to stand out on shelves, and the stag logo has been unchanged ever since. Today the same family, in its fifth generation, makes the world\'s best-selling single malt.',
      characteristics: 'Glenfiddich\'s hallmark is its fresh pear-and-apple character, achieved by short fermentation in copper washbacks. Light floral notes and gentle vanilla from ex-bourbon casks make it the most approachable single malt on the market—crisp and clean with almost no heavy oak.',
      pairingNote: "Glenfiddich's light fruitiness pairs beautifully with fresh fish and creamy cheeses, where it acts as a palate-cleanser rather than competing. Apple crumble mirrors the distillery's signature orchard character.",
    },
    '라프로익': {
      story: 'Founded in 1815 on Islay\'s southern shore, Laphroaig cut its own peat from local bogs and dried barley over that smoke—a necessity that became its signature. HRH King Charles III has been a fan for decades, granting it a Royal Warrant. Their "Friends of Laphroaig" membership rewards loyalty with a square foot of Scottish peat bog—yours to visit.',
      characteristics: "Laphroaig is the most polarising whisky in Scotland: an enormous wall of iodine, seaweed, and bonfire smoke that either hooks you for life or sends you running. Behind that smoke lurks surprising sweetness—vanilla, honey, a hint of tropical fruit—that only reveals itself once the smoke has had its say.",
      pairingNote: 'The iodine and sea-salt in Laphroaig act as natural seasonings for raw oysters, turning simple shellfish into something dramatic. Smoked mackerel and strong blue cheese are bold enough to hold their own against the peat.',
    },
    '탈리스커': {
      story: 'Built in 1830 on the Isle of Skye, Talisker faced closure or relocation several times but survived thanks to its uncompromising coastal character. Robert Louis Stevenson called it "the King o\' drinks" in verse. Its worm-tub condensers—older than most living people—are credited with giving the spirit its distinctive oily, full-bodied texture.',
      characteristics: 'A fierce burst of black pepper and salt spray on the palate—like standing at the bow of a ship in a North Atlantic gale. Sweet maritime peat, dried fruit, and a warming spice finish that Stevenson described as the taste of the sea itself. Medium-bodied but intensely expressive.',
      pairingNote: "Talisker's pepper and brine echo and amplify smoked shellfish and cured meats. Pickled vegetables cut through the richness; blue cheese's funk matches the whisky's maritime intensity.",
    },
    '아벨라워': {
      story: "Founded in 1879 near a sacred Celtic spring—\"aberlour\" means \"mouth of the chattering burn\" in Gaelic—the distillery was rebuilt after a catastrophic fire in 1898. Its a'bunadh (\"of the origin\" in Gaelic) expression, released at cask strength with no chill-filtration, became a cult favourite by accident: the master distiller simply bottled from the best casks he had.",
      characteristics: 'Warm baking spice—cinnamon, clove, nutmeg—with lush sherry-soaked cherries and plum. Lighter than Macallan but with a clearer spice signature. The finish lingers with dark chocolate and dried fruit, making it the ideal winter dram served neat or with a single drop of water.',
      pairingNote: "Aberlour's sherry-spice profile stands up beautifully to salty charcuterie and aged cheese. Dried figs and dark chocolate mirror the cask's influence; mixed nuts add texture without competing.",
    },
    '글렌리벳': {
      story: "In 1824, George Smith became the first distiller in the Highlands to take out a license under the new Excise Act—a brave and dangerous move that drew death threats from illicit distillers who feared legitimate competition. His whisky quickly became so famous that 27 others added \"Glenlivet\" to their names, forcing a legal battle that gave Smith sole right to \"The Glenlivet.\"",
      characteristics: 'Delicate tropical fruit—pineapple, mango, passion fruit—with fresh floral aromatics and gentle vanilla from long American oak maturation. The smoothest and most approachable of the classic Speyside malts, making it the top-selling single malt in North America for decades.',
      pairingNote: "Glenlivet's light, floral fruitiness acts as a palate freshener alongside Camembert and smoked salmon, lifting their richness without overpowering. Apple crumble is a natural match for the distillery's orchard fruit character.",
    },
    '조니워커 블루': {
      story: 'Blue Label, launched in 1992, represents the pinnacle of Johnnie Walker\'s 200-year blending tradition. Master blenders select only 1 in every 10,000 casks—including rare fillings from \"ghost distilleries\" that no longer exist. The bottle carries a serial number and each batch is individually approved, making it one of the few blended Scotches that collectors actively seek.',
      characteristics: 'Extraordinarily smooth and silky—the hallmark of ultra-old grain whiskies that have shed their rough edges through decades in wood. Honey, dried fruit, gentle smoke, and a whisper of sea air weave into a finish that lasts many minutes. No single flavour dominates; the art is in the seamless harmony.',
      pairingNote: "Blue Label's supreme refinement demands ingredients of equal quality. Caviar and oysters meet its oceanic undertones; dark chocolate truffles echo its dried-fruit depth. Parmesan's crystalline salinity is the perfect foil.",
    },
    '조니워커 블랙': {
      story: 'John Walker\'s son Alexander perfected the Black Label formula in the 1860s—blending whiskies aged at least 12 years to ensure consistent quality. Sold globally since the 1900s, Black Label became the definition of premium blended Scotch. The distinctive slanted label, designed so more text could fit on the bottle, became one of the world\'s most recognised packaging trademarks.',
      characteristics: 'A masterclass in balance: sweet vanilla and stone fruit up front, a thread of signature smoke through the middle, and a clean, slightly warming finish. Medium-bodied with a texture that works equally well neat, on the rocks, or in a highball. The reference point against which other blended Scotches are judged.',
      pairingNote: "Black Label's smoky-sweet balance is the ideal partner for grilled meats, where the char mirrors the smoke, and for mature cheddar, where the fat softens the whisky's drying finish. Pickles cut through and reset the palate.",
    },
    '시바스리갈': {
      story: 'James and John Chivas were grocery and wine merchants in Aberdeen who supplied the Royal household in the 1840s. Their whisky blend became so beloved at court that it earned a Royal Warrant—the seal of approval that still appears on every bottle. Chivas 12 was the first luxury blended Scotch targeted at the American market, helping define what \"Scotch whisky\" meant to the world.',
      characteristics: 'Honey, vanilla, and ripe orchard fruit on the nose; creamy and smooth on the palate with a gentle sweetness that never becomes cloying. A touch of heather honey and almonds on the finish. The classic easy-drinking blended Scotch, ideal for highballs or on the rocks for newcomers.',
      pairingNote: "Chivas's soft sweetness and creamy texture make it ideal with Camembert—both share a rounded, milky richness. Roasted almonds and light fruit tarts complement the whisky's honey and orchard-fruit profile.",
    },
    '발렌타인': {
      story: "George Ballantine opened a grocery shop in Edinburgh in 1827 and quietly began blending whisky for his best customers. By the time Queen Victoria granted him a Royal Warrant in 1895, Ballantine's was already famous across Europe. The 17 Year Old, introduced in the 1930s, blends over 40 single malts and grains—a complexity that has made it the number-one Scotch in Asia for decades.",
      characteristics: 'Elegant floral aromatics—heather, honey, and a hint of toffee—lead into ripe fruit and smooth vanilla. A perfectly balanced mid-palate with oak structure that never feels heavy. The long, slightly spicy finish reveals the age and care behind the blend. An all-rounder that suits every occasion.',
      pairingNote: "Ballantine's floral elegance complements charcuterie's salt and fat, and pairs naturally with dried fruit and aged cheese. Apricot tart mirrors the whisky's ripe stone-fruit sweetness.",
    },
    '잭다니엘': {
      story: "Jasper \"Jack\" Daniel learned distilling from a preacher and enslaved man named Nathan \"Nearest\" Green—a story suppressed for over a century. He registered his distillery in Lynchburg, Tennessee, in 1866, making it the oldest registered in the US. The signature Lincoln County Process—filtering new spirit through ten feet of sugar-maple charcoal—was Jack's own invention, and it's still done the same way today.",
      characteristics: "The charcoal mellowing removes harsh congeners, leaving a uniquely smooth, sweet spirit with caramel, vanilla, and a gentle smokiness. Lighter in body than Kentucky bourbon, with a characteristic slightly sweet finish that makes it the world's best-selling American whiskey and the backbone of countless cocktails.",
      pairingNote: "Jack Daniel's caramel-vanilla sweetness was practically designed to pair with American BBQ—the smokiness echoes and the sweetness cuts through fat. Cheddar and pecan pie echo the whisky's caramel and nut character.",
    },
    '버팔로트레이스': {
      story: "The site of Buffalo Trace distillery has produced bourbon continuously since 1787—surviving Prohibition by obtaining a permit to make \"medicinal\" whiskey. The name honours the ancient buffalo trails that crossed the Kentucky River at that point. Its flagship Buffalo Trace expression was only named and bottled for public sale in 1999; before that, the distillery was better known for producing Blanton's—the world's first commercially bottled single-barrel bourbon.",
      characteristics: 'A textbook Kentucky bourbon: vanilla and caramel from new charred oak, mint and citrus brightness, and a firm but friendly tannin on the finish. Well-rounded at 45% ABV—strong enough to stand up in cocktails but smooth enough to sip neat. Consistently voted best value-for-money bourbon in the world.',
      pairingNote: 'Buffalo Trace\'s classic bourbon profile sings alongside grilled steak—caramel meets char—and smoked cheddar. The vanilla notes make pecan pie a natural dessert pairing.',
    },
    '메이커스마크': {
      story: 'Bill Samuels Sr. famously burned his family\'s 170-year-old rye whiskey recipe before creating Maker\'s Mark in 1953—literally setting the past on fire. He replaced rye with red winter wheat for softness and baked a loaf of bread with every possible grain combination before deciding. His wife Margie designed the iconic hand-dipped red wax seal; the exact wax formula has never been replicated.',
      characteristics: 'The wheat substitution gives Maker\'s a distinctly soft, round sweetness absent in rye-based bourbons. Vanilla, light caramel, fresh grain, and a hint of floral honey. No harsh edge anywhere—just a smooth, creamy richness that the industry now calls "wheated bourbon," a category Maker\'s invented.',
      pairingNote: "Maker's Mark's gentle sweetness is flattered by Brie's creamy richness and grilled peaches' caramelised sugar. Pecans echo the whisky's soft nut notes; mild cheddar stays out of the way and lets the bourbon shine.",
    },
    '야마자키': {
      story: 'In 1923, Shinjiro Torii built Japan\'s first malt whisky distillery in Yamazaki—a valley south of Kyoto renowned for its pure spring water, used by tea masters for centuries. Masataka Taketsuru, who had trained in Scotland, opposed the humid valley location, predicting it would ruin the spirit. He was wrong: the high humidity accelerated maturation in a way no Scottish climate could, creating an entirely new style of whisky.',
      characteristics: 'Silky and delicate—ripe peach, pineapple, and Japanese plum upfront, then a unique sandalwood-and-incense note from rare Japanese mizunara oak. Subtle ginger spice on the finish. The 2003 \"Best Single Malt\" award at the World Whisky Awards sent shockwaves through Scotland and permanently reshaped the global whisky map.',
      pairingNote: "Yamazaki's stone fruit and mizunara sandalwood harmonise with Japanese cuisine's umami-forward flavours. White chocolate truffles mirror the soft sweetness; umeboshi's salt-plum intensity creates an unexpectedly compelling contrast.",
    },
    '히비키': {
      story: 'Hibiki (\"resonance\" or \"echo\") was created in 1989 as Suntory\'s ultimate showcase of Japanese blending art. The 24-faceted bottle—each face representing one of Japan\'s 24 seasonal micro-divisions (nijūshi sekki)—was designed to reflect the changing light differently throughout the day. Master blender Shinji Fukuyo balances whiskies from Yamazaki, Hakushu, and Chita distilleries, changing the recipe slightly each year to maintain consistency as stocks age.',
      characteristics: 'The most elegant blended whisky in the world by many accounts: lychee, rose petals, and tangerine peel in a breathtakingly aromatic entry. White oak adds a refined vanilla structure; a faint hint of Hakushu peat provides depth without smoke. The finish is extraordinarily long and floral, fading like the last note of a piece of music.',
      pairingNote: "Hibiki's floral delicacy calls for equally refined pairings: butter-seared scallops, yuzu sorbet, and mild Camembert all echo the whisky's soft fruit and cream without competing with its nuance.",
    },
    '진로': {
      story: 'Jin Ro (\"true dew\" in Chinese characters) was founded in Pyongyang in 1924, crossing the 38th parallel during the Korean War to restart production in the South. The green glass bottle and toad mascot (두꺼비) became so deeply embedded in Korean culture that even the communist North kept a version. In 2019, Hite-Jinro reintroduced the vintage blue bottle and retro toad design—a nostalgia hit with the MZ generation that created nationwide shortages overnight.',
      characteristics: 'The purest expression of Korean soju: clean, neutral, with the faintest kiss of sweetness. Neither the harshness of 25-degree soju nor the artificial sweetness of modern variants. Distilled from rice and sweet potato, then carbon-filtered to remove all impurities. The most food-friendly spirit in the world—it accompanies everything without getting in the way.',
      pairingNote: "Jinro's clean profile acts as a palate reset between bites of fatty samgyeopsal and spicy kimchi banchan. The slight sweetness softens spice; the neutral character means the food is always the star.",
    },
    '참이슬': {
      story: 'Chamisul (\"true dew\") launched in 1998 and revolutionised Korean soju by introducing bamboo charcoal filtration—four rounds through activated carbon derived from bamboo. The innovation removed the harsh aftertaste that plagued earlier 25-degree sojus, and Chamisul Fresh quickly became the best-selling liquor brand in the world by volume—a title it has held for over two decades.',
      characteristics: 'The benchmark Korean soju: clean, refreshing, with minimal bitterness and a satisfying chill on the palate. Bamboo charcoal filtration creates a purity that allows subtle grain sweetness to show. At 16.9%, it sits in the sweet spot—strong enough to feel like a spirit, light enough to drink through a meal.',
      pairingNote: "Chamisul's crisp clarity is designed to wash away the bold flavours of Korean cooking—it resets the palate after spicy dak-bal and cuts the fat after each piece of samgyeopsal.",
    },
    '처음처럼': {
      story: 'Lotte Chilsung launched Cheoeumlcheoreom (\"like the first time\") in 2006 with a novel twist: alkaline reduced water, processed through an electrolysis cell to raise the pH. The softer water produced a noticeably rounder, sweeter soju—and Lotte marketed it aggressively with pop-culture campaigns. It became the first Korean soju to seriously challenge Jinro\'s dominance and introduced millions of people to the idea that soju could taste different.',
      characteristics: 'Softer and noticeably sweeter than competitors, with almost no bitter finish. The alkaline water gives it a smooth, almost velvety texture. At 16%, it sits at the lower end of soju strength—ideal for long sessions or for drinkers who find the flavour of traditional soju too sharp.',
      pairingNote: "Cheoeumlcheoreom's softness works particularly well with delicate seafood and tofu dishes that stronger sojus would overwhelm. Haemul pajeon and sundubu jjigae let the food's flavours shine while the soju provides a refreshing counter.",
    },
    '새로': {
      story: 'SAERO (\"new\" in Korean) launched in September 2022 as Hite-Jinro\'s answer to health-conscious Gen-Z consumers. The zero-sugar formula uses a combination of erythritol and stevia to replicate sweetness without calories. Demand so far exceeded supply in its first month that convenience stores rationed it to two bottles per customer—creating a social-media frenzy and turning a marketing launch into a cultural moment.',
      characteristics: 'Noticeably clean and dry for a modern soju—the sweetness is there but doesn\'t linger. At 16.9%, the same ABV as classic Chamisul, but with a crisper, more austere finish. The absence of residual sugar means the spirit character comes through more clearly, giving it a slightly more \"grown-up\" feel than other smooth sojus.',
      pairingNote: 'SAERO\'s dry, clean profile is the best match for delicate raw seafood—sashimi, clams, fresh oysters—where residual sugar from other sojus would clash. Dubu-jorim\'s mild spice and tofu\'s soft texture make an ideal pairing.',
    },
    '하이네켄': {
      story: 'Gerard Adriaan Heineken bought a struggling Amsterdam brewery in 1864 at the age of 22. His breakthrough came in 1886 when he hired a chemist from Louis Pasteur\'s Paris laboratory to isolate a yeast strain specifically for lager brewing. That yeast—Heineken A-yeast—is still used in every Heineken brewery worldwide, giving every bottle the same clean, slightly fruity character regardless of where it was made.',
      characteristics: 'A model of European pilsner balance: bright hop bitterness, light malt sweetness, and a clean dry finish. The signature A-yeast adds a faint fruity ester that distinguishes it from cheaper lagers. Served ice-cold, the carbonation is crisp and refreshing without being harsh—the globally understood definition of \"premium beer.\"',
      pairingNote: 'Heineken\'s balanced bitterness cuts through fatty food like a knife—pizza grease, nacho cheese, burger fat all met by the cleansing hop finish. Edamame\'s vegetal nuttiness is a light pairing that respects the beer\'s own flavour.',
    },
    '기네스': {
      story: 'Arthur Guinness signed a 9,000-year lease on a disused Dublin brewery in 1759—an act of extraordinary confidence. The famous stout evolved from \"porter\" through a mistake: an over-roasted batch of malt that created the coffee-black colour. In 1959, Guinness introduced nitrogen gas (in addition to CO₂) into its draught system, creating the iconic cascading bubble effect and thick creamy head that defines the modern pint.',
      characteristics: 'Despite its dark colour, Guinness is surprisingly sessionable at just 4.2% ABV. Roasted barley delivers coffee and bitter chocolate; the nitrogen system creates a silky, almost velvet mouthfeel. Served at exactly 6°C, the famous two-part pour—filling to 75%, waiting 119.5 seconds, then topping up—is as much ritual as technique.',
      pairingNote: "Guinness and oysters is Ireland's oldest food pairing—the stout's roasted bitterness acts as a seasoning for the briny mollusc in a way no other drink can. Smoked cheddar and Irish stew mirror the beer's own depth and warmth.",
    },
    '아사히': {
      story: 'Asahi Super Dry launched in 1987 and fundamentally changed Japanese beer culture overnight. Before it, Japanese lagers were malty and sweet; Super Dry\'s complete fermentation—consuming almost all residual sugar—produced an unprecedented dryness that Japanese drinkers called \"karakuchi.\" Within two years it was Japan\'s best-selling beer, ending Kirin\'s 50-year dominance. It spawned an entire global \"dry beer\" trend that competitors spent years trying to replicate.',
      characteristics: 'The extreme dryness is the point: no sweetness, no maltiness—just sharp, clean carbonation and a brief hop bitterness that vanishes almost immediately, leaving your palate completely neutral. This makes Super Dry uniquely food-friendly because it never competes with the flavours of the dish.',
      pairingNote: "Asahi Super Dry's clean neutrality is tailor-made for Japanese cuisine—yakitori, karaage, gyoza—where the food's subtlety needs a companion that refreshes without interfering.",
    },
    '카스': {
      story: 'CASS launched in 1994 when OB Brewery partnered with Anheuser-Busch to create a domestic lager for a newly prosperous Korean consumer market. Its clean profile and affordable price quickly made it the best-selling beer in South Korea, overthrowing the previous incumbent in record time. CASS is now synonymous with \"chimaek\" (chicken and beer)—a Korean dining institution that generates billions in revenue annually.',
      characteristics: 'Light-bodied and crisp with a clean, refreshing finish. Low bitterness and minimal malt character mean CASS stays out of the way of food—it\'s a thirst-quencher first, a flavour experience second. Subtle grain sweetness and tight carbonation make it extremely easy to drink through a long Korean barbecue session.',
      pairingNote: "CASS's clean, light body is the classic chimaek partner—it washes away fried chicken's coating and cuts through the spicy sauce of yangnyeom chicken without adding any flavour that could clash.",
    },
    '테라': {
      story: 'Terra launched in April 2019 as Hite-Jinro\'s major push to reclaim the domestic market from CASS. The branding centred on \"pure\" ingredients: barley grown in the clean fields of Australia\'s Mornington Peninsula and a proprietary \"real carbonation\" process. The green bottle—a deliberate nod to Heineken—and aggressive marketing campaigns pushed Terra to 40% of the Korean lager market within a year, a market-share gain unprecedented in Korean beer history.',
      characteristics: 'Perceptibly fuller and more flavourful than most Korean lagers—the Australian barley delivers a clean grain note, and the higher carbonation gives it a lively, almost spritzy feel. Slightly more bitter than CASS, but still firmly in the easy-drinking lager camp. The fresh cereal character sets it apart.',
      pairingNote: "Terra's stronger carbonation and grain character hold up better alongside samgyeopsal and jokbal than lighter lagers—the bubbles actively cut through the meat fat.",
    },
    '지평 막걸리': {
      story: "Jipyeong Brewery began in Yangpyeong, Gyeonggi Province in 1925. By the 1990s it had nearly closed, surviving on minimal local sales. Rediscovery came through Seoul's restaurant scene around 2013: chefs and food writers noticed that Jipyeong used no artificial sweeteners or preservatives—rare in commercial makgeolli. Word-of-mouth made it the must-have makgeolli in top Korean restaurants, and the 1L bottle became a status symbol.",
      characteristics: 'The absence of artificial sweetener lets the rice\'s own starch and the lactic fermentation create a natural sweet-sour balance that feels alive on the palate. Fine, persistent bubbles from active yeast, a creamy mouthfeel, and a clean, slightly tart finish. The benchmark against which all premium makgeolli is now measured.',
      pairingNote: "Jipyeong's natural acidity and rice character are the perfect foil for savoury, oily jeon pancakes—the lactic tang cuts the oil and cleanses the palate for the next bite. Dubu-kimchi's bold flavours are balanced by the makgeolli's restrained sweetness.",
    },
    '샤도네이': {
      story: "Chardonnay is the world's most successful white grape—not because it has the most distinctive flavour, but because it has almost none: it\'s a blank canvas that takes on the personality of wherever it grows and however it\'s made. In Chablis, the expression is steely and mineral; in Burgundy's Côte de Beaune, it becomes golden and buttery; in California's Napa Valley, it turns lush and tropical. Winemakers love it; purists debate endlessly whether that transparency is genius or mediocrity.",
      characteristics: "Style depends entirely on winemaking choices. Unoaked (Chablis): green apple, lemon, chalk, almost sparkling in acidity. Oaked (Burgundy, California): butter, hazelnut, vanilla, toast, tropical fruit. Malolactic fermentation converts sharp malic acid to creamy lactic acid, adding richness. The world's most versatile white wine—it can accompany almost any dish.",
      pairingNote: "Oaked Chardonnay's butter and vanilla mirror cream sauces and roast chicken skin. Unoaked (Chablis) is the classic pairing for oysters and raw shellfish—its mineral acidity amplifies the sea flavour.",
    },
    '피노누아': {
      story: "Pinot Noir is winemaking's greatest challenge: the grape's thin skin is vulnerable to rot, frost, and sunburn; its tight clusters trap moisture; and it mutates unpredictably. Yet when everything aligns—the right slope, the right microclimate, the right harvest day—no other red grape produces anything approaching its complexity. Burgundy grands crus like Romanée-Conti sell for $10,000 a bottle not because of marketing but because perfect Pinot Noir is genuinely irreplaceable.",
      characteristics: "At its best: translucent ruby, wild strawberry, cherry, roses, and forest floor when young; evolving to dried rose, truffle, game meat, and autumn leaves with age. The thinnest tannins of any major red grape, making it the most food-versatile red wine—it can even pair with oily fish. High acidity is the key to its longevity.",
      pairingNote: "Pinot Noir's light tannins and bright acidity make it uniquely suited to salmon and duck—proteins with enough fat to soften the wine, and enough flavour to deserve it. Mushrooms echo the grape's earthy, forest-floor quality.",
    },
    '카베르네 소비뇽': {
      story: 'Cabernet Sauvignon was born by accident in 17th-century Bordeaux: a chance cross-pollination between Cabernet Franc and Sauvignon Blanc. Its thick skin and high tannin made it initially difficult to drink young, but its extraordinary ageing potential—50+ years for top Bordeaux—made it the world\'s prestige red grape. The \"Judgement of Paris\" tasting in 1976, where California Cabernets defeated top Bordeaux in a blind tasting, permanently democratised the grape and triggered the modern California wine industry.',
      characteristics: 'The archetypal full-bodied red: blackcurrant, dark cherry, and green bell pepper when young; cedar, tobacco, cigar box, and graphite with age. The highest tannin of any major red grape—those tannins bind to protein, which is why Cabernet and steak is the world\'s most celebrated food pairing. Ages for decades; the best bottles are still improving at 30 years.',
      pairingNote: "Cabernet Sauvignon's high tannins chemically bond with the protein and fat of red meat, softening the wine and enriching the meat simultaneously. The interaction is not just pleasant—it's scientifically transformative.",
    },
    '소비뇽 블랑': {
      story: "New Zealand's Marlborough region, at the top of the South Island, produced its first commercial Sauvignon Blanc in 1979—at a time when no one knew the country made wine. Within a decade, Cloudy Bay's explosive gooseberry-and-grass character had made Marlborough the most talked-about wine region on earth and put New Zealand wine on every sommelier's list. The style was so distinct from French Sauvignon Blanc that it created an entirely new flavour vocabulary for white wine.",
      characteristics: "A spectrum of green: at the cool end, cut grass, green pepper, and gooseberry; at the warm end, passion fruit, guava, and mango. Always dry, always high in acidity, never oaked. The wine world's most reliable refresher—what you reach for when you want something that tastes alive.",
      pairingNote: "Sauvignon Blanc's piercing acidity cuts through the richness of goat's cheese better than almost any other wine—they were practically made for each other. Fresh oysters and sashimi are the maritime equivalent of that classic pairing.",
    },
    '리슬링': {
      story: "Riesling's reputation collapsed in the 1970s and 80s when mass-market producers flooded the UK with cheap, excessively sweet versions under labels like Blue Nun. The grape spent 30 years recovering its prestige. Today it's recognised by Masters of Wine as the world's greatest white grape: the only variety that can range from bone-dry to lusciously sweet at the same quality level, the only white that reliably ages 50+ years, and the only wine that pairs successfully with almost every Asian cuisine.",
      characteristics: "The most aromatic white grape: peach, apricot, flower blossom, lime, and—only in aged Riesling—a unique petrol/kerosene note (from TDN compound) that's considered the pinnacle of complexity. Always high acidity; the sweetness level varies by label (Trocken=dry, Spätlese=medium, Auslese=sweet). The balance of sweetness and acidity prevents it from ever feeling heavy.",
      pairingNote: "Riesling's high acidity and residual sugar tame chilli heat and salt better than any other wine—it's the only Western grape that works reliably with Thai, Vietnamese, and Chinese cuisine.",
    },
    '모스카토': {
      story: "The Muscat grape family is the oldest cultivated in the world—archaeological evidence dates it to ancient Egypt. Moscato d'Asti from Italy's Piedmont region is its most delicate expression: lightly sparkling (frizzante), only 5-7% ABV, and intensely aromatic. It became a global phenomenon in the 2000s partly through hip-hop culture—Drake's 2011 lyric \"drinkin' Moscato\" introduced millions of non-wine-drinkers to Italian sparkling wine overnight.",
      characteristics: "The wine equivalent of a bouquet of summer flowers: peach blossom, apricot, orange zest, and honey, all wrapped in the faintest possible fizz. The low alcohol makes it refreshing rather than indulgent. At its best, Moscato d'Asti is one of the most purely pleasurable drinking experiences in the world—uncomplicated, generous, and beautiful.",
      pairingNote: "Moscato d'Asti's gentle sweetness and bubbles are the perfect bridge between a savoury meal and dessert. Light fruit tarts don't compete; soft cheese like Camembert provides a creamy contrast without fighting the wine.",
    },
    '피노 그리지오': {
      story: "Pinot Grigio and Pinot Gris are the same grape—just made in two completely different styles. In Italy's Trentino-Alto Adige, it's fermented cool, kept off the skins, and released young: pale, crisp, and light. In France's Alsace (as Pinot Gris), extended skin contact and often partial barrel ageing create an amber, full-bodied, spicy wine almost unrecognisable as the same grape. Italian Pinot Grigio became the world's best-selling still wine in the 2000s—reliable, light, and universally inoffensive.",
      characteristics: "Italian style: lemon, green apple, white peach, and mineral freshness. Light to medium body, moderate acidity, clean finish—the wine equivalent of sparkling water with benefits. Alsatian style: golden colour, smoked almond, ginger, white truffle, and a rich, almost oily texture. Same grape, completely different experience.",
      pairingNote: "Pinot Grigio's clean acidity brightens seafood pasta, lifting the brine of clams and mussels. Its lightness means it won't overpower delicate raw shellfish or a simple green salad.",
    },
    '게뷔르츠트라미너': {
      story: "Gewürztraminer's name means \"spiced Traminer\"—Traminer being the village of Tramin (Termeno) in South Tyrol where the grape originated. The Alsace region in France perfected it: the pink-skinned grape is left to hang until almost overripe, then pressed gently to extract intense aromatics without too much skin tannin. In the 1980s and 90s, it was considered too exotic for international markets; today it's celebrated as one of the most individual and recognisable white grapes in the world.",
      characteristics: "Unmistakable: lychee, Turkish rose, ginger, and exotic spice hit you before the glass even reaches your lips. The perfume is so powerful it can fill a room. Off-dry to sweet styles predominate; full body, low acidity, and a long, spicy finish. The wine world's most polarising white—some find the florals heavenly, others overwhelming.",
      pairingNote: "Gewürztraminer's exotic aromatics find their perfect counterpart in foie gras—the wine's intensity matches the richness, and the sweetness balances the liver's bitterness. Strong blue cheese provides the contrast it needs.",
    },
    '샴페인': {
      story: "Dom Pérignon did not invent Champagne—he actually spent much of his career trying to prevent the wine from becoming sparkling, as the bubbles would shatter the bottles. The méthode champenoise evolved from accidents and was perfected over two centuries. In 1772, Veuve Clicquot's riddling table (remuage)—a system of angled racks used to consolidate sediment—solved the problem of cloudy wine and created the modern Champagne industry. Today, the Champagne region protects its name fiercely: only 319 specific communes can legally produce it.",
      characteristics: "The world's most complex sparkling wine: brioche and toast from extended lees ageing, precise green apple and lemon from Chardonnay, red berry and depth from Pinot Noir, structure from Pinot Meunier. The finest Champagnes—vintage and prestige cuvées—age for 20-40 years, developing extraordinary complexity. The bubbles are not decorative; they carry aromatics to the nose more efficiently than still wine.",
      pairingNote: "Champagne's high acidity and fine bubbles act as the ultimate palate cleanser for the ocean's most luxurious produce. Caviar's salt and fat are amplified and cut simultaneously; oysters become transcendent.",
    },
    '프로세코': {
      story: "Prosecco is made by the Charmat method—secondary fermentation in sealed tanks rather than individual bottles—which is faster, cheaper, and produces softer, fruitier bubbles than Champagne's traditional method. The method was invented in the late 19th century by Eugène Charmat and adopted enthusiastically in Veneto, where the Glera grape thrives. Prosecco's ascent to global dominance in the 2010s was driven partly by the Aperol Spritz phenomenon: the cocktail made with Prosecco, Aperol, and soda became the defining drink of a decade.",
      characteristics: "Lighter, lower in alcohol, and more straightforwardly fruity than Champagne—fresh peach, pear, and white blossom in a glass. The bubbles are larger and softer, giving it a gentle, approachable effervescence. Most Prosecco is made to be consumed young, within 2-3 years, when its freshness is at its peak.",
      pairingNote: "Prosecco's fruit-forward freshness is ideal for Italian aperitivo culture: bruschetta, antipasto, prosciutto, and fresh fruit. The light bubbles won't overwhelm delicate flavours.",
    },
    '로제 와인': {
      story: "Provence has been making rosé since the ancient Greeks planted vines near present-day Marseille around 600 BC—making it the oldest wine-producing region in France. For most of the 20th century, Provence rosé was local, cheap, and largely ignored by serious wine critics. The transformation came in the 2000s when celebrity-owned estates (Brad Pitt and Angelina Jolie's Miraval, for instance) rebranded Provence rosé as a luxury lifestyle product, and Instagram turned its pale salmon colour into a social media phenomenon.",
      characteristics: "The lightest, most delicate rosé style in the world: barely pink, with whisper-soft strawberry, watermelon, and dried herbs on the nose. Bone dry, with a mineral freshness that makes it endlessly refreshing. The colour—achieved by leaving grape skins in contact with the juice for just 12-24 hours—is the palest legal definition of rosé wine.",
      pairingNote: "Provence rosé's delicacy and freshness shine alongside Mediterranean food: grilled fish, salade niçoise, and ratatouille. The herbal notes echo Provençal herbs; the freshness revives any summer table.",
    },
    '메를로': {
      story: "Merlot was the world's most fashionable red wine until the 2004 film Sideways made Miles Raymond's dismissal—\"I am NOT drinking any Merlot!\"—a cultural moment that caused Merlot sales to drop 2% overnight while Pinot Noir sales soared. The irony was that the Château Pétrus he worshipped throughout the film—the world's most expensive red wine—is almost entirely Merlot. Sales recovered, but the grape's reputation for sophistication has never quite recovered.",
      characteristics: "Softer and more approachable than Cabernet Sauvignon: plum, black cherry, chocolate, and mocha, with a velvety, supple texture that makes it drinkable much younger. Low tannin at cool-climate sites (Right Bank Bordeaux); richer, more jammy at warm sites (California, Napa). The world's most drinkable serious red wine.",
      pairingNote: "Merlot's soft tannins and plum character work with a wider range of proteins than most reds—it bridges the gap between lean fish (salmon, sea bass) and red meat, making it the sommelier's choice when a table orders both.",
    },
    '시라': {
      story: "Legend held for centuries that Syrah originated in ancient Persia—from Shiraz, the Persian city of poets—brought to France by a Crusader knight. DNA analysis in 1999 shattered the myth: Syrah is a natural cross between Dureza and Mondeuse Blanche grapes, both native to the northern Rhône Valley. Australia's Barossa Valley, planted with old Syrah vines in the 1840s, now harbours the oldest surviving Syrah vines on earth—some over 150 years old.",
      characteristics: "Northern Rhône (Hermitage, Côte-Rôtie): black olive, violet, smoke, and black pepper; medium-high tannin, savory rather than sweet. Australian Shiraz (Barossa, McLaren Vale): jammy blackberry and blueberry, dark chocolate, eucalyptus, and liquorice; full-bodied and generous. Same grape, opposite philosophies—Europe's restraint versus the New World's opulence.",
      pairingNote: "Syrah's peppery, smoky character is a natural match for charred and smoked meats—the Maillard reaction browning of grilled lamb or barbecued ribs echoes the wine's own savoury character.",
    },
    '말벡': {
      story: "Malbec almost disappeared from France: the grape suffered catastrophic losses in the 1956 frost that devastated Bordeaux, and Argentinian winemakers (who had imported cuttings in the 1850s) quietly became its custodians. When Argentine Malbec won international competitions in the 1990s, French growers were amazed to find their almost-forgotten grape thriving at altitude in the Andes. Mendoza's winemakers had, inadvertently, preserved something the French had nearly lost.",
      characteristics: "Argentina's high-altitude Malbec (Luján de Cuyo, Valle de Uco) is uniquely concentrated: intense violet and blackberry aromas, velvety tannins, and a richness that feels plush rather than heavy. The Andes altitude creates cool nights that preserve acidity, preventing the wine from feeling flat or alcoholic despite its depth.",
      pairingNote: "Malbec and Argentine asado (beef grilled over wood fire) is one of the world's great regional food-and-wine pairings—the wine's tannins bind to the beef protein while the fruity richness complements the char.",
    },
    '산지오베제': {
      story: "Sangiovese—\"blood of Jupiter\" in Latin—covers over 10% of all Italian vineyard land, making it Italy's most planted grape. Chianti Classico in Tuscany was nearly destroyed in the 20th century by a government-mandated formula that required adding white grapes, diluting the wine. In the 1970s, renegade producers began defying the rules, making pure Sangiovese or blending it with Cabernet Sauvignon without approval—the unofficial \"Super Tuscans\" that commanded higher prices than the official Chianti and forced a complete rewriting of Italian wine law.",
      characteristics: "High acidity and medium-high tannin: tart cherry, dried tomato, dried herbs, leather, and clay when young; complex dried fruit, tobacco, balsamic, and dark chocolate with age. Its high acidity is not a flaw but a feature—it's the reason Sangiovese works so well with tomato-based cuisine. \"The wine can't live without food\" is literally true: drink Sangiovese alone and the acidity seems harsh; pair it with pasta al pomodoro and it transforms.",
      pairingNote: "Sangiovese and tomato is the world's most elegant food-wine acid resonance: the wine's tartness and the sauce's sourness are in the same key, creating harmony rather than dissonance.",
    },
    '네비올로': {
      story: "Nebbiolo (from nebbia—\"fog\") is named for the autumn mists that settle over the Langhe hills when the late-ripening grape is finally harvested in October. Barolo was once called \"the wine of kings and the king of wines\" because it was cellared by the House of Savoy, Italy's royal family. The grape is so tannic when young that traditional Barolo was aged for 7-10 years in large Slavonian oak casks before release—a wine made for grandchildren, not customers.",
      characteristics: "The most powerful tannin and the highest acidity of any major red grape—a combination that makes young Nebbiolo almost painful to drink but allows it to age for 30-50 years. At maturity: tar, dried rose, truffle, leather, and a profound savoury complexity. The brick-orange rim that develops with age is the most reliable visual indicator of Nebbiolo's evolution.",
      pairingNote: "Barolo's massive tannin and acidity require the richest, most umami-laden foods to soften them: white truffle pasta, aged Parmigiano-Reggiano, and braised beef short rib. Anything lighter will be overwhelmed.",
    },
    '템프라니요': {
      story: "Tempranillo—\"little early one\" in Spanish—ripens a full month before Garnacha on the same vine, a quirk that lets it be harvested in September while other reds wait until October. The grape was carried by pilgrims along the Camino de Santiago, planting cuttings at monasteries along the route—which is why Tempranillo is found in clusters at old pilgrimage sites from La Rioja to the Portuguese Alentejo. Rioja's unique aging classification (Crianza, Reserva, Gran Reserva) was invented specifically because Tempranillo's structure allows—and rewards—extended barrel time.",
      characteristics: "Strawberry, cherry, and dried plum dominate when young; vanilla, coconut, and tobacco develop from American oak ageing (the traditional Rioja style). Lower acidity than most Spanish grapes; moderate tannin; excellent value at every price point. Gran Reserva Rioja, aged 5+ years before release, can age for another 20 in bottle.",
      pairingNote: "Tempranillo's earthy fruit and Rioja's vanilla oak were designed to accompany Iberian food: Manchego cheese, Ibérico ham, roasted lamb. The wine's Spanish DNA makes it most itself alongside Spanish ingredients.",
    },
  },
};

function getDrinkText(drink) {
  if (currentLang === 'en') {
    const t = drinks_i18n.en[drink.key];
    if (t) return { story: t.story, characteristics: t.characteristics, pairingNote: t.pairingNote };
  }
  return { story: drink.history, characteristics: drink.characteristics, pairingNote: drink.pairingNote };
}

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });
  const t = ui_i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  const inp = document.getElementById('drink-input');
  if (inp) inp.placeholder = t['input-ph'];
  document.title = lang === 'en'
    ? "Mariage - Today's Pairing"
    : 'Mariage - 오늘의 안주 추천 | 술과 날씨에 맞는 안주';
  const info = document.getElementById('drink-info');
  if (info && info.classList.contains('visible')) {
    const input = document.getElementById('drink-input').value.trim();
    const drink = findDrink(input);
    if (drink) showDrinkInfo(drink);
  }
  const hint = document.getElementById('drink-category-hint');
  if (hint && !hint.classList.contains('hidden')) {
    const val = document.getElementById('drink-input').value.trim();
    const d2 = findDrink(val);
    if (d2) {
      hint.textContent = d2.fullName + ' · ' + (lang === 'en' && drinkBadgeEn[d2.key] ? drinkBadgeEn[d2.key] : d2.badge);
    } else {
      const cat = classifyDrink(val);
      if (cat) hint.textContent = lang === 'en' ? (categoryLabelEn[cat] + ' detected') : (categoryLabel[cat] + '로 인식했어요');
    }
  }
  const resultBox = document.getElementById('result');
  if (lastRecommend && resultBox && !resultBox.classList.contains('hidden')) {
    const { drink, category, weather, items } = lastRecommend;
    const ctx = (lang === 'en' ? weatherCtx_en : weatherCtx)[category][weather];
    const title = lang === 'en'
      ? (drink ? weatherMoodEn[weather](drink.fullName) : `Best pairings for ${categoryLabelEn[category]}`)
      : (drink ? weatherMood[weather](drink.fullName) : `${categoryLabel[category]}에 어울리는 안주`);
    const tip = drink ? getDrinkText(drink).pairingNote : ctx.tip;
    document.getElementById('result-emoji').textContent = ctx.emoji;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-desc').textContent  = ctx.desc;
    document.getElementById('result-tip').textContent   = '💡 ' + tip;
    const itemsEl = document.getElementById('result-items');
    itemsEl.innerHTML = '';
    items.forEach(n => itemsEl.appendChild(makeFoodCard(n)));
  }
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
const categoryLabelEn = { soju:'Soju', beer:'Beer', makgeolli:'Makgeolli', wine:'Wine', whiskey:'Whisky', cocktail:'Cocktail' };

const drinkBadgeEn = {
  '발베니':           'Single Malt Scotch · Speyside',
  '맥캘란':           'Single Malt Scotch · Speyside',
  '글렌피딕':         'Single Malt Scotch · Speyside',
  '라프로익':         'Single Malt Scotch · Islay',
  '탈리스커':         'Single Malt Scotch · Isle of Skye',
  '아벨라워':         'Single Malt Scotch · Speyside',
  '글렌리벳':         'Single Malt Scotch · Speyside',
  '조니워커 블루':    'Blended Scotch · Luxury',
  '조니워커 블랙':    'Blended Scotch · 12 Year',
  '시바스리갈':       'Blended Scotch · 12 Year',
  '발렌타인':         'Blended Scotch · 17 Year',
  '잭다니엘':         'Tennessee Whiskey · USA',
  '버팔로트레이스':   'Kentucky Bourbon · USA',
  '메이커스마크':     'Kentucky Bourbon · Wheated',
  '야마자키':         'Japanese Single Malt · Suntory',
  '히비키':           'Japanese Blended · Suntory',
  '진로':             'Soju · HiteJinro',
  '참이슬':           'Soju · HiteJinro',
  '처음처럼':         'Soju · Lotte Chilsung',
  '새로':             'Zero-Sugar Soju · HiteJinro',
  '하이네켄':         'Pilsner Lager · Netherlands',
  '기네스':           'Irish Stout · Ireland',
  '아사히':           'Dry Lager · Japan',
  '카스':             'Lager · Korea',
  '테라':             'Lager · Korea (HiteJinro)',
  '지평 막걸리':      'Rice Makgeolli · Gyeonggi, Korea',
  '샤도네이':         'White Wine · Burgundy Origin',
  '피노누아':         'Red Wine · Burgundy Origin',
  '카베르네 소비뇽':  'Red Wine · Bordeaux Origin',
  '소비뇽 블랑':      'White Wine · Loire / Marlborough',
  '리슬링':           'White Wine · Mosel / Alsace',
  '모스카토':         'Sweet Sparkling · Piedmont, Italy',
  '피노 그리지오':    'White Wine · N. Italy / Alsace',
  '게뷔르츠트라미너': 'White Wine · Alsace, France',
  '샴페인':           'Sparkling Wine · Champagne, France',
  '프로세코':         'Sparkling Wine · Veneto, Italy',
  '로제 와인':        'Rosé Wine · Provence, France',
  '메를로':           'Red Wine · Bordeaux Right Bank',
  '시라':             'Red Wine · N. Rhône / Barossa',
  '말벡':             'Red Wine · Mendoza, Argentina',
  '산지오베제':       'Red Wine · Tuscany, Italy',
  '네비올로':         'Red Wine · Piedmont, Italy',
  '템프라니요':       'Red Wine · Rioja, Spain',
};


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
  const txt = getDrinkText(drink);
  document.getElementById('di-flag').textContent     = drink.flag;
  document.getElementById('di-fullname').textContent = drink.fullName;
  document.getElementById('di-badge').textContent    = (currentLang === 'en' && drinkBadgeEn[drink.key]) ? drinkBadgeEn[drink.key] : drink.badge;
  document.getElementById('di-abv').textContent      = 'ABV ' + drink.abv;
  document.getElementById('di-history').textContent  = txt.story;
  document.getElementById('di-chars').textContent    = txt.characteristics;

  const tags = document.getElementById('di-flavor-tags');
  tags.innerHTML = drink.flavorTags.map(t => `<span class="flavor-tag">${t}</span>`).join('');

  const list = document.getElementById('di-pairing-list');
  list.innerHTML = drink.items.map(i => `<span class="pairing-item">${(currentLang === 'en' && foodNameEn[i]) ? foodNameEn[i] : i}</span>`).join('');
  document.getElementById('di-pairing-note').textContent = txt.pairingNote;

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
    hint.textContent = drink.fullName + ' · ' + (currentLang === 'en' && drinkBadgeEn[drink.key] ? drinkBadgeEn[drink.key] : drink.badge);
    hint.classList.remove('hidden');
    showDrinkInfo(drink);
  } else {
    hideDrinkInfo();
    const cat = classifyDrink(val);
    if (val && cat) {
      hint.textContent = currentLang === 'en' ? (categoryLabelEn[cat] + ' detected') : (categoryLabel[cat] + '로 인식했어요');
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

const weatherMoodEn = {
  hot:   n => `${n} on a Summer Night`,
  warm:  n => `${n} on a Warm Evening`,
  cool:  n => `${n} on a Cool Autumn Evening`,
  cold:  n => `${n} on a Winter Night`,
  rainy: n => `${n} and the Sound of Rain`,
  snowy: n => `${n} on a Quiet Snowy Night`,
};

let lastRecommend = null;

function recommend() {
  const drinkInput = document.getElementById('drink-input').value.trim();
  const weather    = document.getElementById('weather-select').value;
  const msg        = document.getElementById('unrecognized-msg');
  msg.classList.add('hidden');

  if (!drinkInput) { document.getElementById('drink-input').focus(); return; }
  if (!weather) { alert(ui_i18n[currentLang]['alert-weather']); return; }

  const drink    = findDrink(drinkInput);
  const category = drink ? drink.category : classifyDrink(drinkInput);

  if (!category) {
    msg.textContent = currentLang === 'en'
      ? `"${drinkInput}" is not recognized yet. Try entering a more specific drink name.`
      : `"${drinkInput}"은(는) 아직 인식하지 못했어요. 술 이름을 더 구체적으로 입력해보세요.`;
    msg.classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    return;
  }

  const ctx   = (currentLang === 'en' ? weatherCtx_en : weatherCtx)[category][weather];
  const fallbackItems = {
    soju:      { hot:['오이소박이','파전','문어숙회'], warm:['삼겹살','목살구이','닭발'], cool:['보쌈','족발','순대국'], cold:['감자탕','해장국','순대국밥'], rainy:['김치전','파전','도토리묵'], snowy:['굴전','대구탕','육개장'] },
    beer:      { hot:['치킨','감자튀김','나초'], warm:['소시지','치즈버거','콘도그'], cool:['피자','치킨','어니언링'], cold:['치즈 플레이터','스테이크','버섯볶음'], rainy:['치킨','피자','감자튀김'], snowy:['프레첼','치즈스틱','트러플 팝콘'] },
    makgeolli: { hot:['오이무침','미나리전','열무김치'], warm:['빈대떡','해물파전','도토리묵무침'], cool:['김치전','파전','감자전'], cold:['수육','편육','닭볶음탕'], rainy:['해물파전','감자전','배추전'], snowy:['굴보쌈','생선구이','두부조림'] },
    wine:      { hot:['카프레제','그린샐러드','새우칵테일'], warm:['치즈 플레이터','바게트','올리브'], cool:['스테이크','리조또','버섯요리'], cold:['양고기구이','소꼬리찜','치즈퐁뒤'], rainy:['치즈퐁뒤','홍합찜','오리 콩피'], snowy:['라클렛','크루통 수프','빵과 버터'] },
    whiskey:   { hot:['올리브','견과류','훈제 치즈'], warm:['스테이크','훈제연어','소시지'], cool:['다크 초콜릿','블루치즈','호두'], cold:['핫토디','삶은 달걀','훈제 소시지'], rainy:['생굴','훈제연어','블랙 올리브'], snowy:['캐러멜 팝콘','트러플 치즈','견과류 믹스'] },
    cocktail:  { hot:['과일 플레이터','쉬림프 칵테일','아보카도 딥'], warm:['카나페','미니 브루스케타','바질 카프레제'], cool:['올리브 핑거푸드','치즈 플레이터','미니 타코'], cold:['핫 바질 스프','브리 치즈 구이','미트볼'], rainy:['피자 슬라이스','치즈 딥 & 칩스','쿠키'], snowy:['초콜릿 퐁뒤','마시멜로','크림 치즈 딥'] },
  };
  const items = fallbackItems[category][weather];

  const title = currentLang === 'en'
    ? (drink ? weatherMoodEn[weather](drink.fullName) : `Best pairings for ${categoryLabelEn[category]}`)
    : (drink ? weatherMood[weather](drink.fullName) : `${categoryLabel[category]}에 어울리는 안주`);
  const tip   = drink ? getDrinkText(drink).pairingNote : ctx.tip;

  document.getElementById('result-emoji').textContent = ctx.emoji;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-desc').textContent  = ctx.desc;
  document.getElementById('result-tip').textContent   = '💡 ' + tip;

  lastRecommend = { drink, category, weather, items };

  const itemsEl = document.getElementById('result-items');
  itemsEl.innerHTML = '';
  items.forEach(n => itemsEl.appendChild(makeFoodCard(n)));

  const resultBox = document.getElementById('result');
  resultBox.classList.remove('hidden');
  resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
