let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const sr = ScrollReveal ({
    distance: '40px',
    durtion: 2500,
    reset: true
});

sr.reveal('.logo',{delay:200, origin:'left'});
sr.reveal('.about-img',{delay:300, origin:'top'});
sr.reveal('.about-content h1',{delay:400, origin:'left'});
sr.reveal('.about-content p',{delay:500, origin:'right'});
sr.reveal('.text-animation',{delay:600, origin:'right'});
/*sr.reveal('.navbar',{delay:700, origin:'up'});*/

sr.reveal('.social-media-icons',{delay:700, origin:'left'});
sr.reveal('.btn-group',{delay:800, origin:'down'});
