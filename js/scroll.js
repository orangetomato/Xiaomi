(function() {
    const header = document.querySelector('.page-header');
    const sections = document.querySelectorAll('.section');
    const linkList = document.querySelectorAll('.menu__link');

    const changeActiveLinkByScroll = () => {
        const currentPositionY = window.scrollY;
        const headerHeight = header.offsetHeight;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop;
            if (currentPositionY + headerHeight + 3 >= sectionTop && currentPositionY + headerHeight + 3 < sectionTop + sectionHeight) {
                linkList.forEach(link => {
                    link.classList.remove('link__contacts--active');
                    link.classList.remove('menu__link--active');
                    if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                        if (section.getAttribute('id') === 'contacts') {
                            link.classList.add('link__contacts--active');
                        } else {
                            link.classList.add('menu__link--active');
                        }
                    }
                });
            }
        });
    }

    document.addEventListener('scroll', changeActiveLinkByScroll);


    const setScrollMargin = () => {
        const headerHeight = header.offsetHeight;
        sections.forEach(section => {
            section.style.scrollMarginTop = `${headerHeight}px`;
        });
    }

    window.addEventListener('resize', setScrollMargin);
    setScrollMargin();
}());