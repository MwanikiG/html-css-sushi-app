document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceContainer = document.getElementById("total-price");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty!</p>";
        totalPriceContainer.textContent = "";
        return;
    }

    let total = 0;
    cart.forEach((item, index) => {
        let div = document.createElement("div");
        div.innerHTML = `
            <p>${item.name} - ${item.quantity} x $${item.price}</p>
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(div);
        total += item.quantity * item.price;
    });

    totalPriceContainer.textContent = `Total: $${total.toFixed(2)}`;
});

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}
