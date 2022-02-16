/*let projectSlideDOM = document.getElementById('project-slide');
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
    await updateProjectSlide( projectSlide.numPhotos-1 );
});

projectRightArrow.addEventListener("click", async(e) => {
    await updateProjectSlide(1);
});

let updateProjectSlide = (n) =>{
    currentProject = (currentProject + n) % projectSlide.numPhotos;
    projectPhoto.src = projectSlide.projectPhotos[currentProject];
    projectCaption.textContent = projectSlide.projectCaptions[currentProject];
    projectLink.href = projectSlide.projectLinks[currentProject]
}

let slideAnimation = () =>{

}*/

const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav')
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) =>{
    slide.style.left = slideWidth*index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    try {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('active');
        targetSlide.classList.add('active');
        const nextIndex = slides.findIndex(slide => slide === targetSlide)
        arrowsController(slides, prevButton, nextButton, nextIndex)
    }
    catch(e){
        console.error(e);
    }
}

const updateDots = (currentDot, targetDot) =>{
    try {
        currentDot.classList.remove('active');
        targetDot.classList.add('active');
    }
    catch(e){
        console.error(e);
    }
}

const arrowsController = (slides, prevButton, nextButton, index) =>{
    if(index === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }else if(index === slides.length - 1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }
    else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.active');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);

    const currentDot = dotsNav.querySelector('.active');
    updateDots(currentDot, currentDot.nextElementSibling);
})

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.active');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);

    const currentDot = dotsNav.querySelector('.active');
    updateDots(currentDot, currentDot.previousElementSibling);
})

dotsNav.addEventListener('click', e =>{
    const targetDot = e.target.closest('button');
    if(!targetDot) return;

    const currentSlide = track.querySelector('.active');
    const currentDot = dotsNav.querySelector('.active');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide)
    updateDots(currentDot, targetDot);
    arrowsController(slides, prevButton, nextButton, targetIndex)

})