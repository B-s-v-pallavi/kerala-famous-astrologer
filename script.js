/* =========================
   MOBILE NAVBAR
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });


    // Close menu when a link is clicked

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });
}


/* =========================
   CONTACT FORM → WHATSAPP
========================= */

function sendToWhatsApp(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all the fields.");
        return;
    }

    const whatsappMessage =
`Hello Kalika Devi Astro,

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const ownerNumber = "919686948887";

    const whatsappURL =
        `https://wa.me/${ownerNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    event.target.reset();
}


/* =========================
   CURRENT YEAR
========================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}