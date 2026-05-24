#!/usr/bin/env python3
"""
Add English support for:
- Story page h1 (drink name) on all 10 story pages
- drinks-story.html card content (h2, subtitle, badges, teaser)
"""
import re, os

STORY_DIR   = '/home/user/mariage/stories'
I18N_FILE   = '/home/user/mariage/page-i18n.js'
DS_FILE     = '/home/user/mariage/drinks-story.html'

STORIES = [
    'monkey47', 'ilpum-jinro', 'guinness', 'jack-daniels',
    'dom-perignon', 'mojito', 'laphroaig', 'bacardi', 'absinthe', 'makgeolli'
]

# ─────────────────────────────────────────────────────────────────────────────
# DRINK NAMES (h1 on story pages + h2 on card listing)
# ─────────────────────────────────────────────────────────────────────────────
KO_NAMES = {
    'monkey47':     '몽키 47',
    'ilpum-jinro':  '일품진로',
    'guinness':     '기네스',
    'jack-daniels': '잭다니엘',
    'dom-perignon': '돔 페리뇽',
    'mojito':       '모히또',
    'laphroaig':    '라프로익',
    'bacardi':      '바카디',
    'absinthe':     '압생트',
    'makgeolli':    '막걸리',
}
EN_NAMES = {
    'monkey47':     'Monkey 47',
    'ilpum-jinro':  'Ilpum Jinro',
    'guinness':     'Guinness',
    'jack-daniels': "Jack Daniel's",
    'dom-perignon': 'Dom Pérignon',
    'mojito':       'Mojito',
    'laphroaig':    'Laphroaig',
    'bacardi':      'Bacardi',
    'absinthe':     'Absinthe',
    'makgeolli':    'Makgeolli',
}

# ─────────────────────────────────────────────────────────────────────────────
# CARD SUBTITLES (sc-sub) — shorter than story page subtitles
# ─────────────────────────────────────────────────────────────────────────────
KO_CARD_SUBS = {
    'monkey47':     '흑림에서 태어난 진',
    'ilpum-jinro':  '100년 두꺼비의 여정',
    'guinness':     '9,000년 임대 계약',
    'jack-daniels': '금주법 지역의 술',
    'dom-perignon': '거품을 없애려던 수도사',
    'mojito':       '해적의 처방전',
    'laphroaig':    '사랑하거나 혐오하거나',
    'bacardi':      '혁명이 만든 글로벌 제국',
    'absinthe':     '100년간 금지된 초록 요정',
    'makgeolli':    '비 오는 날의 과학',
}
EN_CARD_SUBS = {
    'monkey47':     'A Gin Born in the Black Forest',
    'ilpum-jinro':  'A Century-Long Toad\'s Journey',
    'guinness':     'The 9,000-Year Lease',
    'jack-daniels': 'Whiskey from a Dry County',
    'dom-perignon': 'The Monk Who Fought Bubbles',
    'mojito':       'A Pirate\'s Prescription',
    'laphroaig':    'Love It or Loathe It',
    'bacardi':      'A Revolution-Made Empire',
    'absinthe':     'The Green Fairy, Banned for 100 Years',
    'makgeolli':    'The Science of Rainy Days',
}

# ─────────────────────────────────────────────────────────────────────────────
# CARD BADGES (sc-badges inner HTML)
# ─────────────────────────────────────────────────────────────────────────────
KO_CARD_BADGES = {
    'monkey47':     '<span>🇩🇪 독일</span><span>진(Gin)</span><span>47%</span>',
    'ilpum-jinro':  '<span>🇰🇷 한국</span><span>소주</span><span>35%</span>',
    'guinness':     '<span>🇮🇪 아일랜드</span><span>스타우트</span><span>4.2%</span>',
    'jack-daniels': '<span>🇺🇸 미국 테네시</span><span>테네시 위스키</span><span>40%</span>',
    'dom-perignon': '<span>🇫🇷 프랑스</span><span>샴페인</span><span>12.5%</span>',
    'mojito':       '<span>🇨🇺 쿠바</span><span>칵테일</span><span>10~15%</span>',
    'laphroaig':    '<span>🏴󠁧󠁢󠁳󠁣󠁴󠁿 스코틀랜드 아일라</span><span>싱글몰트</span><span>40%+</span>',
    'bacardi':      '<span>🇵🇷 푸에르토리코</span><span>럼</span><span>40%</span>',
    'absinthe':     '<span>🇨🇭 스위스/프랑스</span><span>리큐르</span><span>45~74%</span>',
    'makgeolli':    '<span>🇰🇷 한국</span><span>전통 탁주</span><span>6~8%</span>',
}
EN_CARD_BADGES = {
    'monkey47':     '<span>🇩🇪 Germany</span><span>Gin</span><span>47%</span>',
    'ilpum-jinro':  '<span>🇰🇷 Korea</span><span>Soju</span><span>35%</span>',
    'guinness':     '<span>🇮🇪 Ireland</span><span>Stout</span><span>4.2%</span>',
    'jack-daniels': '<span>🇺🇸 Tennessee, USA</span><span>Tennessee Whiskey</span><span>40%</span>',
    'dom-perignon': '<span>🇫🇷 France</span><span>Champagne</span><span>12.5%</span>',
    'mojito':       '<span>🇨🇺 Cuba</span><span>Cocktail</span><span>10–15%</span>',
    'laphroaig':    '<span>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Islay, Scotland</span><span>Single Malt</span><span>40%+</span>',
    'bacardi':      '<span>🇵🇷 Puerto Rico</span><span>Rum</span><span>40%</span>',
    'absinthe':     '<span>🇨🇭 Switzerland/France</span><span>Liqueur</span><span>45–74%</span>',
    'makgeolli':    '<span>🇰🇷 Korea</span><span>Traditional Rice Wine</span><span>6–8%</span>',
}

# ─────────────────────────────────────────────────────────────────────────────
# CARD TEASERS (sc-teaser)
# ─────────────────────────────────────────────────────────────────────────────
KO_CARD_TEASERS = {
    'monkey47':     '전후 베를린에서 원숭이를 구조한 영국 장교의 레시피가 독일 흑림에서 부활한 기적의 이야기',
    'ilpum-jinro':  '1924년 평양에서 시작해 전쟁도, 경제위기도 이겨낸 두꺼비 마크의 한 세기',
    'guinness':     '서기 10,759년까지 유효한 임대 계약, 그리고 세계기록을 만든 술집 논쟁',
    'jack-daniels': '주류 판매 금지 지역에서 만들어지는 세계 1위 위스키, 그리고 금고를 발로 차다 사망한 창업자',
    'dom-perignon': '샴페인을 발명하려 한 게 아니라 제거하려 했던 수도사의 이름이 왜 가장 비싼 샴페인에 붙었을까',
    'mojito':       '1586년 해적 프랜시스 드레이크의 선원들을 치료한 처방전에서 헤밍웨이의 단골 술이 되기까지',
    'laphroaig':    '금주법 시대에 의약품으로 위장해 미국에 들어간 소독약 냄새의 위스키, 왕실도 사랑한 그 술',
    'bacardi':      '카스트로의 국유화를 피해 망명한 박쥐 브랜드가 어떻게 세계 럼 시장을 양분했나',
    'absinthe':     '반 고흐와 오스카 와일드의 술이 어떻게 100년간 불법이 됐는지, 그 배후의 세 세력',
    'makgeolli':    '삼국시대부터 이어진 1500년의 역사, 그리고 비 오는 날 파전이 생각나는 과학적 이유',
}
EN_CARD_TEASERS = {
    'monkey47':     'A British RAF officer rescued a monkey in postwar Berlin — his forgotten recipe was reborn decades later in the Black Forest.',
    'ilpum-jinro':  'Starting in 1924 Pyongyang, the toad brand survived war and financial crisis to stand strong for a full century.',
    'guinness':     'A lease valid until the year 10,759, and the pub argument that gave birth to the world\'s most famous book of records.',
    'jack-daniels': 'The world\'s No. 1 whiskey is made in a county where you can\'t buy alcohol — and its founder died kicking his own safe.',
    'dom-perignon': 'Why does the world\'s most expensive champagne bear the name of a monk who spent his life trying to eliminate bubbles?',
    'mojito':       'From the prescription that cured Sir Francis Drake\'s sailors in 1586 to the daily drink of Ernest Hemingway.',
    'laphroaig':    'The antiseptic-smelling whisky that entered the U.S. as medicine during Prohibition — and earned a Royal Warrant from Prince Charles.',
    'bacardi':      'How the bat-logo brand fled Castro\'s nationalization and went on to become one of the world\'s dominant rum empires.',
    'absinthe':     'The drink of Van Gogh and Oscar Wilde — how it became illegal for 100 years, and the three forces behind the ban.',
    'makgeolli':    '1,500 years of history from the Three Kingdoms era, and the science behind why rainy days make you crave pajeon.',
}

def js_esc(s):
    return s.replace('\\', '\\\\').replace("'", "\\'")

# ─────────────────────────────────────────────────────────────────────────────
# Build JS additions
# ─────────────────────────────────────────────────────────────────────────────
def build_ko():
    lines = ["    // ── drink names (h1 + card h2) ──────────────────────────────────────────────"]
    for n in STORIES:
        lines.append(f"    '{n}-name': '{js_esc(KO_NAMES[n])}',")
    lines.append("    // ── drinks-story.html cards ────────────────────────────────────────────────")
    for n in STORIES:
        lines.append(f"    'ds-{n}-sub': '{js_esc(KO_CARD_SUBS[n])}',")
        lines.append(f"    'ds-{n}-badges': '{js_esc(KO_CARD_BADGES[n])}',")
        lines.append(f"    'ds-{n}-teaser': '{js_esc(KO_CARD_TEASERS[n])}',")
    return '\n'.join(lines)

def build_en():
    lines = ["    // ── drink names (h1 + card h2) ──────────────────────────────────────────────"]
    for n in STORIES:
        lines.append(f"    '{n}-name': '{js_esc(EN_NAMES[n])}',")
    lines.append("    // ── drinks-story.html cards ────────────────────────────────────────────────")
    for n in STORIES:
        lines.append(f"    'ds-{n}-sub': '{js_esc(EN_CARD_SUBS[n])}',")
        lines.append(f"    'ds-{n}-badges': '{js_esc(EN_CARD_BADGES[n])}',")
        lines.append(f"    'ds-{n}-teaser': '{js_esc(EN_CARD_TEASERS[n])}',")
    return '\n'.join(lines)

# ─────────────────────────────────────────────────────────────────────────────
# Update page-i18n.js
# ─────────────────────────────────────────────────────────────────────────────
with open(I18N_FILE, 'r', encoding='utf-8') as f:
    js = f.read()

KO_ANCHOR = "    'guide-cta': '<strong>지금 바로 시도해보세요!</strong>"
if KO_ANCHOR not in js:
    print("ERROR: KO anchor not found"); exit(1)
js = js.replace(KO_ANCHOR, build_ko() + '\n' + KO_ANCHOR, 1)
print("✓ KO name/card keys inserted")

# EN: insert after last 'makgeolli-meta-desc' entry
last_pos = js.rfind("'makgeolli-meta-desc'")
if last_pos == -1:
    print("ERROR: EN anchor not found"); exit(1)
line_end = js.index('\n', last_pos) + 1
js = js[:line_end] + build_en() + '\n' + js[line_end:]
print("✓ EN name/card keys inserted")

with open(I18N_FILE, 'w', encoding='utf-8') as f:
    f.write(js)
print("✓ page-i18n.js written")

# ─────────────────────────────────────────────────────────────────────────────
# Update story page h1 elements
# ─────────────────────────────────────────────────────────────────────────────
for name in STORIES:
    path = os.path.join(STORY_DIR, f'{name}.html')
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()
    html = re.sub(
        r'<h1>([^<]+)</h1>',
        lambda m, n=name: f'<h1 data-i18n="{n}-name">{m.group(1)}</h1>',
        html, count=1
    )
    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"✓ stories/{name}.html h1 updated")

# ─────────────────────────────────────────────────────────────────────────────
# Update drinks-story.html cards
# ─────────────────────────────────────────────────────────────────────────────
with open(DS_FILE, 'r', encoding='utf-8') as f:
    ds = f.read()

for name in STORIES:
    ko_name = KO_NAMES[name]
    ko_sub  = KO_CARD_SUBS[name]
    ko_badge_inner = KO_CARD_BADGES[name]
    ko_teaser = KO_CARD_TEASERS[name]

    # h2: <h2>몽키 47</h2>  →  <h2 data-i18n="monkey47-name">몽키 47</h2>
    ds = ds.replace(
        f'<h2>{ko_name}</h2>',
        f'<h2 data-i18n="{name}-name">{ko_name}</h2>',
        1
    )
    # sc-sub
    ds = ds.replace(
        f'<p class="sc-sub">{ko_sub}</p>',
        f'<p class="sc-sub" data-i18n="ds-{name}-sub">{ko_sub}</p>',
        1
    )
    # sc-badges inner
    ds = ds.replace(
        f'<div class="sc-badges">{ko_badge_inner}</div>',
        f'<div class="sc-badges" data-i18n-html="ds-{name}-badges">{ko_badge_inner}</div>',
        1
    )
    # sc-teaser
    ds = ds.replace(
        f'<p class="sc-teaser">{ko_teaser}</p>',
        f'<p class="sc-teaser" data-i18n="ds-{name}-teaser">{ko_teaser}</p>',
        1
    )

with open(DS_FILE, 'w', encoding='utf-8') as f:
    f.write(ds)
print("✓ drinks-story.html updated")

print("\nAll done!")
