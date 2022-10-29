var i = 0;
var images = [];
var time = 3000;

images[0] = './assets/hacking images/1.jpg';
images[1] = './assets/hacking images/3.jpg';
images[2] = './assets/hacking images/4.jpg';
images[3] = './assets/hacking images/7.jpg';

function changeImg() {
    document.slide.src = images[i]

    if(i < images.length -1){
        i++;
    } else{
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;