const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
});
function validateForm() {
    var email = document.getElementById("emailInput").value;
    var emailError = document.getElementById("emailError");

    // Check if email field is empty or not valid
    if (email === "" || !isValidEmail(email)) {
        emailError.style.display = "block"; // Show error message
        return false; // Prevent form submission
    } else {
        emailError.style.display = "none"; // Hide error message
        return true; // Allow form submission
    }
}

// Function to validate email format
function isValidEmail(email) {
    // Simple regex pattern for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function updatePrice(itemId) {
    // Get the quantity input field and the price element
    var quantityInput = document.getElementById("quantity" + itemId);
    var priceElement = document.getElementById("price" + itemId);
    var subtotalElement = document.getElementById("subtotal");

    // Get the current price
    var currentPrice = 50; // Assuming initial price is $50

    // Get the new quantity
    var newQuantity = parseInt(quantityInput.value);

    // Calculate the new total price
    var newTotalPrice = currentPrice * newQuantity;

    // Update the price element with the new total price
    priceElement.innerText = "Price: $" + newTotalPrice.toFixed(2);

    // Update the subtotal element with the new total price
    subtotalElement.innerText = "Subtotal: $" + newTotalPrice.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var acceptButton = document.getElementById("accept");
    var declineButton = document.getElementById("decline");

    var popupShown = localStorage.getItem("popupShown");

    if (!popupShown) {
        popup.style.display = "block";
    }

    acceptButton.addEventListener("click", function() {
        localStorage.setItem("popupShown", true);
        popup.style.display = "none";
    });

    declineButton.addEventListener("click", function() {
        window.location.href = "banned.html";
        //implement server-side logic to ban IP addresses.
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup-kari");
    var acceptButton = document.getElementById("accept");
    var declineButton = document.getElementById("decline");

    var popupShown = localStorage.getItem("popupShown");

    if (!popupShown) {
        popup.style.display = "show";
    }

    acceptButton.addEventListener("click", function() {
        localStorage.setItem("popupShown", true);
        popup.style.display = "none";
    });

    declineButton.addEventListener("click", function() {
        window.location.href = "index.html";
        //implement server-side logic to ban IP addresses.
    });
});
// For demonstration purposes, let's simulate loading videos
const videos = [
    { title: 'Video 1', src: 'video1.mp4' },
    { title: 'Video 2', src: 'video2.mp4' },
    { title: 'Video 3', src: 'video3.mp4' },
    { title: 'Video 4', src: 'video4.mp4' },
    { title: 'Video 5', src: 'video5.mp4' },
  ];
  
  // Function to dynamically add videos to the video row
  function addVideos() {
    const videoRow = document.querySelector('.video-row');
    videos.forEach(video => {
      const videoElement = document.createElement('video');
      videoElement.src = video.src;
      videoElement.controls = true;
      const titleElement = document.createElement('h2');
      titleElement.textContent = video.title;
      const videoWrapper = document.createElement('div');
      videoWrapper.classList.add('video-wrapper');
      videoWrapper.appendChild(videoElement);
      videoWrapper.appendChild(titleElement);
      videoRow.appendChild(videoWrapper);
    });
  }
  
  // Call the function to add videos when the page loads
  window.onload = addVideos;
  
  // Add event listener for search bar
  document.getElementById('searchBar').addEventListener('keyup', function(event) {
    const searchText = event.target.value.toLowerCase();
    const videos = document.querySelectorAll('.video-wrapper');
    videos.forEach(video => {
      const title = video.querySelector('h2').textContent.toLowerCase();
      if (title.includes(searchText)) {
        video.style.display = 'block';
      } else {
        video.style.display = 'none';
      }
    });
  });
  
  // Pagination
  let currentPage = 1;
  const videosPerPage = 4;
  const totalVideos = videos.length;
  const totalPages = Math.ceil(totalVideos / videosPerPage);
  
  function showVideos(page) {
    const startIndex = (page - 1) * videosPerPage;
    const endIndex = startIndex + videosPerPage;
    videos.forEach((video, index) => {
      if (index >= startIndex && index < endIndex) {
        video.style.display = 'block';
      } else {
        video.style.display = 'none';
      }
    });
  }
  
  document.querySelector('.prevPageBtn').addEventListener('click', function() {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
      showVideos(currentPage);
    }
  });
  
  document.querySelector('.nextPageBtn').addEventListener('click', function() {
    if (currentPage < totalPages) {
      currentPage++;
      updatePagination();
      showVideos(currentPage);
    }
  });
  
  function updatePagination() {
    document.querySelector('.currentPage').textContent = `Page ${currentPage}`;
  }
  
  // Initially show videos for the first page
  showVideos(currentPage);
  
  // Subscribe button functionality
  document.getElementById('subscribeBtn').addEventListener('click', function() {
    alert('Subscribed!');
  });
  
  // Channel settings dropdown
  document.getElementById('settingsBtn').addEventListener('click', function() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display === 'block' ? dropdownContent.style.display = 'none' : dropdownContent.style.display = 'block';
  });
  