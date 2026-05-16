/* ── Navigation scroll state ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── Mobile drawer ── */
const hamburger = document.getElementById('hamburger');
const drawer    = document.getElementById('drawer');
const overlay   = document.getElementById('overlay');

function openDrawer() {
  hamburger.classList.add('open');
  drawer.classList.add('open');
  overlay.classList.add('show');
  hamburger.setAttribute('aria-expanded', 'true');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  hamburger.classList.remove('open');
  drawer.classList.remove('open');
  overlay.classList.remove('show');
  hamburger.setAttribute('aria-expanded', 'false');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  drawer.classList.contains('open') ? closeDrawer() : openDrawer();
});

overlay.addEventListener('click', closeDrawer);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDrawer();
});

window.closeDrawer = closeDrawer;

/* ── Books carousel ── */
const track   = document.querySelector('.books-track');
const prevBtn = document.querySelector('.books-prev');
const nextBtn = document.querySelector('.books-next');

if (track && prevBtn && nextBtn) {
  const SCROLL_AMT = 220;

  const updateBtnState = () => {
    prevBtn.disabled = track.scrollLeft <= 0;
    nextBtn.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
  };

  prevBtn.addEventListener('click', () => track.scrollBy({ left: -SCROLL_AMT, behavior: 'smooth' }));
  nextBtn.addEventListener('click', () => track.scrollBy({ left:  SCROLL_AMT, behavior: 'smooth' }));
  track.addEventListener('scroll', updateBtnState, { passive: true });
  updateBtnState();
}

/* ── Community email form ── */
const communityForm = document.getElementById('communityForm');
if (communityForm) {
  communityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    communityForm.innerHTML =
      '<p class="form-success">You\'re on the journey with us. ✦</p>';
  });
}
