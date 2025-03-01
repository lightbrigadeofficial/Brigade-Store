// Initialize an empty cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add item to the cart
function addToCart(name, price) {
    const item = { name, price, quantity: 1 };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + " added to cart");
}

// Display cart items on the cart page
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <p>${item.name}</p>
                <p>${item.price} INR</p>
                <input type="number" value="${item.quantity}" class="quantity-box" onchange="updateQuantity(${index}, this.value)">
                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById('total-price').textContent = total + ' INR';
}

// Update quantity
function updateQuantity(index, quantity) {
    cart[index].quantity = parseInt(quantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Remove item from the cart
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Proceed to checkout
function proceedToCheckout() {
    window.location.href = 'checkout.html';
}

// Display cart items on the checkout page
function displayCheckout() {
    const checkoutItemsContainer = document.getElementById('checkout-items');
    checkoutItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        total += item.price * item.quantity;
        checkoutItemsContainer.innerHTML += `
            <div class="checkout-item">
                <p>${item.name}</p>
                <p>${item.price} INR</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
        `;
    });

    document.getElementById('final-price').textContent = total + ' INR';
}

// Confirm order (can be extended with email notifications)
// Confirm order function
function confirmOrder(){
    // Log the cart data to debug
    

    // Check if the cart is empty
    if (!cart || cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // If everything is valid, show a confirmation message
    alert('Your order has been placed! We will send the final invoice through EMAIL and SMS shortly.');

    // Clear the cart after confirming the order
    localStorage.removeItem('cart');
    
    // Redirect to the homepage (or a thank you page)
    window.location.href = 'BOOKS.html';
}

// Display cart on cart page
if (document.getElementById('cart-items')) {
    displayCart();
}

// Display checkout on checkout page
if (document.getElementById('checkout-items')) {
    displayCheckout();
}
// Function to append cart items to the form
function appendCartToForm() {
    const cartDataContainer = document.getElementById('cart-data-container');
    
    // Clear any existing hidden fields
    cartDataContainer.innerHTML = '';

    // Loop through the cart items and create hidden input fields
    cart.forEach((item, index) => {
        const itemNameInput = document.createElement('input');
        itemNameInput.type = 'hidden';
        itemNameInput.name = `item_${index}_name`;
        itemNameInput.value = item.name;

        const itemPriceInput = document.createElement('input');
        itemPriceInput.type = 'hidden';
        itemPriceInput.name = `item_${index}_price`;
        itemPriceInput.value = item.price;

        const itemQuantityInput = document.createElement('input');
        itemQuantityInput.type = 'hidden';
        itemQuantityInput.name = `item_${index}_quantity`;
        itemQuantityInput.value = item.quantity;

        // Append the hidden fields to the form container
        cartDataContainer.appendChild(itemNameInput);
        cartDataContainer.appendChild(itemPriceInput);
        cartDataContainer.appendChild(itemQuantityInput);
    });
}

// Call this function before form submission to add cart data
function confirmOrder() {
    // Append cart data to the form
    appendCartToForm();

    // Existing order confirmation logic
    if (!cart || cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    alert('Your order has been placed! We will send the final invoice through EMAIL and SMS shortly.');
    localStorage.removeItem('cart');
    window.location.href = 'BOOKS.html';
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
