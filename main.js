let projectSlideDOM = document.getElementById('project-slide');
let projectLeftArrow = projectSlideDOM.querySelector("#left-pthumb");
let projectRightArrow = projectSlideDOM.querySelector("#right-pthumb");
let projectPhoto = projectSlideDOM.querySelector("#project-photo");
let projectCaption = projectSlideDOM.querySelector("#project-caption");

const projectPhotos = ["photos/raycast.png", "photos/sort.png", "photos/unity-sg.png", "photos/tasks.png"];
const projectCaptions = ["Javascript Raycasting", "Sorting Algorithms", "Unity Game", "Task Manager"];
const numPhotos = 4; let currentPhoto = 0;

projectLeftArrow.addEventListener("click", async(e) => {
    if(currentPhoto - 1 >= 0){
        currentPhoto--;
        projectPhoto.src = projectPhotos[currentPhoto]
    }
});

projectRightArrow.addEventListener("click", async(e) => {
    if(currentPhoto + 1 < numPhotos){
        currentPhoto++;
        projectPhoto.src = projectPhotos[currentPhoto];
        projectCaption.textContent = projectCaptions[currentPhoto]
    }
});


let slideAnimation = () =>{

}


createArrays = () => {

}