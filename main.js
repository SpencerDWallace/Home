let width1 = $(window).width()*0.98; let height1 = $(window).height()*0.97;
let imgWidth = width1/5.6; let imgHeight = height1/2.4;
var ttl; let x; let y = 20; let xGrowth = 5; let yGrowth = 1;
var photo; var bio; var circleColor = [20]; var circleBounceCount = 0;
var fontsize; var spaceGame; var raycast; var sorting;
var button; var input; var greeting; var numOfEmailsRemaining; var userAddress;
var user; let _width; let _height; var inp;

function getUserID() {

    $.getJSON("https://api.ipify.org?format=json", async function (data) {
        userAddress = data.ip;
        //alert("IP address is: " + userAddress);
        user = {address: userAddress, numEmails: 3};
        var _id = JSON.stringify( userAddress )
    });
}




function setup(){

    getUserID();
    createCanvas(width1, height1);
    ttl = createElement('h1', "Home Page");
    numOfEmailsRemaining = 3;
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
    x = random( width1*0.25 + 10, width1*0.74 - 10 );
    fontsize = width1/80;
    console.log('fontsize is ' + fontsize);


    //identifyUser();
    projects();
    emailBox();


}

/*function identifyUser()
{

}*/


function draw() {
    clear();
    background(255);
    _header_bio();
    ball();
    if (user != null && greeting == null) {
        greeting = createElement('h2', 'Send me an email, Number of emails remaining: ' + user.numEmails);
        if(height1 > width1)
            greeting.position(width1*0.35, _height* 0.6 + textWidth(bio)/fontsize );
        else
            greeting.position(width1*0.35, _height* 0.35 + textWidth(bio)/fontsize );//+ (textAscent('Send me an email, Number of emails remaining: ') + textDescent('Send me an email, Number of emails remaining: ')) - 5 - input.height/2);

    }
}

function _header_bio(){
    ttl.position(width1*0.02,height1*0.01);
    image(photo, width1*0.02, height1 * 0.08, width1*0.20,  height1*0.02 + textWidth(bio)/fontsize);

    fill('#003388')
    rect(width1*0.25, height1*0.08, width1*0.74, height1*0.02 + textWidth(bio)/fontsize)

    fill(255);
    textStyle(BOLD);
    textSize(fontsize);
    text(bio, width1*0.26, height1*0.1, width1*0.72, height1*0.35);
}
function projects(){
    fill(25);
    textStyle(NORMAL);

    if(height1 > width1) { _width = height1; _height = width1; }
    else { _width = width1; _height = height1; }

    let projectHeader = createElement('h1', "Projects");
    projectHeader.position(_width*0.025, _height* 0.25 + textWidth(bio)/fontsize)

    spaceGame = createA('https://spencerdwallace.github.io/UnitySpaceGame/', 'Space Game using Unity', "_self");
    spaceGame.position(_width*0.025, _height* 0.35 + textWidth(bio)/fontsize);
    raycast = createA('https://spencerdwallace.github.io/RaycastingExperiment/', 'Javascript Raycasting Demo (Mobile Friendly)', "_blank");
    raycast.position(_width*0.025, _height* 0.4 + textWidth(bio)/fontsize);

    sorting = createA('https://spencerdwallace.github.io/sorting_algorithms/', 'Sorting Algorithms (Mobile Friendly)', "_self");
    sorting.position(_width*0.025, _height* 0.45 + textWidth(bio)/fontsize);



}

function emailBox()
{

    inp = document.createElement("INPUT");
    inp.setAttribute("type", "text");
    inp.size = "500";

    input = createInput();
    if(height1 > width1)
        input.position(width1*0.35, _height* 0.65 + textWidth(bio)/fontsize );
    else
        input.position(width1*0.35, height1* 0.55 + textWidth(bio)/fontsize );
    input.size(width1/2, _height*0.2);

    button = createButton('send');
    if(height1 > width1)
        button.position(input.x + input.width - button.width - 1, _height* 0.85 + textWidth(bio)/fontsize - button.height/1.3 );
    else
        button.position(input.x + input.width - button.width - 1, height1* 0.75 + textWidth(bio)/fontsize - button.height/1.3 );
    button.mouseClicked(sendEmail);


    textAlign(CENTER);
    textSize(50);
}

function sendEmail()
{
    if(user.numEmails > 0) {
        user.numEmails--;
        console.log('input value is: ' + input.html());
        input.value('');
        //$.post("https://formspree.io/f/meqvgzgo", { input });
        greeting.html('Send me an email, Number of emails remaining: ' + user.numEmails, false);
    }
    else{
        greeting.html('Maximum emails sent, please email me directly at the email listed above', false);
        //alert("Maximum number of emails sent, please email me directly at the email listed below.")
    }
}

function ball(){

    x += xGrowth;
    y += yGrowth;
    fill(circleColor[circleBounceCount][0], circleColor[circleBounceCount][1], circleColor[circleBounceCount][2]);

    if(x< width1*0.25 + 10) {
        xGrowth = -1 * xGrowth;

        circleBounceCount++;
        if(circleBounceCount >= 20)
            circleBounceCount = 0;
    }

    if(x > width1*0.25 + width1*0.74 - 10 ) {
        xGrowth = -1 * xGrowth;
        circleBounceCount++;
        if(circleBounceCount >= 20)
            circleBounceCount = 0;
    }
    if(y > height1*0.08 - 10)
        yGrowth = -1*yGrowth;
    if(y < 10)
        yGrowth = -1*yGrowth;
    circle(x,y,20);
}
/*
function ValidateEmail(mail)
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
*/
