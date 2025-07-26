document.addEventListener('DOMContentLoaded', () => {
  // Language Selector
  const languageSelector = document.querySelector('.footer-language select');
  languageSelector.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    alert(`Language switched to: ${selectedLanguage}`);
  });

  // Footer Links
  const footerLinks = document.querySelectorAll('.footer a');
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(`Link clicked: ${link.textContent}`);
    });
  });

  // Accordion FAQ - Only one open at a time
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      // First close all items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-toggle').textContent = '+';
        }
      });

      // Toggle current one
      if (item.classList.contains('active')) {
        // Already open → close it
        item.classList.remove('active');
        item.querySelector('.faq-toggle').textContent = '+';
      } else {
        // Was closed → open it
        item.classList.add('active');
        item.querySelector('.faq-toggle').textContent = '−';
      }
    });
  });
});


























