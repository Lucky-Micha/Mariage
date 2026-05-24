#!/usr/bin/env python3
"""
Add English support for page <title> and <meta name="description"> on story pages.
1. Adds data-i18n-content handler to setLang in page-i18n.js
2. Inserts KO + EN title/desc keys into page-i18n.js
3. Adds data-i18n to <title> and data-i18n-content to <meta name="description">
"""
import re, os

STORY_DIR = '/home/user/mariage/stories'
I18N_FILE  = '/home/user/mariage/page-i18n.js'

STORIES = [
    'monkey47', 'ilpum-jinro', 'guinness', 'jack-daniels',
    'dom-perignon', 'mojito', 'laphroaig', 'bacardi', 'absinthe', 'makgeolli'
]

# ─────────────────────────────────────────────────────────────────────────────
# TRANSLATIONS
# ─────────────────────────────────────────────────────────────────────────────
KO_TITLES = {
    'monkey47':      '몽키 47 이야기 | Mariage 브루스토리',
    'ilpum-jinro':   '일품진로 이야기 | Mariage 브루스토리',
    'guinness':      '기네스 이야기 | Mariage 브루스토리',
    'jack-daniels':  '잭다니엘 이야기 | Mariage 브루스토리',
    'dom-perignon':  '돔 페리뇽 이야기 | Mariage 브루스토리',
    'mojito':        '모히또 이야기 | Mariage 브루스토리',
    'laphroaig':     '라프로익 이야기 | Mariage 브루스토리',
    'bacardi':       '바카디 이야기 | Mariage 브루스토리',
    'absinthe':      '압생트 이야기 | Mariage 브루스토리',
    'makgeolli':     '막걸리 이야기 | Mariage 브루스토리',
}

KO_DESCS = {
    'monkey47':    '독일 흑림에서 2차 세계대전 후 영국 장교가 빚은 진, 몽키 47의 탄생 비화. 원숭이 막스, 47종의 식물 원료, 잊혀진 레시피의 재발견.',
    'ilpum-jinro': '1924년 평양에서 시작해 전쟁도 이겨낸 진로와 두꺼비의 100년 역사, 일품진로의 탄생 비화.',
    'guinness':    '9,000년 임대 계약, 기네스 세계기록의 탄생, 질소 거품의 과학까지. 기네스 스타우트의 놀라운 비하인드 스토리.',
    'jack-daniels':'주류 판매 금지 지역에서 만들어지는 세계 최고의 위스키, 금고를 발로 차다 사망한 창업자, 프랭크 시나트라와의 인연까지.',
    'dom-perignon':'샴페인을 발명하려던 게 아니라 없애려 했던 수도사, 악마의 와인, 영국인이 먼저 발명한 샴페인. 돔 페리뇽의 역설적인 탄생 비화.',
    'mojito':      '1586년 해적 드레이크의 처방전에서 헤밍웨이의 단골 술까지. 모히또 430년의 역사와 라임·민트의 과학.',
    'laphroaig':   '세상에서 가장 독특한 위스키, 금주법 시대에 약으로 팔린 스카치, 찰스 왕세자의 왕실 인증까지. 라프로익의 도전적인 역사.',
    'bacardi':     '박쥐 때문에 탄생한 럼, 카스트로 혁명으로 쿠바에서 쫓겨나다, 50년을 이어온 상표권 전쟁. 바카디의 파란만장한 역사.',
    'absinthe':    '빈센트 반 고흐가 마셨다는 초록 요정의 술, 진짜 환각 효과가 있을까? 100년 금지의 진실과 오해.',
    'makgeolli':   '삼국시대부터 이어진 2000년 역사, 일제가 끊고 박정희가 금지한 쌀 막걸리, 비 오는 날 파전이 당기는 과학적 이유.',
}

EN_TITLES = {
    'monkey47':      'Monkey 47 Story | Mariage Brew Stories',
    'ilpum-jinro':   'Ilpum Jinro Story | Mariage Brew Stories',
    'guinness':      'Guinness Story | Mariage Brew Stories',
    'jack-daniels':  'Jack Daniel\'s Story | Mariage Brew Stories',
    'dom-perignon':  'Dom Pérignon Story | Mariage Brew Stories',
    'mojito':        'Mojito Story | Mariage Brew Stories',
    'laphroaig':     'Laphroaig Story | Mariage Brew Stories',
    'bacardi':       'Bacardi Story | Mariage Brew Stories',
    'absinthe':      'Absinthe Story | Mariage Brew Stories',
    'makgeolli':     'Makgeolli Story | Mariage Brew Stories',
}

EN_DESCS = {
    'monkey47':    'A British RAF officer, a Berlin zoo monkey named Max, and a forgotten Black Forest recipe. The origin story of one of the world\'s finest gins.',
    'ilpum-jinro': 'From 1924 Pyongyang to Korea\'s beloved toad brand. The 100-year history of Jinro soju and the revival of traditional Korean distillation.',
    'guinness':    'A 9,000-year brewery lease, the pub debate that spawned the Guinness World Records, and the science of nitrogen bubbles. The remarkable story of Guinness Stout.',
    'jack-daniels':'The world\'s best Tennessee Whiskey made in a county where alcohol sales are banned. The Lincoln County Process, Old No. 7 mystery, and Frank Sinatra connection.',
    'dom-perignon':'A monk who spent his life trying to eliminate bubbles accidentally perfected champagne. The paradox at the heart of Dom Pérignon\'s legacy.',
    'mojito':      'From Sir Francis Drake\'s 1586 medicinal prescription to Hemingway\'s daily drink. The 430-year history of the mojito and the science of lime and mint.',
    'laphroaig':   'The world\'s most divisive whisky. Sold as medicine during Prohibition, awarded a Royal Warrant by Prince Charles, and impossible to feel neutral about.',
    'bacardi':     'The rum born from bats in a Cuban distillery rafters, then forced out by Castro\'s revolution. The story of Bacardi\'s founding and legendary trademark battle.',
    'absinthe':    'Van Gogh\'s green fairy — did absinthe really cause hallucinations? The truth behind 100 years of ban and the remarkable modern revival.',
    'makgeolli':   '2,000 years of Korean history in a milky white bowl. The story of nuruk fermentation, Japanese occupation\'s impact, and the craft makgeolli revival.',
}

def js_esc(s):
    return s.replace('\\', '\\\\').replace("'", "\\'")

# ─────────────────────────────────────────────────────────────────────────────
# 1. Update setLang to handle data-i18n-content
# ─────────────────────────────────────────────────────────────────────────────
with open(I18N_FILE, 'r', encoding='utf-8') as f:
    js = f.read()

OLD_SET_LANG_TAIL = "  document.documentElement.lang = lang === 'en' ? 'en' : 'ko';\n}"
NEW_SET_LANG_TAIL = (
    "  document.querySelectorAll('[data-i18n-content]').forEach(el => {\n"
    "    const key = el.getAttribute('data-i18n-content');\n"
    "    if (t[key] !== undefined) el.setAttribute('content', t[key]);\n"
    "  });\n"
    "  document.documentElement.lang = lang === 'en' ? 'en' : 'ko';\n}"
)

if OLD_SET_LANG_TAIL not in js:
    print("ERROR: setLang tail not found — may already have been patched")
else:
    js = js.replace(OLD_SET_LANG_TAIL, NEW_SET_LANG_TAIL)
    print("✓ setLang updated with data-i18n-content handler")

# ─────────────────────────────────────────────────────────────────────────────
# 2. Build KO + EN title/desc additions
# ─────────────────────────────────────────────────────────────────────────────
def build_additions(titles, descs):
    lines = ["    // ── story page titles & descriptions ──────────────────────────────────"]
    for name in STORIES:
        lines.append(f"    '{name}-page-title': '{js_esc(titles[name])}',")
        lines.append(f"    '{name}-meta-desc': '{js_esc(descs[name])}',")
    return '\n'.join(lines)

ko_adds = build_additions(KO_TITLES, KO_DESCS)
en_adds = build_additions(EN_TITLES, EN_DESCS)

# ─────────────────────────────────────────────────────────────────────────────
# 3. Insert KO additions before guide-cta in KO section
# ─────────────────────────────────────────────────────────────────────────────
KO_ANCHOR = "    'guide-cta': '<strong>지금 바로 시도해보세요!</strong>"
if KO_ANCHOR not in js:
    print("ERROR: KO anchor not found!")
    exit(1)
js = js.replace(KO_ANCHOR, ko_adds + '\n' + KO_ANCHOR, 1)
print("✓ KO title/desc keys inserted")

# ─────────────────────────────────────────────────────────────────────────────
# 4. Insert EN additions after EN makgeolli-body (last occurrence)
# ─────────────────────────────────────────────────────────────────────────────
last_mak = js.rfind("'makgeolli-body'")
if last_mak == -1:
    print("ERROR: EN makgeolli-body not found!")
    exit(1)
line_end = js.index('\n', last_mak) + 1
js = js[:line_end] + en_adds + '\n' + js[line_end:]
print("✓ EN title/desc keys inserted")

with open(I18N_FILE, 'w', encoding='utf-8') as f:
    f.write(js)
print("✓ page-i18n.js written")

# ─────────────────────────────────────────────────────────────────────────────
# 5. Update HTML files
# ─────────────────────────────────────────────────────────────────────────────
def update_html(name):
    path = os.path.join(STORY_DIR, f'{name}.html')
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Add data-i18n to <title>
    html = re.sub(
        r'<title>([^<]+)</title>',
        lambda m: f'<title data-i18n="{name}-page-title">{m.group(1)}</title>',
        html,
        count=1
    )

    # Add data-i18n-content to <meta name="description">
    html = re.sub(
        r'(<meta name="description" content="[^"]*")',
        lambda m: m.group(0).replace(
            '<meta name="description"',
            f'<meta name="description" data-i18n-content="{name}-meta-desc"'
        ),
        html,
        count=1
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"✓ {name}.html updated")

for name in STORIES:
    update_html(name)

print("\nAll done!")
