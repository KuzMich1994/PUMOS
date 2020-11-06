$(document).ready(function() {
  let menuButton = document.querySelector('.mobile-button');
menuButton.addEventListener('click', function() {
  document.querySelector('.navbar__links-wrapper-mobile').classList.toggle('navbar__links-wrapper-mobile_visible')
  document.querySelector('body').classList.toggle('scroll-hidden')
})

let modalButton = $('[data-toggle="order"]');
let modalButtonInfo = $('[data-toggle="info"]');
let modalButtonClose = $('.modal__button-close');
let modalButtonCloseInfo = $('.modal__button-close_info');
let modalClose = $('.modal__overlay');
modalButton.on('click', openModal);
modalButtonClose.on('click', closeModal);
modalClose.on('click', closeModal);
modalButtonInfo.on('click', openModalInfo);
modalButtonCloseInfo.on('click', closeModalInfo);

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

function closeModal() {
  let modalOverlay = $('.modal__overlay')
  let modalDialog = $('.modal__dialog')
  modalOverlay.removeClass('modal__overlay_visible')
  modalDialog.removeClass('modal__dialog_visible')
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

})