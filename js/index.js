const ham = document.getElementById('menu-toggle');
const navCollapse = document.querySelector('.nav-collapse');

ham.addEventListener('click', () => {
    ham.classList.toggle("active");
    navCollapse.classList.toggle("active");
});

// splide
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#dish-carousel', {
        type: 'loop',
        perPage: 3,
        gap: '2px',
        focus: 'center',
        arrows: false,
        autoplay: true,
        drag: true,
        breakpoints: {
            768: {
                perPage: 1,
                focus: 'center',
            },
            1024: {
                perPage: 3,
                // focus: 'center',
            }
        }
    }).mount();
});

// Email Form

document.getElementById("newsletterForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("emailInput").value;
    const message = document.getElementById("formMessage");

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
        message.style.color = "red";
        message.textContent = "Please enter a valid email address.";
    } else {
        message.style.color = "green";
        message.textContent = "Thank you for subscribing!";
        // Simulate API or clear form
        document.getElementById("emailInput").value = "";
    }
});

// testimonial splide 

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#testimonial-slider', {
        type: 'loop',
        autoplay: true,
        drag: true,
        perPage: 2,
        arrows: false,
        gap: '40px',
        autoplay: true,
        breakpoints: {
            768: {
                perPage: 1
            }
        }
    }).mount();
});