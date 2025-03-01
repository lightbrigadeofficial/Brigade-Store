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
