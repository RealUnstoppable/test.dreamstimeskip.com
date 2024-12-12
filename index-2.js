const body = document.querySelector('body');

// Check if the user has a preferred color scheme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
}

// Listen for changes in the user's preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});