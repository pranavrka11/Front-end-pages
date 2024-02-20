var multipleCardCarousel = document.querySelector(
    "#cuisine-car-id"
  );
  if (window.matchMedia("(min-width: 770px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    var carouselWidth = $(".cuisine-carousel")[0].scrollWidth;
    var cardWidth = $(".carousel-item-cuisine").width();
    var scrollPosition = 0;
    $("#cuisine-car-id .cuisine-carousel-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#cuisine-car-id .cuisine-carousel").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#cuisine-car-id .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#cuisine-car-id .cuisine-carousel").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }