openPopupButton = document.querySelector('.book-now');
closePopupButton = document.querySelector('.popup__close');
openPopup = document.querySelector('.popup');
backdrop = document.querySelector('.backdrop');

const togglePopup = () => {
    backdrop.classList.toggle('visible');
    openPopup.classList.toggle('visible');
}

openPopupButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);
backdrop.addEventListener('click', togglePopup);