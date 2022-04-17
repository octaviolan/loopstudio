const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const header = document.querySelector('.header');

navToggle.addEventListener('click', function() {
  links.classList.toggle('show-links');
  header.classList.toggle('changeColor-header');
  navToggle.classList.toggle('is-close');
})