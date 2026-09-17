/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   CONTACT FORM → WHATSAPP
========================= */

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    /* Get form values */

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    /* Check empty fields */

    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all the fields.";

        return;

    }


    /* Create WhatsApp message */

    const whatsappMessage =
`Hello Kalika Devi Astro,

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`;


    /* Encode message */

    const encodedMessage =
        encodeURIComponent(whatsappMessage);


    /* Owner's WhatsApp number */

    const ownerNumber =
        "919032266262";


    /* Create WhatsApp URL */

    const whatsappURL =
        `https://wa.me/${ownerNumber}?text=${encodedMessage}`;


    /* Open WhatsApp */

    window.open(whatsappURL, "_blank");


    /* Show message */

    formMessage.textContent =
        "Opening WhatsApp...";


    /* Clear form */

    contactForm.reset();

});


/* =========================
   HEADER SHADOW ON SCROLL
========================= */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 5px 20px rgba(0, 0, 0, 0.08)";

    } else {

        header.style.boxShadow =
            "none";

    }

});


/* =========================
   CURRENT YEAR
========================= */

const currentYear =
    new Date().getFullYear();


document.getElementById("currentYear").textContent =
    currentYear;