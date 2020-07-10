
var navMain = document.querySelector('.nav');
var navToggleCollapse = document.querySelector('.nav__btn');
var navToggle = document.querySelector('.menu');

navToggle.addEventListener('click', function() {
    if(navMain.classList.contains('nav--closed')) {

        navMain.classList.remove('nav--closed');
        navMain.classList.add('nav--opened');

    } else {

    }
});

navToggleCollapse.addEventListener('click', function() {
    if(navMain.classList.contains('nav--opened')) {

        navMain.classList.add('nav--closed');
        navMain.classList.remove('nav--opened');

    } else {

    }
});
   

