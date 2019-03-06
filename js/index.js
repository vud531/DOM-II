// Your code goes here

// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive   
}


document.addEventListener('scroll', function(e) {
    let red = getRandomIntInclusive(0,255);
    let green = getRandomIntInclusive(0,255);
    let blue = getRandomIntInclusive(0,255);


    document.getElementsByTagName('body')[0].bgColor= `rgb(${red},${green},${blue})`;});

const anchors = document.querySelectorAll('.nav-link');
console.log(anchors);
anchors.forEach( anchor => { 
    anchor.addEventListener('mouseover', function(e){
        anchor.style = "font-weight: bold";
    });

    anchor.addEventListener('focus', function(){
        anchor.style = "color: red";
    });

    
    anchor.addEventListener('blur', function(e){
        console.log(e);
        anchor.style = "color: blue";
    });
});

const header = document.getElementsByTagName('header');
header[0].addEventListener('wheel', function() {
    console.log();

    alert("be careful!!! Don't rool the wheel in the header");
});

const logo = document.getElementsByClassName('logo-heading');
logo[0].addEventListener('dblclick', function() {
    console.log();
    logo[0].innerHTML = '<h2>oh hi there, are you looking for me?<h2>';
});







// to do: go back and get this working
const imgs = document.getElementsByTagName('img');
imgs[1].draggable = true;
imgs[1].addEventListener('drag', function(e) {
    console.log(e);
});

imgs[1].addEventListener('drop', function(e) {
    event.preventDefault();

    console.log("hi");

    logo[0].innerHTML = '<h2>hey, dont swap my img<h2>';
});
