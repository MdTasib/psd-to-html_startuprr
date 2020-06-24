(function($){
    $(document).ready(function(){
            
    // initialize skills 
    $('.circlechart').circlechart();
    // initialize magnific popup
    $('.work__single a').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    })
    // initialize counterup 
    if ( $('span').hasClass('counter') ) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        })
    }
    // initialize testimonial slider
    let testimonialoption = {
        items: 1,
        loop: true
    }
    $('.testimonial__inner').owlCarousel(testimonialoption);
    $('.clients__logos, .team__members').owlCarousel({
        items: 4,
        loop: true,
        responsiveClass: true,
        responsive: {
            0:{
                items:1,
                nav:true
            },
            480:{
                items:2,
                nav:false
            },
            680:{
                items:3,
                nav:false
            },
            980:{
                items: 4,
                nav:false
            }
        }
    })
    // initailize scroll to top
    let scrollTop = $('#scroll');
    $(scrollTop).on('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
    window.addEventListener('scroll', ()=> {
        let currentPosition = document.documentElement.scrollTop;
        if (  250 < currentPosition ){
            scrollTop.addClass('scroll-btn__active')
        }else {
            scrollTop.removeClass('scroll-btn__active')
        }
    })
})
}(jQuery))