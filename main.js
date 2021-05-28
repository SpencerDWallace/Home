let width1 = $(window).width()*0.98; let height1 = $(window).height()*0.97;
let imgWidth = width1/5.6; let imgHeight = height1/2.4;
var ttl; let x; let y = 20; let xGrowth = 5; let yGrowth = 1;
var photo; var bio; var circleColor = [20]; var circleBounceCount = 0;
var fontsize; var spaceGame; var raycast; var sorting; var bioHREF; var bouncyBall;
function setup(){
    createCanvas(width1, height1);
    ttl = createElement('h1', "Home Page");
    photo = loadImage('./wedding_jacket_tryon.jpeg');
    bio = 'My name is Spencer Wallace, I am a third-year computer science major at Cal State San Bernardino.\n' +
        'I am interested in graphics and rendering techniques, game design, and machine learning/neural networks.\n' +
        'Outside of programming my hobbies include rock-climbing, hiking, camping, playing piano, and spending time\n' +
        'with my wife, our chickens, and our dog. Listed below are some of my projects with links to their demos.\n' +
        '    \n' +
        '    Contact Info: (email is preferred)\n' +
        '    Email: spencerdwallace@gmail.com\n' +
        '    Phone: (951) 623-4164';
    for(let s = 0; s < 20; s++) {
        circleColor[s] = [3];
        for (let i = 0; i < 3; i++) {
            circleColor[s][i] = random(100, 255);
        }
    }
    x = random( width1*0.2, (width1*0.2 + textWidth(bio)/4) - 10 );
    fontsize = width1/80;
    console.log('fontsize is ' + fontsize);

    projects();

}

function draw(){
    clear();
    background(255);
    _header_bio();
    ball();
}

function _header_bio(){
    ttl.position(width1*0.02,height1*0.01);
    image(photo, width1*0.02, height1 * 0.08, width1*0.14,  height1 * 0.392);

    fill('#003388')
    rect(width1*0.2, height1*0.08, textWidth(bio)/4, height1*0.02 + textWidth(bio)/fontsize)

    fill(255);
    textStyle(BOLD);
    textSize(fontsize);
    text(bio, width1*0.22, height1*0.1, width1*0.72, height1*0.35);
}
function projects(){
    fill(25);
    textStyle(NORMAL);
    let projectHeader = createElement('h1', "Projects");
    projectHeader.position(width1*0.025, height1* 0.45)

    spaceGame = createA('https://spencerdwallace.github.io/UnitySpaceGame/', 'Space Game using Unity', "_blank");
    spaceGame.position(width1*0.025, height1* 0.55);
    raycast = createA('https://spencerdwallace.github.io/RaycastingExperiment/', 'Javascript Raycasting Demo (Mobile Friendly)', "_blank");
    raycast.position(width1*0.025, height1* 0.6);

    sorting = createA('https://spencerdwallace.github.io/sorting_algorithms/', 'Sorting Algorithms (Mobile Friendly)', "_blank");
    sorting.position(width1*0.025, height1* 0.65);



}
function ball(){

    x += xGrowth;
    y += yGrowth;
    fill(circleColor[circleBounceCount][0], circleColor[circleBounceCount][1], circleColor[circleBounceCount][2]);

    if(x< width1*0.2 + 10) {
        xGrowth = -1 * xGrowth;

        circleBounceCount++;
        if(circleBounceCount >= 20)
            circleBounceCount = 0;

    }

    if(x > (width1*0.2 + textWidth(bio)/4) - 10 ) {
        xGrowth = -1 * xGrowth;
        circleBounceCount++;
        if(circleBounceCount >= 20)
            circleBounceCount = 0;
    }
    if(y > height1*0.08 - 10)
        yGrowth = -1*yGrowth;
    if(y < 12)
        yGrowth = -1*yGrowth;
    circle(x,y,20);
}
