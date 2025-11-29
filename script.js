// Scroll Button Show/Hide
const scrollBtn = document.getElementById("scrollToTopBtn");
const sectionObserver = new IntersectionObserver(entries => {
  scrollBtn.style.display = entries[0].isIntersecting ? "flex" : "none";
}, { threshold: 0.3 });
sectionObserver.observe(document.getElementById("counter-section"));

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Counters
let hasCounted = false;
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !hasCounted) {
    hasCounted = true;
    const counters = [
      { id: 'counter1', target: 19368 },
      { id: 'counter2', target: 25891 },
      { id: 'counter3', target: 40538 },
      { id: 'counter4', target: 12746 },
    ];
    counters.forEach(({ id, target }) => {
      let current = 0;
      const speed = 15;
      const counterEl = document.getElementById(id);
      function update() {
        if (current < target) {
          current += Math.ceil((target - current) / 40);
          counterEl.textContent = current.toLocaleString();
          setTimeout(update, speed);
        } else {
          counterEl.textContent = target.toLocaleString();
        }
      }
      update();
    });
  }
}, { threshold: 0.5 });

observer.observe(document.getElementById('counter-section'));
