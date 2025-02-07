// script.js

document.addEventListener('DOMContentLoaded', function() {

    // Profile Section Toggle
    const profileLink = document.querySelector('.profile-link');
    const profileSection = document.getElementById('profile');
    const closeProfileButton = document.querySelector('.close-profile-button');

    if (profileLink && profileSection && closeProfileButton) { // Check if elements exist
      profileLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        profileSection.style.display = 'block';
      });

      closeProfileButton.addEventListener('click', function() {
        profileSection.style.display = 'none';
      });
    }


     // Auto-play videos on scroll (and pause when out of view)
    const videos = document.querySelectorAll('.video-container video');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play().catch(error => {
                   //Handle autoplay errors (common in modern browsers)
                   if (error.name === "NotAllowedError") {
                      console.log("Autoplay not allowed until user interaction.");
                      // You could add a play button overlay here.
                    } else{
                       console.error("Video playback error:", error);
                    }
                });
            } else {
                entry.target.pause();
            }
        });
    }, { threshold: 0.5 }); // Play when 50% of the video is visible


    videos.forEach(video => {
        observer.observe(video);
    });

      //--- Like button (example - you'll need to integrate with a backend)
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
      button.addEventListener('click', function() {
        // 1. Update the like count visually (simple client-side change)
        const countElement = this.querySelector('.like-count'); // Corrected: Use querySelector on the button itself.  And use a *class*
        if (countElement) { //  Important: Check if the element exists.
            let currentCount = parseInt(countElement.textContent, 10);
            currentCount++;
            countElement.textContent = currentCount;


            // 2. Send a request to the server (AJAX)
            //    (This part is *crucial* and requires server-side code)
            fetch('/like-post', {  // Replace '/like-post' with your actual endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add CSRF token if your backend requires it
                    // 'X-CSRF-Token': getCSRFToken()  // You'd need a function to get the token
                },
                body: JSON.stringify({
                    postId: this.dataset.postId // Get post ID from data attribute.  VERY IMPORTANT
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json(); //  Parse the JSON response
            })
            .then(data => {
                // Handle the server's response (e.g., update UI if needed)
                console.log('Like successful:', data);
                //  You might update the like count *again* here, if the server sends back the
                //  updated count.  This is more reliable than the client-side only increment.
                if (data.likeCount !== undefined) { // Check for a likeCount property in the response.
                     countElement.textContent = data.likeCount;
                }

            })
            .catch(error => {
                console.error('Error liking post:', error);
                // Handle errors:  Maybe show an error message to the user.
                //  IMPORTANT:  Decrement the like count back, since the like failed.
                countElement.textContent = --currentCount; // revert
            });

          }

        });
    });
});