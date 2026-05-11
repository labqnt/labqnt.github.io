const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-in").forEach(el => obs.observe(el));

function toggleMobileMenu() {
  const navLinks = document.getElementById("navLinks");
  if (navLinks) {
    navLinks.classList.toggle("open");
  }
}
