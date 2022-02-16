let _width; let _height; let homeDir; let quickSort; let selSort; let insSort;

function setup(){
    _width = $(window).width()*0.98;
    _height = $(window).height()*0.97;
    createCanvas(_width, _height);
    algos();
}

function draw(){
    clear();
    background(255);

}

function algos(){
    fill(25);
    textStyle(NORMAL);

    quickSort = createA('./quick-sort/index.html', 'Quick Sort', "_self");
    quickSort.position(_width*0.01, _height* 0.1);
    selSort = createA('./selection-sort/index.html', 'Selection Sort', "_self");
    selSort.position(_width*0.01, _height* 0.15);
    insSort = createA('insertion-sort/index.html', 'Insertion Sort', "_self");
    insSort.position(_width*0.01, _height* 0.2);

}
