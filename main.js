let width1 = $(window).width()*0.98; let height1 = $(window).height()*0.97;
let imgWidth = width1/8; var browserZoomLevel; var eleFont;
var ttl; let x; let y; let xGrowth = 5; let yGrowth = 1;
var photo; var bio; var circleColor = [20]; var circleBounceCount = 0; var ballSize;
var fontsize; var spaceGame; var raycast; var sorting; var projectHeader;
var button; var input; var sender; var greeting; var numOfEmailsRemaining; var userAddress;
var user; let _width; let _height; var inp; var res = 970/828; let imgHeight = imgWidth*res; var emailNotClicked = true;

function getUserID() {

    $.getJSON("https://api.ipify.org?format=json", async function (data) {
        userAddress = data.ip;
        //alert("IP address is: " + userAddress);
        user = {address: userAddress, numEmails: 3};
        var _id = JSON.stringify( userAddress )
    });
}




function setup(){

    browserZoomLevel = (Math.round(window.devicePixelRatio * 100))/100;
    ballSize = 20/browserZoomLevel;
    eleFont = height1/25;
    y = 20/browserZoomLevel;
    // width1 = width1/browserZoomLevel;
    // height1 = height1/browserZoomLevel;
    console.log('Browser zoom is: ' + browserZoomLevel);
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
    fontsize = width1/100;
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
    browserZoomLevel = (Math.round(window.devicePixelRatio * 100)) / 100;

    /*if (width1 != $(window).width() * 0.98 || height1 != $(window).height() * 0.97) {
        width1 = $(window).width() * 0.98;
        height1 = $(window).height() * 0.97;
        eleFont = height1 / 25;
        fontsize = width1 / 100;
        resizeCanvas(width1, height1);
        imgWidth = width1/8; imgHeight = imgWidth*res;
        projects(); emailBox();
    }*/
}

function mouseClicked()
{
    if(mouseX > width1*0.347 && mouseX < width*0.35 + width1/2 && mouseY > input.y - _height*0.097 && mouseY < input.y - _height*0.01)
    {
        if(emailNotClicked){
            sender.value('');
            emailNotClicked = false;
        }
    }
    else
    {
        if(sender.value() == '')
        {
            sender.value('Please enter your email: ');
            emailNotClicked = true;
        }
    }
    button.mouseClicked(sendEmail);

}

function _header_bio(){

    image(photo, width1*0.02, height1 * 0.08, imgWidth,  imgHeight);

    fill('#003388')
    rect(width1*0.25, height1*0.08, width1*0.74, imgHeight)

    fill(255);
    textStyle(BOLD);
    textSize(fontsize);
    text(bio, width1*0.26, height1*0.09, width1*0.72, imgHeight - 0.01);

    ttl.position(width1*0.02,height1*0.01);
    ttl.style('font-size', eleFont + 'px');
}
function projects(){
    fill(25);
    textStyle(NORMAL);
    _width = width1; _height = height1;

    if(projectHeader != null)
    {
        projectHeader.remove(); spaceGame.remove();
        raycast.remove(); sorting.remove();
    }
    projectHeader = createElement('h1', "Projects");
    projectHeader.position(_width*0.025, _height* 0.15 + imgHeight);
    projectHeader.style('font-size', eleFont + 'px')

    spaceGame = createA('https://spencerdwallace.github.io/UnitySpaceGame/', 'Space Game using Unity', "_self");
    spaceGame.position(_width*0.025, _height* 0.25 + imgHeight);
    spaceGame.style('font-size', height1/40 + 'px');

    raycast = createA('https://spencerdwallace.github.io/RaycastingExperiment/', 'Javascript Raycasting Demo (Mobile Friendly)', "_blank");
    raycast.position(_width*0.025, _height* 0.3 + imgHeight);
    raycast.style('font-size', height1/40 + 'px');

    sorting = createA('https://spencerdwallace.github.io/sorting_algorithms/', 'Sorting Algorithms (Mobile Friendly)', "_self");
    sorting.position(_width*0.025, _height* 0.35 + imgHeight);
    sorting.style('font-size', height1/40 + 'px');




}

function emailBox()
{

    if(inp != null)
    {
        inp.remove(); greeting.remove(); input.remove();
        sender.remove(); button.remove();
    }
    inp = document.createElement("INPUT");
    inp.setAttribute("type", "text");
    inp.size = "500";

    greeting = createElement('h1', 'Send me an email:');
    greeting.position(width1*0.35, _height* 0.15 + imgHeight );
    greeting.style('font-size', eleFont + 'px');

    sender = createInput();
    sender.size(width1/2, _height * 0.08);
    sender.value('Please enter your email: ');
    sender.position(width1*0.35, _height* 0.15 + imgHeight + eleFont*2);
    sender.style('font-size', eleFont*0.5 + 'px');

    input = createInput();
    input.position(width1*0.35, _height* 0.2 + imgHeight + eleFont*4);
    input.size(width1/2, _height*0.2);

    button = createButton('send');
    button.size(width1/50, height1/40);
    button.style('font-size', eleFont*0.30 + 'px');
    button.position(width*0.85 - width1/50, _height* 0.2 + imgHeight + eleFont*4 + _height*0.175);
    button.mouseClicked(sendEmail);


    textAlign(CENTER);
    //textSize(50);
}

function sendEmail()
{
    if(user.numEmails > 0) {

        console.log('input value is: ' + input.value());
        let validAdd = ValidateEmail(sender.value())

        if(validAdd) {
            user.numEmails--;
            let emailMsg = sender.value() + '\n\nMessage: ' + input.value();
            $.post("https://formspree.io/f/meqvgzgo", {emailMsg});
            input.value('');
        }
        else
        {
            alert('Invalid email address, please check that your email address is entered correctly.');
        }

        greeting.html('Send me an email: ' + user.numEmails, false);
    }
    else{
        greeting.html('Maximum emails sent, please email me directly at the email listed above', false);
        //alert("Maximum number of emails sent, please email me directly at the email listed below.")
    }
}

function ball(){

    x += (xGrowth/browserZoomLevel);
    y += (yGrowth/browserZoomLevel);
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
    if(y > height1*0.08 - ballSize/2)
        yGrowth = -1*yGrowth;
    if(y < ballSize/2)
        yGrowth = -1*yGrowth;
    circle(x,y,ballSize);
}

function ValidateEmail(mail)
{
    let address = mail.substring(25, mail.size);

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(address))
    {
        return (true)
    }

    return (false)
}
