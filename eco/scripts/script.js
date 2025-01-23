const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.getElementsByClassName("header__menu")[0].addEventListener('click', (e) => {
  console.log(1);
  document.getElementsByClassName("hamburger")[0].classList.add("hamburger-active")
  e.stopPropagation();
});

document.getElementsByTagName("body")[0].addEventListener('click', (e) => {
  document.getElementsByClassName("hamburger")[0].classList.remove("hamburger-active");

});

if (localStorage.getItem("name") != null) {
  document.getElementsByClassName("header-login")[0].innerHTML = `<a href="./pages/booking-admin.html"><button class="header-login__link">Уведомления</button></a>`;
  document.getElementsByClassName("header-burger-login")[0].innerHTML = `<a href="./pages/booking-admin.html"> <p class="hamburger__text hamburger__login">Уведомления</p></a>`;


}

document.getElementsByClassName("booking__find-buton")[0].addEventListener('click', (e) => {

  let room = Math.round(Math.random() * 5);
  let elem = document.getElementsByClassName("section-room")[room];
  console.log(room);
  document.getElementsByClassName("booking-result")[0].innerHTML = `<p class="booking-result__title">Найдено: </p> ${elem.innerHTML}`;
});

// localStorage.setItem("name",response.data.name);
// localStorage.setItem("userId",response.data.user_id);