const voucherModal = document.querySelector('.voucher-modal')
const closeButton = voucherModal.querySelector('.close-button')
const voucherOverlay = document.querySelector('.overlay')

function closeVoucherModal() {
  voucherModal.classList.remove('is-active')
  voucherOverlay.classList.remove('is-active')
}
closeButton.addEventListener('click', closeVoucherModal)
