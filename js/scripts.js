document.addEventListener('DOMContentLoaded', () => {
    const smoothScrollToElems = (links) => {
        const anchorsLink = document.querySelectorAll(links);
      
        if (anchorsLink) {
            const smoothScroll = (anchors) => {
                for (let anchor of anchors) {
                    const blockID = anchor.getAttribute('href');
    
                    anchor.addEventListener('click', (e) => {
                        e.preventDefault();
                        if (document.querySelector(blockID)) {
                            document.querySelector(blockID).scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        } else {
                            try {
                                localStorage.setItem('scrollTo', 'getStartedSteps');
                            } catch (error) {}
                            window.location.href = '/';
                        }
                    });
                };
            };
            
            smoothScroll(anchorsLink);
        }
    };
    
    smoothScrollToElems('.header nav a');

    new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 40,
        centeredSlides: true,
        speed: 1000,
        mousewheel: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });
});