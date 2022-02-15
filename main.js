let width1 = $(window).width()*0.98; let height1 = $(window).height()*0.97;
var imgWidth; var imgHeight; var browserZoomLevel; var eleFont;
var ttl; let x; let y; let xGrowth = 5; let yGrowth = 1; var mobile;
var photo; var bio; var circleColor = [20]; var circleBounceCount = 0; var ballSize;
var fontsize; var spaceGame; var raycast; var sorting; var IB_KNN; var projectHeader;
var button; var input; var sender; var greeting; var numOfEmailsRemaining; var userAddress;
var user; let _width; let _height; var inp; var res = 970/828;  var emailNotClicked = true;

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
    numOfEmailsRemaining = 3;
    photo = loadImage('./wedding_jacket_tryon.jpeg');

    for(let s = 0; s < 20; s++) {
        circleColor[s] = [3];
        for (let i = 0; i < 3; i++) {
            circleColor[s][i] = random(100, 255);
        }
    }
    projects();
    emailBox();


}

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
    if(mouseX > width1*0.347 && mouseX < width*0.35 + width1/2 && mouseY > sender.y - eleFont*browserZoomLevel/6 && mouseY < sender.y + sender.height - eleFont*browserZoomLevel/6)
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
