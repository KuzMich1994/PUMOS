$(document).ready(function() {
  let menuButton = document.querySelector('.mobile-button');
menuButton.addEventListener('click', function() {
  document.querySelector('.navbar__links-wrapper-mobile').classList.toggle('navbar__links-wrapper-mobile_visible')
  document.querySelector('body').classList.toggle('scroll-hidden')
})

let modalButton = $('[data-toggle="order"]');
let modalButtonClose = $('.modal__button-close');
let modalClose = $('.modal__overlay');
modalButton.on('click', openModal);
modalButtonClose.on('click', closeModal);
modalClose.on('click', closeModal);

function openModal() {
  let modalOverlay = $('.modal__overlay')
  let modalDialog = $('.modal__dialog')
  modalOverlay.addClass('modal__overlay_visible')
  modalDialog.addClass('modal__dialog_visible')
  $('body').addClass('scroll-hidden')
}

function closeModal() {
  let modalOverlay = $('.modal__overlay')
  let modalDialog = $('.modal__dialog')
  modalOverlay.removeClass('modal__overlay_visible')
  modalDialog.removeClass('modal__dialog_visible')
  $('body').removeClass('scroll-hidden')
}
$(document).click(function(e) {
  if($(e.target).is('.modal__overlay')) {
    closeModal();
  }
})

})