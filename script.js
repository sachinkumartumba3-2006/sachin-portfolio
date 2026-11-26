const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const topButton = document.getElementById('topButton');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  topButton.classList.toggle('show', window.scrollY > 300);
});

topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
