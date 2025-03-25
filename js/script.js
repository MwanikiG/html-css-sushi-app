// import images as relative image path won't work with vite/vercel.
import { addToCart, renderProducts } from './order.js';
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import sushi12 from '../assets/sushi-12.png'
import sushi11 from '../assets/sushi-11.png'
import sushi10 from '../assets/sushi-10.png'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi'
];

const trendingDrinks = [
    "Oruncha",
    "Ofukucha",
    "Sakura Tea",
    "Kombu-cha",
    "Aojiru",
    "Mugicha",
]

const cards = [
    {
        imgSrc: sushi12,
        alt: "sushi-12",
        title: "Chezu Sushi",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: sushi11,
        alt: "sushi-11",
        title: "Originale Sushi",
        rating: "4.8",
        price: "$21.00",
        active: true
    },
    {
        imgSrc: sushi10,
        alt: "sushi-10",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const orderButton = document.getElementById("orderNow");
    const cartIcon = document.querySelector(".cart-icon"); // Replace with your cart UI trigger

    orderButton.addEventListener("click", function () {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

        if (cartItems.length === 0) {
            // Scroll to the menu section
            document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
        } else {
            // Open the cart UI
            cartIcon.click(); // Simulating a click to open cart
        }
    });
});

// Make the cart clickable

document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.querySelector(".cart-icon"); // Assuming .cart-icon is the class for your cart
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartIcon.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty! Browse the menu to add items.");
        } else {
            window.location.href = "checkout/checkout.js";
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    renderProducts(cards, "products");
});