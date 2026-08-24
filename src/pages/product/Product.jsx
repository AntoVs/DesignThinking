import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Product.css";

import products from "../../data/products";
import Nav from "../../components/Nav/Nav";

function Product() {

    const navigate = useNavigate();

    const { id } = useParams();

    // Find the selected product
    // Works whether product.id is a number or string
    const product = products.find(
        (item) => String(item.id) === String(id)
    );


    // =========================
    // PRODUCT NOT FOUND
    // =========================

    if (!product) {

        return (
            <div className="product-page">

                <Nav />

                <main className="product-not-found">

                    <h2>
                        Product Not Found
                    </h2>

                    <p>
                        The product you are looking for does not exist.
                    </p>

                    <button
                        onClick={() => navigate("/products")}
                    >
                        Back to Products
                    </button>

                </main>

            </div>
        );
    }


    return (
        <div className="product-page">

            {/* =========================
                NAVBAR
            ========================= */}

            <Nav simple/>


            {/* =========================
                PRODUCT DETAILS
            ========================= */}

            <main className="product-details-container">

                <div className="product-details-card">


                    {/* =========================
                        PRODUCT IMAGE
                    ========================= */}

                    <div className="product-details-image">

                        <img
                            src={`/${product.image}`}
                            alt={product.name}
                        />

                    </div>


                    {/* =========================
                        PRODUCT INFORMATION
                    ========================= */}

                    <div className="product-details-info">


                        {/* Category */}

                        <span className="product-category">
                            {product.category}
                        </span>


                        {/* Product Name */}

                        <h1>
                            {product.name}
                        </h1>


                        {/* Price */}

                        <p className="product-details-price">
                            ₹{product.price}
                        </p>


                        {/* Condition */}

                        <span className="product-details-condition">
                            {product.condition}
                        </span>


                        {/* =========================
                            SELLER INFORMATION
                        ========================= */}

                        <div className="product-meta">

                            <p>
                                👤 Seller: {product.seller}
                            </p>

                            <p>
                                📍 Location: {product.location}
                            </p>

                            <p>
                                🕒 Posted: {product.posted}
                            </p>

                        </div>


                        {/* =========================
                            DESCRIPTION
                        ========================= */}

                        <div className="product-description">

                            <h3>
                                Description
                            </h3>

                            <p>
                                {product.description ||
                                    "No description available for this product."}
                            </p>

                        </div>


                        {/* =========================
                            CHAT BUTTON
                        ========================= */}

                        <div className="product-actions">

                            <button
                                className="chat-btn"
                                onClick={() =>
                                    navigate(
                                        `/chat/${product.id}`
                                    )
                                }
                            >
                                Chat
                            </button>

                        </div>


                        {/* =========================
                            BACK TO PRODUCTS
                        ========================= */}

                        <button
                            className="back-products-btn"
                            onClick={() =>
                                navigate("/products")
                            }
                        >
                            ← Back to Products
                        </button>

                    </div>

                </div>

            </main>


            {/* =========================
                FOOTER
            ========================= */}

            <footer className="product-footer">

                <div>

                    <h3>
                        Spot.
                    </h3>

                    <p>
                        Rajagiri Student Marketplace
                    </p>

                </div>


                <div>

                    <h4>
                        Categories
                    </h4>

                    <p>
                        Books
                    </p>

                    <p>
                        Electronics
                    </p>

                    <p>
                        Furniture
                    </p>

                    <p>
                        Sports
                    </p>

                </div>


                <div>

                    <h4>
                        Support
                    </h4>

                    <p>
                        Help
                    </p>

                    <p>
                        Contact
                    </p>

                    <p>
                        Privacy
                    </p>

                </div>

            </footer>

        </div>
    );
}

export default Product;