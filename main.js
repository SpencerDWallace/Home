let width1 = $(window).width()*0.98; let height1 = $(window).height()*0.97;
let imgWidth = width1/5.6; let imgHeight = height1/2.4;
var ttl; let x; let y = 20; let xGrowth = 5; let yGrowth = 1;
var photo; var bio; var circleColor = [20]; var circleBounceCount = 0;
var fontsize; var spaceGame; var raycast; var sorting;
var button; var input; var greeting; var numOfEmailsRemaining; var userAddress;
var user; let _width; let _height;

function getUserID() {

    $.getJSON("https://api.ipify.org?format=json", async function (data) {
        userAddress = data.ip;
        //alert("IP address is: " + userAddress);
        user = {address: userAddress, numEmails: 3};
        var _id = JSON.stringify( userAddress )
        $.post('getData.php', { _id }, function(result) {
            console.log('made it');
            user.numEmails = result;
            alert(result);
        });


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
    x = random( width1*0.25 + 10, (width1*0.25 + textWidth(bio)/4.5) - 10 );
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
        greeting.position(width / 4, input.y + (textAscent('Send me an email, Number of emails remaining: ') + textDescent('Send me an email, Number of emails remaining: ')) - 5 - input.height/2);

    }
}

function _header_bio(){
    ttl.position(width1*0.02,height1*0.01);
    image(photo, width1*0.02, height1 * 0.08, width1*0.18,  height1*0.02 + textWidth(bio)/fontsize);

    fill('#003388')
    rect(width1*0.25, height1*0.08, textWidth(bio)/4.5, height1*0.02 + textWidth(bio)/fontsize)

    fill(255);
    textStyle(BOLD);
    textSize(fontsize);
    text(bio, width1*0.27, height1*0.1, width1*0.72, height1*0.35);
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

    input = createInput();
    input.position(width/4, _height* 0.55 + textWidth(bio)/fontsize );
    input.size(_width/2, _height*0.2);

    button = createButton('send');
    button.position(input.x + input.width - button.width - 1, _height* 0.75 + textWidth(bio)/fontsize - button.height/1.3 );
    button.mouseClicked(sendEmail);


    textAlign(CENTER);
    textSize(50);
}

function sendEmail()
{
    if(user.numEmails > 0) {
        user.numEmails--;
        input.value('');
        greeting.html('Send me an email, Number of emails remaining: ' + user.numEmails, false);
    }
    else{
        alert("Maximum number of emails sent, please feel free to email me directly at the email listed below.")
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

    if(x > (width1*0.25 + textWidth(bio)/4.5) - 10 ) {
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
