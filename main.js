const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("#header .toggle");

for (const element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

const header = document.querySelector("#header");
const navHeader = header.offsetHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY >= navHeader) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

// Tertimonials

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
      setWrapperSize:true,
    },
  }
});

// Scroll Reveal

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
}).reveal(
  `
    #home .image, #home .text,
    #about .image, #about .text,
    #services .card, #services .text,
    #tertimonials header, #tertimonials .tertimonials,
    #contact .text, #contact .links`,
  { interval: 100 }
);

const buttonBackToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 560) {
    buttonBackToTop.classList.add("show");
  } else {
    buttonBackToTop.classList.remove("show");
  }
});


// active menu current
const sections = document.querySelectorAll('main section[id]');


window.addEventListener('scroll',() =>{
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 ;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  }
})