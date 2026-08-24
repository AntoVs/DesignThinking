import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import products from "../../data/products";
import Nav from "../../components/Nav/Nav";

function Home() {

    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");


    const categories = [
        "All",
        "Books",
        "Electronics",
        "Furniture",
        "Cycles",
        "Sports",
        "Hostel Essentials",
        "Others"
    ];


    // =========================
    // FILTER PRODUCTS
    // =========================

    const filteredProducts = products.filter((product) => {

        const categoryMatch =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const searchMatch =
            product.name
                .toLowerCase()
                .includes(search.toLowerCase());

        return categoryMatch && searchMatch;
    });


    // Show only 6 products on home
    const latestProducts = filteredProducts.slice(0, 6);


    return (
        <div className="home-page">


            {/* =========================
                NAVBAR
            ========================= */}

            <Nav />


            {/* =========================
                CATEGORY BAR
            ========================= */}

            <div className="category-bar">

                {categories.map((category) => (

                    <button
                        key={category}
                        className={
                            selectedCategory === category
                                ? "category-btn active"
                                : "category-btn"
                        }
                        onClick={() =>
                            setSelectedCategory(category)
                        }
                    >
                        {category}
                    </button>

                ))}

            </div>


            {/* =========================
                HERO
            ========================= */}

            <section className="home-hero">

                <div>

                    <h2>
                        Find What You Need
                    </h2>

                    <p>
                        Buy useful products from fellow
                        Rajagiri students at student-friendly prices.
                    </p>


                    <button
                        onClick={() => navigate("/buy")}
                    >
                        Browse Marketplace
                    </button>

                </div>

            </section>


            {/* =========================
                LATEST LISTINGS
            ========================= */}

            <main className="home-content">

                <div className="section-heading">

                    <div>

                        <h2>
                            Latest Listings
                        </h2>

                        <p>
                            Recently added items from the Rajagiri community
                        </p>

                    </div>


                    <button
                        className="view-all-btn"
                        onClick={() => navigate("/buy")}
                    >
                        View All
                    </button>

                </div>


                {/* =========================
                    PRODUCTS
                ========================= */}

                <div className="home-products">

                    {latestProducts.map((product) => (

                        <div
                            className="home-product-card"
                            key={product.id}
                        >


                            {/* Image */}

                            <div className="home-product-image">

                                <img
                                    src={`/${product.image}`}
                                    alt={product.name}
                                />

                            </div>


                            {/* Information */}

                            <div className="home-product-info">

                                <h3>
                                    {product.name}
                                </h3>


                                <p className="home-price">
                                    ₹{product.price}
                                </p>


                                <span className="home-condition">
                                    {product.condition}
                                </span>


                                <p className="home-location">
                                    📍 {product.location}
                                </p>


                                <button
                                    className="home-details-btn"
                                    onClick={() =>
                                        navigate(
                                            `/product/${product.id}`
                                        )
                                    }
                                >
                                    View Details
                                </button>

                            </div>

                        </div>

                    ))}

                </div>


                {/* =========================
                    NO RESULTS
                ========================= */}

                {latestProducts.length === 0 && (

                    <div className="no-products">

                        <h3>
                            No products found
                        </h3>

                        <p>
                            Try another search or category.
                        </p>

                    </div>

                )}

            </main>


            {/* =========================
                FOOTER
            ========================= */}

            <footer className="home-footer">


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

export default Home;