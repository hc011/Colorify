console.log("started ...");

const circle = document.getElementById('circleID');

var RandomButton = document.querySelector('#Random');

function paint(color){
    circle.style = `background-color:${color}`;
}

function Random(){
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    circle.style = `background-color:${randomColor}`;
    console.log(randomColor);
}


var selectButton = document.getElementById('select');

selectButton.addEventListener('click',function(){
    var color = document.createElement('input');
    color.type = 'color';
    
    color.addEventListener('input',function(){
        paint(color.value);
    })

    color.click();
})

// const eye1 = getElementById('eye1');
document.addEventListener('mousemove', function (event) {

    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var circleX = eye1.offsetLeft + eye1.offsetWidth / 2;
    var circleY = eye1.offsetTop + eye1.offsetHeight / 2;
    var distanceX = mouseX - circleX;
    var distanceY = mouseY - circleY;

    var maxDist = 700;
    var translateX = (distanceX / maxDist) * 25;
    var translateY = (distanceY / maxDist) * 25;
    eye1.style.transform = `translate(${translateX}px, ${translateY}px)`;
})

// const eye2 = getElementById('eye2');
document.addEventListener('mousemove', function (event) {

    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var circleX = eye2.offsetLeft + eye2.offsetWidth / 2;
    var circleY = eye2.offsetTop + eye2.offsetHeight / 2;
    var distanceX = mouseX - circleX;
    var distanceY = mouseY - circleY;

    var maxDist = 700;
    var translateX = (distanceX / maxDist) * 25;
    var translateY = (distanceY / maxDist) * 25;
    eye2.style.transform = `translate(${translateX}px, ${translateY}px)`;
})




let IntervalID;
let flag=0;
RandomButton.addEventListener('click',function(){
    if(flag===0){
        flag=1;
        IntervalID = setInterval(Random,1000);
        RandomButton.textContent = "Stop Random";
    }
    else{
        flag=0;
        clearInterval(IntervalID);
        RandomButton.textContent = "Start Random";
    }
}
);


let interval2;

function onMouseOver(){
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    RandomButton.style = `color:${randomColor}`;
}

RandomButton.addEventListener('mouseover',function(){
    interval2 = setInterval(onMouseOver,600);
});
RandomButton.addEventListener('mouseout',function(){
    clearInterval(interval2);
    RandomButton.style.color = 'black';
});

