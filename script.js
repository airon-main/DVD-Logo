let dvdColors = ["#9dcdbc","#5e755a","#8b6697","#dfa352","#6f7e94","#32acc3","#8de157","#5d58ce","#3fac90","#6a9e6f","#908263","#35ac5b","#8e51b4","#5f9ceb","#91cec1","#39e279","#3d3abb","#98cc90"];
let nextDVDcolor = '';

let dvdPosLeft = 0;
let dvdPosTop = 0;

let downUp = true;    //down  = true, up   = false
let rightLeft = true; //right = true, left = false

let beforeDownUp    = downUp;
let beforeRightLeft = rightLeft;

let hitY = false;
let hitX = false;

let Screen = {
    width : window.innerWidth,
    height : window.innerHeight
}

setInterval(move,15)

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorRandomizer(){
    return dvdColors[getRandomInt(0,dvdColors.length)];
}

function borderGlow(pos){
    let dvd = document.getElementById("dvd-logo");
    let windowDiv = document.getElementById("window");
    switch (pos) {
        case 'top':
            windowDiv.style.boxShadow = 'inset 0px 20px 10px -10px ' + dvd.style.backgroundColor;
            setTimeout(function(){
                windowDiv.style.transition = 'all 1s'
                windowDiv.style.boxShadow = 'none'
                setTimeout(function(){
                    windowDiv.style.transition = 'all .2s'
                }, 1000);
            }, 200);
            break;
        case 'bottom':
            windowDiv.style.boxShadow = 'inset 0px -20px 10px -10px ' + dvd.style.backgroundColor;
            setTimeout(function(){
                windowDiv.style.transition = 'all 1s'
                windowDiv.style.boxShadow = 'none'
                setTimeout(function(){
                    windowDiv.style.transition = 'all .2s'
                }, 1000);
            }, 200);
            break;
        case 'left':
            windowDiv.style.boxShadow = 'inset 20px 0px 10px -10px ' + dvd.style.backgroundColor;
            setTimeout(function(){
                windowDiv.style.transition = 'all 1s'
                windowDiv.style.boxShadow = 'none'
                setTimeout(function(){
                    windowDiv.style.transition = 'all .2s'
                }, 1000);
            }, 200);
            break;
        case 'right':
            windowDiv.style.boxShadow = 'inset -20px 0px 10px -10px ' + dvd.style.backgroundColor;
            setTimeout(function(){
                windowDiv.style.transition = 'all 1s'
                windowDiv.style.boxShadow = 'none'
                setTimeout(function(){
                    windowDiv.style.transition = 'all .2s'
                }, 1000);
            }, 200);
            break;
    }
}

function move(){

    let dvd = document.getElementById("dvd-logo");
    let windowDiv = document.getElementById("window");

    Screen.width = window.innerWidth,
    Screen.height = window.innerHeight

    windowDiv.style.height = Screen.height+'px';
    windowDiv.style.width = Screen.width+'px';

    if(dvdPosTop >= (Screen.height-108)){
        downUp = false;
    }else if(dvdPosTop <= 0){
        downUp = true;
    }

    if(dvdPosLeft >= (Screen.width-108)){
        rightLeft = false;
    }else if(dvdPosLeft <= 0){
        rightLeft = true;
    }

    if(downUp == true){
        dvdPosTop += 1;
        dvd.style.top = dvdPosTop+'px';
    }else if(downUp == false){
        dvdPosTop -= 1;
        dvd.style.top = dvdPosTop+'px';
    }

    if(rightLeft == true){
        dvdPosLeft += 1;
        dvd.style.left = dvdPosLeft+'px';
    }else if(rightLeft == false){
        dvdPosLeft -= 1;
        dvd.style.left = dvdPosLeft+'px';
    }
    
    if(downUp !== beforeDownUp){ //top & bottom hit
        hitX = true;
        dvd.style.backgroundColor = colorRandomizer();
        if(dvdPosTop <= (Screen.height / 2)){
            borderGlow('top')
        }else if(dvdPosTop > (Screen.height / 2)){
            borderGlow('bottom')
        }
    }

    if(rightLeft !== beforeRightLeft){ //right & left hit
        hitY = true;
        dvd.style.backgroundColor = colorRandomizer();
        if(dvdPosLeft <= (Screen.width / 2)){
            borderGlow('left')
        }else if(dvdPosLeft > (Screen.width / 2)){
            borderGlow('right')
        }
    }

    if(hitX == true && hitY == true){ //Corner Hit
        console.log('the dvd hit the CORNER');
    }

    if(downUp == beforeDownUp){
        hitX = false;
    }
    if(rightLeft == beforeRightLeft){
        hitY = false;
    }

    beforeDownUp    = downUp;
    beforeRightLeft = rightLeft;
}