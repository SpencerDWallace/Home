const summer20AlbumButton = document.querySelector('#summer20');
const summer21AlbumButton = document.querySelector('#summer21');
const photoCounterDOM = document.querySelector('#photo-counter');
const nextButton = document.querySelector('#photo-button--right');
const prevButton = document.querySelector('#photo-button--left');
let photoSlider = document.querySelector('.range-slider__range');

let currentAlbum = {};

let summer20 = {
    path: "./summer20/",
    numPhotos: 25,
    type: ".png",
    currentPhoto: 1,
};

let summer21 = {
    path: "./summer21/",
    numPhotos: 11,
    type: ".jpg",
    currentPhoto: 1,
};

//initial state
currentAlbum = summer20;
let albumPath;
photoSlider.min = 1;
photoSlider.max = currentAlbum.numPhotos;
photoSlider.value = currentAlbum.currentPhoto;
document.querySelector('.range-slider__value').textContent = currentAlbum.currentPhoto;


const updatePhoto = ()=>{
    photoCounterDOM.innerHTML = currentAlbum.currentPhoto + "/" + currentAlbum.numPhotos;
    albumPath = currentAlbum.path + currentAlbum.currentPhoto + currentAlbum.type;
    document.querySelector('#albumPhoto').src = albumPath;
    photoSlider.max = currentAlbum.numPhotos;
    photoSlider.value = currentAlbum.currentPhoto + "";
    document.querySelector('.range-slider__value').textContent = currentAlbum.currentPhoto;
}

updatePhoto();

const updatePhotoAlbum = (newAlbum)=>{
    if(currentAlbum == newAlbum) return;
    currentAlbum = newAlbum;
    updatePhoto();
}

nextButton.addEventListener('click', (e)=>{
    if(currentAlbum.currentPhoto >= currentAlbum.numPhotos) return;
    currentAlbum.currentPhoto++;
    updatePhoto();
})

prevButton.addEventListener('click', (e)=>{
    if(currentAlbum.currentPhoto <= 1) return;
    currentAlbum.currentPhoto--;
    updatePhoto();
})

summer20AlbumButton.addEventListener('click', (e)=>{ updatePhotoAlbum(summer20); });
summer21AlbumButton.addEventListener('click', (e)=>{ updatePhotoAlbum(summer21); });

/******** Side Menu ********/

const sideMenuOpenButton = document.querySelector('.topnav_sandwich');
const sideMenuExitButton = document.querySelector('.sidemenu-close-button');
const sideMenu = document.querySelector('.sidemenu');
const navbar = document.querySelector('.topnav-container');
let sideMenuOpen = false;

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

sideMenuOpenButton.addEventListener('click', (e)=>{
    (sideMenuOpen) ? sideMenuOpen = false: sideMenuOpen = true;
    slideSideMenu(sideMenuOpen);
})

sideMenuExitButton.addEventListener('click', (e)=>{
    (sideMenuOpen) ? sideMenuOpen = false: sideMenuOpen = true;
    slideSideMenu(sideMenuOpen);
})

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

// Get arbitrary element with id "my-element"
// Listen for click events on body

var rangeSlider = function(){
    var slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');
    slider.each(function(){
  
      value.each(function(){
        var value = $(this).prev().attr('value');
        console.log(value)
        $(this).html(value);
      });
  
      range.on('input', function(){
        $(this).next(value).html(this.value);
        console.log(value)
        currentAlbum.currentPhoto = Number(photoSlider.value);
        updatePhoto();
      });
    });

  };
  
  rangeSlider();