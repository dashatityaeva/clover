//===моб. меню
let menuMob = document.querySelector('.menu-mb');
let headerMenu = document.querySelector('.header__nav');


let toggleMenu = function () {
  headerMenu.classList.toggle('header__nav_active');
  menuMob.classList.toggle('menu-mp--open');
  document.body.classList.toggle('hidden');
}
menuMob.addEventListener('click', toggleMenu);

//===фикс моб меню
let headerMenuList = document.querySelector('.header__list');

headerMenuList.addEventListener('click', function(e) {
  let target = e.target;
  if (target.tagName === 'A') {
    toggleMenu();
  }
})





let inputs = document.querySelectorAll('.input__file');
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.input__file-button-text').innerText;

  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;

    if (countFiles)
      label.querySelector('.input__file-button-text').innerText = 'Файл выбран';
    else
      label.querySelector('.input__file-button-text').innerText = labelVal;
  });
});


//===pop up 
const btns = document.querySelectorAll('.btn-pop');
const modalOverlay = document.querySelector('.modal__overlay ');
const modals = document.querySelectorAll('.modal');
const modalCloses = document.querySelectorAll('.modal__close');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal__visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal__visible');
    modalOverlay.classList.add('modal__overlay_visible');

    $('.work').slick({
      infinite: true,
      arrows: false,
      dots: true,
    });

    $('.work__slider-main').slick({
      // infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // infinite: true,
      // adaptiveHeight: true,
      asNavFor: '.work__slider-small'
    });
    $('.work__slider-small').slick({
      // infinite: true,
      slidesToShow: 6,
      // slidesToScroll: 1,
      asNavFor: '.work__slider-main',
      centerMode: true,
      focusOnSelect: true,
      arrows: false,
      variableWidth: true,
      responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      }]
    });
  });
});

hiddenModal = function () {
  modalOverlay.classList.remove('modal__overlay_visible');
  modals.forEach((el) => {
    el.classList.remove('modal__visible');
  });

}

modalCloses.forEach(close => {
  close.addEventListener('click', () => {
    hiddenModal();
  });
})


modalOverlay.addEventListener('click', (e) => {
  if (e.target == modalOverlay) {
    hiddenModal();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 27 || e.key === "Escape" || e.key === "Esc") {
    if (modalOverlay.classList.contains('modal__overlay_visible')) {
      hiddenModal();
    }
  }
});





$(document).ready(function () {

  /*Dropdown Menu*/
  $('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
  });
  $('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
  });
  $('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
  });
  /*End Dropdown Menu*/

  //===смузи прокрутка
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    })
  }

  $('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1101,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });


  //========маска телефона=======
  if (!!$('input[type="tel"]').length) {
    $('input[type="tel"]').mask("+7 (999) 999-99-99");
  }

  //============валидация============
  if (!!$('#contacts__form')) {

    $('#contacts__form').validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: {
          required: true,
          minlength: 10
        },

      },
      messages: {
        name: {
          required: '',
          minlength: ''
        },
        phone: {
          required: '',
          minlength: ''
        },
      },
      errorClass: 'invalid'
    });
  }

  if (!!$('#form__measurer')) {

    $('#form__measurer').validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: {
          required: true,
          minlength: 10
        },

      },
      messages: {
        name: {
          required: '',
          minlength: ''
        },
        phone: {
          required: '',
          minlength: ''
        },
      },
      errorClass: 'invalid'
    });
  }
});