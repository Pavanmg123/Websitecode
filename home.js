document.addEventListener('DOMContentLoaded', () => {
  const path = document.getElementById('connector-path');
  const dot = document.getElementById('moving-dot');
  const container = document.getElementById('how-it-works'); // container with steps & path
  const pathLength = path.getTotalLength();

  function updateDotPosition() {
    const scrollTop = window.scrollY || window.pageYOffset;
    const containerRect = container.getBoundingClientRect();
    const containerTop = scrollTop + containerRect.top;
    const containerHeight = container.offsetHeight;
    const viewportHeight = window.innerHeight;


    const scrollProgress = (scrollTop + viewportHeight - containerTop) / (containerHeight + viewportHeight);

    
    const scrollPercent = Math.min(Math.max(scrollProgress, 0), 1);

    
    const lengthAlongPath = scrollPercent * pathLength;
    const point = path.getPointAtLength(lengthAlongPath);

   
    dot.setAttribute('cx', point.x);
    dot.setAttribute('cy', point.y);
  }

  window.addEventListener('scroll', () => {
    requestAnimationFrame(updateDotPosition);
  });

  // Initialize on page load
  updateDotPosition();
});
