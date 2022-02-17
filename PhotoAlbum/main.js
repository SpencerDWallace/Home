let currentPhoto = 1;
let currentAlbum = "summer20/";
let albumPath = "./" + currentAlbum + currentPhoto + ".png";

const nextButton = document.querySelector('#photo-button--right');
const prevButton = document.querySelector('#photo-button--left');
const sideMenuButton = document.querySelector('.topnav_sandwich');
const sideMenu = document.querySelector('.sidemenu')
const sideMenuOpenSymbol = sideMenuButton.textContent;
const sideMenuExitSymbol = document.querySelector('#exit-symbol').textContent;
const navbar = document.querySelector('.topnav-container');
let sideMenuOpen = false;


document.querySelector('#albumPhoto').src = albumPath;

nextButton.addEventListener('click', (e)=>{
    currentPhoto++;
    albumPath = "./" + currentAlbum + currentPhoto + ".png";
    document.querySelector('#albumPhoto').src = albumPath;
})

prevButton.addEventListener('click', (e)=>{
    currentPhoto--;
    albumPath = "./" + currentAlbum + currentPhoto + ".png";
    document.querySelector('#albumPhoto').src = albumPath;
})

sideMenuButton.addEventListener('click', (e)=>{
    (sideMenuOpen) ? sideMenuOpen = false: sideMenuOpen = true;
    let pixels;
    if(sideMenuOpen){
        navbar.classList.add('is-hidden');
        pixels = -1*sideMenu.getBoundingClientRect().left;
    }
    else{
        navbar.classList.remove('is-hidden');
        pixels = 0;
    }
    sideMenu.style.transform = 'translateX(' + pixels  + 'px)';
    updateSideMenuButton();
})

const updateSideMenuButton = ()=>{
    (sideMenuOpen) ? sideMenuButton.textContent = sideMenuExitSymbol : sideMenuButton.textContent = sideMenuOpenSymbol;
}
/*
let lastSlide = document.cookie;
let slidesMoved = false;
*/
