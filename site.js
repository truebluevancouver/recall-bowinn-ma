// Lightweight, accessible interactions for the campaign website.
const menuButton = document.querySelector('.menu');
const navigation = document.querySelector('.campaign-header nav');

if (menuButton && navigation) {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    menuButton.textContent = isOpen ? '✕' : '☰';
  });
  navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      menuButton.textContent = '☰';
    });
  });
}

const progressBar = document.querySelector('.progress');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (progressBar && !reduceMotion) {
  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (scrollable > 0 ? window.scrollY / scrollable * 100 : 0) + '%';
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
} else if (progressBar) {
  progressBar.style.display = 'none';
}
