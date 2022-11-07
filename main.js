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
    projectDescription.innerHTML = projectInfo.description
    projectDescription.classList.add('project-description');

    projectRouter.appendChild(projectImage);
    projectRouter.appendChild(projectTitle);
    newProject.appendChild(projectRouter);
    newProject.appendChild(projectDescription);

    if(projectInfo.externals.length > 0){
        projectInfo.externals.forEach(external=>{
            let externalLink = document.createElement("a");
            externalLink.href = external.path;
            externalLink.target = external.target;
            externalLink.innerHTML = external.title;
            newProject.appendChild(externalLink);
        })
    }
    return newProject;
}

function projects (parentID){
    this.render = (projectData) => {
        if(projectData.length === 0) return;
        const parent = document.getElementById(parentID);
        projectData.forEach(project => {
            parent.appendChild(createProject(project));
        });
    };
}
