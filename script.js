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

// define my user-id
(function() {
    emailjs.init('Z8LPdTq27oGYKACLz');
})();

// send email from my web page 
document.querySelector('section #contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var fullName = document.querySelector('.head input').value;
    var emailAddress = document.querySelector('.input-box #emailAddress').value;
    var phoneNumber = document.querySelector('.input-box #phoneNumber').value;
    var title = document.querySelector('.title input').value;
    var message = document.querySelector('textarea').value;

    // if one of message is missed
    var fields = [document.querySelector('.head input'), document.querySelector('.input-box #emailAddress'), document.querySelector('.input-box #phoneNumber'), document.querySelector('.title input'), document.querySelector('textarea')];
    fields.forEach(function(field) {
        field.classList.remove('error');
    });

    var hasError = false;
    fields.forEach(function(field) {
        if (!field.value) {
            field.classList.add('error');
            hasError = true;
        }
    });

    if (hasError) {
        return;
    }

    var templateParams = {
        from_name: fullName,
        to_name: "Tatsuya NAKAGOMI",
        title: title,
        message: message,
        fullName: fullName,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber
    };

    emailjs.send('09tatsutapotetonano28', 'template_tatsutapoteto09', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.querySelector('section #contactForm').style.display = 'none';
            document.querySelector('.contact .success-message').style.display = 'block';
            // alert('Message sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            // alert('Failed to send the message. Please try again later');
        });
});
