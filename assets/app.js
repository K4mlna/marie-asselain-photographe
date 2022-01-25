const namespans = document.querySelectorAll('h1 span');
const header = document.querySelector('header');
const headersection = document.querySelector('header section');
const locationspans = document.querySelector('h2');
const social = document.querySelectorAll ('main section div a')





window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(namespans, 1.4, {y:-300, opacity: 0, ease: "power2.out"}, 0)
    
    .staggerFrom(header, 1.3, {x:900, opacity: 0, ease: "power2.out"},0.3, '-=1')
    .staggerFrom(headersection, 1.3, {x:900, opacity: 0, ease: "power2.out"},0.3, '-=0.5')
    .staggerFrom(social, 0.5, { x:-200, opacity: 0, ease:"power2.out"},0.3, '-=1.8')
    .staggerFrom(locationspans, 1.4, {y:300, opacity: 0, ease: "power2.out"},0.3, '-=2.5')
    

    TL.play();
})