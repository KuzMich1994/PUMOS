$(document).ready(function() {
  let menuButton = document.querySelector('.mobile-button');

  if (menuButton) {
    menuButton.addEventListener('click', function() {
      document.querySelector('.navbar__links-wrapper-mobile').classList.toggle('navbar__links-wrapper-mobile_visible')
      document.querySelector('body').classList.toggle('scroll-hidden')
    })
  }



let modalButton = $('[data-toggle="order"]');
// let modalButtonInfo = $('[data-toggle="info"]');
let sertificateButton = $('[data-toggle="sertificate"]');
let appendixButton = $('[data-toggle="appendix"]');
let sliderButtonFirst = $('[data-toggle="first"]');
let sliderButtonSecond = $('[data-toggle="second"]');
let sliderButtonThrid = $('[data-toggle="thrid"]');
let modalButtonClose = $('.modal__button-close');
// let modalButtonCloseInfo = $('.modal-info__button-close');
let modalClose = $('.modal__overlay');
let modalPhotoClose = $('.modal-photo__image');
let sliderModalClose = $('.slider-modal__image')
modalButton.on('click', openModal);
modalButtonClose.on('click', closeModal);
modalClose.on('click', closeModal);
// modalButtonInfo.on('click', openModalInfo);
// modalButtonCloseInfo.on('click', closeModalInfo);
sertificateButton.on('click', openModalPhotoSertificate);
appendixButton.on('click', openModalPhotoAppendix);
modalPhotoClose.on('click', closeModal);
sliderButtonFirst.on('click', openModalFirst);
sliderButtonSecond.on('click', openModalSecond);
sliderButtonThrid.on('click', openModalThrid);
sliderModalClose.on('click', closeModalFirst);
sliderModalClose.on('click', closeModalSecond);
sliderModalClose.on('click', closeModalThrid);

function openModal() {
  let modalOverlay = $('.modal__overlay')
  let modalDialog = $('.modal__dialog')
  // let modalInfoOverlay = $('.modal-info__overlay')
  // let modalInfoDialog = $('.modal-info__dialog')
  modalOverlay.addClass('modal__overlay_visible')
  modalDialog.addClass('modal__dialog_visible')
  // modalInfoOverlay.removeClass('modal-info__overlay_visible')
  // modalInfoDialog.removeClass('modal-info__dialog_visible')
  $('body').addClass('scroll-hidden')
}

// function openModalInfo() {
//   let modalInfoOverlay = $('.modal-info__overlay')
//   let modalInfoDialog = $('.modal-info__dialog')
//   modalInfoOverlay.addClass('modal-info__overlay_visible')
//   modalInfoDialog.addClass('modal-info__dialog_visible')
//   $('body').addClass('scroll-hidden')
// }

function openModalPhotoSertificate() {
  let modalPhotoOverlay = $('.modal-photo__overlay')
  let modalPhotoSertificateDialog = $('.modal-photo__sertificate-dialog')
  modalPhotoOverlay.addClass('modal-photo__overlay_visible')
  modalPhotoSertificateDialog.addClass('modal-photo__sertificate-dialog_visible')
}

function openModalPhotoAppendix() {
  let modalPhotoOverlay = $('.modal-photo__overlay')
  let modalPhotoAppendixDialog = $('.modal-photo__app-dialog')
  modalPhotoOverlay.addClass('modal-photo__overlay_visible')
  modalPhotoAppendixDialog.addClass('modal-photo__app-dialog_visible')
}

function openModalFirst() {
  let sliderModalOverlay = $('.slider-modal__overlay')
  let sliderModalDialog = $('.slider-modal__photo-dialog-first')
  sliderModalOverlay.addClass('slider-modal__overlay_visible')
  sliderModalDialog.addClass('slider-modal__photo-dialog-first_visible')
}
function openModalSecond() {
  let sliderModalOverlay = $('.slider-modal__overlay')
  let sliderModalDialog = $('.slider-modal__photo-dialog-second')
  sliderModalOverlay.addClass('slider-modal__overlay_visible')
  sliderModalDialog.addClass('slider-modal__photo-dialog-second_visible')
}
function openModalThrid() {
  let sliderModalOverlay = $('.slider-modal__overlay')
  let sliderModalDialog = $('.slider-modal__photo-dialog-thrid')
  sliderModalOverlay.addClass('slider-modal__overlay_visible')
  sliderModalDialog.addClass('slider-modal__photo-dialog-thrid_visible')
}

function closeModal() {
  let modalOverlay = $('.modal__overlay')
  let modalDialog = $('.modal__dialog')
  let modalPhotoOverlay = $('.modal-photo__overlay')
  let modalPhotoSertificateDialog = $('.modal-photo__sertificate-dialog')
  let modalPhotoAppendixDialog = $('.modal-photo__app-dialog')
  modalOverlay.removeClass('modal__overlay_visible')
  modalDialog.removeClass('modal__dialog_visible')
  modalPhotoOverlay.removeClass('modal-photo__overlay_visible')
  modalPhotoSertificateDialog.removeClass('modal-photo__sertificate-dialog_visible')
  modalPhotoAppendixDialog.removeClass('modal-photo__app-dialog_visible')
  $('body').removeClass('scroll-hidden')
}
// function closeModalInfo() {
//   let modalInfoOverlay = $('.modal-info__overlay')
//   let modalInfoDialog = $('.modal-info__dialog')
//   modalInfoOverlay.removeClass('modal-info__overlay_visible')
//   modalInfoDialog.removeClass('modal-info__dialog_visible')
//   $('body').removeClass('scroll-hidden')
// }

function closeModalFirst() {
  let sliderModalOverlay = $('.slider-modal__overlay')
  let sliderModalDialog = $('.slider-modal__photo-dialog-first')
  sliderModalOverlay.removeClass('slider-modal__overlay_visible')
  sliderModalDialog.removeClass('slider-modal__photo-dialog-first_visible')
}
function closeModalSecond() {
  let sliderModalOverlay = $('.slider-modal__overlay')
  let sliderModalDialog = $('.slider-modal__photo-dialog-second')
  sliderModalOverlay.removeClass('slider-modal__overlay_visible')
  sliderModalDialog.removeClass('slider-modal__photo-dialog-second_visible')
}
function closeModalThrid() {
  let sliderModalOverlay = $('.slider-modal__overlay')
  let sliderModalDialog = $('.slider-modal__photo-dialog-thrid')
  sliderModalOverlay.removeClass('slider-modal__overlay_visible')
  sliderModalDialog.removeClass('slider-modal__photo-dialog-thrid_visible')
}

$(document).click(function(e) {
  if($(e.target).is('.modal__overlay')) {
    closeModal();
  }
})
// $(document).click(function(e) {
//   if($(e.target).is('.modal-info__overlay')) {
//     closeModalInfo();
//   }
// })

$(document).click(function(e) {
  if($(e.target).is('.modal-photo__overlay')) {
    closeModal();
  }
})
$(document).click(function(e) {
  if($(e.target).is('.slider-modal__overlay')) {
    closeModalFirst();
  }
})
$(document).click(function(e) {
  if($(e.target).is('.slider-modal__overlay')) {
    closeModalSecond();
  }
})
$(document).click(function(e) {
  if($(e.target).is('.slider-modal__overlay')) {
    closeModalThrid();
  }
})

  let readButton = document.querySelector('.product__button');
  let hiddenButton = document.querySelector('.product__button_hidden');
  let productDescriptionWrapper = document.querySelector('.product__description-wrapper');
  let productCardMiddle = document.querySelector('.product__card-middle');
  if (readButton) {
    readButton.addEventListener('click', function() {
      productDescriptionWrapper.classList.add('product__description-wrapper_full')
      productCardMiddle.classList.add('product__card-middle_full')
      readButton.classList.add('product__button_hidden')
      hiddenButton.classList.remove('product__button_hidden')
    })
  }
  if (hiddenButton) {
    hiddenButton.addEventListener('click', function() {
      productDescriptionWrapper.classList.remove('product__description-wrapper_full')
      productCardMiddle.classList.remove('product__card-middle_full')
      readButton.classList.remove('product__button_hidden')
      hiddenButton.classList.add('product__button_hidden')
    })
  }

  if (typeof Swiper !== "undefined") {
    var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      simulateTouch: false,
    
      // If we need pagination
      pagination: {
        el: '.product-slider__pagination',
        bulletClass: "product-slider__bullet",
        bulletActiveClass: "product-slider__bullet_active",
        clickable: true,
        type: "custom"
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.product-slider__button-next',
        prevEl: '.product-slider__button-prev',
      },
    
    })
  }

// let pricetag = document.querySelector('.product__pay-pricetag');
// let counter = document.querySelector('.counter');
// let stand = document.querySelector('.stand');
// // pricetag.textContent = '9 900'

// counter.addEventListener('click', (event) => {
//     if (event.currentTarget.checked) {
//         if (stand.checked) {
//             pricetag.textContent = '13 200'
//         } else {
//             pricetag.textContent = '11 400'
//         }
//     } else {
//         if (stand.checked) {
//             pricetag.textContent = '11 700'
//         } else {
//             pricetag.textContent = '9 900'
//         }
//     }
// })

// stand.addEventListener('click', (event) => {
//     if (event.currentTarget.checked) {
//         if (counter.checked) {
//             pricetag.textContent = '13 200'
//         } else {
//             pricetag.textContent = '11 700'
//         }
//     } else {
//         if (counter.checked) {
//             pricetag.textContent = '11 400'
//         } else {
//             pricetag.textContent = '9 900'
//         }
//     }
// })

const scrollLinks = () => {
  const navbarLinks = document.querySelectorAll('.navbar__link'),
    mobileMenu = document.querySelector('.navbar__links-wrapper-mobile'),
    body = document.querySelector('body');

  navbarLinks.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const blockID = item.getAttribute('href').substr(1);
      console.log(blockID);
      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      mobileMenu.classList.remove('navbar__links-wrapper-mobile_visible')
      body.classList.remove('scroll-hidden')
    });
  });

};

scrollLinks();
})