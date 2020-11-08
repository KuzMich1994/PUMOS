$(document).ready(function() {
  let menuButton = document.querySelector('.mobile-button');
menuButton.addEventListener('click', function() {
  document.querySelector('.navbar__links-wrapper-mobile').classList.toggle('navbar__links-wrapper-mobile_visible')
  document.querySelector('body').classList.toggle('scroll-hidden')
})

let modalButton = $('[data-toggle="order"]');
let modalButtonInfo = $('[data-toggle="info"]');
let sertificateButton = $('[data-toggle="sertificate"]');
let appendixButton = $('[data-toggle="appendix"]');
let modalButtonClose = $('.modal__button-close');
let modalButtonCloseInfo = $('.modal-info__button-close');
let modalClose = $('.modal__overlay');
let modalPhotoClose = $('.modal-photo__image');
modalButton.on('click', openModal);
modalButtonClose.on('click', closeModal);
modalClose.on('click', closeModal);
modalButtonInfo.on('click', openModalInfo);
modalButtonCloseInfo.on('click', closeModalInfo);
sertificateButton.on('click', openModalPhotoSertificate);
appendixButton.on('click', openModalPhotoAppendix);
modalPhotoClose.on('click', closeModal);

function openModal() {
  let modalOverlay = $('.modal__overlay')
  let modalDialog = $('.modal__dialog')
  let modalInfoOverlay = $('.modal-info__overlay')
  let modalInfoDialog = $('.modal-info__dialog')
  modalOverlay.addClass('modal__overlay_visible')
  modalDialog.addClass('modal__dialog_visible')
  modalInfoOverlay.removeClass('modal-info__overlay_visible')
  modalInfoDialog.removeClass('modal-info__dialog_visible')
  $('body').addClass('scroll-hidden')
}

function openModalInfo() {
  let modalInfoOverlay = $('.modal-info__overlay')
  let modalInfoDialog = $('.modal-info__dialog')
  modalInfoOverlay.addClass('modal-info__overlay_visible')
  modalInfoDialog.addClass('modal-info__dialog_visible')
  $('body').addClass('scroll-hidden')
}

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
function closeModalInfo() {
  let modalInfoOverlay = $('.modal-info__overlay')
  let modalInfoDialog = $('.modal-info__dialog')
  modalInfoOverlay.removeClass('modal-info__overlay_visible')
  modalInfoDialog.removeClass('modal-info__dialog_visible')
  $('body').removeClass('scroll-hidden')
}
$(document).click(function(e) {
  if($(e.target).is('.modal__overlay')) {
    closeModal();
  }
})
$(document).click(function(e) {
  if($(e.target).is('.modal-info__overlay')) {
    closeModalInfo();
  }
})

$(document).click(function(e) {
  if($(e.target).is('.modal-photo__overlay')) {
    closeModal();
  }
})

  let readButton = document.querySelector('.product__button');
  let hiddenButton = document.querySelector('.product__button_hidden');
  let productDescriptionWrapper = document.querySelector('.product__description-wrapper');
  let productCardMiddle = document.querySelector('.product__card-middle');
  readButton.addEventListener('click', function() {
    productDescriptionWrapper.classList.add('product__description-wrapper_full')
    productCardMiddle.classList.add('product__card-middle_full')
    readButton.classList.add('product__button_hidden')
    hiddenButton.classList.remove('product__button_hidden')
  })
  hiddenButton.addEventListener('click', function() {
    productDescriptionWrapper.classList.remove('product__description-wrapper_full')
    productCardMiddle.classList.remove('product__card-middle_full')
    readButton.classList.remove('product__button_hidden')
    hiddenButton.classList.add('product__button_hidden')
  })

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

let pricetag = document.querySelector('.product__pay-pricetag');
let counter = document.querySelector('.counter');
let stand = document.querySelector('.stand');
pricetag.textContent = '6 300'

counter.addEventListener('click', (event) => {
    if (event.currentTarget.checked) {
        if (stand.checked) {
            pricetag.textContent = '9 600'
        } else {
            pricetag.textContent = '7 800'
        }
    } else {
        if (stand.checked) {
            pricetag.textContent = '8 100'
        } else {
            pricetag.textContent = '6 300'
        }
    }
})

stand.addEventListener('click', (event) => {
    if (event.currentTarget.checked) {
        if (counter.checked) {
            pricetag.textContent = '9 600'
        } else {
            pricetag.textContent = '8 100'
        }
    } else {
        if (counter.checked) {
            pricetag.textContent = '7 800'
        } else {
            pricetag.textContent = '6 300'
        }
    }
})
})