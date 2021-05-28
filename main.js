let width1 = $(window).width(); let height1 = $(window).height();
let imgWidth = width1/5.6; let imgHeight = height1/2.4;
var ttl; let x; let y = 20; let xGrowth = 5; let yGrowth = 1;
var photo; var bio;

function setup(){
    createCanvas(width1, 60+275);
    ttl = createElement('h1', "Home Page");
    photo = loadImage('./wedding_jacket_tryon.jpeg');
    bio = createElement('h2', "My name is Spencer Wallace, I am a third-year computer science major at Cal State San Bernardino. " +
        "I am interested in graphics and rendering techniques, game design, and machine learning/neural networks." +
        " Outside of programming my hobbies include rock-climbing, hiking, camping, playing piano, and spending time" +
        " with my wife, our chickens, and our dog. Listed below are some of my projects with links to their demos.<br>\n" +
        "    <br>\n" +
        "    Contact Info: (email is preferred)<br>\n" +
        "    Email: spencerdwallace@gmail.com<br>\n" +
        "    Phone: (951) 623-4164");
    x = random(300,width1-300);
}

function draw(){
    clear();
    photo.width = 210; photo.height = 275;
    ttl.position(20,0);
    image(photo, 18, 60);
    bio.position(40+210,40);
    circle(x,y,20);
    ball();

}

function ball(){
    x += xGrowth;
    y += yGrowth
    if(x<300) {
        xGrowth = -1 * xGrowth;
        fill(random(100,255),random(100,255),random(100,255));
    }
    if(x > width1 - 300) {
        xGrowth = -1 * xGrowth;
        fill(random(100,255),random(100,255),random(100,255));
    }
    if(y > 40)
        yGrowth = -1*yGrowth;
    if(y < 12)
        yGrowth = -1*yGrowth;
}

/*
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
