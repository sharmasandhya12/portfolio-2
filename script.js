// ============================================
// 1. EMAILJS SETUP — 
// ============================================
// emailjs.init("TUMHARI_PUBLIC_KEY"); // EmailJS Public Key

// ============================================
// 1. TYPING ANIMATION — Hero Section
// ============================================
const roles = [
    "BCA Student",
    "Web Developer",
    "Data Analytics Enthusiast",
    "UI/UX Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector(".hero-role");

function typeAnimation() {
    if (!typingElement) return;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => { isDeleting = true; }, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    const speed = isDeleting ? 60 : 100;
    setTimeout(typeAnimation, speed);
}

window.addEventListener("load", () => {
    setTimeout(typeAnimation, 800);
});

// ============================================
// 2. SCROLL FADE-IN ANIMATION
// ============================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("visible");
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(
    ".education-card, .skill, .project-card, .certificate-card, .achievement-card, .experience-card, .about-card"
).forEach(el => observer.observe(el));

// ============================================
// 3. ACTIVE NAVBAR HIGHLIGHT
// ============================================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// ============================================
// 4. BACK TO TOP BUTTON
// ============================================
const backToTop = document.createElement("button");
backToTop.innerHTML = "↑";
backToTop.className = "back-to-top";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ============================================
// 5. NAVBAR SCROLL EFFECT
// ============================================
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// ============================================
// 6. SKILL CARDS — COUNT UP ANIMATION
// ============================================
const skillCards = document.querySelectorAll(".skill");
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("skill-animate");
        }
    });
}, { threshold: 0.3 });

skillCards.forEach(card => skillObserver.observe(card));

// ============================================
// 7. CURSOR GLOW EFFECT
// ============================================
const cursor = document.createElement("div");
cursor.className = "cursor-glow";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// ============================================
// 8. SMOOTH SCROLL FOR NAV LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// ============================================
// 9. PROJECT CARD — TILT EFFECT ON HOVER
// ============================================
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});