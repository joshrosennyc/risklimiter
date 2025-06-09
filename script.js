
function playVideo() {
  const video = document.getElementById('demoVideo');
  if (video.style.display === 'none') {
    video.style.display = 'block';
    video.play();
  } else {
    video.pause();
    video.style.display = 'none';
  }
}

// Basic form validation for newsletter
document.addEventListener('DOMContentLoaded', () => {
  const newsletterBtn = document.querySelector('.newsletter button');
  newsletterBtn.addEventListener('click', () => {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (email && email.includes('@')) {
      alert('Thank you for signing up!');
      emailInput.value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  });
});
