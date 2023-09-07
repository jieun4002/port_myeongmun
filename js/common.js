//jQuery 즉시 실행함수 써야함


$(function () {
    window.onload = scrollToAnchor();

    // 스크롤 할 때 스크롤 현재 위치에서 새로고침
    function scrollToAnchor() {
        var hash = window.location.hash;
        if (hash) {
            var el = document.querySelector(hash);
            if (!el.classList.contains('active')) {
                el.classList.add('active');
            }
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 300
            }, 1000);
        }
    }

});






$(function () {

    //스크롤 시 해더 배경색 변경
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $('.main-header').css({
                'background-color': '#fff',
                'border-bottom': '1px #ddd solid'
            })
            $('.header-container .header-title').css('color', '#004F30')
            $('.header-container .gnb li a').css('color', '#004F30')
            $('.header-container .cs a').css({
                'color': '#004F30',
                'border': '1px solid #004F30'
            });

            $('.header-container .cs a').hover(function () {
                $(this).css({
                    'background-color': '#004F30',
                    'color': '#fff'
                });
            }, function () {
                $(this).css({
                    'background-color': 'transparent',
                    'color': '#004F30'
                });
            });
            $('.header-container .gnb li a').hover(function () {
                $(this).css('color', '#EED437')
            }, function () {
                $(this).css('color', '#004F30')
            });
            $('.nav-bar .bar-icon').addClass('change')


        } else {
            $('.main-header').css({
                'background-color': 'transparent',
                'border': 'none'
            })
            $('.header-container .header-title').css('color', '#fff')
            $('.header-container .gnb li a').css('color', '#fff')
            $('.header-container .cs a').css({
                'color': '#fff',
                'border': '1px solid #fff'
            });

            $('.header-container .cs a').hover(function () {
                $(this).css({
                    'background-color': '#EED437',
                    'color': '#fff'
                });
            }, function () {
                $(this).css({
                    'background-color': 'transparent',
                    'color': '#fff'
                });
            });

            $('.header-container .gnb li a').hover(function () {
                $(this).css('color', '#EED437');
            }, function () {
                $(this).css('color', '#fff');
            });
            $('.nav-bar .bar-icon').removeClass('change');


        }
    });


    $('.header-container .cs a').hover(function () {
        $(this).css({
            'background-color': '#FFEB3B',
            'color': '#fff'
        })
    }, function () {
        $(this).css({
            'background-color': 'transparent',
            'color': '#fff'
        })
    });


    $('.header-container .gnb li a').hover(function () {
        $(this).css('color', '#FFEB3B')
    }, function () {
        $(this).css('color', '#fff')
    });

    // 무료수업신청 버튼 텍스트 변경
    $('.application-contact #kboard-contact-form-editor .kboard-control .left button').text('무료수업 신청하기')
    $('.inquiry-wrap #kboard-contact-form-editor .kboard-control .left button').text('신청하기')
    $('.guide-box #kboard-contact-form-editor .kboard-control .left button').text('신청하기')

    $('.curriculum-box .title .title-set .junior a').click(function () {

    });


    $('.curriculum-box .title-set a').on("click", function (e) {
        e.preventDefault();
    });



    $('.curriculum-box .title-set .junior').click(function () {
        $('.curriculum-box .curriculum .adult-class').css('display', 'none');
        $('.curriculum-box .curriculum .junior-class').css('display', 'block');
        $('.curriculum-box .curriculum .special-class').css('display', 'none');
        $(this).css({
            'background-color': '#FCCA00',
            'color': '#fff'
        });
        $(this).siblings().css({
            'background-color': '#fff',
            'color': '#000'
        })
        $('.curriculum-box .title-set').css('border-bottom', '1px #FCCA00 solid')
    });
    $('.curriculum-box .title-set .adult').click(function () {
        $('.curriculum-box .curriculum .adult-class').css('display', 'block');
        $('.curriculum-box .curriculum .junior-class').css('display', 'none');
        $('.curriculum-box .curriculum .special-class').css('display', 'none');
        $(this).css({
            'background-color': '#39A7AD',
            'color': '#fff'
        });
        $(this).siblings().css({
            'background-color': '#fff',
            'color': '#000'
        });
        $('.curriculum-box .title-set').css('border-bottom', '1px #39A7AD solid')
    });
    $('.curriculum-box .title-set .special').click(function () {
        $('.curriculum-box .curriculum .adult-class').css('display', ' none');
        $('.curriculum-box .curriculum .junior-class').css('display', 'none');
        $('.curriculum-box .curriculum .special-class').css('display', 'block');
        $(this).css({
            'background-color': '#BA4F70',
            'color': '#fff'
        });
        $(this).siblings().css({
            'background-color': '#fff',
            'color': '#000'
        });
        $('.curriculum-box .title-set').css('border-bottom', '1px #BA4F70 solid')

    });

    $('.guide-box .form-wrap #kboard-contact-form-editor .meta-key-bank .attr-value input').attr('value', '국민은행 759901-00-112596 김유나')



    $('.nav-bar').click(function () {
        $('.nav-mo').show();
    });
    $('.nav-mo .close').click(function () {
        $('.nav-mo').hide();
    });
});


// $(window).resize(function(){
//     if (window.innerWidth <= 850){
//         $('.nav-bar').css('display','block')
//     }else{
//         $('.nav-bar').css('display','none')
//     }
// });