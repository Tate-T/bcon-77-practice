// const modal1 = document.querySelector('.js-backdrop');

const modal = document.querySelector('[data-modal]');
const openBtn = document.querySelector('[data-modal-open]');
const closeBtn = document.querySelector('[data-modal-close]');

function toggleModal() {
  modal.classList.toggle('modal-hidden');
  document.body.classList.toggle('no-scroll');
}

openBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);