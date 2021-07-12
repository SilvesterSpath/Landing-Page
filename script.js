const toggle = document.getElementById('toggle');
const navbar = document.querySelector('nav');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

console.log(navbar);

toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});

open.addEventListener('click', () => {
  modal.style.display = 'block';
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});
