// document.addEventListener('DOMContentLoaded', function () {
//     const cursor = document.getElementById('cursor');
//     let x = 0, y = 0;

//     document.addEventListener('mousemove', function (e) {
//         x = e.pageX;
//         y = e.pageY;
//         cursor.style.transform = `translate(${x}px, ${y}px)`;
//     });

//     window.addEventListener('scroll', function () {
//         cursor.style.transform = `translate(${x}px, ${y}px)`;
//     });
// });

var controller = new ScrollMagic.Controller();

var aboutmeBar = document.querySelector("#aboutmeBar");

window.addEventListener('scroll', function () {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    var horizontalPosition = scrollPosition / window.innerHeight * 10;

    aboutmeBar.style.transform = `translateX(-${horizontalPosition}%)`;
});

new ScrollMagic.Scene({
    triggerElement: ".area02",
    duration: "100%",
    triggerHook: 0.5,
    offset: 0
})
    .addTo(controller);

    document.getElementById('scrolldown').addEventListener('click', function() {
        document.querySelector('.area02').scrollIntoView({ behavior: 'smooth' });
    });