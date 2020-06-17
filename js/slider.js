(function() {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.pictures__slide');
    let currentItem = 0;
    let isEnabled = true;

    function changeCurrentItem(n) {
        currentItem = (n + items.length) % items.length;
    }

    function hideItem(direction) {
        isEnabled = false;
        items[currentItem].classList.add(direction);
        items[currentItem].addEventListener('animationend', function() {
            this.classList.remove('active', direction);
        });
    }

    function showItem(direction) {
        items[currentItem].classList.add('next', direction);
        items[currentItem].addEventListener('animationend', function() {
            this.classList.remove('next', direction);
            this.classList.add('active');
            isEnabled = true;
        });
    }

    function nextItem(n) {
        hideItem('to-left');
        changeCurrentItem(n + 1);
        showItem('from-right');
    }

    function previousItem(n) {
        hideItem('to-right');
        changeCurrentItem(n - 1);
        showItem('from-left');
    }

    document.querySelector('.slider__arrow--previous').addEventListener('click', function() {
        if (isEnabled) {
            previousItem(currentItem);
        }
    });

    document.querySelector('.slider__arrow--next').addEventListener('click', function() {
        if (isEnabled) {
            nextItem(currentItem);
        }
    });
}());