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

const anchors = document.querySelectorAll('.nav-link');
console.log(anchors);
anchors.forEach( anchor => { 
    anchor.addEventListener('mouseover', function(e){
c        anchor.style = "font-weight: bold"
    });

    anchor.addEventListener('focus', function(){
        anchor.style = "color: red"
    });
});

const header = document.getElementsByTagName('header');
header.addEventListener('wheel', function(e) {
    console.log(e);

    alert("be careful!!!");
});
