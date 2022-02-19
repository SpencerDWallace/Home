let currentPhoto = 8;
let currentAlbum = {};
let summer20 = {
    path: "./summer20/",
    numItems: 25,
};

currentAlbum = summer20;
let albumPath = summer20.path + currentPhoto + ".png";

const nextButton = document.querySelector('#photo-button--right');
const prevButton = document.querySelector('#photo-button--left');

document.querySelector('#albumPhoto').src = albumPath;

nextButton.addEventListener('click', (e)=>{
    currentPhoto++;
    albumPath = "./" + currentAlbum + currentPhoto + ".png";
    document.querySelector('#albumPhoto').src = albumPath;
})

prevButton.addEventListener('click', (e)=>{
    if(currentPhoto <= 1)
        return;
    currentPhoto--;
    albumPath = "./" + currentAlbum + currentPhoto + ".png";
    document.querySelector('#albumPhoto').src = albumPath;
})

const sideMenuOpenButton = document.querySelector('.topnav_sandwich');
const sideMenuExitButton = document.querySelector('.sidemenu-close-button');
const sideMenu = document.querySelector('.sidemenu');
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

const slideSideMenu = (open)=>{
    let pixels;
    if(open){
        navbar.classList.add('is-hidden');
        sideMenuOpenButton.classList.add('is-hidden');
        sideMenuExitButton.classList.remove('is-hidden');
        pixels = -1*sideMenu.getBoundingClientRect().left;
    }
    else{
        navbar.classList.remove('is-hidden');
        sideMenuOpenButton.classList.remove('is-hidden');
        sideMenuExitButton.classList.add('is-hidden');
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
