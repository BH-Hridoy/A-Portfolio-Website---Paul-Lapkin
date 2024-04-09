

// Sticky Nav
const nav = document.querySelector('nav');
const navHeight = document.querySelector('nav > .row')


window.addEventListener('scroll', () => {
    nav.classList.toggle('sticky', window.scrollY > 0)
});

window.addEventListener('scroll', () => {
    navHeight.classList.toggle('sticky-height', window.scrollY > 0)
});


// Scrollify
$(function() {
    $.scrollify({
      section : ".scrollify",
      setHeights: false,
      updateHash: false
    });
});


// Hamburger Menu

function openMenu() {
    document.getElementById('navbar').style.left = "0";
}
function closeMenu() {
    document.getElementById('navbar').style.left = "-100%";
}


// Smooth scroll


// $(function(){
//     $('.menu-item a').on('click', function(){
//         $('html,body').animate({
//             scrollTop: $($.attr(this, 'href')).ofset().top
//         }, 1000);
//         return false
//     });
// });


$(function(){
    $('.menu-items a, .scroll-down a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);   
        return false;
    });
});