$(function(){
  var cardNum=22;

  $('.cardImg').on('click',function () {
  	if($(this).hasClass('add_dark')){
      $(this).removeClass('add_dark');
    }else{
      $(this).addClass('add_dark');
    }
  });
  $('.butImg').on('click',function () {
    $('.cardImg').removeClass('add_dark');
    $(this).addClass('add_rotate');
    setTimeout(() => {
      $(this).removeClass('add_rotate');
    }, 1000);
  });
});



// prevent pulldown reload
var $target = $(window);
var windowScrollTop;
var prevY = -1;
var direction = 0; // 0:neutral, -1:gotoTop, 1:gotoBottom
$target.on('touchstart', function(e){
    windowScrollTop = $target.scrollTop();
    prevY = e.originalEvent.changedTouches[0].pageY;
    direction = 0;
});
$target.on('touchmove', function(e){
    var currentY = e.originalEvent.changedTouches[0].pageY;
    if (direction == 0 && prevY != -1) {
        if (currentY > prevY) { direction = -1; }
        if (currentY < prevY) { direction =  1; }
    }
    if (windowScrollTop <= 0 && direction == -1) {
        e.preventDefault();
        return false;
    }
    prevY = currentY;
});

function disableScroll(event) {
  event.preventDefault();
}

// スクロール禁止
function noScroll() {
  // イベントと関数を紐付け
  document.addEventListener('touchmove', disableScroll, { passive: false });
  document.addEventListener('mousewheel', disableScroll, { passive: false });
}

function returnScroll() {
  // イベントと関数を紐付け
  document.removeEventListener('touchmove', disableScroll, { passive: false });
  document.removeEventListener('mousewheel', disableScroll, { passive: false });
}
