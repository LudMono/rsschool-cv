const navigation = document.querySelector('#navigation');
const header = document.querySelector('#header');
const drawer = document.querySelector('#drawer');
const toggler = document.querySelector('#toggler');
const aside = document.querySelector('#aside');

if (window.matchMedia("(max-width: 960px)").matches) {
  header.appendChild(navigation)
  drawer.appendChild(aside)
} else {
}


toggler.addEventListener('click', ()=> {
  drawer.classList.toggle('header__drawer--active');
})
