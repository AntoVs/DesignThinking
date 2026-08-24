import React from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css";

import products from "../../data/products";
import Nav from "../../components/Nav/Nav";

function Account() {

    const navigate = useNavigate();


    // =========================
    // PURCHASE HISTORY
    // =========================

    const purchaseHistory = products.filter(
        (product) =>
            product.id === 1 ||
            product.id === 3
    );


    // =========================
    // SELLING HISTORY
    // =========================

    const sellingHistory = products.filter(
        (product) =>
            product.id === 4 ||
            product.id === 23 ||
            product.id === 6
    );


    return (
        <div className="account-page">


            {/* =========================
                NAVBAR
            ========================= */}

            <Nav simple />


            {/* =========================
                PROFILE
            ========================= */}

            <div className="profile-area">

                <div className="profile-box">
                    A
                </div>


                <button
                    className="edit-profile"
                    onClick={() =>
                        navigate("/edit-profile")
                    }
                >
                    Edit Profile
                </button>

            </div>


            {/* =========================
                PURCHASE HISTORY
            ========================= */}

            <section className="history-section">

                <h2>
                    Purchase History
                </h2>


                <div className="product-history">

                    {purchaseHistory.map((product) => (

                        <div
                            className="history-card"
                            key={product.id}
                        >

                            <img
                                src={`/${product.image}`}
                                alt={product.name}
                            />


                            <div className="history-info">

                                <h3>
                                    {product.name}
                                </h3>

                                <p>
                                    ₹{product.price}
                                </p>

                                <span>
                                    {product.condition}
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </section>


            {/* =========================
                SELLING HISTORY
            ========================= */}

            <section className="history-section">

                <div className="selling-title">

                    <h2>
                        Selling History
                    </h2>


                    <button
                        className="add-product"
                        onClick={() =>
                            navigate("/sell")
                        }
                        title="Sell a product"
                    >
                        +
                    </button>

                </div>


                <div className="product-history">

                    {sellingHistory.map((product) => (

                        <div
                            className="history-card"
                            key={product.id}
                        >

                            <img
                                src={`/${product.image}`}
                                alt={product.name}
                            />


                            <div className="history-info">

                                <h3>
                                    {product.name}
                                </h3>

                                <p>
                                    ₹{product.price}
                                </p>

                                <span>
                                    {product.condition}
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </section>


        </div>
    );
}

export default Account;