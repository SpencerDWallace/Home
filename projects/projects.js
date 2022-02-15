let mobile; let _width; let _height; let imgWidth; let width1; let height1;

function setup(){
    if(width1 > height1) { _width = width1; _height = height1; mobile = false; } //desktop or landscape
    else { _width = height1; _height = width1; mobile = true;} //mobile or portrait
    imgWidth = width1/8;
    if(mobile)
        imgWidth = width1/6;
    imgHeight = imgWidth*res;
    createCanvas(width1, height1);
    projects();
}

function draw(){

}


function projects(){
    fill(25);
    textStyle(NORMAL);
    let projectHeader

    if(projectHeader != null)
    {
        projectHeader.remove(); spaceGame.remove();
        raycast.remove(); sorting.remove();
    }
    projectHeader = createElement('h1', "Projects");
    projectHeader.style('font-size', eleFont + 'px')
    let height1 = height1 - mobile*(height1/20);
    let spaceGame = createA('https://spencerdwallace.github.io/UnitySpaceGame/', 'Space Game using Unity', "_self");
    spaceGame.style('font-size', height1/40 + 'px');

    let raycast = createA('https://spencerdwallace.github.io/RaycastingExperiment/', 'Javascript Raycasting Demo (Mobile Friendly)', "_blank");
    raycast.style('font-size', height1/40 + 'px');

    let sorting = createA('https://spencerdwallace.github.io/sorting_algorithms/', 'Sorting Algorithms (Mobile Friendly)', "_self");
    sorting.style('font-size', height1/40 + 'px');

    let IB_KNN = createA('./letter_classification_IB_KNN.pdf', 'Paper on Iterative Bayes and K-Nearest Neighbors<br>' +
        ' for Letter Classification', "_blank");
    IB_KNN.style('font-size', height1/40 + 'px');

    let ih = imgHeight;
    ih = ih + ih*mobile;

    projectHeader.position(_width * 0.025, _height * 0.15 + ih);
    spaceGame.position(_width * 0.025, _height * 0.25 + ih + 0.02*mobile);
    raycast.position(_width * 0.025, _height * 0.3 + ih + 0.04*mobile);
    sorting.position(_width * 0.025, _height * 0.35 + ih + 0.06*mobile);
    IB_KNN.position(_width * 0.025, _height * 0.4 + ih + 0.08*mobile);

}