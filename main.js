let projectSlideDOM = document.getElementById('project-slide');
let projectLeftArrow = projectSlideDOM.querySelector("#left-pthumb");
let projectRightArrow = projectSlideDOM.querySelector("#right-pthumb");
let projectPhoto = projectSlideDOM.querySelector("#project-photo");
let projectCaption = projectSlideDOM.querySelector("#project-caption");
let projectLink = projectSlideDOM.querySelector("#project-link");

const projectSlide = {
    projectPhotos:["photos/raycast.png", "photos/sort.png", "photos/unity-sg.png", "photos/tasks.png"],
    projectCaptions:["Javascript Raycasting", "Sorting Algorithms", "Unity Game", "Task Manager"],
    projectLinks:["./raycast/raycast.html", "./sort/index.html", "https://spencerdwallace.github.io/UnitySpaceGame/", "https://task-manager-swall.herokuapp.com"],
    numPhotos:4,
}
let currentProject = 0;

projectLeftArrow.addEventListener("click", async(e) => {
    if(currentProject - 1 >= 0){
        currentProject--;
        await updateProjectSlide();
    }
});

projectRightArrow.addEventListener("click", async(e) => {
    if(currentProject + 1 < projectSlide.numPhotos){
        currentProject++;
        await updateProjectSlide();
    }
});

let updateProjectSlide = () =>{
    projectPhoto.src = projectSlide.projectPhotos[currentProject];
    projectCaption.textContent = projectSlide.projectCaptions[currentProject];
    projectLink.href = projectSlide.projectLinks[currentProject]
}

let slideAnimation = () =>{

}


createArrays = () => {

}

// const projectPhotos = ["photos/raycast.png", "photos/sort.png", "photos/unity-sg.png", "photos/tasks.png"];
// const projectCaptions = ["Javascript Raycasting", "Sorting Algorithms", "Unity Game", "Task Manager"];
// const numPhotos = 4;
