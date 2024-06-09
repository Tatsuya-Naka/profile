// menu-bar 
let menuIcon = document.querySelector('#menu');
let navbar = document.querySelector('.bars');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let remove = document.querySelectorAll('.main, .aboutMe, .internship, .education, .hobby, .contact, footer');

remove.forEach(see => {
    see.onclick = () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);
};

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.querySelector('.email a').addEventListener('click', function(event) {
    event.preventDefault();
    sendEmail();
});

document.querySelector('a.footerEmail ').addEventListener('click', function(event) {
    event.preventDefault();
    sendEmail();
});

function sendEmail() {
    var emailAddress = 'ymktr0918gromin28@gmail.com';
    window.location.href = 'mailto:' + emailAddress;
}
