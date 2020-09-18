navigationButton = document.querySelector('.navigation__button');
openNavigation = document.querySelector('.navigation__background');
openNavigationItems = document.querySelector('.navigation__nav');
navigationIcon = document.querySelector('.navigation__icon');

navigationLinks = document.querySelectorAll('.navigation__link');

const toggleNavigation = () => {
    openNavigation.classList.toggle('visible');
    openNavigationItems.classList.toggle('visible');
    navigationIcon.classList.toggle('hamburger');
}

navigationButton.addEventListener('click', toggleNavigation);

navigationLinks.forEach(navLinks => {
    navLinks.addEventListener('click', toggleNavigation);
});