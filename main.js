let width1 = $(window).width()*0.98; let height1 = $(window).height()*0.97;
var imgWidth; var imgHeight; var browserZoomLevel; var eleFont;
var ttl; let x; let y; let xGrowth = 5; let yGrowth = 1; var mobile;
var photo; var bio; var circleColor = [20]; var circleBounceCount = 0; var ballSize;
var fontsize; var spaceGame; var raycast; var sorting; var IB_KNN; var projectHeader;
var button; var input; var sender; var greeting; var numOfEmailsRemaining; var userAddress;
var user; let _width; let _height; var inp; var res = 970/828;  var emailNotClicked = true;

function getUserID() {
    /*
        $.getJSON("https://api.ipify.org?format=json", async function (data) {
            userAddress = data.ip;
            //alert("IP address is: " + userAddress);
            user = {address: userAddress, numEmails: 3};
            var _id = JSON.stringify( userAddress )
        });

    */
}




function setup(){
    if(width1 > height1) { _width = width1; _height = height1; mobile = false; } //desktop or landscape
    else { _width = height1; _height = width1; mobile = true;} //mobile or portrait
    browserZoomLevel = (Math.round(window.devicePixelRatio * 100))/100;
    ballSize = 20/browserZoomLevel;
    eleFont = _height/25;
    y = 20/browserZoomLevel;
    imgWidth = width1/8;
    if(mobile)
        imgWidth = width1/6;
    imgHeight = imgWidth*res;
    // width1 = width1/browserZoomLevel;
    // height1 = height1/browserZoomLevel;
    console.log('Browser zoom is: ' + browserZoomLevel);
    getUserID();
    createCanvas(width1, height1);
    ttl = createElement('h1', "Home Page");
    numOfEmailsRemaining = 3;
    photo = loadImage('./wedding_jacket_tryon.jpeg');
    bio = 'My name is Spencer Wallace, I am a fourth-year computer science major at Cal State San Bernardino. ' +
        'I am interested in graphics and rendering techniques, game design, and machine learning/neural networks. ' +
        'Outside of programming my hobbies include rock-climbing, hiking, camping, playing piano, and spending time ' +
        'with my wife, our chickens, and our dog. Listed below are some of my projects with links to their demos. ' +
        '    \n\n\n' +
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
    fontsize = _width/100;
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
    if(mobile)
        rect(width1*0.25, height1*0.08, width1*0.74, imgHeight*2);
    else
        rect(width1*0.25, height1*0.08, width1*0.74, imgHeight);

    fill(255);
    textStyle(BOLD);

    if(mobile){
        textSize(fontsize*1.3);
        text(bio, width1 * 0.26, height1 * 0.09, width1 * 0.72, 2*imgHeight - 0.01);
    }
    else
    {
        textSize(fontsize);
        text(bio, width1 * 0.26, height1 * 0.09, width1 * 0.72, imgHeight - 0.01);
    }
    ttl.position(width1*0.02,height1*0.01);
    ttl.style('font-size', eleFont + 'px');
}
function projects(){
    fill(25);
    textStyle(NORMAL);


    if(projectHeader != null)
    {
        projectHeader.remove(); spaceGame.remove();
        raycast.remove(); sorting.remove();
    }
    projectHeader = createElement('h1', "Projects");
    projectHeader.style('font-size', eleFont + 'px')

    spaceGame = createA('https://spencerdwallace.github.io/UnitySpaceGame/', 'Space Game using Unity', "_self");
    spaceGame.style('font-size', height1/40 + 'px');

    raycast = createA('https://spencerdwallace.github.io/RaycastingExperiment/', 'Javascript Raycasting Demo (Mobile Friendly)', "_blank");
    raycast.style('font-size', height1/40 + 'px');

    sorting = createA('https://spencerdwallace.github.io/sorting_algorithms/', 'Sorting Algorithms (Mobile Friendly)', "_self");
    sorting.style('font-size', height1/40 + 'px');

    IB_KNN = createA('./CSE_5160_Project_Fall_2021___Letter_Classification__Naive_Bayes_and_KNN_.pdf', 'Paper on Ierative Bayes and K-Nearest Neighbors<br>' +
        ' for Letter Classification', "_blank");
    IB_KNN.style('font-size', height1/40 + 'px');

    let ih = imgHeight;
    ih = ih + ih*mobile;
    /*if(mobile) {
        projectHeader.position(_width * 0.025, _height * 0.15 + imgHeight*2);
        spaceGame.position(_width * 0.025, _height * 0.25 + imgHeight*2);
        raycast.position(_width * 0.025, _height * 0.3 + imgHeight*2);
        sorting.position(_width * 0.025, _height * 0.35 + imgHeight*2);
        IB_KNN.position(_width * 0.025, _height * 0.4 + imgHeight*2);
    }
    else{*/
    projectHeader.position(_width * 0.025, _height * 0.15 + imgHeight);
    spaceGame.position(_width * 0.025, _height * 0.25 + imgHeight);
    raycast.position(_width * 0.025, _height * 0.3 + imgHeight);
    sorting.position(_width * 0.025, _height * 0.35 + imgHeight);
    IB_KNN.position(_width * 0.025, _height * 0.4 + imgHeight);
    //}
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
    greeting.style('font-size', eleFont + 'px');

    sender = createInput();
    sender.size(width1/2, _height * 0.08);
    sender.value('Please enter your email: ');

    sender.style('font-size', eleFont*0.5 + 'px');

    input = createInput();
    input.size(width1/2, _height*0.2);
    input.style('font-size', eleFont*0.5 + 'px');

    button = createButton('send');
    if(browserZoomLevel > 1 && mobile)
        button.size(browserZoomLevel * 0.8 * _width/50, _height/40);
    else
        button.size(eleFont*1.25, _height/40);
    button.style('font-size', eleFont*0.30 + 'px');
    if(!mobile) //desktop
    {
        greeting.position(width1 * 0.35, _height * 0.15 + imgHeight);
        sender.position(width1 * 0.35, _height * 0.15 + imgHeight + eleFont * 2);
        input.position(width1 * 0.35, _height * 0.2 + imgHeight + eleFont * 4);
        button.position(width1 * 0.85 - eleFont*1.25, _height * 0.2 + imgHeight + eleFont * 4 + _height * 0.175);
    }
    else //mobile
    {
        greeting.position(width1 * 0.25, _height * 0.65 + imgHeight);
        sender.position(width1 * 0.25, _height * 0.65 + imgHeight + eleFont * 2);
        input.position(width1 * 0.25, _height * 0.7 + imgHeight + eleFont * 4);
        button.position(width1 * 0.25 + (eleFont/3)*(sender.value().length), _height * 0.595 + imgHeight + eleFont * 2 + _width/100);
    }
    textAlign(CENTER);
}

function sendEmail()
{
    if(user.numEmails > 0) {

        console.log('input value is: ' + input.value());
        let validAdd = ValidateEmail(sender.value())

        if(validAdd) {
            if(input.value() != '')
            {
                user.numEmails--;
                let emailMsg = sender.value() + '\n\nMessage: ' + input.value();
                $.post("https://formspree.io/f/meqvgzgo", {emailMsg});
                input.value('');
                alert('Email sent!');
            }
            else
                alert('Invalid message.');
        }
        else
        {
            alert('Invalid email address, please check that your email address is entered correctly.');
        }

        //greeting.html('Send me an email:', false);
    }
    else{
        alert('Maximum emails sent, please email me directly at the email listed above');
    }
}

function keyPressed()
{
    if(keyCode === 13){

        input.input(detectNewline());
    }

}
function detectNewline()
{
    input.value(input.value() + '\n');
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
    let address;
    if(emailNotClicked)
        address = mail.substring(25, mail.size);
    else
        address = mail.substring(0, mail.size);

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(address))
    {
        return (true)
    }

    return (false)
}
