const itemNavsHidden = document.querySelector('.item-nav-hid')
const navsHidden = document.querySelector('.hidden-navs')

let isActive = false

itemNavsHidden.addEventListener('click', function () {
    isActive = !isActive

    if (isActive) {
        navsHidden.classList.add('hidden-navs-display')
    } else {
        navsHidden.classList.remove('hidden-navs-display')
    }
})

// for about web

const clickOpenModel = document.querySelector('.item-nav-modal')
const modalWrapper = document.querySelector('.modal-wrapper')
const buttonExitModal = document.querySelector('.btn-exit')

clickOpenModel.addEventListener('click', () => {
    modalWrapper.style.display = 'flex';
})

buttonExitModal.addEventListener('click', () => {
    modalWrapper.style.display = 'none';
})