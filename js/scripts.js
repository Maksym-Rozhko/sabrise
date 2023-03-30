document.addEventListener('DOMContentLoaded', () => {
    const modal = new GraphModal();

    const smoothScrollToElems = (links) => {
        const anchorsLink = document.querySelectorAll(links);
      
        if (anchorsLink) {
            const smoothScroll = (anchors) => {
                for (let anchor of anchors) {
                    const blockID = anchor.getAttribute('href');
    
                    anchor.addEventListener('click', (e) => {
                        e.preventDefault();
                        if (document.querySelector(blockID)) {
                            if (anchor.parentElement.parentElement.classList.contains('menu-mob')) {
                                modal.close('menu');
                            }
                            document.querySelector(blockID).scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    });
                };
            };
            
            smoothScroll(anchorsLink);
        }
    };
    
    smoothScrollToElems('.header nav a');
    smoothScrollToElems('.menu-modal nav a');

    new Swiper('.banners-slider.swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,

        pagination: {
            el: '.banners__pagin.swiper-pagination',
            clickable: true,
        },
    });

    const forms = document.querySelectorAll('.form');
    
    if (forms) {
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                if (modal.isOpen) {
                    modal.close('form');
                }
                modal.open('thanks');
                form.reset();
                inputTime.value = currentTime;
            });
        });
    }

    const burgerElemBtn = document.querySelector('.burger');
    const closeMenuElemBtn = document.querySelector('.menu-modal .graph-modal__close');
    const modalMenu = document.querySelector('.menu-modal');

    if (burgerElemBtn) {
        burgerElemBtn.addEventListener('click', () => {
            setTimeout(() => {
                modalMenu.classList.add('active'); 
            }, 500);
        });
    }

    if (closeMenuElemBtn) {
        closeMenuElemBtn.addEventListener('click', () => {
            modalMenu.classList.remove('active'); 
            setTimeout(() => {
                modal.close('menu');
            }, 500);
        });
    }

    window.addEventListener('load', () => {
        if (window.matchMedia('(max-width: 575px)').matches) {
            try {
                new Swiper('.gallary-slider.swiper', {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    speed: 1000,
                    loop: true,
                    autoplay: true,
                });
            } catch (error) {
    
            }
        }
    })
    
    window.addEventListener('resize', () => {
        if (window.matchMedia('(max-width: 575px)').matches) {
            try {
                new Swiper('.gallary-slider.swiper', {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    speed: 1000,
                    loop: true,
                    autoplay: true,
                });
            } catch (error) {
    
            }
        }
    })
    
});