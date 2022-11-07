const sideMenuOpenButton = document.querySelector('.topnav_sandwich');
const sideMenuExitButton = document.querySelector('.sidemenu-close-button');
const sideMenu = document.querySelector('.sidemenu');
const body = document.body;
const navbar = document.querySelector('.topnav-container');
let sideMenuOpen = false;

sideMenuOpenButton.addEventListener('click', (e)=>{
    (sideMenuOpen) ? sideMenuOpen = false: sideMenuOpen = true;
    slideSideMenu(sideMenuOpen);
})

sideMenuExitButton.addEventListener('click', (e)=>{
    (sideMenuOpen) ? sideMenuOpen = false: sideMenuOpen = true;
    slideSideMenu(sideMenuOpen);
})

document.body.addEventListener('click', function (event) {
    if (sideMenu.contains(event.target) || sideMenuOpenButton.contains(event.target)) {
        console.log('clicked inside');
    } else {
        console.log('clicked outside');
        if(sideMenuOpen){
            slideSideMenu(false);
            sideMenuOpen = false;
        }
    }
});

sideMenu.classList.add('is-hidden');

const slideSideMenu = (open)=>{
    let pixels;
    if(open){
        navbar.classList.add('is-hidden');
        sideMenuOpenButton.classList.add('is-hidden');
        sideMenuExitButton.classList.remove('is-hidden');
        sideMenu.classList.remove('is-hidden');
      //  body.classList.add('scroll-lock');
        pixels = -1*sideMenu.getBoundingClientRect().left;
    }
    else{
        navbar.classList.remove('is-hidden');
        sideMenuOpenButton.classList.remove('is-hidden');
        setTimeout(()=>{sideMenu.classList.add('is-hidden');}, 300);
        sideMenuExitButton.classList.add('is-hidden');
      //  body.classList.remove('scroll-lock');
        pixels = 0;
    }
    sideMenu.style.transform = 'translateX(' + pixels  + 'px)';
}

let width = $(window).width();
let height = $(window).height();

$( window ).resize(function() {
    if ($(window).width() != width || $(window).height() != height) {
        width = $(window).width();
        height = $(window).height();
        if(sideMenuOpen){
        slideSideMenu(false);
        sideMenuOpen = false;
        }
    }
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}