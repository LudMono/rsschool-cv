const navigation = document.querySelector("#navigation");
const header = document.querySelector("#header");
const drawer = document.querySelector("#drawer");
const aside = document.querySelector("#aside");

const toggler = document.querySelector("#toggler");

const asideNest = document.querySelector("#asideNest");
const navigationNest = document.querySelector("#navigationNest");


function moveBlocks() {
  if (window.matchMedia("(max-width: 960px)").matches) {
    header.appendChild(navigation);
  }

  if (window.matchMedia("(max-width: 768px)").matches) {
    drawer.appendChild(aside);
  }

  if (window.matchMedia("(min-width: 960px)").matches) {
    navigationNest.appendChild(navigation);
  }

  if (window.matchMedia("(min-width: 768px)").matches) {
    asideNest.appendChild(aside);

  }
}

toggler.addEventListener("click", () => {
  drawer.classList.toggle("header__drawer--active");
  toggler.classList.toggle("header__toggler--active");
});

window.addEventListener("resize", moveBlocks);
moveBlocks();
