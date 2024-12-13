mainObj.relPro = 
{
  initSwiper()
  {
     var swiper = new Swiper(".relPro__Swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}