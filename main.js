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
let slideWidth = slides[0].getBoundingClientRect().width;
let lastSlide = document.cookie;
let slidesMoved = false;


const moveToSlide = (track, currentSlide, targetSlide, preset) => {
    try {
        if(preset)
            track.style.left = '-' + targetSlide.style.left;
        else {
            const dif = -1 * (Number(targetSlide.style.left.split('p', 1)[0]) + Number(track.style.left.split('p', 1)[0]));
            (slidesMoved) ? track.style.transform = 'translateX(' + dif + 'px)' : track.style.left = '-' + targetSlide.style.left;
        }
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
        const targetDotIndex = dots.findIndex(dot => dot === targetDot);
        setCookie("slide", targetDotIndex, 1);
        slidesMoved = true;
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
    moveToSlide(track, currentSlide, nextSlide, false);

    const currentDot = dotsNav.querySelector('.active');
    updateDots(currentDot, currentDot.nextElementSibling);
})

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.active');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide, false);

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
    moveToSlide(track, currentSlide, targetSlide, false)
    updateDots(currentDot, targetDot);
    arrowsController(slides, prevButton, nextButton, targetIndex)

})

function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

const setSlidePosition = async (slide, index) =>{
    slide.style.left = slideWidth*index + 'px';
};

const init = async() => {
    await slides.forEach(setSlidePosition)
    if (lastSlide) {
        const lastSlideAsNum = Number(lastSlide.split('=').pop());
        moveToSlide(track, slides[0], slides[lastSlideAsNum], true);
        updateDots(dots[0], dots[lastSlideAsNum])
    }
}

init();


const sideMenuOpenButton = document.querySelector('.topnav_sandwich');
const sideMenuExitButton = document.querySelector('.sidemenu-close-button');
const sideMenu = document.querySelector('.sidemenu');
let sideMenuOffset = sideMenu.getBoundingClientRect().left;
// const sideMenuOpenSymbol = sideMenuButton.textContent;
// const sideMenuExitSymbol = document.querySelector('#exit-symbol').textContent;
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

// const updateSideMenuButton = ()=>{
//    (sideMenuOpen) ? sideMenuButton.textContent = sideMenuExitSymbol : sideMenuButton.textContent = sideMenuOpenSymbol;
//}

$(window).scroll(function() { 
    $('#sidemenu').css('top', $(this).scrollTop());
});

$( window ).resize(function() {
    slideWidth = slides[0].getBoundingClientRect().width;
    init();    
    if(sideMenuOpen){
    slideSideMenu(false);
    sideMenuOpen = false;
    }
});
