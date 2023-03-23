//==чистий javascript:begin================================================================================


//Викликаюча функція чистого javascript:begin================================================================================
(function(){
    let categoryLink=document.querySelectorAll('.date-list__sub-title');
    let arrow=document.querySelectorAll('.arrow');
    let menuListLink=document.querySelectorAll('.menu__link');

    for(i = 0; i < categoryLink.length; i++){
        let thisLink = categoryLink[i];
        let thisArrow = categoryLink[i].nextElementSibling;
        let subMenu = thisArrow.nextElementSibling;

        categoryLink[i].addEventListener('click', function(){
            thisLink.classList.toggle('active');
            thisArrow.classList.toggle('active');
            subMenu.classList.toggle('open');
        });
    };

    for(i = 0; i < arrow.length; i++){
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];

        arrow[i].addEventListener('click', function(){
            thisLink.classList.toggle('active');
            thisArrow.classList.toggle('active');
            subMenu.classList.toggle('open');
        });
    };

    for(i = 0; i < menuListLink.length; i++){
        
        menuListLink[i].addEventListener('click', function(){
            document.querySelectorAll('.icon-menu')[0].classList.remove('active');
            document.querySelectorAll('.menu__body')[0].classList.remove('active');
            document.querySelectorAll('body')[0].classList.remove('lock');
            document.querySelectorAll('.toolbar__fon')[0].classList.remove('toolbar__fon_active');            
        });
    };

    categoryLink = document.querySelectorAll('.date-list__sub-list li');
    if (categoryLink.length > 0) {
        console.log('pro');
        let masElements = "";
        for(i = 0; i < categoryLink.length; i++){
            categoryLink[i].addEventListener('click', function(){
                let masElements = document.querySelectorAll('.date-list__sub-title');
                for(i = 0; i < masElements.length; i++){
                    masElements[i].classList.remove('active');
                };

                masElements = document.querySelectorAll('.arrow');
                for(i = 0; i < masElements.length; i++){
                    masElements[i].classList.remove('active');
                };

                masElements = document.querySelectorAll('.date-list__sub-list');
                for(i = 0; i < masElements.length; i++){
                    masElements[i].classList.remove('open');
                };
            });
        }; 
    }
}());
//==:end=======================================================================================

//==чистий javascript:end================================================================================

//Викликаюча функція jquery-3.6.0.min:begin================================================================================
$(document).ready(function(){
    //Скріпт для роботи слайдера
    if($('.slider__body').length > 0) {
        $('.slider__body').slick({
            //autoplay: true,
            //infinite: true,
            dots: true,
            arrows: false,
            accessibility: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplaySpeed: 3000,
            nextArrow: 'button type="button" class="slick-next"></button>',
            prevArrow: 'button type="button" class="slick-prev"></button>',
            responsive: [{
                breakpoint: 767,
                settings: {
                    adaptiveHeight: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });
    }

    //Скріпт для кнопки бургер-меню
    $('.icon-menu').click(function(event){
        $(this).toggleClass('active');
        $('.menu__body').toggleClass('active');
        $(body).toggleClass('lock');
        $('.toolbar__fon').toggleClass('toolbar__fon_active');
    })
});
//==jquery-3.6.0.min:end================================================================================
