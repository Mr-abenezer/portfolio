// Update dynamic copyright year
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Welcome console message
  console.log(
    '%c Welcome to Abenezer Teshome\'s Portfolio! %c\nExplore the code and connect at https://github.com/Mr-abenezer',
    'background: #8b5cf6; color: #fff; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
    'color: #38bdf8; font-weight: normal;'
  );
});
