// Data structure for food categories and restaurants
const foodCategories = {
    // (your existing data)
};

// Function to extract query parameters from the URL
function getQueryParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Get the category from the URL
const category = getQueryParameter('category');

if (category && foodCategories[category]) {
    document.getElementById('category-title').textContent = `Restaurants offering ${category}`;
    const listElement = document.getElementById('restaurant-list');
    foodCategories[category].forEach(restaurant => {
        const listItem = document.createElement('li');
        listItem.textContent = restaurant;
        listElement.appendChild(listItem);
    });
} else {
    document.body.innerHTML = '<h1>No results found. Please go back and try again.</h1>';
}
