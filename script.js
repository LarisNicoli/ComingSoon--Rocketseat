const buttonOpenModal = document.getElementById('openModal')

const modalwrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function () {
    modalwrapper
        .classList
        .remove('invisible')
}

