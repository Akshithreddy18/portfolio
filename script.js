// ==================== CONTACT FORM ====================
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent successfully!");
});


// ==================== DARK MODE ====================
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
});

// ==================== MOBILE MENU ====================
function toggleMenu(){
  const nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// ==================== SCROLL ANIMATION ====================
const reveals = document.querySelectorAll(".about, .skills, .projects, .contact, .project-card");

window.addEventListener("scroll", () => {
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      reveal.classList.add("active");
    }
  });
});

// Add base reveal class
reveals.forEach(el => el.classList.add("reveal"));

// ==================== TYPING EFFECT ====================
const text = "Web Developer | CSE Student";
const speed = 100;
let index = 0;

const target = document.createElement("h3");
target.className = "typing";
target.style.marginTop = "10px";
document.querySelector(".hero").appendChild(target);

function typeEffect() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();

// ==================== CERTIFICATE SLIDER ====================
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

function showSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

// Auto Slide Every 3 Seconds
setInterval(nextSlide, 3000);
// ==================== TESTIMONIALS SLIDER ====================
let testimonialIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active-dot"));

  testimonials[index].classList.add("active");
  dots[index].classList.add("active-dot");
}

function nextTestimonial() {
  testimonialIndex++;
  if (testimonialIndex >= testimonials.length) {
    testimonialIndex = 0;
  }
  showTestimonial(testimonialIndex);
}

function currentTestimonial(index) {
  testimonialIndex = index;
  showTestimonial(testimonialIndex);
}

// Auto slide every 4 seconds
setInterval(nextTestimonial, 4000);
// ==================== LOADING SCREEN ====================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1500); // Loader visible for 1.5 seconds
});

// ==================== PAGE LINK SMOOTH TRANSITION ====================
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.getAttribute("href").startsWith("#")) return;

    e.preventDefault();
    const target = link.href;

    document.body.style.opacity = "0";
    setTimeout(() => {
      window.location.href = target;
    }, 500);
  });
});

// ==================== CERTIFICATE POPUP ====================
const popup = document.getElementById("certPopup");
const popupImg = document.getElementById("popupImg");

function openPopup(src) {
  popup.classList.add("active");
  popupImg.src = src;
}

function closePopup() {
  popup.classList.remove("active");
}

// Close popup when clicking outside image
popup.addEventListener("click", (e) => {
  if (e.target !== popupImg) {
    closePopup();
  }
});
// ==================== PROJECT POPUP ====================
const projectPopup = document.getElementById("projectPopup");
const popupProjectTitle = document.getElementById("popupProjectTitle");
const popupProjectDesc = document.getElementById("popupProjectDesc");
const popupProjectTech = document.getElementById("popupProjectTech");
const popupGithub = document.getElementById("popupGithub");
const popupLive = document.getElementById("popupLive");

function openProjectPopup(title, desc, tech, github, live) {
  popupProjectTitle.textContent = title;
  popupProjectDesc.textContent = desc;
  popupProjectTech.textContent = tech;
  popupGithub.href = github;
  popupLive.href = live;

  projectPopup.classList.add("active");
}

function closeProjectPopup() {
  projectPopup.classList.remove("active");
}

// Close when clicking outside
projectPopup.addEventListener("click", (e) => {
  if (e.target === projectPopup) {
    closeProjectPopup();
  }
});

// ==================== RESUME POPUP ====================
const resumePopup = document.getElementById("resumePopup");

function openResumePopup() {
  resumePopup.classList.add("active");
}

function closeResumePopup() {
  resumePopup.classList.remove("active");
}

// Close when clicking outside popup
resumePopup.addEventListener("click", (e) => {
  if (e.target === resumePopup) {
    closeResumePopup();
  }
});
// ==================== EMAILJS CONTACT FORM ====================
(function () {
  emailjs.init("G6xotRzBq2hZ7FrcU"); // You will replace this
})();

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_0s7xxji", "template_8nojzxk", params)
    .then(function () {
      formStatus.textContent = "✅ Message sent successfully!";
      contactForm.reset();
    }, function () {
      formStatus.textContent = "❌ Failed to send message. Try again!";
    });
});
