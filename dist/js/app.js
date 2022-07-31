window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

let menuCheckBox = document.getElementById("menu");
let searchCheckBox = document.querySelector("#search");

let newsItems = document.querySelectorAll(".new-item");
let ciblesItems = document.querySelectorAll(".cible-item");
let categoriesItems = document.querySelectorAll(".category-item");

document.addEventListener("scroll", () => {
  menuCheckBox.checked = false;
  searchCheckBox.checked = false;

  let doc = document.documentElement;
  let scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

  newsItems.forEach((item) => {
    let topDistance = item.offsetTop;

    if (topDistance - 500 < scrollTop) {
      item.classList.add("animate__animated", "animate__fadeInUp");
    }
  });

  ciblesItems.forEach((item, index) => {
    let topDistance = item.offsetTop;

    if (topDistance - 500 < scrollTop) {
      switch (index) {
        case 0:
          item.classList.add("animate__animated", "animate__fadeInBottomLeft");
          break;
        case 1:
          item.classList.add("animate__animated", "animate__fadeInUp");
          break;
        case 2:
          item.classList.add("animate__animated", "animate__fadeInBottomRight");
          break;
        default:
          break;
      }
    }
  });

  categoriesItems.forEach((item) => {
    let topDistance = item.offsetTop;

    if (topDistance - 500 < scrollTop) {
      item.classList.add("animate__animated", "animate__zoomIn");

      item.addEventListener("animationend", () => {
        item.classList.add("opacity-100");
      });
    }
  });
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    menuCheckBox.checked = false;
  });
});
