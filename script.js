/* =========================================================
   Sanchita Jadhav Portfolio
   JavaScript
   ========================================================= */


/* =========================
   MOBILE NAVIGATION
   ========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });


    // Close mobile menu after clicking a link

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.textContent = "☰";

        });

    });

}


/* =========================
   SMOOTH SCROLLING
   ========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================
   ACTIVE NAVIGATION
   ========================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        const linkTarget = link.getAttribute("href");

        if (linkTarget === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();


/* =========================
   SCROLL REVEAL ANIMATION
   ========================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .stat-card, .chart-card, .project-card, .skill-item"
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});


const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   SKILL BAR ANIMATION
   ========================= */

const skillBars = document.querySelectorAll(".fill");

skillBars.forEach(bar => {

    const originalWidth = getComputedStyle(bar).width;

    bar.dataset.width = originalWidth;

    bar.style.width = "0%";

});


const skillObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const bar = entry.target;

                const finalWidth = bar.dataset.width;

                setTimeout(() => {

                    bar.style.width = finalWidth;

                }, 200);

                observer.unobserve(bar);

            }

        });

    },

    {
        threshold: 0.5
    }

);


skillBars.forEach(bar => {

    skillObserver.observe(bar);

});


/* =========================
   PROJECT CARD INTERACTION
   ========================= */

const projectCards = document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition =
            "transform 0.3s ease, box-shadow 0.3s ease";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================
   HERO ENTRANCE ANIMATION
   ========================= */

window.addEventListener("load", () => {

    const heroContent = document.querySelector(".hero-content");
    const heroProfile = document.querySelector(".hero-profile");


    if (heroContent) {

        heroContent.style.opacity = "0";

        heroContent.style.transform = "translateY(30px)";

        heroContent.style.transition =
            "opacity 1s ease, transform 1s ease";


        setTimeout(() => {

            heroContent.style.opacity = "1";

            heroContent.style.transform =
                "translateY(0)";

        }, 200);

    }


    if (heroProfile) {

        heroProfile.style.opacity = "0";

        heroProfile.style.transform =
            "translateY(30px) scale(0.95)";

        heroProfile.style.transition =
            "opacity 1s ease, transform 1s ease";


        setTimeout(() => {

            heroProfile.style.opacity = "1";

            heroProfile.style.transform =
                "translateY(0) scale(1)";

        }, 500);

    }

});


/* =========================
   NAVBAR BACKGROUND ON SCROLL
   ========================= */

const navbar = document.querySelector("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(8, 11, 18, 0.96)";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.25)";

    } else {

        navbar.style.background =
            "rgba(8, 11, 18, 0.85)";

        navbar.style.boxShadow = "none";

    }

});


/* =========================
   CURRENT YEAR
   ========================= */

const footer = document.querySelector("footer");

if (footer) {

    const currentYear = new Date().getFullYear();

    footer.innerHTML = `
        <p>
            © ${currentYear} Sanchita Santosh Jadhav
            • AI & Data Science Student
        </p>
    `;

}


/* =========================
   CONSOLE MESSAGE
   ========================= */

console.log(
    "Welcome to Sanchita Jadhav's Portfolio 🚀"
);