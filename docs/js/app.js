window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 500);
});

let menuCheckBox = document.getElementById("menu");
let searchCheckBox = document.querySelector("#search");
let subMenu = document.getElementById("sub-menu");
let header = document.querySelector("header");

let newsItems = document.querySelectorAll(".new-item");
let ciblesItems = document.querySelectorAll(".cible-item");
let categoriesItems = document.querySelectorAll(".category-item");

document.addEventListener("scroll", () => {
  menuCheckBox.checked = false;
  searchCheckBox.checked = false;

  let doc = document.documentElement;
  let scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

  // if (scrollTop > 70) {
  //   header.classList.replace("relative", "fixed");
  // } else {
  //   header.classList.remove("fixed", "relative");
  // }

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

// Animation mouse drag slide
let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector(".categories-items");

const end = () => {
  isDown = false;
  slider.classList.remove("active");
};

const start = (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const move = (e) => {
  if (!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = x - startX;
  slider.scrollLeft = scrollLeft - dist;
};

(() => {
  slider.addEventListener("mousedown", start);
  slider.addEventListener("touchstart", start);

  slider.addEventListener("mousemove", move);
  slider.addEventListener("touchmove", move);

  slider.addEventListener("mouseleave", end);
  slider.addEventListener("mouseup", end);
  slider.addEventListener("touchend", end);
})();

// Hero slider
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.querySelectorAll(".controls input");
  let next = document.querySelector(".next-btn");
  let prev = document.querySelector(".prev-btn");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].checked = false;
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].checked += true;
  console.log(slideIndex - 1 == 0);

  if (slideIndex - 1 == 0) {
    prev.classList.add("desactived");
  } else {
    prev.classList.remove("desactived");
  }
  if (slideIndex - 1 == slides.length - 1) {
    next.classList.add("desactived");
  } else {
    next.classList.remove("desactived");
  }
}
