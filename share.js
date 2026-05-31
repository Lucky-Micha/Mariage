// ── SNS 공유 유틸리티 ──────────────────────────────────────────────────────
// 카카오톡 공유를 활성화하려면:
// 1. https://developers.kakao.com/ 에서 앱 등록
// 2. JavaScript 키를 아래 KAKAO_JS_KEY 에 입력
// 3. 플랫폼 > Web 에서 mariage-8qg.pages.dev 도메인 추가
const KAKAO_JS_KEY = '';

const SITE_URL   = 'https://mariage-8qg.pages.dev';
const SITE_IMAGE = 'https://mariage-8qg.pages.dev/og-image-v2.png';

function _getMetaContent(selector) {
  return (document.querySelector(selector) || {}).content || '';
}

// ── 공유 함수 ──────────────────────────────────────────────────────────────

function snsShareKakao(title, desc, imageUrl, pageUrl) {
  if (typeof Kakao !== 'undefined' && KAKAO_JS_KEY) {
    if (!Kakao.isInitialized()) Kakao.init(KAKAO_JS_KEY);
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: title,
        description: desc,
        imageUrl: imageUrl || SITE_IMAGE,
        link: { mobileWebUrl: pageUrl, webUrl: pageUrl },
      },
      buttons: [{ title: 'Mariage에서 보기', link: { mobileWebUrl: pageUrl, webUrl: pageUrl } }],
    });
    return;
  }
  // SDK 미설정 → Web Share API 또는 링크 복사 폴백
  if (typeof navigator.share !== 'undefined') {
    navigator.share({ title: title, text: desc, url: pageUrl }).catch(() => {});
  } else {
    snsShareCopyLink(pageUrl);
  }
}

function snsShareTwitter(text, url) {
  window.open(
    'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url),
    '_blank', 'noopener,width=560,height=480'
  );
}

function snsShareNative(title, text, url) {
  if (typeof navigator.share !== 'undefined') {
    navigator.share({ title: title, text: text, url: url }).catch(() => {});
    return true;
  }
  return false;
}

function snsShareCopyLink(url) {
  const target = url || location.href;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(target).then(function () { showSnsToast('링크가 복사됐어요! 🔗'); });
  } else {
    var ta = document.createElement('textarea');
    ta.value = target;
    Object.assign(ta.style, { position: 'fixed', top: '0', opacity: '0' });
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand('copy'); showSnsToast('링크가 복사됐어요! 🔗'); } catch (e) {}
    document.body.removeChild(ta);
  }
}

function showSnsToast(msg) {
  var toast = document.getElementById('sns-share-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'sns-share-toast';
    toast.className = 'sns-share-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg || '공유됐어요!';
  toast.classList.add('visible');
  clearTimeout(toast._t);
  toast._t = setTimeout(function () { toast.classList.remove('visible'); }, 2800);
}

// ── 스토리 페이지 공유 바 자동 삽입 ──────────────────────────────────────────

function _makeSnsBtn(cls, svgPath, label, handler) {
  var btn = document.createElement('button');
  btn.className = 'sns-btn ' + cls;
  btn.innerHTML = '<svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">' + svgPath + '</svg><span>' + label + '</span>';
  btn.addEventListener('click', handler);
  return btn;
}

function buildStoryShareBar() {
  var content = document.querySelector('.story-content');
  var nav = document.querySelector('.story-page-nav');
  if (!content || !nav) return;

  var ogTitle  = _getMetaContent('meta[property="og:title"]') || document.title;
  var ogDesc   = _getMetaContent('meta[property="og:description"]');
  var ogImage  = _getMetaContent('meta[property="og:image"]') || SITE_IMAGE;
  var pageUrl  = (document.querySelector('link[rel="canonical"]') || {}).href || location.href;
  var shareText = ogTitle + '\n' + ogDesc;

  var bar = document.createElement('div');
  bar.className = 'story-share-bar';

  var label = document.createElement('p');
  label.className = 'story-share-label';
  label.textContent = '이 글이 도움이 됐나요? 공유해보세요 🥂';

  var btns = document.createElement('div');
  btns.className = 'story-share-btns';

  // 카카오톡 버튼
  btns.appendChild(_makeSnsBtn('sns-kakao',
    '<path d="M8.5 1.5C4.36 1.5 1 4.11 1 7.35c0 2.07 1.35 3.9 3.39 4.95l-.69 2.7c-.06.21.12.39.33.27l3.63-2.37c.27.03.57.06.84.06 4.14 0 7.5-2.61 7.5-5.85S12.64 1.5 8.5 1.5z" fill="currentColor"/>',
    '카카오톡',
    function () { snsShareKakao(ogTitle, ogDesc, ogImage, pageUrl); }
  ));

  // X(트위터) 버튼
  btns.appendChild(_makeSnsBtn('sns-twitter',
    '<path d="M13.1 1.5h2.4L9.9 8.1 16 15.5h-4.5l-3.4-4.4-3.8 4.4H1.9l5.7-6.5L1.5 1.5h4.6l3.1 3.9 4-3.9zm-.8 12.6h1.3L4.8 2.9H3.4l8.9 11.2z" fill="currentColor"/>',
    'X',
    function () { snsShareTwitter(shareText, pageUrl); }
  ));

  // 링크 복사 버튼
  btns.appendChild(_makeSnsBtn('sns-copy',
    '<path d="M7 2a3 3 0 0 0-3 3v.5h1V5a2 2 0 1 1 4 0v4a2 2 0 0 1-2 2H6.5v1H7a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM10 8.5H9.5V9a2 2 0 0 1-4 0V5a2 2 0 0 1 4 0v.5H10v-.5a3 3 0 1 0-6 0v4a3 3 0 1 0 6 0V8.5z" fill="currentColor"/>',
    '링크 복사',
    function () { snsShareCopyLink(pageUrl); }
  ));

  // Web Share API 버튼 (모바일)
  if (typeof navigator.share !== 'undefined') {
    btns.appendChild(_makeSnsBtn('sns-native',
      '<path d="M13 1.5a2 2 0 1 1-1.89 2.63L5.98 6.91a2 2 0 0 1 0 3.18l5.13 2.78A2 2 0 1 1 10.6 14L5.47 11.22A2 2 0 1 1 5.47 5.78l5.13-2.78A2 2 0 0 1 13 1.5z" fill="currentColor"/>',
      '공유하기',
      function () { snsShareNative(ogTitle, shareText, pageUrl); }
    ));
  }

  bar.appendChild(label);
  bar.appendChild(btns);
  nav.parentNode.insertBefore(bar, nav);
}

// 카카오 SDK 로드 (KAKAO_JS_KEY가 설정된 경우에만)
if (KAKAO_JS_KEY) {
  var s = document.createElement('script');
  s.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js';
  s.crossOrigin = 'anonymous';
  document.head.appendChild(s);
}

document.addEventListener('DOMContentLoaded', buildStoryShareBar);
