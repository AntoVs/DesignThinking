import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

import products from "../../data/products";
import Nav from "../../components/Nav/Nav";

function Buy() {

    const navigate = useNavigate();

    const [category, setCategory] = useState("All Categories");
    const [condition, setCondition] = useState("All");
    const [maxPrice, setMaxPrice] = useState("");
    const [sortBy, setSortBy] = useState("Default");


    // =========================
    // FILTER PRODUCTS
    // =========================

    const filteredProducts = products
        .filter((product) => {

            const categoryMatch =
                category === "All Categories" ||
                product.category === category;

            const conditionMatch =
                condition === "All" ||
                product.condition === condition;

            const priceMatch =
                maxPrice === "" ||
                product.price <= Number(maxPrice);

            return (
                categoryMatch &&
                conditionMatch &&
                priceMatch
            );
        })
        .sort((a, b) => {

            if (sortBy === "Price: Low to High") {
                return a.price - b.price;
            }

            if (sortBy === "Price: High to Low") {
                return b.price - a.price;
            }

            return 0;
        });


    // =========================
    // CLEAR FILTERS
    // =========================

    const clearFilters = () => {

        setCategory("All Categories");
        setCondition("All");
        setMaxPrice("");
        setSortBy("Default");

    };


    return (
        <div className="products-page">

            {/* =========================
                NAVBAR
            ========================= */}

            <Nav />


            {/* =========================
                HERO
            ========================= */}

            <section className="products-hero">

                <h1>
                    Buy & Sell Within Rajagiri
                </h1>

                <p>
                    Find textbooks, gadgets, furniture,
                    sports gear and more from fellow students.
                </p>

            </section>


            {/* =========================
                MAIN CONTENT
            ========================= */}

            <main className="products-content">


                {/* =========================
                    FILTERS
                ========================= */}

                <aside className="filters">

                    <h3>
                        Filters
                    </h3>


                    {/* Category */}

                    <label>
                        Category
                    </label>

                    <select
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
                    >

                        <option>
                            All Categories
                        </option>

                        <option>
                            Electronics
                        </option>

                        <option>
                            Books
                        </option>

                        <option>
                            Cycles
                        </option>

                        <option>
                            Furniture
                        </option>

                        <option>
                            Sports
                        </option>

                        <option>
                            Hostel Essentials
                        </option>

                        <option>
                            Others
                        </option>

                    </select>


                    {/* Condition */}

                    <label>
                        Condition
                    </label>

                    <select
                        value={condition}
                        onChange={(e) =>
                            setCondition(e.target.value)
                        }
                    >

                        <option>
                            All
                        </option>

                        <option>
                            New
                        </option>

                        <option>
                            Used
                        </option>

                    </select>


                    {/* Maximum Price */}

                    <label>
                        Maximum Price (₹)
                    </label>

                    <input
                        type="number"
                        placeholder="Enter maximum price"
                        value={maxPrice}
                        onChange={(e) =>
                            setMaxPrice(e.target.value)
                        }
                    />


                    {/* Sort */}

                    <label>
                        Sort By
                    </label>

                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(e.target.value)
                        }
                    >

                        <option>
                            Default
                        </option>

                        <option>
                            Price: Low to High
                        </option>

                        <option>
                            Price: High to Low
                        </option>

                    </select>


                    {/* Apply */}

                    <button
                        className="apply-btn"
                    >
                        Apply Filters
                    </button>


                    {/* Clear */}

                    <button
                        className="clear-btn"
                        onClick={clearFilters}
                    >
                        Clear Filters
                    </button>

                </aside>


                {/* =========================
                    PRODUCT AREA
                ========================= */}

                <section className="product-area">


                    {/* Heading */}

                    <div className="product-heading">

                        <h2>
                            Latest Listings
                        </h2>

                        <span>
                            {filteredProducts.length} Products Found
                        </span>

                    </div>


                    {/* Product Grid */}

                    <div className="products-grid">

                        {filteredProducts.map((product) => (

                            <div
                                className="product-card"
                                key={product.id}
                            >


                                {/* Product Image */}

                                <div className="product-card-image">

                                    <img
                                        src={`/${product.image}`}
                                        alt={product.name}
                                    />

                                </div>


                                {/* Product Information */}

                                <div className="product-card-info">

                                    <h3>
                                        {product.name}
                                    </h3>


                                    <p className="product-price">
                                        ₹{product.price}
                                    </p>


                                    <span className="condition">
                                        {product.condition}
                                    </span>


                                    <p className="seller">
                                        👤 {product.seller}
                                    </p>


                                    <p className="location">
                                        📍 {product.location}
                                    </p>


                                    <p className="posted">
                                        🕒 {product.posted}
                                    </p>


                                    {/* View Details */}

                                    <button
                                        className="view-details-btn"
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

                    {filteredProducts.length === 0 && (

                        <div className="no-products">

                            <h3>
                                No products found
                            </h3>

                            <p>
                                Try changing your filters.
                            </p>

                        </div>

                    )}

                </section>

            </main>


            {/* =========================
                FOOTER
            ========================= */}

            <footer className="products-footer">


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

export default Buy;