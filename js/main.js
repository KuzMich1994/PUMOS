$(document).ready(function() {
  let menuButton = document.querySelector('.mobile-button');
menuButton.addEventListener('click', function() {
  document.querySelector('.navbar__links-wrapper-mobile').classList.toggle('navbar__links-wrapper-mobile_visible')
  document.querySelector('body').classList.toggle('scroll-hidden')
})

let modalButton = $('[data-toggle="order"]')
let modalButtonClose = $('.modal__button-close')
modalButton.on('click', openModal);
modalButtonClose.on('click', closeModal);

function openModal() {
  let modalOverlay = $('.modal__overlay')
  modalOverlay.addClass('modal__overlay_visible')
  $('body').addClass('scroll-hidden')
}

function closeModal() {
  let modalOverlay = $('.modal__overlay')
  modalOverlay.removeClass('modal__overlay_visible')
  $('body').removeClass('scroll-hidden')
}
})