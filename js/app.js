$(document).foundation();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log('observed:', entry.target, 'isIntersecting:', entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));