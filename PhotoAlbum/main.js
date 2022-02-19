const summer20AlbumButton = document.querySelector('#summer20');
const summer21AlbumButton = document.querySelector('#summer21');
const photoCounterDOM = document.querySelector('#photo-counter');
const nextButton = document.querySelector('#photo-button--right');
const prevButton = document.querySelector('#photo-button--left');
let photoSlider = document.querySelector('.range-slider__range');

let currentAlbum = {};

let summer20 = {
    path: "./summer20/",
    numPhotos: 20,
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

const incrementPhoto = () =>{
    if(currentAlbum.currentPhoto >= currentAlbum.numPhotos) return;
    currentAlbum.currentPhoto++;
    updatePhoto();
}

const decrementPhoto = () =>{
    if(currentAlbum.currentPhoto <= 1) return;
    currentAlbum.currentPhoto--;
    updatePhoto();
}

nextButton.addEventListener('click', (e)=>{ incrementPhoto(); });
prevButton.addEventListener('click', (e)=>{ decrementPhoto(); });
summer20AlbumButton.addEventListener('click', (e)=>{ updatePhotoAlbum(summer20); });
summer21AlbumButton.addEventListener('click', (e)=>{ updatePhotoAlbum(summer21); });

document.addEventListener('keyup', (event) => {
    var name = event.key;
    if(name === "ArrowRight")
        incrementPhoto();
    else if(name === "ArrowLeft")
        decrementPhoto();
}, false);

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