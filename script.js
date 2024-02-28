function toggleTheme() {
    var body = document.body;
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");

    // Toggle dark background for the entire body
    if (body.classList.contains("dark-mode")) {
        body.style.backgroundColor = "#000000"; // Dark background color
    } else {
        body.style.backgroundColor = ""; // Reset to default background color
    }
}
