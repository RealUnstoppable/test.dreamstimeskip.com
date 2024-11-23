// Get elements
const openPopup = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const closePopup = document.querySelector('.close');

// Open popup on button click
openPopup.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Close popup on close button click
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close popup when clicking outside the popup content
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
// Get elements

// Show popup when the page loads
document.addEventListener('DOMContentLoaded', () => {
  popup.style.display = 'flex';
});

// Close popup on close button click
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close popup when clicking outside the popup content
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
