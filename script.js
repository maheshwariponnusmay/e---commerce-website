// Toggle Mobile Menu
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// Cart Functionality
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, price) {
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " added to cart!");
}

// Show cart items on cart page
function loadCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  if (cartItems) {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price;
      cartItems.innerHTML += `
        <div class="cart-item">
          <span>${item.product}</span>
          <span>$${item.price}</span>
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      `;
    });
    cartTotal.innerText = "Total: $" + total;
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// Load cart automatically on cart.html
window.onload = loadCart;
