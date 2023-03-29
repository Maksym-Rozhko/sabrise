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

    new Swiper('.banners-slider.swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,

        pagination: {
            el: '.banners__pagin.swiper-pagination',
            clickable: true,
        },
    });
});