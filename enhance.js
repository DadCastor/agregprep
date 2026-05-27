/* AgrégPrep — enhancements visuels additifs
   • Détection page chimie (classe body.chim-page)
   • Barre de progression de lecture (CSS var --scroll)
   • Décor "scrolled" sur la nav
   • Animation d'apparition .r → .v (si pas déjà gérée)
*/
(function(){
  'use strict';

  // 1. Détection chimie via lien actif dans la nav (couleur violette)
  var CHIM = ['chimie-solutions','thermodynamique-chimique','electrochimie',
              'cinetique-catalyse','chimie-organique','structure-matiere'];
  var path = location.pathname.split('/').pop().replace('.html','');
  if (CHIM.indexOf(path) !== -1) {
    document.documentElement.classList.add('chim-page');
    document.body && document.body.classList.add('chim-page');
  } else {
    // fallback : si la page contient un .chap-hero.c, on est en chimie
    if (document.querySelector('.chap-hero.c, .chap-eyebrow.c, h1 em.c')) {
      document.documentElement.classList.add('chim-page');
      document.body && document.body.classList.add('chim-page');
    }
  }

  // 2. Barre de progression de lecture
  function updateScroll(){
    var h = document.documentElement;
    var max = (h.scrollHeight - h.clientHeight) || 1;
    var pct = Math.max(0, Math.min(100, (h.scrollTop / max) * 100));
    document.body && document.body.style.setProperty('--scroll', pct.toFixed(2)+'%');
    // 3. Nav "scrolled"
    var nav = document.querySelector('nav');
    if (nav) nav.classList.toggle('scrolled', h.scrollTop > 8);
  }

  // 4. IntersectionObserver pour .r → .v (apparition douce)
  function setupReveal(){
    var rs = document.querySelectorAll('.r');
    if (!rs.length || !('IntersectionObserver' in window)) {
      rs.forEach(function(el){ el.classList.add('v'); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting) { e.target.classList.add('v'); io.unobserve(e.target); }
      });
    }, { rootMargin: '-40px 0px -40px 0px', threshold: 0.04 });
    rs.forEach(function(el){ io.observe(el); });
  }

  // 5. aria-hidden sur les emojis icônes (rôle purement décoratif)
  function setupAriaHidden(){
    var selectors = ['.ico', '.mk', '.ri', '.ra', '.sv'];
    selectors.forEach(function(sel){
      document.querySelectorAll(sel).forEach(function(el){
        el.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // 6. Bouton retour en haut
  function setupBackToTop(){
    var btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.setAttribute('aria-label', 'Retour en haut de page');
    btn.textContent = '↑';
    btn.style.cssText = [
      'position:fixed',
      'bottom:1.5rem',
      'right:1.5rem',
      'width:2.4rem',
      'height:2.4rem',
      'border-radius:50%',
      'border:none',
      'background:var(--phys,#2563eb)',
      'color:#fff',
      'font-size:1.1rem',
      'font-weight:700',
      'line-height:1',
      'cursor:pointer',
      'box-shadow:0 2px 8px rgba(0,0,0,.18)',
      'opacity:0',
      'transform:translateY(8px)',
      'transition:opacity .2s,transform .2s',
      'z-index:999',
      'pointer-events:none'
    ].join(';');
    document.body.appendChild(btn);
    btn.addEventListener('click', function(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', function(){
      var show = (document.documentElement.scrollTop || document.body.scrollTop) > 300;
      btn.style.opacity = show ? '1' : '0';
      btn.style.transform = show ? 'translateY(0)' : 'translateY(8px)';
      btn.style.pointerEvents = show ? 'auto' : 'none';
    }, { passive: true });
  }

  // Init
  function init(){
    updateScroll();
    setupReveal();
    setupAriaHidden();
    setupBackToTop();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll, { passive: true });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
