'use strict';
const parentOfSideMenuAlbumsID = 'sidemenu-links'
const sideMenuAlbumsClass = 'sidemenu-album-container'
const photoCounterDOM = document.querySelector('#photo-counter');
const nextButton = document.querySelector('#photo-button--right');
const prevButton = document.querySelector('#photo-button--left');
/*
name: '',
path: "",
photos: [],
thumbnail: '',
currentPhoto: num,
*/
const buildPath = (album, photo) => {
 return String(album.path + photo);
}

let albums = window.internalModels.photoAlbumModel();
const createSideMenuAlbum = (album) => {
    const newAlbum = document.createElement("li");
    newAlbum.classList.add(sideMenuAlbumsClass);
    newAlbum.id = album.name.replace(/\s/g, '');

    const albumThumbnail = document.createElement("img");
    console.log(buildPath(album, album.thumbnail));
    albumThumbnail.src = buildPath(album, album.thumbnail);

    const albumTitle = document.createElement("button")
    albumTitle.classList.add('project-title')
    albumTitle.textContent = album.name.charAt(0).toUpperCase() + album.name.slice(1);

    newAlbum.appendChild(albumThumbnail);
    newAlbum.appendChild(albumTitle);
    document.getElementById(parentOfSideMenuAlbumsID)?.appendChild(newAlbum);
    return album.name.replace(/\s/g, '');
}

albums.map(album=>{
    album.numPhotos = album.photos.length;
    const id = createSideMenuAlbum(album);
    const albumSelect = document.getElementById(id);
    albumSelect?.addEventListener('click', (e)=>{ updatePhotoAlbum(album); });
});

//initial state of album/photo display
let currentAlbum = albums[0];

const updatePhoto = ()=>{
    photoCounterDOM.innerHTML = (currentAlbum.currentPhoto+1) + "/" + currentAlbum.numPhotos;
    document.querySelector('#albumPhoto').src = buildPath(currentAlbum, currentAlbum.photos[currentAlbum.currentPhoto]);
}

updatePhoto();

const updatePhotoAlbum = (newAlbum)=>{
    window.closeSideMenu();
    if(currentAlbum == newAlbum) return;
    currentAlbum = newAlbum;
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
