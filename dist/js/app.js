$(document).ready(function(){function t(){var t=s.width()/2-$(".slick-dots").width()-$(".slick-arrow.next").width()-12;s.width()/2-$(".slick-dots").width()-$(".slick-arrow.prev").width()-12;$(".slick-arrow.next").css({right:t}),$(".slick-arrow.prev").css({left:t})}var s=$("#slider");s.slick({dots:!0,infinite:!0,speed:300,prevArrow:'<button type="button" class="prev"><svg width="8" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1L1 6l6 5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',nextArrow:'<button type="button" class="next"><svg width="8" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l6 5-6 5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',rows:2,slidesPerRow:3,responsive:[{breakpoint:900,settings:{rows:2,slidesPerRow:2,infinite:!0,dots:!0}},{breakpoint:480,settings:{centerMode:!0,arrows:!1,rows:1,slidesPerRow:1}}]}),t(),$(window).resize(function(){setTimeout(function(){t()},500)})});