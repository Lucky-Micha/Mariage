const data = {
  soju: {
    hot:    { emoji: '🧊', title: '시원한 소주엔 이게 최고!', desc: '더운 날엔 차가운 소주 한 잔! 짭조름하고 시원한 안주가 잘 어울려요.', items: ['오이소박이', '파전', '문어숙회', '새우젓 두부', '미역냉국'], tip: '소주는 4~6도로 차갑게 마시면 더 맛있어요.' },
    warm:   { emoji: '🥩', title: '따뜻한 날엔 고기 한 점!', desc: '날씨처럼 기분도 좋은 날, 소주와 고기의 환상 콤보를 즐겨보세요.', items: ['삼겹살', '목살구이', '닭발', '두부김치', '계란말이'], tip: '고기 구울 때 쌈채소와 된장을 곁들이면 더욱 풍성해요.' },
    cool:   { emoji: '🍖', title: '선선한 가을 소주 안주', desc: '선선한 날씨에 소주 한 잔, 든든한 안주와 함께해요.', items: ['보쌈', '족발', '순대국', '제육볶음', '김치찌개'], tip: '보쌈에 새우젓을 살짝 올리면 소주와 정말 잘 어울려요.' },
    cold:   { emoji: '🍲', title: '추운 날엔 따뜻하게!', desc: '칼바람 부는 날, 따뜻한 국물 안주로 몸을 녹여요.', items: ['감자탕', '해장국', '순대국밥', '동태찌개', '돼지국밥'], tip: '국물 안주는 소주 한 잔 마신 후 한 숟가락씩 떠먹으면 최고예요.' },
    rainy:  { emoji: '🌧️', title: '비 오는 날 소주는 전!', desc: '빗소리와 함께라면 파전 한 장이 제일이죠.', items: ['김치전', '파전', '동동주 전', '도토리묵', '꼴뚜기볶음'], tip: '비 오는 날 전 부치는 소리는 빗소리와 닮았다고 하죠. 전설이에요.' },
    snowy:  { emoji: '❄️', title: '눈 오는 날의 소주', desc: '창밖에 눈이 내리면 따끈한 안주와 소주 한 잔!', items: ['굴전', '대구탕', '육개장', '어묵탕', '홍어무침'], tip: '눈 오는 날엔 창가에서 따뜻한 국물 안주와 함께하면 운치 있어요.' },
  },
  beer: {
    hot:    { emoji: '🍺', title: '더운 날 맥주 최적 안주', desc: '시원한 생맥주엔 바삭한 안주가 최고예요!', items: ['치킨', '감자튀김', '나초', '소시지구이', '팝콘'], tip: '맥주는 얼음컵에 따르면 더 시원하게 즐길 수 있어요.' },
    warm:   { emoji: '🌭', title: '야외 맥주엔 이게 필요해', desc: '따뜻한 날 야외에서 맥주 한 캔, 바비큐 안주 어때요?', items: ['소시지', '치즈버거', '콘도그', '바베큐 립', '옥수수구이'], tip: '야외에서 맥주를 마실 땐 아이스박스에 넣어 차갑게 유지해요.' },
    cool:   { emoji: '🍟', title: '선선한 날 캔맥 안주', desc: '선선한 날씨에 캔맥 한 캔, 바삭한 안주와 함께해요.', items: ['피자', '치킨', '어니언링', '핫도그', '새우튀김'], tip: '맥주와 피자는 영원한 단짝이에요!' },
    cold:   { emoji: '🧀', title: '추운 날 실내 맥주파티', desc: '추운 날엔 실내에서 따뜻하게, 든든한 안주와 맥주 한 잔!', items: ['치즈 플레이터', '스테이크', '버섯볶음', '핫윙', '감자퓨레'], tip: '다크 맥주는 추운 날씨에 잘 어울려요.' },
    rainy:  { emoji: '🍕', title: '비 오는 날 배달 맥주', desc: '비 오는 날엔 배달 시켜 집에서 맥주 파티!', items: ['치킨', '피자', '떡볶이', '순대', '튀김모둠'], tip: '비 오는 날은 배달 음식과 맥주의 날이에요.' },
    snowy:  { emoji: '🍻', title: '눈 오는 날 스낵 맥주', desc: '창밖에 눈을 보며 아늑하게 맥주 한 잔!', items: ['프레첼', '치즈스틱', '트러플 팝콘', '스모크 소시지', '견과류'], tip: '크래프트 맥주는 눈 오는 날의 분위기와 잘 맞아요.' },
  },
  makgeolli: {
    hot:    { emoji: '🥒', title: '더운 날 막걸리 안주', desc: '여름 더위에 시원한 막걸리 한 사발!', items: ['오이무침', '미나리전', '열무김치', '콩국수', '냉채'], tip: '막걸리는 흔들어 마시면 탄산이 살아나 더 맛있어요.' },
    warm:   { emoji: '🥞', title: '봄가을 막걸리 소풍', desc: '꽃구경, 단풍구경 하며 막걸리 한 잔!', items: ['빈대떡', '해물파전', '도토리묵무침', '동동주전', '장떡'], tip: '막걸리는 유산균이 풍부해 건강에도 좋아요.' },
    cool:   { emoji: '🥞', title: '선선한 날 막걸리 전', desc: '서늘한 바람에 전 한 장과 막걸리가 딱이에요.', items: ['김치전', '파전', '감자전', '녹두전', '부추전'], tip: '전을 부칠 때 막걸리를 반죽에 넣으면 더 바삭해요.' },
    cold:   { emoji: '🥟', title: '추운 날 따뜻한 막걸리', desc: '추운 날엔 따뜻하게 데운 막걸리와 뜨거운 안주를!', items: ['수육', '편육', '닭볶음탕', '생굴', '연포탕'], tip: '막걸리는 따뜻하게 데워 마셔도 맛있어요.' },
    rainy:  { emoji: '🌧️', title: '비 오는 날엔 막걸리 전', desc: '비 소리와 막걸리, 그리고 전은 영원한 조합이에요.', items: ['해물파전', '감자전', '동태전', '배추전', '고추전'], tip: '막걸리는 전의 기름진 맛을 깔끔하게 잡아줘요.' },
    snowy:  { emoji: '⛄', title: '눈 오는 날의 막걸리', desc: '하얀 눈을 바라보며 막걸리 한 사발, 운치 있죠.', items: ['굴보쌈', '생선구이', '두부조림', '묵무침', '김치전'], tip: '눈 오는 날 처마 밑에서 마시는 막걸리는 낭만 그 자체예요.' },
  },
  wine: {
    hot:    { emoji: '🍷', title: '여름 와인에 어울리는 안주', desc: '더운 날엔 가볍고 신선한 안주와 화이트 와인을!', items: ['카프레제', '그린샐러드', '새우칵테일', '훈제연어', '냉파스타'], tip: '화이트 와인은 8~12도로 냉장 후 마시면 좋아요.' },
    warm:   { emoji: '🧀', title: '와인 피크닉 안주', desc: '봄가을 야외 피크닉에 와인 한 잔, 근사한 안주와 함께!', items: ['치즈 플레이터', '바게트', '올리브', '포도', '견과류'], tip: '와인과 치즈 페어링: 레드와인엔 숙성 치즈, 화이트엔 신선 치즈.' },
    cool:   { emoji: '🍇', title: '선선한 날 와인 안주', desc: '서늘한 날씨엔 풀바디 레드 와인과 함께해요.', items: ['스테이크', '리조또', '버섯요리', '치즈파스타', '그라탕'], tip: '레드 와인은 16~18도 실온에서 마시면 풍미가 살아나요.' },
    cold:   { emoji: '🥩', title: '겨울 저녁 와인 파티', desc: '추운 겨울 저녁, 따뜻한 음식과 와인 한 잔의 여유!', items: ['양고기구이', '소꼬리찜', '치즈퐁뒤', '뮬드와인', '브루스케타'], tip: '겨울엔 와인을 조금 데워 뮬드 와인으로 즐기는 것도 좋아요.' },
    rainy:  { emoji: '🫕', title: '비 오는 날 와인 안주', desc: '빗소리를 들으며 와인과 함께 로맨틱한 시간을!', items: ['치즈퐁뒤', '홍합찜', '오리 콩피', '뇨키', '트러플 리조또'], tip: '비 오는 날엔 조금 더 무거운 레드 와인이 어울려요.' },
    snowy:  { emoji: '🏔️', title: '눈 오는 날의 와인', desc: '눈 내리는 창밖을 바라보며 와인 한 잔의 사치!', items: ['스위스 치즈', '라클렛', '핫초코 퐁뒤', '크루통 수프', '빵과 버터'], tip: '눈 오는 날엔 따뜻한 뱅쇼(mulled wine)도 훌륭한 선택이에요.' },
  },
  whiskey: {
    hot:    { emoji: '🥃', title: '여름밤 위스키 안주', desc: '더운 날엔 온더락 위스키와 가벼운 안주를!', items: ['올리브', '견과류', '훈제 치즈', '살라미', '다크 초콜릿'], tip: '더운 날엔 위스키를 얼음과 함께 온더락으로 즐겨요.' },
    warm:   { emoji: '🥩', title: '황금빛 저녁 위스키', desc: '따뜻한 날 저녁 노을 보며 위스키 한 잔!', items: ['스테이크', '훈제 연어', '소시지', '체다 치즈', '크래커'], tip: '위스키는 혀 위에서 굴려 모든 풍미를 느껴보세요.' },
    cool:   { emoji: '🍫', title: '선선한 날 위스키 시간', desc: '서늘한 날씨, 위스키의 깊은 풍미를 천천히 즐겨요.', items: ['다크 초콜릿', '블루치즈', '호두', '피클', '하몽'], tip: '싱글몰트 위스키는 물을 몇 방울 넣으면 향이 더 살아나요.' },
    cold:   { emoji: '🔥', title: '추운 날 위스키 난로', desc: '혹한의 날씨, 위스키 한 잔으로 몸을 녹여요.', items: ['핫토디', '삶은 달걀', '훈제 소시지', '구운 감자', '치즈스프'], tip: '추운 날엔 위스키에 꿀, 레몬, 뜨거운 물을 넣은 핫토디가 최고예요.' },
    rainy:  { emoji: '⚡', title: '비 오는 밤 위스키', desc: '빗소리와 위스키 향이 어우러지는 특별한 밤!', items: ['생굴', '훈제 오리', '블랙 올리브', '파테', '무화과잼'], tip: '아이라 위스키의 피트향은 비 오는 날 더욱 매력적이에요.' },
    snowy:  { emoji: '🌨️', title: '눈 내리는 밤 위스키', desc: '조용히 눈이 쌓이는 밤, 위스키 한 잔의 고요함!', items: ['캐러멜 팝콘', '트러플 치즈', '견과류 믹스', '훈제 굴', '꿀'], tip: '눈 오는 날엔 버번 위스키의 달콤함이 특히 잘 어울려요.' },
  },
  cocktail: {
    hot:    { emoji: '🍹', title: '여름 칵테일 안주', desc: '트로피컬 분위기의 칵테일과 상큼한 안주!', items: ['과일 플레이터', '쉬림프 칵테일', '아보카도 딥', '나초', '콜드 타파스'], tip: '열대 과일과 민트를 함께 곁들이면 칵테일 분위기가 살아나요.' },
    warm:   { emoji: '🌺', title: '봄 테라스 칵테일', desc: '따뜻한 날 테라스에서 칵테일과 함께 여유를!', items: ['카나페', '미니 브루스케타', '바질 카프레제', '피타 칩', '후무스'], tip: '꽃을 띄운 칵테일은 봄 분위기를 더욱 살려줘요.' },
    cool:   { emoji: '🍸', title: '선선한 저녁 칵테일', desc: '칵테일 바 분위기로 근사한 저녁을!', items: ['올리브 핑거푸드', '치즈 플레이터', '미니 타코', '스프링롤', '에다마메'], tip: '기후가 선선할 땐 클래식 칵테일(네그로니, 맨하탄)이 잘 어울려요.' },
    cold:   { emoji: '🍊', title: '추운 날 따뜻한 칵테일', desc: '추운 날엔 핫 칵테일과 따뜻한 안주를!', items: ['핫 바질 스프', '브리 치즈 구이', '미트볼', '브레드 볼 수프', '핫 도그'], tip: '아이리시 커피나 핫 토디 같은 따뜻한 칵테일을 도전해보세요.' },
    rainy:  { emoji: '🌈', title: '비 오는 날 홈 칵테일', desc: '집에서 직접 만드는 홈 칵테일과 간편 안주!', items: ['피자 슬라이스', '치즈 딥 & 칩스', '쿠키', '팝콘', '초콜릿'], tip: '진저비어를 넣은 모스코 뮬은 비 오는 날 집에서 쉽게 만들 수 있어요.' },
    snowy:  { emoji: '✨', title: '눈 오는 밤 스페셜 칵테일', desc: '눈 내리는 특별한 밤, 반짝이는 칵테일과 함께!', items: ['초콜릿 퐁뒤', '마시멜로', '크림 치즈 딥', '프레첼', '생강쿠키'], tip: '크리스마스 분위기로 에그노그나 스파이스 사이다를 만들어 보세요.' },
  },
};

const foodImageKeywords = {
  // 소주
  '오이소박이':    'cucumber,kimchi',
  '파전':          'korean,scallion-pancake',
  '문어숙회':      'octopus,seafood',
  '새우젓 두부':   'tofu,korean',
  '미역냉국':      'seaweed,soup',
  '삼겹살':        'pork-belly,grilled',
  '목살구이':      'grilled-pork,bbq',
  '닭발':          'chicken,spicy',
  '두부김치':      'kimchi,tofu',
  '계란말이':      'egg-roll,korean',
  '보쌈':          'boiled-pork,korean',
  '족발':          'braised-pork,korean',
  '순대국':        'korean,soup',
  '제육볶음':      'spicy-pork,stir-fry',
  '김치찌개':      'kimchi-stew,korean',
  '감자탕':        'pork-bone,soup',
  '해장국':        'hangover-soup,korean',
  '순대국밥':      'korean-sausage,soup',
  '동태찌개':      'fish-stew,korean',
  '돼지국밥':      'pork-soup,korean',
  '김치전':        'kimchi-pancake,korean',
  '도토리묵':      'jelly,korean-food',
  '꼴뚜기볶음':   'squid,spicy',
  '굴전':          'oyster,korean-pancake',
  '대구탕':        'fish,soup',
  '육개장':        'beef,spicy-soup',
  '어묵탕':        'fish-cake,soup',
  '홍어무침':      'fermented-fish,korean',
  // 맥주
  '치킨':          'fried-chicken,crispy',
  '감자튀김':      'french-fries,crispy',
  '나초':          'nachos,chips',
  '소시지구이':    'grilled-sausage',
  '팝콘':          'popcorn,snack',
  '소시지':        'sausage,beer',
  '치즈버거':      'cheeseburger,food',
  '콘도그':        'corn-dog,street-food',
  '바베큐 립':     'bbq-ribs,grilled',
  '옥수수구이':    'grilled-corn,street',
  '피자':          'pizza,food',
  '어니언링':      'onion-rings,fried',
  '핫도그':        'hot-dog,food',
  '새우튀김':      'fried-shrimp,tempura',
  '치즈 플레이터': 'cheese-board,platter',
  '스테이크':      'steak,grilled',
  '버섯볶음':      'mushroom,stir-fry',
  '핫윙':          'chicken-wings,spicy',
  '감자퓨레':      'mashed-potato',
  '프레첼':        'pretzel,snack',
  '치즈스틱':      'mozzarella-sticks,fried',
  '트러플 팝콘':   'popcorn,gourmet',
  '스모크 소시지': 'smoked-sausage,meat',
  '견과류':        'mixed-nuts,snack',
  // 막걸리
  '오이무침':      'cucumber-salad,korean',
  '미나리전':      'korean-pancake,herb',
  '열무김치':      'radish-kimchi,korean',
  '콩국수':        'soy-noodles,korean',
  '냉채':          'cold-salad,korean',
  '빈대떡':        'mung-bean-pancake,korean',
  '해물파전':      'seafood-pancake,korean',
  '도토리묵무침':  'acorn-jelly,korean',
  '동동주전':      'rice-wine,korean-pancake',
  '장떡':          'doenjang-pancake,korean',
  '감자전':        'potato-pancake,korean',
  '녹두전':        'mung-bean-pancake',
  '부추전':        'chive-pancake,korean',
  '수육':          'boiled-pork-slices,korean',
  '편육':          'sliced-pork,korean',
  '닭볶음탕':      'spicy-chicken-stew,korean',
  '생굴':          'fresh-oyster,seafood',
  '연포탕':        'octopus-soup,korean',
  '배추전':        'cabbage-pancake,korean',
  '고추전':        'pepper-pancake,korean',
  '굴보쌈':        'oyster,pork',
  '생선구이':      'grilled-fish,korean',
  '두부조림':      'braised-tofu,korean',
  '묵무침':        'jelly-salad,korean',
  // 와인
  '카프레제':      'caprese-salad,tomato',
  '그린샐러드':    'green-salad,fresh',
  '새우칵테일':    'shrimp-cocktail,seafood',
  '훈제연어':      'smoked-salmon',
  '냉파스타':      'cold-pasta,italian',
  '바게트':        'baguette,bread',
  '올리브':        'olives,appetizer',
  '포도':          'grapes,fruit',
  '치즈 플레이터': 'cheese-board,wine',
  '리조또':        'risotto,italian',
  '버섯요리':      'mushroom-dish,gourmet',
  '치즈파스타':    'cheese-pasta,creamy',
  '그라탕':        'gratin,baked',
  '양고기구이':    'lamb-chops,grilled',
  '소꼬리찜':      'oxtail-stew,braised',
  '치즈퐁뒤':      'cheese-fondue,melted',
  '뮬드와인':      'mulled-wine,warm',
  '브루스케타':    'bruschetta,italian',
  '홍합찜':        'steamed-mussels,seafood',
  '오리 콩피':     'duck-confit,french',
  '뇨키':          'gnocchi,italian',
  '트러플 리조또': 'truffle-risotto,gourmet',
  '라클렛':        'raclette,cheese',
  '크루통 수프':   'french-onion-soup',
  '빵과 버터':     'bread-butter',
  '스위스 치즈':   'swiss-cheese',
  '핫초코 퐁뒤':  'chocolate-fondue',
  // 위스키
  '훈제 치즈':     'smoked-cheese',
  '살라미':        'salami,charcuterie',
  '다크 초콜릿':   'dark-chocolate',
  '체다 치즈':     'cheddar-cheese',
  '크래커':        'crackers,cheese',
  '블루치즈':      'blue-cheese',
  '호두':          'walnuts,nuts',
  '피클':          'pickles,jar',
  '하몽':          'jamon,prosciutto',
  '핫토디':        'hot-toddy,whiskey',
  '삶은 달걀':     'boiled-eggs',
  '훈제 소시지':   'smoked-sausage',
  '구운 감자':     'baked-potato',
  '치즈스프':      'cheese-soup',
  '블랙 올리브':   'black-olives',
  '파테':          'pate,charcuterie',
  '무화과잼':      'fig-jam',
  '캐러멜 팝콘':   'caramel-popcorn',
  '트러플 치즈':   'truffle-cheese',
  '견과류 믹스':   'mixed-nuts',
  '훈제 굴':       'smoked-oysters',
  '꿀':            'honey,jar',
  // 칵테일
  '과일 플레이터': 'fruit-platter,colorful',
  '쉬림프 칵테일': 'shrimp-cocktail',
  '아보카도 딥':   'guacamole,avocado',
  '콜드 타파스':   'tapas,spanish',
  '카나페':        'canape,appetizer',
  '미니 브루스케타':'bruschetta,mini',
  '바질 카프레제': 'caprese,basil',
  '피타 칩':       'pita-chips,dip',
  '후무스':        'hummus,chickpea',
  '올리브 핑거푸드':'olives,finger-food',
  '미니 타코':     'mini-tacos,mexican',
  '스프링롤':      'spring-rolls,asian',
  '에다마메':      'edamame,soybean',
  '핫 바질 스프':  'basil-soup,warm',
  '브리 치즈 구이':'baked-brie,cheese',
  '미트볼':        'meatballs,italian',
  '브레드 볼 수프':'bread-bowl,soup',
  '피자 슬라이스': 'pizza-slice',
  '치즈 딥 & 칩스':'cheese-dip,chips',
  '쿠키':          'cookies,baked',
  '초콜릿':        'chocolate,sweet',
  '초콜릿 퐁뒤':  'chocolate-fondue',
  '마시멜로':      'marshmallow,sweet',
  '크림 치즈 딥':  'cream-cheese-dip',
  '프레첼':        'pretzel,snack',
  '생강쿠키':      'gingerbread-cookie',
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
};

function foodImgUrl(name) {
  const kw = foodImageKeywords[name] || name.replace(/\s+/g, '-') + ',food';
  return `https://loremflickr.com/300/225/${encodeURIComponent(kw)}/all`;
}

function makeFoodCard(name) {
  const fallbackEmoji = foodFallbackEmoji[name] || '🍽️';
  const card = document.createElement('div');
  card.className = 'food-card';
  card.innerHTML = `
    <div class="food-card-img-wrap">
      <div class="food-card-skeleton"></div>
      <div class="food-card-fallback">${fallbackEmoji}</div>
      <img
        src="${foodImgUrl(name)}"
        alt="${name}"
        class="loading"
        loading="lazy"
      />
    </div>
    <div class="food-card-name">${name}</div>
  `;
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
  return card;
}

const drinkKeywords = {
  soju: [
    '소주', '진로', '참이슬', '처음처럼', '새로', '한라산', '화요', '이슬톡톡',
    '청하', '별빛청하', '제주한라산', '좋은데이', '맑은이슬',
  ],
  beer: [
    '맥주', '카스', '테라', '한맥', '하이네켄', '기네스', '아사히', '삿포로',
    '칭따오', '호가든', '버드와이저', '코로나', '에일', 'ipa', '라거', '스타우트',
    '밀맥주', '페일에일', '크래프트', '흑맥주', '생맥주', '캔맥',
  ],
  makgeolli: [
    '막걸리', '동동주', '탁주', '생막걸리', '느린마을', '지평', '쌀막걸리',
    '복순도가', '예술막걸리', '서울장수',
  ],
  wine: [
    '와인', '샤도네이', '카베르네', '피노누아', '소비뇽', '리슬링', '모스카토',
    '샴페인', '프로세코', '로제', '보르도', '부르고뉴', '키안티', '말벡', '시라',
    '그르나슈', '뱅쇼', '뮬드와인', '스파클링', '화이트와인', '레드와인', '로제와인',
    '아이스와인', '포트와인',
  ],
  whiskey: [
    '위스키', '위스꺼', '발베니', '조니워커', '잭다니엘', '글렌피딕', '맥캘란',
    '글렌리벳', '라프로익', '달모어', '아벨라워', '오반', '탈리스커', '하이랜드파크',
    '버팔로트레이스', '메이커스마크', '짐빔', '와일드터키', '부커스', '블랜튼',
    '니카', '야마자키', '히비키', '치타', '발렌타인', '시바스리갈', '로얄살루트',
    '올드파', '그란츠', '패스포트', '스카치', '버번', '싱글몰트', '블렌디드',
    '아이리시', '테네시', '라가불린', '글렌모렌지', '달위니', '크라겐모어',
    '아드벡', '스프링뱅크', '글렌드로낙', '글렌알라키', '토모어', '녹두',
  ],
  cocktail: [
    '칵테일', '모히또', '마가리타', '코스모폴리탄', '네그로니', '올드패션드',
    '맨하탄', '다이키리', '진토닉', '보드카', '럼', '진', '테킬라', '압생트',
    '스프리츠', '아페롤', '캄파리', '상그리아', '블러디메리', '위스키사워',
    '롱아일랜드', '피나콜라다', '섹스온더비치', '마티니', '사제락',
  ],
};

const categoryLabel = {
  soju: '소주 계열',
  beer: '맥주 계열',
  makgeolli: '막걸리 계열',
  wine: '와인 계열',
  whiskey: '위스키 계열',
  cocktail: '칵테일 계열',
};

function classifyDrink(input) {
  const q = input.trim().toLowerCase();
  if (!q) return null;
  for (const [category, keywords] of Object.entries(drinkKeywords)) {
    if (keywords.some(k => q.includes(k.toLowerCase()) || k.toLowerCase().includes(q))) {
      return category;
    }
  }
  return null;
}

document.getElementById('drink-input').addEventListener('input', function () {
  const hint = document.getElementById('drink-category-hint');
  const msg = document.getElementById('unrecognized-msg');
  const category = classifyDrink(this.value);
  msg.classList.add('hidden');
  if (this.value.trim() && category) {
    hint.textContent = categoryLabel[category] + '로 인식했어요';
    hint.classList.remove('hidden');
  } else {
    hint.classList.add('hidden');
  }
});

function recommend() {
  const drinkInput = document.getElementById('drink-input').value.trim();
  const weather = document.getElementById('weather-select').value;
  const hint = document.getElementById('drink-category-hint');
  const msg = document.getElementById('unrecognized-msg');

  msg.classList.add('hidden');

  if (!drinkInput) {
    document.getElementById('drink-input').focus();
    return;
  }
  if (!weather) {
    alert('날씨를 선택해주세요!');
    return;
  }

  const category = classifyDrink(drinkInput);
  if (!category) {
    msg.textContent = '"' + drinkInput + '"은(는) 아직 인식하지 못했어요. 소주 / 맥주 / 막걸리 / 와인 / 위스키 / 칵테일 중 하나를 입력해보세요.';
    msg.classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    return;
  }

  hint.textContent = categoryLabel[category] + '로 인식했어요';
  hint.classList.remove('hidden');

  const result = data[category][weather];
  const resultBox = document.getElementById('result');

  document.getElementById('result-emoji').textContent = result.emoji;
  document.getElementById('result-title').textContent = result.title;
  document.getElementById('result-desc').textContent = result.desc;
  document.getElementById('result-tip').textContent = '💡 ' + result.tip;

  const itemsEl = document.getElementById('result-items');
  itemsEl.innerHTML = '';
  result.items.forEach(name => itemsEl.appendChild(makeFoodCard(name)));

  resultBox.classList.remove('hidden');
  resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
