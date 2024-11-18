function navigateToDiscussions() {
    alert("Navigating to discussions...");
    // Replace with actual navigation logic
    window.location.href = "#"; // Add your discussions page URL or path here
}
function navigateToCategory(category) {
    alert(`Navigating to ${category} category...`);
    // Replace with actual navigation logic
    window.location.href = `#${category}`; // Update with your category URL or path
}
// If you want to add functionality to the "Join the discussion" buttons, you can modify it as needed
const trendingLinks = document.querySelectorAll('.trending-link');
trendingLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Redirecting to the discussion...');
        // Replace with the actual redirection logic for your forum discussions
        window.location.href = "#";  // Add the URL or path for the specific discussion
    });
});

document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission
    alert("Thank you for contacting us. We will get back to you soon!");
    
    // Optionally, you can reset the form after submission
    document.querySelector(".contact-form").reset();
});
