// Select the search bar input element
const searchBar = document.getElementById('search-bar');

// Data structure for food categories and restaurants
const foodCategories = {
    "Chips": ["Lazy Dog", "Dos Amigos Mexican Restaurant", "Austin's Restaurant"],
    "French Fries": ["Lazy Dog", "SLYCE Coal Fired Pizza Company", "The Mixto Cuisine", "Austin's Restaurant"],
    "Tater Tots": ["Lazy Dog", "Feather Glass Wine Bar & Eatery"],
    "Biscuits": ["Lazy Dog", "Mambo Italiano"],
    "Mozzarella Sticks": ["Wick N Ore", "Tangled Roots", "Mambo Italiano"],
    "Egg Rolls": ["Wick N Ore", "Feather Glass Wine Bar & Eatery"],
    "Pretzel Bites": ["Wick N Ore", "City Works", "Feather Glass Wine Bar & Eatery"],
    "Cheese Curds": ["Lazy Dog", "City Works", "SLYCE Coal Fired Pizza Company", "Mickey Finn's"],
    "Seafood Stuffed Mushrooms": ["Perry's Steakhouse & Grille"],
    "Soup": ["Lazy Dog", "Wick N Ore", "Tangled Roots", "Feather Glass Wine Bar & Eatery", "Mambo Italiano", "Mickey Finn's", "Main Street Social", "Austin's Restaurant"],
    "Salad": ["Lazy Dog", "City Works", "Wick N Ore", "Tangled Roots", "No Manches", "Feather Glass Wine Bar & Eatery", "SLYCE Coal Fired Pizza Company", "Crisp & Green", "The Mixto Cuisine", "Mickey Finn's", "Main Street Social", "Eddie Merlot's", "Austin's Restaurant"],
    "Chicken Sandwich": ["Lazy Dog", "City Works", "Tangled Roots", "Feather Glass Wine Bar & Eatery", "The Mixto Cuisine", "Mickey Finn's", "Austin's Restaurant"],
    "Cuban Sandwich": ["Lazy Dog", "SLYCE Coal Fired Pizza Company", "The Mixto Cuisine", "Austin's Restaurant"],
    "Pulled Pork Sandwich": ["Lazy Dog", "City Works", "Tangled Roots", "Mambo Italiano", "Mickey Finn's", "Austin's Restaurant"],
    "Grilled Cheese": ["Lazy Dog", "City Works", "Tangled Roots", "Feather Glass Wine Bar & Eatery", "Mickey Finn's", "Austin's Restaurant"],
    "Club Sandwich": ["Lazy Dog", "SLYCE Coal Fired Pizza Company", "Mickey Finn's", "Austin's Restaurant"],
    "Tortas": ["No Manches", "La Mera Mera", "Dos Amigos Mexican Restaurant"],
    "Burger": ["Lazy Dog", "Wick N Ore", "City Works", "Tangled Roots", "SLYCE Coal Fired Pizza Company", "The Mixto Cuisine", "Mickey Finn's", "Main Street Social", "Austin's Restaurant"],
    "Pizza": ["Wick N Ore", "City Works", "Tangled Roots", "SLYCE Coal Fired Pizza Company", "Mickey Finn's", "Main Street Social", "Austin's Restaurant"],
    "Ribs": ["Lazy Dog", "SLYCE Coal Fired Pizza Company", "Perry's Steakhouse & Grille", "The Mixto Cuisine", "Mickey Finn's", "Austin's Restaurant"],
    "Meatloaf": ["City Works", "Mambo Italiano", "Mickey Finn's", "Austin's Restaurant"],
    "Chicken Wings": ["Lazy Dog", "Wick N Ore", "Tangled Roots", "Mambo Italiano", "Mickey Finn's", "Austin's Restaurant"],
    "Fried Chicken": ["Lazy Dog", "City Works", "Wick N Ore", "Tangled Roots", "Feather Glass Wine Bar & Eatery", "Mickey Finn's", "Austin's Restaurant"],
    "Mac and Cheese": ["City Works", "SLYCE Coal Fired Pizza Company", "Mickey Finn's", "Austin's Restaurant"],
    "Pasta": ["Lazy Dog", "City Works", "Mambo Italiano", "The Mixto Cuisine", "Main Street Social", "Austin's Restaurant"],
    "Pot Pie": ["Lazy Dog", "Feather Glass Wine Bar & Eatery", "Mickey Finn's", "Austin's Restaurant"],
    "Casserole": ["Lazy Dog", "Mambo Italiano", "Mickey Finn's", "Austin's Restaurant"],
    "Fish and Chips": ["Lazy Dog", "City Works", "Tangled Roots", "Feather Glass Wine Bar & Eatery", "Mickey Finn's", "Austin's Restaurant"],
    "Steak": ["Lazy Dog", "Wick N Ore", "City Works", "Tangled Roots", "No Manches", "Mambo Italiano", "Perry's Steakhouse & Grille", "Eddie Merlot's", "Austin's Restaurant"],
    "Lamb Lollipops": ["Perry's Steakhouse & Grille", "Eddie Merlot's"],
    "Fajitas": ["Wick N Ore", "No Manches", "La Mera Mera", "Dos Amigos Mexican Restaurant", "Mickey Finn's", "Austin's Restaurant"],
    "Tacos": ["Lazy Dog", "Wick N Ore", "City Works", "No Manches", "La Mera Mera", "Dos Amigos Mexican Restaurant", "The Mixto Cuisine", "Mickey Finn's", "Austin's Restaurant"],
    "Cod": ["Tangled Roots", "Blufish Sushi Robata", "Mickey Finn's", "Austin's Restaurant"],
    "Salmon": ["Lazy Dog", "Wick N Ore", "City Works", "Tangled Roots", "Blufish Sushi Robata", "The Mixto Cuisine", "Mickey Finn's", "Eddie Merlot's", "Austin's Restaurant"],
    "Trout": ["Lazy Dog", "Blufish Sushi Robata", "Eddie Merlot's", "Austin's Restaurant"],
    "Tuna": ["Wick N Ore", "City Works", "Blufish Sushi Robata", "Eddie Merlot's", "Austin's Restaurant"],
    "Ceviche": ["No Manches", "Dos Amigos Mexican Restaurant", "The Mixto Cuisine", "Austin's Restaurant"],
    "Empanadas": ["No Manches", "Dos Amigos Mexican Restaurant", "The Mixto Cuisine", "Austin's Restaurant"],
    "Burritos": ["No Manches", "La Mera Mera", "Dos Amigos Mexican Restaurant", "The Mixto Cuisine", "Austin's Restaurant"]
};

// Add an event listener for the 'keypress' event
searchBar.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const query = searchBar.value.trim();
        if (foodCategories[query]) {
            // Redirect to 'page.html' with the query as a URL parameter
            const queryParam = encodeURIComponent(query);
            window.location.href = `page.html?category=${queryParam}`;
        } else {
            alert('No results found. Please enter a valid category.');
        }
    }
});
