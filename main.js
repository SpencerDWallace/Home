'use strict';
/* project model
projectName: String,
imagePath: String,
url: {
    path: String,
    target: String,
}
*/

function createProject(projectInfo){
    let newProject = document.createElement("div");
    newProject.classList.add('project-container');
    let projectRouter = document.createElement("a");
    projectRouter.classList.add('project-router');
    projectRouter.href = projectInfo.url.path;
    projectRouter.target = projectInfo.url.target;


    let projectImage = document.createElement("img");
    projectImage.src = projectInfo.imagePath;
    projectImage.classList.add('project-image')

    let projectTitle = document.createElement("button")
    projectTitle.classList.add('project-title')
    projectTitle.textContent = projectInfo.projectName;

    let projectDescription = document.createElement("p")
    projectDescription.textContent = projectInfo.description
    projectDescription.classList.add('project-description');

    projectRouter.appendChild(projectImage);
    projectRouter.appendChild(projectTitle);
    newProject.appendChild(projectRouter);
    newProject.appendChild(projectDescription);

    if(projectInfo.externals.length > 0){
        projectInfo.externals.forEach(external=>{
            let externalLink = document.createElement("a");
            externalLink.href = 'external.path';
            externalLink.textContent = (external.title + ": " + external.path);
            newProject.appendChild(externalLink);
        })
    }
    return newProject;
}

function projects (parentID){
    this.render = (projectData) => {
        if(projectData.length === 0) return;
        const parent = document.getElementById(parentID);
        console.log(parent);
        projectData.forEach(project => {
            console.log(project)
            parent.appendChild(createProject(project));
        });
    };
}

const sideMenuOpenButton = document.querySelector('.topnav_sandwich');
const sideMenuExitButton = document.querySelector('.sidemenu-close-button');
const sideMenu = document.querySelector('.sidemenu');
const body = document.body;
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

const slideSideMenu = (open)=>{
    let pixels;
    if(open){
        navbar.classList.add('is-hidden');
        sideMenuOpenButton.classList.add('is-hidden');
        sideMenuExitButton.classList.remove('is-hidden');
      //  body.classList.add('scroll-lock');
        pixels = -1*sideMenu.getBoundingClientRect().left;
    }
    else{
        navbar.classList.remove('is-hidden');
        sideMenuOpenButton.classList.remove('is-hidden');
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
