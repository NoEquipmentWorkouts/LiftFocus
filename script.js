// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// MailerLite Form Submission
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('ml-form-30517710');
  if (!form) return;

  const formBody = form.closest('.row-form');
  const successMsg = document.querySelector('.row-success');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      await fetch('https://assets.mailerlite.com/jsonp/1717265/forms/164677861011097184/subscribe', {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(data)
      });

      if (formBody && successMsg) {
        formBody.style.display = 'none';
        successMsg.style.display = 'block';
      }

    } catch (error) {
      alert('Oops! Something went wrong. Please try again.');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Me Day 1!';
    }
  });
});