export const cart = [];

export function addToCart(item) {
    cart.push(item);
    updateCartUI();
}

function updateCartUI() {
    const cartContainer = document.getElementById("cart");
    if (!cartContainer) return;

    cartContainer.innerHTML = ""; // Clear the cart display
    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.innerHTML = `<p>${item} <button data-index="${index}" class="remove-btn">Remove</button></p>`;
        cartContainer.appendChild(div);
    });

    // Add remove functionality
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", () => {
            cart.splice(button.dataset.index, 1);
            updateCartUI();
        });
    });
}

export function renderProducts(cards, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    cards.forEach((item) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.alt}">
            <h3>${item.title}</h3>
            <p>Rating: ${item.rating}</p>
            <p>Price: ${item.price}</p>
            <button class="order-btn" data-title="${item.title}">Order Now</button>
        `;
        container.appendChild(div);
    });

    document.querySelectorAll(".order-btn").forEach(button => {
        button.addEventListener("click", () => addToCart(button.dataset.title));
    });
}
