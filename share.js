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

function snsShareInstagram(title, text, url) {
  // 인스타그램은 웹 공유 URL 미지원 → 모바일 Web Share API, 데스크탑 링크 복사
  if (typeof navigator.share !== 'undefined') {
    navigator.share({ title: title, text: text, url: url }).catch(function () {});
  } else {
    snsShareCopyLink(url);
    showSnsToast('링크가 복사됐어요! 인스타그램에 붙여넣기해보세요 📸');
  }
}

function snsShareFacebook(url) {
  window.open(
    'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url),
    '_blank', 'noopener,width=600,height=400'
  );
}

function snsShareThreads(text, url) {
  window.open(
    'https://www.threads.net/intent/post?text=' + encodeURIComponent(text + ' ' + url),
    '_blank', 'noopener,width=600,height=600'
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

  // 카카오톡
  btns.appendChild(_makeSnsBtn('sns-kakao',
    '<path d="M8.5 1.5C4.36 1.5 1 4.11 1 7.35c0 2.07 1.35 3.9 3.39 4.95l-.69 2.7c-.06.21.12.39.33.27l3.63-2.37c.27.03.57.06.84.06 4.14 0 7.5-2.61 7.5-5.85S12.64 1.5 8.5 1.5z" fill="currentColor"/>',
    '카카오톡',
    function () { snsShareKakao(ogTitle, ogDesc, ogImage, pageUrl); }
  ));

  // 인스타그램
  btns.appendChild(_makeSnsBtn('sns-instagram',
    '<path d="M8.5 1.5h-1C5.2 1.5 4.6 1.5 3.9 1.8 3.2 2 2.7 2.4 2.2 3c-.5.6-.7 1.2-.8 2-.1.7-.1 1-.1 3s0 2.3.1 3c.1.8.3 1.4.8 2 .5.6 1 1 1.7 1.2.7.2 1.3.3 2.1.3h4c.8 0 1.4-.1 2.1-.3.7-.2 1.2-.6 1.7-1.2.5-.6.7-1.2.8-2 .1-.7.1-1 .1-3s0-2.3-.1-3c-.1-.8-.3-1.4-.8-2-.5-.6-1-1-1.7-1.2-.7-.2-1.3-.3-2.1-.3h-1zm0 1.3h1c.7 0 1.2.1 1.7.2.5.2.9.4 1.2.8.3.4.5.8.6 1.3.1.5.1.8.1 2.9s0 2.4-.1 2.9c-.1.5-.3.9-.6 1.3-.3.4-.7.6-1.2.8-.5.1-1 .2-1.7.2h-4c-.7 0-1.2-.1-1.7-.2-.5-.2-.9-.4-1.2-.8-.3-.4-.5-.8-.6-1.3-.1-.5-.1-.8-.1-2.9s0-2.4.1-2.9c.1-.5.3-.9.6-1.3.3-.4.7-.6 1.2-.8.5-.1 1-.2 1.7-.2zm1 1.4a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4zm0 1.3a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8zm3.4-.3a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6z" fill="currentColor"/>',
    '인스타그램',
    function () { snsShareInstagram(ogTitle, shareText, pageUrl); }
  ));

  // 페이스북
  btns.appendChild(_makeSnsBtn('sns-facebook',
    '<path d="M15 8.5a6.5 6.5 0 1 0-7.5 6.42V10.7H5.7V8.5H7.5V6.94c0-1.78 1.06-2.76 2.68-2.76.78 0 1.59.14 1.59.14v1.75h-.9c-.88 0-1.16.55-1.16 1.11V8.5h1.97l-.31 2.2H9.71v4.22A6.5 6.5 0 0 0 15 8.5z" fill="currentColor"/>',
    '페이스북',
    function () { snsShareFacebook(pageUrl); }
  ));

  // 스레드
  btns.appendChild(_makeSnsBtn('sns-threads',
    '<path d="M8.5 1.5C4.6 1.5 1.5 4.6 1.5 8.5S4.6 15.5 8.5 15.5 15.5 12.4 15.5 8.5 12.4 1.5 8.5 1.5zm1.7 10.6c-1.7.3-3-.2-3.8-1.2-.6-.8-.7-1.8-.4-2.7.4-1 1.2-1.6 2.2-1.7 1.5-.1 2.5.8 2.6 2.3 0 .2 0 .4-.1.6-.2.8-.8 1.2-1.6 1.2-.4 0-.7-.2-.8-.5-.3.5-.7.7-1.2.7-.8 0-1.4-.7-1.3-1.6.1-.8.7-1.4 1.6-1.4.3 0 .5.1.7.2l.1-.2h.7l-.4 2c0 .3.1.5.4.5.6 0 1-.4 1.1-1 .1-.3.1-.6.1-.9-.1-1.6-1.2-2.6-2.8-2.5-1.2.1-2.1.8-2.4 2-.3.9-.1 1.9.5 2.6.8 1 2.2 1.4 3.7 1.1l.1.5z" fill="currentColor"/>',
    '스레드',
    function () { snsShareThreads(shareText, pageUrl); }
  ));

  // 링크 복사
  btns.appendChild(_makeSnsBtn('sns-copy',
    '<path d="M7 2a3 3 0 0 0-3 3v.5h1V5a2 2 0 1 1 4 0v4a2 2 0 0 1-2 2H6.5v1H7a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM10 8.5H9.5V9a2 2 0 0 1-4 0V5a2 2 0 0 1 4 0v.5H10v-.5a3 3 0 1 0-6 0v4a3 3 0 1 0 6 0V8.5z" fill="currentColor"/>',
    '링크 복사',
    function () { snsShareCopyLink(pageUrl); }
  ));

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
