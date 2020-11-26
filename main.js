'use strict';
window.onload = function() {
  const loader = document.getElementById('loading');
  loader.classList.add('loaded');
}

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}
var _window = $(window),
    _header = $('.header-menus'),
    heroBottom;
 
_window.on('scroll',function(){     
    heroBottom = $('.header-title').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('fixed');   
    }
    else{
        _header.removeClass('fixed');   
    }
});
 
_window.trigger('scroll');

