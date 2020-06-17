(function() {
    const burger = document.querySelector('.page-header__burger');
    const toggleHandler = () => burger.classList.toggle('burger__active');
    burger.addEventListener('click', toggleHandler);
}());