// ===============================
// OCTAVARO PRODUCT DATA
// ===============================

const products = [

    {
        id: 1,
        name: "Noir Élégance",
        category: "perfume",
        price: 2499,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601",
        description: "A sophisticated fragrance with warm and elegant notes for a confident and unforgettable impression."
    },

    {
        id: 2,
        name: "Golden Essence",
        category: "perfume",
        price: 2999,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f",
        description: "A luxurious fragrance combining sweet and warm notes for a refined everyday scent."
    },

    {
        id: 3,
        name: "Octavaro Signature Bag",
        category: "bag",
        price: 4599,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
        description: "A stylish everyday bag with an elegant design and practical space for your essentials."
    },

    {
        id: 4,
        name: "Classic Leather Bag",
        category: "bag",
        price: 3999,
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c",
        description: "A timeless bag inspired by classic luxury fashion and designed for everyday use."
    },

    {
        id: 5,
        name: "Midnight Suit",
        category: "clothes",
        price: 5999,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35",
        description: "A refined formal suit designed for elegant occasions and confident appearances."
    },

    {
        id: 6,
        name: "Golden Evening Dress",
        category: "clothes",
        price: 6999,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
        description: "An elegant evening dress created to make every special occasion memorable."
    },

    {
        id: 7,
        name: "Octavaro Beauty Kit",
        category: "cosmetics",
        price: 1999,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
        description: "A beauty collection containing carefully selected essentials for your daily routine."
    },

    {
        id: 8,
        name: "Velvet Lip Collection",
        category: "cosmetics",
        price: 1499,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
        description: "A collection of rich and elegant shades designed for a beautiful finishing touch."
    }

];


// ===============================
// VARIABLES
// ===============================

let selectedProduct = null;
let selectedRating = 0;


// ===============================
// DISPLAY PRODUCTS
// ===============================

function displayProducts(category = "all") {

    const productGrid = document.getElementById("productGrid");

    if (!productGrid) {
        console.error("productGrid was not found.");
        return;
    }

    productGrid.innerHTML = "";

    let filteredProducts;

    if (category === "all") {

        filteredProducts = products;

    } else {

        filteredProducts = products.filter(function(product) {

            return product.category === category;

        });

    }


    filteredProducts.forEach(function(product) {

        const card = document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="product-info">

                <small>
                    ${product.category.toUpperCase()}
                </small>

                <h3>
                    ${product.name}
                </h3>

                <div class="product-price">
                    ₱${product.price.toLocaleString()}
                </div>

            </div>
        `;


        card.addEventListener("click", function() {

            openProduct(product.id);

        });


        productGrid.appendChild(card);

    });

}


// ===============================
// CATEGORY FILTER
// ===============================

function showCategory(category, button) {

    const buttons =
        document.querySelectorAll(".category-btn");


    buttons.forEach(function(btn) {

        btn.classList.remove("active");

    });


    if (button) {

        button.classList.add("active");

    }


    displayProducts(category);

}


// ===============================
// OPEN PRODUCT
// ===============================

function openProduct(id) {

    selectedProduct = products.find(function(product) {

        return product.id === id;

    });


    if (!selectedProduct) {

        console.error("Product not found.");

        return;

    }


    const modalImage =
        document.getElementById("modalImage");

    const modalCategory =
        document.getElementById("modalCategory");

    const modalName =
        document.getElementById("modalName");

    const modalPrice =
        document.getElementById("modalPrice");

    const modalDescription =
        document.getElementById("modalDescription");

    const productModal =
        document.getElementById("productModal");


    modalImage.src =
        selectedProduct.image;

    modalImage.alt =
        selectedProduct.name;


    modalCategory.textContent =
        selectedProduct.category.toUpperCase();


    modalName.textContent =
        selectedProduct.name;


    modalPrice.textContent =
        "₱" +
        selectedProduct.price.toLocaleString();


    modalDescription.textContent =
        selectedProduct.description;


    productModal.classList.add("show");

}


// ===============================
// CLOSE PRODUCT MODAL
// ===============================

function closeModal() {

    const productModal =
        document.getElementById("productModal");


    if (productModal) {

        productModal.classList.remove("show");

    }

}


// ===============================
// OPEN ORDER
// ===============================

function openOrder() {

    if (!selectedProduct) {

        alert("Please select a product first.");

        return;

    }


    const orderProduct =
        document.getElementById("orderProduct");


    orderProduct.textContent =
        selectedProduct.name +
        " — ₱" +
        selectedProduct.price.toLocaleString();


    closeModal();


    const orderModal =
        document.getElementById("orderModal");


    orderModal.classList.add("show");

}


// ===============================
// CLOSE ORDER
// ===============================

function closeOrder() {

    const orderModal =
        document.getElementById("orderModal");


    if (orderModal) {

        orderModal.classList.remove("show");

    }

}


// ===============================
// PLACE ORDER
// ===============================

function placeOrder(event) {

    event.preventDefault();


    if (!selectedProduct) {

        alert("Please select a product.");

        return;

    }


    const name =
        document.getElementById("customerName").value;

    const email =
        document.getElementById("customerEmail").value;

    const phone =
        document.getElementById("customerPhone").value;

    const address =
        document.getElementById("customerAddress").value;

    const payment =
        document.getElementById("paymentMethod").value;

    const quantity =
        Number(
            document.getElementById("quantity").value
        );


    const total =
        selectedProduct.price * quantity;


    alert(
        "OCTAVARO ORDER RECEIVED!\n\n" +

        "Customer: " +
        name +
        "\n" +

        "Email: " +
        email +
        "\n" +

        "Phone: " +
        phone +
        "\n\n" +

        "Product: " +
        selectedProduct.name +
        "\n" +

        "Quantity: " +
        quantity +
        "\n" +

        "Total: ₱" +
        total.toLocaleString() +
        "\n" +

        "Payment: " +
        payment +
        "\n\n" +

        "Delivery Address:\n" +
        address +
        "\n\n" +

        "Thank you for shopping with Octavaro!"
    );


    const form =
        document.querySelector(".order-content form");


    if (form) {

        form.reset();

    }


    closeOrder();

}


// ===============================
// STAR RATING
// ===============================

function selectRating(rating) {

    selectedRating = rating;


    const stars =
        document.querySelectorAll(
            "#starContainer span"
        );


    stars.forEach(function(star, index) {

        if (index < rating) {

            star.classList.add("selected");

        } else {

            star.classList.remove("selected");

        }

    });

}


// ===============================
// SUBMIT REVIEW
// ===============================

function submitReview() {

    const name =
        document
            .getElementById("reviewName")
            .value
            .trim();


    const comment =
        document
            .getElementById("reviewText")
            .value
            .trim();


    if (name === "") {

        alert("Please enter your name.");

        return;

    }


    if (selectedRating === 0) {

        alert("Please select a star rating.");

        return;

    }


    if (comment === "") {

        alert("Please write your experience.");

        return;

    }


    const review = {

        name: name,

        rating: selectedRating,

        comment: comment

    };


    let reviews =
        JSON.parse(
            localStorage.getItem("octavaroReviews")
        ) || [];


    reviews.push(review);


    localStorage.setItem(
        "octavaroReviews",
        JSON.stringify(reviews)
    );


    document.getElementById("reviewName").value = "";

    document.getElementById("reviewText").value = "";


    selectRating(0);


    loadReviews();


    alert(
        "Thank you for sharing your experience with Octavaro!"
    );

}


// ===============================
// LOAD REVIEWS
// ===============================

function loadReviews() {

    const container =
        document.getElementById("reviewsContainer");


    if (!container) {

        return;

    }


    let reviews =
        JSON.parse(
            localStorage.getItem("octavaroReviews")
        ) || [];


    container.innerHTML = "";


    reviews
        .slice()
        .reverse()
        .forEach(function(review) {


            const reviewElement =
                document.createElement("div");


            reviewElement.className =
                "review";


            const stars =
                "★".repeat(review.rating) +
                "☆".repeat(5 - review.rating);


            reviewElement.innerHTML = `

                <div class="review-name">
                    ${escapeHTML(review.name)}
                </div>

                <div class="review-stars">
                    ${stars}
                </div>

                <p>
                    ${escapeHTML(review.comment)}
                </p>

            `;


            container.appendChild(reviewElement);

        });

}


// ===============================
// PROTECT REVIEWS FROM HTML CODE
// ===============================

function escapeHTML(text) {

    const div =
        document.createElement("div");


    div.textContent = text;


    return div.innerHTML;

}


// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    const navbar =
        document.querySelector(".navbar");


    if (navbar) {

        navbar.classList.toggle("show");

    }

}


// ===============================
// GO TO RATING SECTION
// ===============================

function goToRating() {

    const ratings =
        document.getElementById("ratings");


    if (ratings) {

        ratings.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ===============================
// CLOSE MODALS BY CLICKING OUTSIDE
// ===============================

window.addEventListener("click", function(event) {

    const productModal =
        document.getElementById("productModal");

    const orderModal =
        document.getElementById("orderModal");


    if (event.target === productModal) {

        closeModal();

    }


    if (event.target === orderModal) {

        closeOrder();

    }

});


// ===============================
// START OCTAVARO WEBSITE
// ===============================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayProducts();

        loadReviews();

    }
);