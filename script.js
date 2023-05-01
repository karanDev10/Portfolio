let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.85,
    fill: { gradient: ['#a445b2', '#fa4299'] }
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function (event, progress, stepValue) {
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
$(".js .bar").circleProgress({
    value: 0.70
});
$(".react .bar").circleProgress({
    value: 0.60
});

// menubar js hamburger
const hamburger = document.querySelector('.hamburger')
const hamOpen = document.querySelector('.nav-content');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener("click", () => {
    hamOpen.style.transform = 'translateX(0%)';
    document.body.style.overflow = 'hidden';
})

closeBtn.addEventListener("click", () => {
    hamOpen.style.transform = 'translateX(-105%)';
    document.body.style.overflow = 'initial';
})
const navLinks = document.querySelectorAll('.wrap-nav nav ul li a');
console.log(navLinks)

navLinks.forEach(element => {
    element.addEventListener('click', () => {
        hamOpen.style.transform = 'translateX(-105%)';
        document.body.style.overflow = 'initial';
    })
});

// editing of heading 
let typed = new Typed('.auto-type', {
    strings: ['web developer', 'Designer', 'Fresher'],
    typeSpeed: 150,
    backspeed: 150,
    loop: true
});