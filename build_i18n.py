#!/usr/bin/env python3
"""
Build i18n additions for story pages.
1. Inserts KO + EN translation keys into page-i18n.js
2. Adds data-i18n attributes to all 10 story HTML files
"""
import re, os

STORY_DIR = '/home/user/mariage/stories'
I18N_FILE = '/home/user/mariage/page-i18n.js'

STORIES = [
    'monkey47', 'ilpum-jinro', 'guinness', 'jack-daniels',
    'dom-perignon', 'mojito', 'laphroaig', 'bacardi', 'absinthe', 'makgeolli'
]

# ─────────────────────────────────────────────────────────────────────────────
# ENGLISH SUBTITLES
# ─────────────────────────────────────────────────────────────────────────────
EN_SUBS = {
    'monkey47':      'A Gin Born in the Black Forest',
    'ilpum-jinro':   'A Century-Long Journey of the Toad',
    'guinness':      'The 9,000-Year Lease',
    'jack-daniels':  'The World\'s Best Whiskey from a Dry County',
    'dom-perignon':  'The Monk Who Tried to Eliminate Bubbles',
    'mojito':        'From a Pirate\'s Prescription to Hemingway\'s Drink',
    'laphroaig':     'Love It or Leave It',
    'bacardi':       'The Rum of Bats, Chased Away by Revolution',
    'absinthe':      'The Green Fairy and 100 Years of Misconception',
    'makgeolli':     'Korea\'s 2,000-Year-Old Brew',
}

# ─────────────────────────────────────────────────────────────────────────────
# ENGLISH BADGES (translated from KO)
# ─────────────────────────────────────────────────────────────────────────────
EN_BADGES = {
    'monkey47':      '<span>🇩🇪 Germany, Black Forest</span><span>Gin</span><span>47%</span>',
    'ilpum-jinro':   '<span>🇰🇷 Korea</span><span>Soju</span><span>35%</span>',
    'guinness':      '<span>🇮🇪 Dublin, Ireland</span><span>Stout</span><span>4.2%</span>',
    'jack-daniels':  '<span>🇺🇸 Lynchburg, Tennessee</span><span>Tennessee Whiskey</span><span>40%</span>',
    'dom-perignon':  '<span>🇫🇷 Champagne, France</span><span>Champagne</span><span>12.5%</span>',
    'mojito':        '<span>🇨🇺 Havana, Cuba</span><span>Cocktail</span><span>~10–15%</span>',
    'laphroaig':     '<span>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Islay, Scotland</span><span>Single Malt</span><span>40–57%</span>',
    'bacardi':       '<span>🇵🇷 Puerto Rico (origin: 🇨🇺 Cuba)</span><span>White Rum</span><span>40%</span>',
    'absinthe':      '<span>🇨🇭 Switzerland (origin)</span><span>Spirit</span><span>45–74%</span>',
    'makgeolli':     '<span>🇰🇷 Korea</span><span>Makgeolli</span><span>6–8%</span>',
}

# ─────────────────────────────────────────────────────────────────────────────
# ENGLISH BODIES
# ─────────────────────────────────────────────────────────────────────────────
EN_BODIES = {}

EN_BODIES['monkey47'] = """
<h2>The Black Forest Stage</h2>
<p>The Schwarzwald — Black Forest — in Baden-Württemberg, southwestern Germany. Peaks rising to 1,500 meters, dense fir forests, crystal-clear streams, and centuries of accumulated peat. Cloudberries, blackberries, cranberries, and dozens of lesser-known wild plants found nowhere else hide throughout this forest. Monkey 47 is a gin that bottles this entire forest. Two numbers define it: 47 botanical ingredients and 47% ABV. But the real story begins not with numbers, but with a British officer and a single monkey.</p>
<h2>Postwar Berlin: A Zoo in Ruins</h2>
<p>In 1945, as World War II ended, Berlin lay in ruins. Wing Commander Colin Scott of the Royal Air Force was stationed in occupied Germany, assigned to postwar reconstruction. One of his tasks was to help rebuild the Berlin Zoo, devastated by Allied bombing. Once Europe's largest zoo, it had lost nearly all its animals — only 91 of roughly 4,000 survived.</p>
<p>During the rebuilding, Scott discovered a lone rhesus monkey huddled in the corner of his enclosure, barely eating. His name was Max. Scott began caring for him personally, and Max slowly recovered. In a city still bearing war's wounds, Max became a source of hope. The sight of British soldiers and German civilians smiling together at one small monkey was itself a symbol of reconciliation.</p>
<h2>Down to the Black Forest</h2>
<p>After his Berlin posting ended, Scott moved to the Schwarzwald. He ran a small guesthouse and began foraging local wild plants to distill his own gin. As a British man with a natural love of gin, he wanted to create something entirely new — not a typical London Dry, but a gin built from the Black Forest's unique botanicals. Max came along too, becoming the guesthouse mascot. Scott named his gin "Monkey" in Max's honor — 47 botanicals, 47% ABV. Two numbers that would become the drink's identity.</p>
<h2>Rediscovering a Forgotten Recipe</h2>
<p>After Scott passed away, his recipe was completely forgotten for decades. The guesthouse closed, and stories of Max survived only in the memories of local elders. Then in 2006, entrepreneur and gin enthusiast Alexander Stein was traveling through the Schwarzwald when he stumbled upon an old recipe notebook in a guesthouse storeroom. The pages were yellowed, but the writing was clear — a list of 47 botanicals, distillation methods, and a brief dedication to Max.</p>
<p>Stein saw not just a recipe but a piece of history. He partnered with local distillers and botanists to recreate it for the modern era. Some botanicals had to be foraged directly in the forest; others required sourcing from across the globe. After four years of experimentation, Monkey 47 launched in 2010.</p>
<h2>47 Botanicals — Bottling a Forest</h2>
<p>Monkey 47's 47 botanicals include the expected gin staples — juniper, coriander, angelica root — alongside rare Black Forest plants: lingonberries (Preiselbeere), spruce tips, yarrow, and blackberries. Cranberry powder from the forest adds unique acidity. Each botanical is macerated separately to preserve individual character, then blended. The entire process — from botanical selection to the final distillation in traditional copper pot stills — is carried out at the small Stählemühle distillery in the forest. The result is one of the most aromatic gins in the world: floral, herbal, spicy, and fresh all at once.</p>
<h2>The Distiller's Cut — Annual Limited Editions</h2>
<p>Each year, Monkey 47 releases a "Distiller's Cut" — a limited-edition bottling that adds a 48th seasonal botanical. Past editions have featured sweet clover, wild garlic blossom, and Douglas fir. These releases are produced in tiny quantities and distributed exclusively to fine spirits stores and cocktail bars worldwide, selling out within hours. The Distiller's Cut has become one of the most sought-after annual spirits releases in the world.</p>
<blockquote class="story-quote">A postwar RAF officer, a surviving zoo monkey, and a forgotten recipe notebook. Monkey 47 is not just a gin — it is the Black Forest itself, distilled into a bottle.</blockquote>
<div class="story-pairing-box">
<h3>🍽 Food Pairing</h3>
<p>Monkey 47's complex botanical profile pairs beautifully with seafood. Oysters, smoked salmon, and light sashimi let the gin's layered botanicals shine without competing flavors. A simple Monkey 47 &amp; Tonic with quality tonic water is itself a masterpiece — tonic's quinine highlights the floral and citrus notes. For cocktails, a Monkey Sour with lemon juice and egg white softens the botanical intensity. In Korean cuisine, light dishes such as kongnamul-guk (bean sprout soup) or grilled white fish make elegant partners.</p>
</div>
""".strip()

EN_BODIES['ilpum-jinro'] = """
<h2>1924 — A Story That Began in Pyongyang</h2>
<p>Every Korean has seen the toad logo. Jinro is not merely a soju brand — it is a living witness to modern Korean history. The story begins in 1924 in what is now Yonggang County, South Pyongan Province, North Korea. A young entrepreneur named Jang Hak-yeop founded the Jincheon Brewing Company. While hundreds of small distilleries existed across colonial Korea, Jang was different: he did not simply want to sell alcohol — he wanted to make a drink people could trust.</p>
<p>He later renamed the company Jinro (眞露) — "true dew" in Chinese characters. Pure, clear spirit was the founding philosophy. That name became the spiritual backbone that sustained the company through a century of hardship.</p>
<h2>The Secret of the Toad Mascot</h2>
<p>The toad has been a symbol in East Asian culture since ancient times — admired for surviving poison through sheer resilience. In Joseon-era folk paintings, the toad represented fortune, perseverance, and indomitable will. Jang Hak-yeop chose the toad to express that same spirit: we will not be broken. The choice proved prophetic. Jinro survived Japanese occupation, division, war, economic crisis, and a corporate bankruptcy — exactly like a toad that outlasts every poison.</p>
<h2>Japanese Occupation — The End of Home Brewing</h2>
<p>In 1916, Japanese colonial authorities introduced a liquor tax law that effectively banned traditional home brewing (gayangjoo). Hundreds of years of household recipes, passed down through generations, were wiped out in a few years. In the resulting market for commercial soju, Jinro steadily grew its share across northern Korea through consistent quality.</p>
<h2>The Korean War — Losing Everything, Then Rebuilding</h2>
<p>On June 25, 1950, the Korean War broke out. As North Korean forces swept south, the Pyongyang factory was destroyed in the bombing. Jang fled with his employees with nothing. But as soon as the armistice was signed in 1953, he broke ground on a new factory in Yeongdeungpo, Seoul. With rice scarce in the war's aftermath, he made soju from sweet potatoes. Like a toad outlasting poison, Jinro outlasted war.</p>
<h2>The Era of Flour-Based Soju</h2>
<p>In 1965, the Park Chung-hee government banned grain-based spirits due to food shortages, forcing all soju producers to use wheat flour instead. Flour soju was harsh and off-flavored. Jinro responded by pioneering activated-carbon filtration to remove off-notes — a technique that became the foundation of the brand's identity as smooth and clean. Constraint bred innovation.</p>
<h2>Ilpum Jinro — A Return to Tradition</h2>
<p>When the 1988 Seoul Olympics prompted a relaxation of grain regulations, Jinro immediately returned to rice and launched Ilpum Jinro (一品眞露 — "first-rank true dew"). Made solely from rice, aged in traditional onggi earthenware and then distilled, at 35% ABV it is far stronger than modern diluted soju. Where contemporary soju emphasizes low alcohol and smoothness, Ilpum Jinro revives the depth and aroma of the traditional Joseon-era distilled spirits that scholars and aristocrats once enjoyed. A single sip delivers a sweet rice note on the tongue, a quiet grain aroma in the nose, and a warm, long finish.</p>
<h2>The Retro Wave and Jinro Is Back</h2>
<p>In 2019, Jinro made a bold move: it revived the retro green-bottle design from the 1970s–80s, complete with the original toad illustration, and launched "Jinro Is Back." Young consumers were captivated. A drink their grandfathers and fathers had loved was reborn as something cool and nostalgic. Millions of bottles sold in the first year, bringing a new generation to the Jinro family. The toad that started in Pyongyang in 1924 had found its way to the tables of the millennial and Gen Z generation, a century later.</p>
<blockquote class="story-quote">Japanese occupation, the Korean War, the economic development era, the 1997 financial crisis, and the 2019 retro wave. The Jinro toad carries a century of Korean modern history on its back.</blockquote>
<div class="story-pairing-box">
<h3>🍽 Food Pairing</h3>
<p>At 35% ABV, Ilpum Jinro is best enjoyed neat (nieuteu), sipped slowly. Traditional Korean pairings begin with fatty meat — samgyeopsal (grilled pork belly) is the classic. Braised soy-sauce dishes like andong jjimdak also complement the spirit beautifully. Offal dishes — gopchang, daechang — with their intense, rich flavor are well-matched to Ilpum Jinro's depth. Served cold, it is clean and sharp; at room temperature, the rice aroma blooms more fully. Simple dried snacks — jerky, nuts — make elegant companions when you want to focus on the spirit itself.</p>
</div>
""".strip()

EN_BODIES['guinness'] = """
<h2>The 9,000-Year Lease — History's Most Daring Signature</h2>
<p>On December 31, 1759, at a run-down brewery on the edge of Dublin, history's most audacious contract was signed. Arthur Guinness, a 34-year-old brewer, signed the lease for the St. James's Gate brewery. The annual rent: £45. The term: 9,000 years — legally valid, expiring in the year 10,759. Arthur Guinness was that certain about the beer he would make.</p>
<p>Dublin at the time was gripped by a drinking problem. Cheap, strong gin and whiskey were fueling addiction and social disorder among the poor. Arthur believed beer was healthier than spirits, and that a good dark ale could be a safe drink for ordinary Irish people. His conviction proved correct.</p>
<h2>The Birth of Stout Porter</h2>
<p>Guinness's identity is the stout porter — a style descended from the dark ales popular with London's laborers (porters) in the 18th century. Guinness reinterpreted it in Irish fashion. The key is roasting: barley roasted far more intensely than in standard beers produces rich notes of coffee and dark chocolate. Combined with the soft water of Dublin's River Liffey, this creates Guinness's distinctive creamy texture. Guinness set the global standard for dark beer.</p>
<h2>The Expansion of St. James's Gate</h2>
<p>Guinness grew remarkably fast. The once-small brewery had become one of the world's largest by the mid-19th century, spanning about 64 acres. Inside the gates stood its own railway, a hospital, employee housing, and even a fire station. Guinness was the engine of Dublin's economy and Ireland's largest employer. By the 1930s, it was one of the world's best-selling beers.</p>
<h2>The Guinness World Records — Born from a Pub Debate</h2>
<p>In November 1951, Sir Hugh Beaver, managing director of the Guinness Brewing Company, was hunting in southern Ireland when a debate broke out over which was Europe's fastest game bird. Nobody knew the answer — not even the reference books. Beaver had a thought: "Debates like this must happen in pubs every night around the world. If there were a book to settle them, how useful it would be."</p>
<p>Beaver commissioned twins Norris and Ross McWhirter to compile a book of world records. In August 1955, the first Guinness Book of Records was published. It became the UK's best-selling book that Christmas and has since been translated into over 100 languages with hundreds of millions of copies sold. A pub argument gave birth to one of the world's best-selling annual publications.</p>
<h2>The Science of Nitrogen Bubbles — Why Guinness Bubbles Sink</h2>
<p>Have you noticed that Guinness bubbles appear to cascade downward when the pint is first poured? This is not an optical illusion. Unlike most beers, which use carbon dioxide (CO₂), Guinness uses a blend of nitrogen (N₂) and a small amount of CO₂. Nitrogen bubbles are far smaller than CO₂ bubbles. As the tiny nitrogen bubbles rise rapidly along the inner wall of the glass, the bubbles in the center appear to fall by comparison. Physically, the edge bubbles are rising — but visually, the center appears to drop. This explains Guinness's uniquely creamy, dense head.</p>
<h2>The 2-Part Pour — The 119.5-Second Ritual</h2>
<p>The official time for a perfect pint of Guinness is 119.5 seconds. First, tilt a clean Guinness pint glass at 45 degrees close to the tap. Fill to three-quarters. Set the glass down and wait — watch the murky brown transform to deep black as the creamy head rises. This is the "surge and settle." When the head has fully settled, top up the pint. The head should dome slightly above the rim. Rush it, and you ruin it.</p>
<blockquote class="story-quote">The self-confidence of a young man who signed a 9,000-year lease. That confidence created a beer now sold at a rate of over 10 million pints per day around the world.</blockquote>
<div class="story-pairing-box">
<h3>🍽 Food Pairing</h3>
<p>Guinness and fresh oysters is a legendary pairing validated in Ireland for centuries. The oyster's briny sea character amplifies Guinness's roasted notes, and the creamy head softens the raw intensity of the shellfish. Smoked cheddar is another outstanding resonance pairing. In Korean cuisine, gamjatang (pork bone stew) or sundaeguk (blood sausage soup) — both deep and substantial — are natural partners. Guinness's coffee and chocolate character also creates a surprising and wonderful resonance pairing with dark chocolate desserts.</p>
</div>
""".strip()

EN_BODIES['jack-daniels'] = """
<h2>The Irony of a Dry County</h2>
<p>Lynchburg, Tennessee. Population 6,300. This small town is world-famous for exactly one reason: Jack Daniel's, one of the world's best-selling whiskeys, is made here. Yet ironically, Lynchburg sits in Moore County — a "dry county" where the sale of alcohol is prohibited by law. The birthplace of the world's most famous whiskey is a place where you cannot buy that whiskey. Visitors to the distillery may taste, but to purchase a bottle, they must cross the county line.</p>
<p>How did this come about? Moore County had a deeply conservative religious culture in the 19th century. Residents voted to go dry, and even after national Prohibition was repealed, Moore County kept its ban. The Jack Daniel Distillery, founded in 1866, briefly closed during Prohibition before reopening and operating ever since. Today, Lynchburg treats the irony itself as a tourist attraction.</p>
<h2>A 13-Year-Old Distilling Apprentice</h2>
<p>Jasper Newton "Jack" Daniel was born in Tennessee in 1849. He left home young and went to work for Dan Call, a local preacher who also operated a distillery on the side. Jack was about 13. At Call's distillery worked a Black master distiller named Nearest Green, who taught Jack the core craft of distillation. Green was long erased from official history, but Jack Daniel's recently acknowledged him formally as the first master distiller and even launched a whiskey brand in his name.</p>
<p>Jack had a natural instinct for business. When Call gave up distilling under pressure from his congregation, Jack went independent and founded his own distillery in 1866 — the oldest registered distillery in the United States by official government records.</p>
<h2>The Lincoln County Process — What Sets It Apart from Bourbon</h2>
<p>Jack Daniel's defining feature is the Lincoln County Process: before the distilled spirit enters the oak barrel, it is slowly dripped through a 10-foot-tall column of sugar maple charcoal — a filtration that can take up to 10 days. This step is what legally distinguishes Jack Daniel's from bourbon. Bourbon does not undergo this charcoal mellowing. Legally, Jack Daniel's is classified as "Tennessee Whiskey," not bourbon.</p>
<p>What happens during this process? The sugar maple charcoal strips out harsh compounds and adds a subtle sweet vanilla-caramel character. The result is a whiskey far smoother and rounder than bourbon — strong yet approachable, complex yet familiar. This is why Jack Daniel's is loved worldwide.</p>
<h2>The Cave Spring's Secret</h2>
<p>The water used in Jack Daniel's comes from a cave spring beneath the distillery grounds — the Cave Spring Hollow. This underground source delivers naturally iron-free water at a constant 13°C (56°F). Iron in water reacts negatively with whiskey during maturation, creating off-flavors. Jack Daniel's water, entirely free of iron, produces a cleaner distillate. The limestone geology of the surrounding hills filters the groundwater naturally over centuries. The cave spring is not just a water source — it is one of the distillery's most critical assets.</p>
<h2>Jack Daniel's Death — The Kick That Started a Legend</h2>
<p>Jack Daniel died in 1911 — from an infection caused by a broken toe. Legend has it he kicked his office safe in frustration one morning when he could not remember the combination. The resulting injury became gangrenous and took his life six years later. Jack Daniel's own stubbornness, in the most literal sense, ended his life. The old safe that caused his death is still displayed at the distillery.</p>
<h2>Old No. 7 — The Mystery of the Number</h2>
<p>The "No. 7" on the Jack Daniel's label has been a source of debate for over a century. The most credible explanation is that Jack registered his distillery as the seventh district in Tennessee — District No. 7. Other theories involve a lucky number, a batch number, or a reference to seven girlfriends. Jack Daniel's has never officially explained it, and the mystery is itself part of the brand's mythology.</p>
<h2>Frank Sinatra and the Rat Pack</h2>
<p>Frank Sinatra is perhaps the most famous Jack Daniel's drinker in history. He requested Jack Daniel's Old No. 7 everywhere he performed, and he was eventually buried with a bottle of it in his coffin. Sinatra's Rat Pack — Dean Martin, Sammy Davis Jr., Joey Bishop, Peter Lawford — all adopted Jack Daniel's as their drink. Their glamour and cool permanently associated Jack Daniel's with a certain American masculine elegance, elevating it from regional Tennessee whiskey to global icon.</p>
<blockquote class="story-quote">A boy who learned distilling at 13 from a Black mentor, in a county that bans the sale of the whiskey he made — the story of Jack Daniel's is America's story itself.</blockquote>
<div class="story-pairing-box">
<h3>🍽 Food Pairing</h3>
<p>Jack Daniel's Tennessee Whiskey pairs naturally with smoked and grilled meats. BBQ ribs — pork or beef — are the classic American combination: the whiskey's caramel sweetness complements the smoke and char. A Jack &amp; Coke (with cola) is a universal crowd-pleaser. Dark chocolate with sea salt is a refined resonance pairing that amplifies the vanilla and caramel notes. In Korean cuisine, galbi-jjim (braised short ribs) or jokbal (braised pork trotters) with their sweet soy-braising sauce match remarkably well with Jack Daniel's' sweet, smoky character.</p>
</div>
""".strip()

EN_BODIES['dom-perignon'] = """
<h2>A Monk Who Tried to Eliminate Bubbles</h2>
<p>Dom Pierre Pérignon (1638–1715) was a Benedictine monk and cellar master at the Abbey of Hautvillers in the Champagne region of France. His mission was to make the finest still wine possible — and that meant getting rid of bubbles. In 17th-century Champagne, secondary fermentation in the bottle was a serious problem. Bottles burst, cork shot out, wine was ruined. Pérignon spent his life trying to prevent this. The supreme irony of history is that in doing so, he accidentally perfected the very thing he was fighting: champagne.</p>
<h2>What Dom Pérignon Actually Invented</h2>
<p>Dom Pérignon did not invent champagne's bubbles — but he invented almost everything else that makes champagne champagne. First, he pioneered blending grapes from different vineyards to create a more complex, balanced wine — the méthode champenoise of assemblage. Second, he was one of the first in the region to use strong English glass bottles that could withstand the pressure of a second fermentation. Third, he introduced Spanish cork stoppers cut from cork oak bark, replacing the oil-soaked rags previously used as stoppers. The cork, unlike cloth, could be wired shut to hold the pressure of a sparkling wine.</p>
<h2>The Second Fermentation — When Bubbles Became a Product</h2>
<p>Wine from the Champagne region naturally undergoes a second fermentation in the bottle during the cold winter and warm spring — a process Pérignon observed and tried to control. Residual yeasts in the bottled wine consume remaining sugars, producing CO₂ that, sealed in by the cork, dissolves into the liquid. When the cork is removed, the pressure releases and the gas escapes as bubbles. For most of wine history, this was considered a defect. English wine merchants in London, however, discovered that their imported Champagne wine had become sparkling during transit — and they loved it. What was a French winemaker's nightmare became a London fashion sensation.</p>
<h2>The Legend of the First Taste</h2>
<p>According to abbey legend, when Dom Pérignon first tasted one of his accidentally sparkling wines, he called out to his fellow monks: "Come quickly! I am drinking stars!" Whether the quote is historically accurate is disputed by scholars, but the story captures something true about champagne: the sensation of tasting light itself, carbonated and alive. The quote became one of the most famous in the history of wine.</p>
<h2>Dom Pérignon the Brand — Moët &amp; Chandon's Prestige Cuvée</h2>
<p>Moët &amp; Chandon, founded in 1743, is the largest champagne house in the world. In 1936, they launched "Dom Pérignon" as their prestige cuvée — the top of their range, produced only in exceptional vintages. Unlike standard non-vintage champagnes, Dom Pérignon is only made in years when the harvest quality meets the house's exacting standards. Some years, no Dom Pérignon is produced at all. Each vintage is released after a minimum of seven to eight years of aging. Today, Dom Pérignon is one of the world's most recognizable luxury brands — its black bottle with the embossed coat of arms is synonymous with celebration.</p>
<blockquote class="story-quote">A monk who spent his life trying to eliminate bubbles accidentally gave the world its most celebrated drink. Dom Pérignon never tasted the champagne we know today — but without him, it would not exist.</blockquote>
<div class="story-pairing-box">
<h3>🍽 Food Pairing</h3>
<p>Dom Pérignon's fine, persistent bubbles and precise acidity make it one of the most versatile food wines in the world. The classic French pairing is with oysters or caviar — the champagne's mineral, citrus character is an ideal foil for the sea's brine. Lobster, crab, and steamed scallops are equally elegant companions. In Korean cuisine, haemul pajeon (seafood pancake) or ganjang gejang (raw crab marinated in soy sauce) pair with surprising sophistication. For dessert, Paris-Brest or almond croissant — both buttery and nutty — resonate with Dom Pérignon's signature brioche and toasted-nut character.</p>
</div>
""".strip()

EN_BODIES['mojito'] = """
<h2>1586 — A Pirate's Prescription</h2>
<p>The mojito's origins predate Hemingway by more than 300 years. In 1586, English privateer Sir Francis Drake attacked Spanish colonial Havana, Cuba. The crew, after months at sea, were ravaged by dysentery and scurvy. Local indigenous people gave Drake's sailors a folk remedy: aguardiente (distilled sugarcane spirit, literally "burning water") mixed with lime juice, raw sugarcane juice, and leaves of hierbabuena (a local spearmint). Lime's vitamin C treated scurvy; mint soothed gastrointestinal illness; aguardiente dulled pain. This medicinal drink was called "El Draque" — the most delicious prescription in human history.</p>
<h2>The Evolution of Rum and Havana's Bar Culture</h2>
<p>Through the 17th and 18th centuries, Cuba's sugarcane plantations expanded and rum distillation techniques advanced. The rough aguardiente gradually evolved into the smooth, aromatic rum we know. By the late 19th century, Havana's thriving bar culture had transformed El Draque into the mojito — replacing sugarcane juice with refined sugar, and adding carbonated soda water for effervescence. The technique of muddling mint with a muddler also became standard in this era.</p>
<h2>Pre-Revolution Havana — The Paris of the Caribbean</h2>
<p>In the early 20th century, especially the 1920s–50s, Havana was known as "the Paris of the Caribbean" — a playground for America's upper class. U.S. Prohibition (1920–1933) drove Americans to Cuba for alcohol, and Havana overflowed with glamorous casinos, fine restaurants, and jazz bars. The mojito was central to Havana's social life. With refrigeration now widely available, the cold, sparkling mojito was more accessible than ever.</p>
<h2>Hemingway and La Bodeguita del Medio</h2>
<blockquote class="story-quote">"My mojito in La Bodeguita, my daiquiri in El Floridita." — Ernest Hemingway, written on the wall of La Bodeguita del Medio, Havana</blockquote>
<p>Ernest Hemingway lived in Cuba for nearly 20 years, from 1939 until the 1959 revolution. La Bodeguita del Medio in Old Havana was his regular haunt. He visited almost daily, drinking mojitos and working on his novels. Both <em>For Whom the Bell Tolls</em> and <em>The Old Man and the Sea</em> were written in Cuba. Thanks to Hemingway, La Bodeguita became a literary pilgrimage site — his scrawled note on the wall draws visitors to this day.</p>
<h2>Hemingway's Special Order — The Sugar-Free Mojito</h2>
<p>Hemingway's actual mojito was different from the standard recipe. Diabetic, he ordered his mojito without sugar: rum, lime, mint, and soda only. This is now called the "Mojito Natural" or "Hemingway Mojito," and La Bodeguita still lists it on their menu. A medical accommodation became a celebrated cocktail in its own right.</p>
<h2>Lime and Mint — Why Together?</h2>
<p>Lime and mint are not a casual combination. Lime's citric acid stimulates the tongue's sour receptors, activating salivary glands and sharpening the appetite. Mint's menthol activates cold receptors (TRPM8) in the skin and tongue, creating a sensation of coolness without any actual temperature change. Combined, they produce an exceptionally powerful refreshing effect — especially on a hot day. Add the physical effervescence of soda and the warmth of rum's alcohol, and the mojito becomes perhaps the most multi-dimensional refreshing cocktail in the world.</p>
<h2>After the Cuban Revolution — Spreading to the World</h2>
<p>After Castro's 1959 revolution, Cuba was cut off from the United States. But the mojito survived. Cuban exiles spread to Miami, New York, Madrid, and beyond, carrying their cocktail culture with them. From the 1990s global cocktail renaissance onward, the mojito became one of the world's most-ordered cocktails. Today, non-alcoholic (virgin) mojitos are equally popular. From a pirate's prescription to the world's bar menus — it took 430 years.</p>
<div class="story-pairing-box">
<h3>🍽 Food Pairing</h3>
<p>The mojito's citrus acidity and mint freshness make a perfect complementary pairing with seafood. Prawn cocktail, ceviche, and fresh oysters are the classics — lime cuts through fishiness while mint amplifies the clean sea flavor. Tacos, nachos, crab dishes, and avocado toast also work beautifully. On a hot summer day, a cold mojito beside spicy food is a textbook balance pairing.</p>
</div>
""".strip()

EN_BODIES['laphroaig'] = """
<h2>Islay — Scotland's Whisky Island</h2>
<p>Islay (pronounced "eye-luh") is a small island off the southwest coast of Scotland. About 3,200 people live there, but nine whisky distilleries operate on the island. Islay's Atlantic storms roll in off the ocean year-round, saturating the land with seawater and the air with salt. Below the surface, centuries of decomposed heather and sphagnum moss have formed deep layers of peat. The soil, the air, the water — everything on Islay carries the sea. And Laphroaig, founded in 1815 on the island's south coast, is the most extreme expression of that character.</p>
<h2>Peat — The Taste of Fire and Earth</h2>
<p>The defining character of Laphroaig is smoke — specifically, the smoke of burning peat. Producing Scotch whisky begins with malted barley: barley that has been soaked in water to begin germination, then dried in a kiln to halt it. Most distilleries use hot air or steam to dry their malt. Islay distilleries burn peat beneath the malt. The smoke rises through the floor and permeates the barley, imprinting it with compounds called phenols — the chemical source of Scotch whisky's smoky, medicinal, and iodine-like character. Laphroaig uses an exceptionally high phenol level, which is why a single sip can smell like a hospital, a bonfire, or the sea — all at once.</p>
<h2>The Taste That Divides the World</h2>
<p>No whisky in the world is more divisive than Laphroaig. Its official slogan, "Opinions are divided," is backed by research: consumer surveys consistently show that people's first reaction to Laphroaig is either deep love or immediate rejection — with almost nobody landing in the middle. The smoke, medicinal iodine, seaweed, and peat all combine into a flavor profile that has no parallel in any other spirit. For those who love it, Laphroaig is irreplaceable. For those who do not, no amount of appreciation changes the verdict.</p>
<h2>The Royal Warrant — Prince Charles's Favorite</h2>
<p>In 1994, Laphroaig received a Royal Warrant of Appointment from HRH The Prince of Wales (now King Charles III) — the only single malt whisky ever to receive this honor. The warrant means Laphroaig is a supplier to the Royal Household. Prince Charles had visited the distillery and was a confirmed fan of the whisky's extreme character. The Laphroaig bottle bears the Royal Warrant crest to this day.</p>
<h2>The Friends of Laphroaig — A Square Foot of Islay</h2>
<p>Laphroaig runs one of the world's most unusual loyalty programs: the "Friends of Laphroaig." Register online, and you are granted a lifetime lease on one square foot of Laphroaig's peat fields on Islay. Visit the distillery to "collect your rent" — paid in a dram of Laphroaig — and you receive a certificate with the GPS coordinates of your personal square foot of Scotland. Over one million people have claimed their plot. Some make pilgrimages to Islay specifically to stand on their tiny square of peat.</p>
<blockquote class="story-quote">You will either fall in love with Laphroaig or walk away forever. There is no middle ground — and that uncompromising character is precisely what makes it one of the world's great whiskies.</blockquote>
<div class="story-pairing-box">
<h3>🍽 Food Pairing</h3>
<p>Laphroaig's smoke and iodine character demands bold flavors. Smoked salmon is an outstanding resonance pairing — smoke meeting smoke, sea meeting sea. Blue cheese (Roquefort or Gorgonzola) bridges the whisky's medicinal edge with the cheese's sharp funk. Dark chocolate with sea salt amplifies the whisky's sweetness while the salt echoes Islay's ocean air. In Korean cuisine, the smoky richness of chadolbaegi (thinly sliced beef) grilled over charcoal makes a surprising and harmonious partner. Laphroaig should be enjoyed with a few drops of water to open up its complex aromas.</p>
</div>
""".strip()

EN_BODIES['bacardi'] = """
<h2>The Bats That Changed the Brand</h2>
<p>In 1862, Spanish wine merchant Facundo Bacardí Massó purchased a small distillery in Santiago de Cuba. The distillery had a colony of fruit bats living in the rafters. Facundo's wife, Doña Amalia, suggested they use the bats as their symbol — in Cuban culture, bats signified good luck, good health, and family unity. The decision was made: the Bacardí bat became the logo. Today, more than 160 years later, the bat still flies on every bottle of Bacardí rum, making it one of the most enduring brand symbols in the spirits world.</p>
<h2>Facundo Bacardí Massó — From Immigrant to Empire</h2>
<p>Facundo Bacardí arrived in Cuba from Catalonia, Spain at age 16. His dream was to make a better rum than anything available at the time — the rough, harsh spirits common in colonial Cuba. He spent years experimenting with fermentation and distillation techniques, eventually using a copper pot still and activated charcoal filtration to produce a clean, light, smooth rum that was revolutionary for its era. His innovation was simplicity: where others made rum heavy and dark, Facundo made it crisp and clear. Bacardí Carta Blanca (White Rum) became the foundation of the brand.</p>
<h2>The Cuban Revolution — Exile and the Global Brand</h2>
<p>For nearly a century, Bacardí was a symbol of Cuban prosperity. But when Fidel Castro's revolution triumphed in 1959, the Bacardí family's assets in Cuba were nationalized. The family had anticipated this: they had already transferred the brand's trademarks, master yeast strains, and corporate structure out of Cuba years earlier. The day after nationalization, Bacardí continued operating — from Puerto Rico and the Bahamas. Castro's government tried to continue producing rum under the Bacardí name, but lost a series of trademark lawsuits. Cuban state rum and Bacardí rum went their separate ways. The family's foresight saved the brand.</p>
<h2>The Daiquiri — Hemingway's Other Drink</h2>
<p>While Hemingway drank his mojito at La Bodeguita, his daiquiri was always at El Floridita — and it was always made with Bacardí. The classic daiquiri is rum, lime juice, and sugar, shaken over ice. Hemingway, again avoiding sugar due to his diabetes, had his daiquiri made with extra rum and no sugar — a version now called the "Papa Doble" or "Hemingway Daiquiri." Bacardí's clean, neutral character makes it the foundation spirit of dozens of the world's most popular cocktails: the daiquiri, the mojito, the piña colada, and the Cuba Libre (rum and Coke, garnished with lime).</p>
<h2>Rum's Chemical Secret — Congeners and Character</h2>
<p>The difference between a cheap rum and a fine rum comes down to congeners — trace chemical compounds produced during fermentation and distillation that are not ethanol. These include esters (fruity), aldehydes (sharp, green), fusel alcohols (heavy, harsh), and acids. Bacardí's light-rum philosophy minimizes congeners through careful fermentation control, column distillation, and charcoal filtration. The result is a spirit versatile enough to blend into almost any cocktail without dominating it. This neutrality, which some critics call blandness, is precisely what made Bacardí the world's best-selling spirits brand for decades.</p>
<blockquote class="story-quote">A colony of bats in a distillery rafters. A family that moved faster than a revolution. Bacardí's survival and dominance is a story of foresight, adaptability, and one very lucky logo.</blockquote>
<div class="story-pairing-box">
<h3>🍽 Food Pairing</h3>
<p>Bacardí Carta Blanca's clean, light profile makes it the ideal cocktail base — the classic Cuba Libre (Bacardí, cola, lime) is one of the world's most universally enjoyed drinks. Tropical fruit pairings — mango, pineapple, coconut — resonate with the rum's subtle sweetness. Fresh seafood ceviche, marinated in lime juice, mirrors the rum's citrus brightness. In Korean cuisine, the sweet-and-sour fried chicken (yangnyeom chicken) makes a surprisingly delightful contrast pairing with a Bacardí-based cocktail.</p>
</div>
""".strip()

EN_BODIES['absinthe'] = """
<h2>The Green Fairy — What It Actually Is</h2>
<p>Absinthe is a high-proof anise-flavored spirit produced by macerating and distilling botanicals in neutral alcohol. The three key botanicals are grand wormwood (Artemisia absinthium), green anise, and Florence fennel. Distilled with additional herbs including lemon balm, hyssop, and angelica, quality absinthe turns a natural emerald green from chlorophyll in the herbs — the color that earned it the nickname "la Fée Verte" (the Green Fairy). For much of the 20th century, absinthe was banned across Europe and North America on the grounds that it caused hallucinations and madness. That ban was almost entirely based on a misunderstanding.</p>
<h2>The Origins in the Swiss Mountains</h2>
<p>Absinthe was developed in the late 18th century in the Val-de-Travers valley of Switzerland, commonly attributed to Dr. Pierre Ordinaire, a French physician living in exile. He created it around 1792 as a medicinal tonic — wormwood had been used in herbal medicine for centuries to treat fevers and digestive ailments. The Henriod sisters of Couvet then commercialized the recipe, and in 1805, Henri-Louis Pernod opened the first major distillery in Pontarlier, France. Absinthe quickly became the dominant spirit of French society.</p>
<h2>The Belle Époque — The Artist's Drink</h2>
<p>The late 19th and early 20th century was absinthe's golden age. At the height of French café culture, "l'heure verte" (the green hour) — typically 5–7 pm — was the daily ritual of absinthe drinking. Vincent van Gogh, Paul Gauguin, Henri de Toulouse-Lautrec, Arthur Rimbaud, Charles Baudelaire, Oscar Wilde, and Edgar Degas were all devoted drinkers. The bohemian culture of Montmartre ran on absinthe. It was believed to stimulate creativity — and the ritual of preparation (the drip of ice-cold water through a sugar cube into the glass, turning the spirit cloudy in the "louche") added a theatrical dimension that no other drink could match.</p>
<h2>The Temperance Movement's Target</h2>
<p>By the 1900s, absinthe was blamed for a wave of social problems in France and Switzerland — alcoholism, crime, mental illness, and birth defects. The temperance movement and the wine industry (whose sales were suffering) campaigned aggressively against it. A particularly sensational 1905 murder case in Switzerland — in which a man killed his family after drinking absinthe — provided the catalyst. Scientific reports claimed that thujone, a compound found in wormwood, caused epileptic seizures, hallucinations, and permanent brain damage. Absinthe was banned in Switzerland in 1910, France in 1915, and eventually across most of Europe and the United States.</p>
<h2>Thujone — The Great Misunderstanding</h2>
<p>Modern scientific analysis has thoroughly debunked the thujone panic. Absinthe does contain thujone — but in such small quantities (typically 10–35 mg/kg) that drinking enough to be affected by thujone would require consuming a fatal quantity of alcohol first. Pre-ban absinthes analyzed from surviving bottles contained no more thujone than modern versions. The hallucinations, madness, and violence attributed to absinthe were almost certainly the result of chronic alcohol abuse at high concentrations (absinthe was typically 65–75% ABV), and in some cases, of counterfeit "absinthes" made with toxic adulterants like copper sulfate for color and antimony chloride for the louche effect.</p>
<h2>The Revival — Absinthe Returns</h2>
<p>European Union food regulation changes in the 1990s and 2000s allowed absinthe to be produced and sold again, as long as thujone levels stayed below 35 mg/kg. Switzerland lifted its ban on traditional absinthe production in 2005, and the United States approved imports in 2007. The revival was driven by craft distillers using pre-ban recipes and traditional equipment. Today, authentic absinthe — made with quality grand wormwood and distilled properly — is available worldwide and has reclaimed its place among the world's great spirits.</p>
<blockquote class="story-quote">Absinthe was never the demon the temperance movement made it out to be. It was simply a strong spirit, drunk in extraordinary quantities, by artists and workers alike — and blamed for the failures of an entire era.</blockquote>
<div class="story-pairing-box">
<h3>🍽 Food Pairing</h3>
<p>Traditional absinthe service involves diluting 1 part absinthe with 3–5 parts ice-cold water, dripped over a sugar cube on a slotted spoon — the louche (turning cloudy) is the sign of quality botanicals. This ritual deserves unhurried attention rather than food. However, if pairing, absinthe's anise character complements Mediterranean seafood: bouillabaisse, grilled sea bass, or oysters with a mignonette. Aged hard cheeses — Gruyère or Comté — bridge the herbal bitterness with creamy fat. In Korean cuisine, raw seafood hoe (회) with its clean freshness is a natural pairing with absinthe's botanical complexity.</p>
</div>
""".strip()

EN_BODIES['makgeolli'] = """
<h2>2,000 Years of Korean History</h2>
<p>Makgeolli is Korea's oldest alcoholic drink, with records in historical documents dating back nearly 2,000 years. The word "makgeolli" (막걸리) combines "mak" (막, roughly/just-made) and "georli" (걸리, to strain) — "just-strained." Unlike clear spirits, makgeolli is not filtered to remove the milky sediment of fermented grain; it is strained once, leaving the liquid cloudy white and full of live microorganisms including lactic acid bacteria, yeast, and B vitamins. For most of Korean history, makgeolli was not merely a drink but a nutritional food — the "liquid rice" of farmers and laborers.</p>
<h2>Nuruk — Korea's Unique Fermentation Starter</h2>
<p>What makes Korean makgeolli distinct from any other fermented grain beverage is nuruk (누룩) — a traditional fermentation starter made by pressing moistened wheat, barley, or rice into cakes and allowing naturally occurring wild yeasts and molds to colonize them over several weeks. Nuruk is analogous to the Chinese qu or Japanese koji, but its microbial community is uniquely shaped by the Korean environment. Each region — Gyeonggi, Gyeongnam, Jeonbuk — produces nuruk with different organisms, giving local makgeolli distinctive character. Where Western beer uses commercially isolated yeast strains, Korean makgeolli ferments with dozens of microbial species working together.</p>
<h2>Japanese Occupation — The Standardization of Taste</h2>
<p>Traditional makgeolli was deeply diverse: every household and village brewed its own, each with a unique taste reflecting local grain varieties and wild microflora. Japanese colonial authorities introduced the 1916 liquor tax law, effectively banning home brewing and centralizing production in licensed commercial breweries. The rich regional diversity of Korean makgeolli was nearly eliminated in a generation. Postwar, the government continued restricting grain-based brewing during food shortages, requiring flour makgeolli through the 1960s–70s — producing a flat, harsh product that damaged the drink's reputation for decades.</p>
<h2>The Return to Rice and the Craft Revival</h2>
<p>Rice-based makgeolli was permitted again from 1989. By the 2000s, a new generation of brewers had begun reviving traditional regional recipes, sourcing heirloom rice varieties and hand-culturing nuruk from local environments. The "craft makgeolli" movement now includes hundreds of small-batch producers making sparkling, unfiltered, raw makgeolli with complex flavors of yogurt, citrus, and fresh grain. International markets in the United States, Japan, and Europe have embraced Korean makgeolli as a premium craft drink — a complete reversal from its post-war image as a cheap laborers' drink.</p>
<h2>Makgeolli in Korean Culture — Rain and Pajeon</h2>
<p>The association of makgeolli with pajeon (파전, green onion pancake) is one of Korea's most persistent food memories. The sound of pajeon sizzling in oil mimics the sound of rain on a rooftop. On a rainy day, the craving for warm, savory pajeon and cold, tangy makgeolli is deeply embedded in Korean sensory memory — reinforced across generations, virtually a cultural reflex. This pairing is the perfect illustration of makgeolli's role in Korean life: not a luxury or a ceremony, but an everyday comfort, as natural as the weather itself.</p>
<h2>The Science of Makgeolli's Living Culture</h2>
<p>Fresh, unpasteurized makgeolli contains live cultures: lactic acid bacteria similar to those in yogurt, which produce the characteristic sour tang; residual yeast that continues slow fermentation after packaging, producing natural carbonation; and bioactive compounds including B vitamins (particularly B1, B2, B6) and organic acids. This is why traditional makgeolli has a "best before" of just 10–15 days when refrigerated — the live microorganisms are still active. Pasteurized versions last longer but lose much of this living character. For the full experience, seek out fresh, raw makgeolli from a local producer.</p>
<blockquote class="story-quote">2,000 years of history in a milky white bowl. Makgeolli is not just a drink — it is the living memory of Korean agriculture, fermentation culture, and the shared rhythm of seasons.</blockquote>
<div class="story-pairing-box">
<h3>🍽 Food Pairing</h3>
<p>The classic pairing is makgeolli with haemul pajeon (seafood green onion pancake) — a combination supported by centuries of shared cultural memory. The pancake's savory, crispy exterior and the makgeolli's sour, effervescent freshness create the perfect balance pairing. Bindaetteok (mung bean pancake), kimchi jeon, and any oil-fried savory pancake follow the same principle. Makgeolli also pairs naturally with seasonal vegetable dishes: dubu kimchi (tofu with stir-fried kimchi) and kongnamul-muchim (seasoned bean sprouts) allow the drink's subtle sourness to refresh between bites. For adventurous pairings, fresh oysters or raw clams with makgeolli mirror the briny-sour character on both sides.</p>
</div>
""".strip()

# ─────────────────────────────────────────────────────────────────────────────
# EXTRACT KO BODIES FROM HTML FILES
# ─────────────────────────────────────────────────────────────────────────────
def extract_article(name):
    path = os.path.join(STORY_DIR, f'{name}.html')
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    m = re.search(r'<article class="story-content">(.*?)</article>', content, re.DOTALL)
    if not m:
        raise ValueError(f"Could not extract article from {name}.html")
    body = m.group(1)
    # Compact: strip leading/trailing whitespace from each line, drop blank lines
    lines = [l.strip() for l in body.split('\n')]
    lines = [l for l in lines if l]
    return '\n'.join(lines)

ko_bodies = {}
for name in STORIES:
    ko_bodies[name] = extract_article(name)

# ─────────────────────────────────────────────────────────────────────────────
# JS ESCAPE: escape single quotes and backslashes for JS single-quoted strings
# ─────────────────────────────────────────────────────────────────────────────
def js_esc(s):
    # Collapse to single line (HTML doesn't need whitespace between tags)
    lines = [l.strip() for l in s.split('\n')]
    s = ' '.join(l for l in lines if l)
    return s.replace('\\', '\\\\').replace("'", "\\'")

# ─────────────────────────────────────────────────────────────────────────────
# BUILD JS ADDITIONS
# ─────────────────────────────────────────────────────────────────────────────
KO_SUBS = {
    'monkey47':      '흑림에서 태어난 진',
    'ilpum-jinro':   '100년 두꺼비의 여정',
    'guinness':      '9,000년 임대 계약',
    'jack-daniels':  '금주법 지역에서 만드는 세계 최고의 위스키',
    'dom-perignon':  '거품을 없애려던 수도사의 역설',
    'mojito':        '해적의 처방전에서 헤밍웨이의 술로',
    'laphroaig':     '세상을 사랑하거나 떠나거나',
    'bacardi':       '박쥐가 만든 럼, 혁명이 쫓아낸 술',
    'absinthe':      '초록 요정과 100년의 오해',
    'makgeolli':     '2000년을 이어온 한국의 술',
}

KO_BADGES = {
    'monkey47':      '<span>🇩🇪 독일 슈바르츠발트</span><span>진(Gin)</span><span>47%</span>',
    'ilpum-jinro':   '<span>🇰🇷 한국</span><span>소주</span><span>35%</span>',
    'guinness':      '<span>🇮🇪 아일랜드 더블린</span><span>스타우트</span><span>4.2%</span>',
    'jack-daniels':  '<span>🇺🇸 미국 테네시주 무어 카운티</span><span>테네시 위스키</span><span>40%</span>',
    'dom-perignon':  '<span>🇫🇷 프랑스 샹파뉴</span><span>샴페인</span><span>12.5%</span>',
    'mojito':        '<span>🇨🇺 쿠바 아바나</span><span>칵테일</span><span>약 10~15%</span>',
    'laphroaig':     '<span>🏴󠁧󠁢󠁳󠁣󠁴󠁿 스코틀랜드 아일라</span><span>싱글몰트</span><span>40~57%</span>',
    'bacardi':       '<span>🇵🇷 푸에르토리코 (원산지 🇨🇺 쿠바)</span><span>화이트 럼</span><span>40%</span>',
    'absinthe':      '<span>🇨🇭 스위스 (발원지)</span><span>증류주</span><span>45~74%</span>',
    'makgeolli':     '<span>🇰🇷 한국</span><span>탁주</span><span>6~8%</span>',
}

def build_ko_additions():
    lines = []
    lines.append("    // ── story page nav (shared) ─────────────────────────────────────────────────")
    lines.append("    'story-prev-label': '이전 이야기',")
    lines.append("    'story-next-label': '다음 이야기',")
    lines.append("    'story-back-label': '목록으로',")
    lines.append("    'story-back-title': '브루스토리 전체',")
    for name in STORIES:
        lines.append(f"    // ── {name} ────────────────────────────────────────────────────────────────")
        lines.append(f"    '{name}-sub': '{js_esc(KO_SUBS[name])}',")
        lines.append(f"    '{name}-badge': '{js_esc(KO_BADGES[name])}',")
        body_escaped = js_esc(ko_bodies[name])
        lines.append(f"    '{name}-body': '{body_escaped}',")
    return '\n'.join(lines)

def build_en_additions():
    lines = []
    lines.append("    // ── story page nav (shared) ─────────────────────────────────────────────────")
    lines.append("    'story-prev-label': 'Previous Story',")
    lines.append("    'story-next-label': 'Next Story',")
    lines.append("    'story-back-label': 'Back to List',")
    lines.append("    'story-back-title': 'All Brew Stories',")
    for name in STORIES:
        lines.append(f"    // ── {name} ────────────────────────────────────────────────────────────────")
        lines.append(f"    '{name}-sub': '{js_esc(EN_SUBS[name])}',")
        lines.append(f"    '{name}-badge': '{js_esc(EN_BADGES[name])}',")
        body_escaped = js_esc(EN_BODIES[name])
        lines.append(f"    '{name}-body': '{body_escaped}',")
    return '\n'.join(lines)

# ─────────────────────────────────────────────────────────────────────────────
# UPDATE page-i18n.js
# ─────────────────────────────────────────────────────────────────────────────
with open(I18N_FILE, 'r', encoding='utf-8') as f:
    js_content = f.read()

# KO anchor: the guide-cta line just before closing of ko section
KO_ANCHOR = "    'guide-cta': '<strong>지금 바로 시도해보세요!</strong>"
# EN anchor: last entry before closing of en section
EN_ANCHOR = "    'terms-s10-p2':   '<strong>Email:</strong> jelee.3na@gmail.com',"

if KO_ANCHOR not in js_content:
    print("ERROR: KO anchor not found!")
    print("Looking for:", repr(KO_ANCHOR))
    # Show context around guide-cta
    idx = js_content.find('guide-cta')
    print("Found guide-cta at:", idx)
    print("Context:", repr(js_content[idx-4:idx+80]))
    exit(1)

if EN_ANCHOR not in js_content:
    print("ERROR: EN anchor not found!")
    exit(1)

ko_additions = build_ko_additions()
en_additions = build_en_additions()

# Insert KO additions before the guide-cta line
js_content = js_content.replace(
    KO_ANCHOR,
    ko_additions + '\n' + KO_ANCHOR
)

# Insert EN additions after the terms-s10-p2 line
js_content = js_content.replace(
    EN_ANCHOR,
    EN_ANCHOR + '\n' + en_additions
)

with open(I18N_FILE, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"✓ page-i18n.js updated ({len(js_content)} chars)")

# ─────────────────────────────────────────────────────────────────────────────
# UPDATE HTML FILES — add data-i18n attributes
# ─────────────────────────────────────────────────────────────────────────────
def update_html(name):
    path = os.path.join(STORY_DIR, f'{name}.html')
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. story-hero-sub: add data-i18n
    html = re.sub(
        r'<p class="story-hero-sub">',
        f'<p class="story-hero-sub" data-i18n="{name}-sub">',
        html
    )

    # 2. story-badge: add data-i18n-html
    html = re.sub(
        r'<div class="story-badge">',
        f'<div class="story-badge" data-i18n-html="{name}-badge">',
        html
    )

    # 3. article: add data-i18n-html
    html = re.sub(
        r'<article class="story-content">',
        f'<article class="story-content" data-i18n-html="{name}-body">',
        html
    )

    # 4. nav labels — story-prev-label, story-next-label
    html = re.sub(
        r'(<span class="nav-label">)(이전 이야기)(</span>)',
        r'<span class="nav-label" data-i18n="story-prev-label">\2</span>',
        html
    )
    html = re.sub(
        r'(<span class="nav-label">)(다음 이야기)(</span>)',
        r'<span class="nav-label" data-i18n="story-next-label">\2</span>',
        html
    )
    html = re.sub(
        r'(<span class="nav-label">)(목록으로)(</span>)',
        r'<span class="nav-label" data-i18n="story-back-label">\2</span>',
        html
    )
    html = re.sub(
        r'(<span class="nav-title">)(← 브루스토리 전체|브루스토리 전체)(</span>)',
        r'<span class="nav-title" data-i18n="story-back-title">\2</span>',
        html
    )

    # 5. breadcrumb link (already has nav-drinks-story in nav, but breadcrumb doesn't)
    html = re.sub(
        r'(<a href="/drinks-story\.html">)(브루스토리)(</a>)',
        r'<a href="/drinks-story.html" data-i18n="nav-drinks-story">\2</a>',
        html
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"✓ {name}.html updated")

for name in STORIES:
    update_html(name)

print("\nAll done!")
