//Мобильное меню
var menuMobile = document.getElementById("menu__mobile"),
  menu = document.getElementsByClassName("menu")[0];

menuMobile.addEventListener("click", function () {
  menuMobile.classList.toggle("menu__mobile-active");
  menu.classList.toggle("menu-active");
});

//Слайдер 
$(document).ready(function(){

    $('.slider-block').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.slider-arrow__left'),
        nextArrow: $('.slider-arrow__right'),
        responsive:[
          {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 582,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
      }
        ]
    });

      $('#map-form').validate({
          rules: {
              username: {
                  required: true,
                  minlength: 2,
                  maxlength: 15
              },
              email: {
                  required: true,
                  email: true
              }
          },
          messages: {
              username:{
                  required: "Заполните поле!",
                  minlength: jQuery.validator.format("Осталось {0} символа!"),
                  maxlength: jQuery.validator.format("Не больше {0} символов!")
              },
              email: "Введите корректный email!"
          }
      });

});