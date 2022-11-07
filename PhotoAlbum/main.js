'use strict';
const photoCounterDOM = document.querySelector('#photo-counter');
const nextButton = document.querySelector('#photo-button--right');
const prevButton = document.querySelector('#photo-button--left');
let currentAlbum = {};
/*
name: '',
path: "",
photos: [],
thumbnail: '',
currentPhoto: num,
*/

let albums = window.internalModels.photoAlbumModel();

albums.map(album=>{
    album.numPhotos = album.photos.length;
    const id = '#' + album.name
    let albumSelect = document.querySelector(id.replace(/\s/g, ''));
    albumSelect.addEventListener('click', (e)=>{ updatePhotoAlbum(album); });
});

//initial state
currentAlbum = albums[0];


const updatePhoto = ()=>{
    photoCounterDOM.innerHTML = (currentAlbum.currentPhoto+1) + "/" + currentAlbum.numPhotos;
    let photoPath = currentAlbum.path + currentAlbum.photos[currentAlbum.currentPhoto];
    document.querySelector('#albumPhoto').src = photoPath;
}

updatePhoto();

const updatePhotoAlbum = (newAlbum)=>{
    if(currentAlbum == newAlbum) return;
    currentAlbum = newAlbum;
    window.closeSideMenu();
    updatePhoto();
}

nextButton.addEventListener('click', (e)=>{
    if(currentAlbum.currentPhoto >= currentAlbum.numPhotos-1) return;
    currentAlbum.currentPhoto++;
    updatePhoto();
})

prevButton.addEventListener('click', (e)=>{
    if(currentAlbum.currentPhoto <= 0) return;
    currentAlbum.currentPhoto--;
    updatePhoto();
})
