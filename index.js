// Get all sections and nav links
const sections = document.querySelectorAll("div[id]");
const navLinks = document.querySelectorAll(".fixed-sidebar a");

window.addEventListener("scroll", () => {
  let current = "";

  // Find which section is currently in view
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  // Update active link
  navLinks.forEach((link) => {
    link.classList.remove("nav-active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("nav-active");
    }
  });
});
