const toggle = document.getElementById('toggle');
const navbar = document.querySelector('nav');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

console.log(navbar);

toggle.addEventListener('click', () => {
  if (navbar.style.transform != 'translateX(0%)') {
    navbar.style.transform = 'translateX(0%)';
  } else {
    navbar.style.transform = 'translateX(-100%)';
  }
});

open.addEventListener('click', () => {
  modal.style.display = 'block';
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});
