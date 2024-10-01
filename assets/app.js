const arr = [];
const props = {
    "main": $(".slideArea"),
    "speed": 4000,
    "int":{}
};
$(document).ready(function () {
    console.log('doc ready');
    makeListImage();
    outputImages();
    props.int = setInterval(moveSlides, props.speed);
})

$('.contBtns').on('click', '.prevBtn', function () {
    console.log('prev');
    prevSlide();
})

$('.contBtns').on('click', '.nextBtn', function () {
    console.log('next');
    nextSlide();
    props.int = setInterval(moveSlides, props.speed);
})
function updateSlideValue(newCur) {
    clearInterval(props.int);
    newCur.addClass('active');
}
function nextSlide() {
    const cur = $('.active');
    cur.removeClass('active');
    const next = cur.next();
    const newCur = next.length ? next : cur.prevAll().last();
    console.log(newCur);
    updateSlideValue(newCur)
}
function prevSlide() {
    const cur = $('.active');
    cur.removeClass('active');
    const prev = cur.prev();
    const newCur = prev.length ? prev : cur.nextAll().last();
    console.log(newCur);
    updateSlideValue(newCur)
}

function outputImages() {
    $.each(arr, function (index, value) {
        console.log(value);
        let tempActive = index == 0 ? 'active' : '';
        console.log(tempActive);
        let html = `<div class="slide ${tempActive}"><img class="slideImg" src='${value}'><span class="caption">Caption ${index+1}</span></span></div>`;
        props.main.append(html);
    })
}

function makeListImage() {
    for (let x = 0; x < 5; x++) {
        // let temp = `https://placehold.co/400x400/${ranColor()}/${ranColor()}?text=image${x + 1}`;
        let temp = `https://picsum.photos/400?random=${x+1}`;
        // arr.push(temp);
        arr.push(temp);
    }
}

function ranColor() {
    const temp = Math.random();
    console.log(temp);
    
    const temp1 = temp.toString(16);
    console.log(temp1);

    const temp2 = temp1.substr(2, 6);
    console.log(temp2)
    return temp2;
}

function moveSlides() {
    nextSlide();
}

// $(window).on("load",function () {
//     console.log('window ready');
// })