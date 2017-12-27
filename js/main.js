var mySwiper1 = new Swiper('#swiper-container1', {
    effect: 'coverflow',
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    autoplay: true,
    autoplay: {
        delay: 200,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    // noSwiping : true,
})

var mySwiper2 = new Swiper('#swiper-container2', {
    effect: 'cube',
    autoplay: true,
    autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 100,
        shadowScale: 0.6
    },
    loop: true
})

var outer_swiper = new Swiper('#outer',{
    direction : 'vertical',
    height: window.innerHeight,
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
})

var swiper2 = new Swiper('#swiper2',{
    autoplay: true,
    autoplay: {
        delay: 200,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    }
})

var swiper3 = new Swiper('#swiper3',{
    effect : 'flip',
    flipEffect: {
        slideShadows : true,
        limitRotation : true,
    },
    loop: true,
    autoplay: true,
    autoplay: {
        delay: 200,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    }
});

var load = new Load51();
var isAnimating = false;

load.onComplete(function(){
    document.getElementById('audio').play();
})