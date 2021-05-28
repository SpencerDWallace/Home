let width1 = $(window).width()*0.98; let height1 = $(window).height()*0.97;
let imgWidth = width1/5.6; let imgHeight = height1/2.4;
var ttl; let x; let y = 20; let xGrowth = 5; let yGrowth = 1;
var photo; var bio; var circleColor = [20]; var circleBounceCount = 0;

function setup(){
    createCanvas(width1, height1*0.5);
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
    //let s = 'The quick brown fox jumped over the lazy dog.';
     // Text wraps within text box
    for(let s = 0; s < 20; s++) {
        circleColor[s] = [3];
        for (let i = 0; i < 3; i++) {
            circleColor[s][i] = random(100, 255);
        }
    }
    x = random( width1*0.15, width1 - width1*0.15 );
}

function draw(){
    clear();
    background(255);
    photo.width = 210; photo.height = 275;
    ttl.position(width1*0.02,height1*0.01);
    image(photo, width1*0.02, height1 * 0.08, width1*0.14,  height1 * 0.392);

    //bio.position(40+210,40);

    textStyle(BOLD);
    textSize(20);
    fill('#003388')
    //fill(20,80,170);
    rect(width1*0.2, height1*0.08, width1*0.74, height1*0.35)
    fill(255);
    text(bio, width1*0.22, height1*0.1, width1*0.72, height1*0.35);

    //projects();

    //ball();

}

function projects(){
    fill(25);
    textStyle(NORMAL);
    let projectHeader = createElement('h1', "Projects");
    projectHeader.position(width1*0.025, height1* 0.44)
    let spaceGame = createA('https://spencerdwallace.github.io/UnitySpaceGame/', 'Space Game using Unity');
    spaceGame.position(width1*0.025, height1* 0.55);
    let raycast = createA('https://spencerdwallace.github.io/RaycastingExperiment/', 'Javascript Raycasting Demo (Mobile Friendly)');
    raycast.position(width1*0.025, height1* 0.6);
    let sorting = createA('https://spencerdwallace.github.io/sorting_algorithms/', 'Sorting Algorithms (Mobile Friendly)');
    sorting.position(width1*0.025, height1* 0.65);
}
function ball(){

    x += xGrowth;
    y += yGrowth;
    fill(circleColor[circleBounceCount][0], circleColor[circleBounceCount][1], circleColor[circleBounceCount][2]);
    //width1*0.15, width1 - width1*0.15
    if(x< width1*0.2 + 10) {
        xGrowth = -1 * xGrowth;

        circleBounceCount++;
    }

    if(x > width1*0.94 - 10) {
        xGrowth = -1 * xGrowth;
        circleBounceCount++;
    }
    if(y > height1*0.08 - 10)
        yGrowth = -1*yGrowth;
    if(y < 12)
        yGrowth = -1*yGrowth;

    circle(x,y,20);
}

/*
    <div>
        <h1>Projects</h1>
        <a href="https://spencerdwallace.github.io/UnitySpaceGame/" target="_blank"> <h2>Space Game using Unity</h2> </a>
        <a href="https://spencerdwallace.github.io/RaycastingExperiment/" target="_blank"> <h2>Javascript Raycasting Demo (Mobile Friendly)</h2> </a>
        <a href="https://spencerdwallace.github.io/sorting_algorithms/" target="_blank"> <h2>Sorting Algorithms (Mobile Friendly)</h2> </a>

    </div>

<div style = "position:fixed;  top: -15px; color: black;">
    <h1>Home Directory, Spencer Wallace</h1>
</div>

<img src="wedding_jacket_tryon.jpeg" alt="Spencer Wallace Photo" style = "position:fixed;  top: 100px; width:210px;height:275px;">

<div style = "position:fixed;  top: 90px; left: 240px; color: black;">
    <h2>Bio: My name is Spencer Wallace, I am a third-year computer science major at Cal State San Bernardino.<br>
    I am interested in graphics and rendering techniques, game design, and machine learning/neural networks.<br>
    Outside of programming my hobbies include rock-climbing, hiking and camping, playing piano, and spending time<br>
    with my wife and our chickens and dog. Listed below are some of my projects with links containing their descriptions.<br>
    <br>
    Contact Info: (email is preferred)<br>
    Email: spencerdwallace@gmail.com<br>
    Phone: (951)-623-4164</h2>
</div>
 */
