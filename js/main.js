( function($){

    $(function(){
        //새로고침 할 경우 현재 위치에서 로드


        var swiper = new Swiper(".reviewSwiper", {
            spaceBetween: 30,
            slidesPerView: 3,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            // navigation: {
            //     nextEl: ".swiper-button-next",
            //     prevEl: ".swiper-button-prev",
            // },
            breakpoints: { //반응형 조건 속성
                300: {
                    slidesPerView: 1,
                },
                450: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }
        });

    });
    


}(jQuery) );