// Select the search bar input element
const searchBar = document.getElementById('search-bar');

// Add an event listener for the 'keypress' event
searchBar.addEventListener('keypress', (event) => {
    // Check if the pressed key is 'Enter'
    if (event.key === 'Enter') {
        // Get the value entered in the search bar
        const query = searchBar.value.trim();

        // Redirect to a new page with the query as a parameter (if not empty)
        if (query) {
            window.location.href = `newpage.html?search=${encodeURIComponent(query)}`;
        } else {
            alert('Please enter a search query before hitting Enter.');
        }
    }
});
