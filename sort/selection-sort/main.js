let _width = $(window).width()*0.99; let _height = $(window).height() * 0.8;
var canv;
var size = Math.floor(_width/8);
var arr = [size]; var state = [size];
var start = 0; var end = size - 1;
let rectW = Math.floor(_width/size); let button; var sorting; let backToSA;
let sortTime; let currTime;

function setup() {

    canv = createCanvas(_width, _height);
    canv.position(_width*0.005, _height*0.2);
    for(let i = 0; i < size; i++ ) {
        arr[i] = _height * Math.random();
        state[i] = -1;
    }
    let h = createElement('h1', 'Selection Sort');
    h.style('color', '#222222');
    h.position(_width*0.01, 0);
    h.size(_width, _height/5)
    button = createButton('Restart Sort (sort must be completed)');
    button.position(10, 70);

    backToSA = createA('../index.html', 'Back to Sorting Algorithms', '_self');
    backToSA.position(_width/2 - textWidth('Back to Sorting Algorithms')/2,30);
    currTime = Date.now() / 1000;
    sortTime = 0;
    selectionSort(arr, start, end);
}

function draw() {
    clear();
    background(10);
    if(sorting){
        sortTime = Date.now() / 1000 - currTime;
        sortTime = sortTime.toFixed(2);
    }
    textSize(20);
    fill(255);
    text(sortTime.toString(), width/2 - 20, 20);

    for(let i = 0; i < size; i++ )
    {
        if (state[i] == 0) {
            fill('#EE5555');
        } else if (state[i] == 1) {
            fill('#55FF55');
        } else {
            fill('#FFFFFF');
        }

        rect(i*rectW, _height - arr[i], rectW, arr[i]);
    }

    button.mousePressed(resetArr);

}

function resetArr() {
    if (!sorting) {
        setup();
        sortTime = 0;
        currTime = Date.now() / 1000;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function swap(arr, n1, n2)
{
    await sleep(75);
    let temp = arr[n1];
    arr[n1] = arr[n2];
    arr[n2] = temp;
/*
    let tempN1 = n1; let valN1 = arr[n1];
    let tempN2 = n2; let valN2 = arr[n2];
    state[n2] = 1;
    state[n1] = 0;
    //let n1prev = arr[n1], n2prev = arr[n2];
    for(n1; n1 < tempN2 || n2 > tempN1;){
        if(n1 < tempN2){
            arr[n1] = arr[n1+1];
            n1++;
            arr[n1] = valN1;
       }
        if(n2 > tempN1){
            arr[n2] = arr[n2-1];
            n2--;
            arr[n2] = valN2;
        }
        console.log("made it.");
        state[n2] = -1;

    }*/

}

async function selectionSort(arr, start, end)
{

    sorting = true;
    for(let i = end; i > start; i--)
    {
        let high = i;
        for(let s = start; s < i; s++)
        {
            if(arr[s] > arr[high])
            {
                state[s] = 0;
                high = s;
            }

        }
        await swap(arr, high, i, 1);
        state[i] = 1;
    }

    sorting = false;
    await sleep(100);

    for(let i = 0; i <= end; i++)
        state[i] = -1;
    await sleep(100);

    for(let i = 0; i <= end; i++) {
        await sleep(10);
        state[i] = 1;
    }
}

