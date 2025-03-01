const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", document.documentElement.scrollTop > 0);
});
const searchButton = document.getElementById('searchButton');
const searchBar = document.getElementById('searchBar');

if (searchButton && searchBar) {
    searchButton.addEventListener('click', () => {
        if (!searchBar.classList.contains('visible')) {
            searchBar.classList.add('visible');
            searchBar.classList.remove('hidden');
            searchBar.focus();
        } else {
            const query = searchBar.value.trim();
            if (query) {
                window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
            }
        }
    });
}


searchButton.addEventListener('click', () => {
    if (!searchBar.classList.contains('visible')) {
        searchBar.classList.add('visible');
        searchBar.classList.remove('hidden');
        searchBar.focus();
    } else {
        const query = searchBar.value.trim();
        if (query) {
            // Redirect to the results page with the query as a parameter
            window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
        }
    }
});
// Function to toggle the side panel
function toggleSidePanel() {
    const sidePanel = document.getElementById('side-panel');
    sidePanel.classList.toggle('open');
}



document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 768) {
        // Create the navigation bar dynamically
        const nav = document.createElement("nav");
        nav.className = "bottom-nav";
        nav.innerHTML = `
            <a href="#" id="backBtn"><i class="bx bx-arrow-back"></i> Back</a>
            <a href="index.html"><i class="bx bx-home"></i> Home</a>
            <a href="cart.html"><i class="bx bx-cart"></i> Cart</a>
            <a href="profile.html"><i class='bx bxs-store'></i> Shop</a>
        `;
        document.body.appendChild(nav);

        // Get back button
        const backBtn = document.getElementById("backBtn");

        // Check if there is history to go back
        if (document.referrer === "" || window.history.length <= 1) {
            backBtn.style.display = "none"; // Hide back button if no history
        } else {
            backBtn.addEventListener("click", function (event) {
                event.preventDefault();
                if (document.referrer.includes(window.location.hostname)) {
                    history.back(); // Go back if it's from the same website
                } else {
                    window.location.href = "index.html"; // Fallback to home page
                }
            });
        }
    }
});
