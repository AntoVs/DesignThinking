import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sell.css";

function Sell() {

    const navigate = useNavigate();

    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("Electronics");
    const [price, setPrice] = useState("");
    const [condition, setCondition] = useState("Used");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);


    // =========================
    // PUBLISH LISTING
    // =========================

    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            !productName.trim() ||
            !price ||
            !location.trim()
        ) {
            alert("Please fill in all required fields.");
            return;
        }

        // Prototype only
        alert(
            `${productName} has been published successfully!`
        );

        navigate("/account");
    };


    // =========================
    // IMAGE
    // =========================

    const handleImageChange = (e) => {

        const selectedImage =
            e.target.files[0];

        if (selectedImage) {
            setImage(selectedImage);
        }
    };


    return (
        <div className="sell-page">


            {/* =========================
                HEADER
            ========================= */}

            <header className="sell-header">

                <div>
                    <h1>
                        Sell an Item
                    </h1>

                    <p>
                        List your item for fellow Rajagiri students
                    </p>
                </div>


                <button
                    className="back-btn"
                    onClick={() => navigate("/account")}
                >
                    ← Back
                </button>

            </header>


            {/* =========================
                MAIN CONTENT
            ========================= */}

            <main className="sell-content">


                {/* =========================
                    FORM
                ========================= */}

                <form
                    className="sell-form"
                    onSubmit={handleSubmit}
                >


                    {/* Product Name */}

                    <div className="sell-form-group">

                        <label htmlFor="productName">
                            Product Name
                        </label>

                        <input
                            id="productName"
                            type="text"
                            placeholder="Enter product name"
                            value={productName}
                            onChange={(e) =>
                                setProductName(
                                    e.target.value
                                )
                            }
                            required
                        />

                    </div>


                    {/* Category */}

                    <div className="sell-form-group">

                        <label htmlFor="category">
                            Category
                        </label>

                        <select
                            id="category"
                            value={category}
                            onChange={(e) =>
                                setCategory(
                                    e.target.value
                                )
                            }
                        >

                            <option>
                                Books
                            </option>

                            <option>
                                Electronics
                            </option>

                            <option>
                                Furniture
                            </option>

                            <option>
                                Cycles
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

                    </div>


                    {/* Price */}

                    <div className="sell-form-group">

                        <label htmlFor="price">
                            Price
                        </label>


                        <div className="price-input">

                            <span className="currency-symbol">
                                ₹
                            </span>

                            <input
                                id="price"
                                type="number"
                                min="0"
                                placeholder="Enter price"
                                value={price}
                                onChange={(e) =>
                                    setPrice(
                                        e.target.value
                                    )
                                }
                                required
                            />

                        </div>

                    </div>


                    {/* Condition */}

                    <div className="sell-form-group">

                        <label htmlFor="condition">
                            Condition
                        </label>

                        <select
                            id="condition"
                            value={condition}
                            onChange={(e) =>
                                setCondition(
                                    e.target.value
                                )
                            }
                        >

                            <option>
                                Used
                            </option>

                            <option>
                                Like New
                            </option>

                            <option>
                                Good
                            </option>

                            <option>
                                Fair
                            </option>

                            <option>
                                New
                            </option>

                        </select>

                    </div>


                    {/* Location */}

                    <div className="sell-form-group">

                        <label htmlFor="location">
                            Location
                        </label>

                        <input
                            id="location"
                            type="text"
                            placeholder="Example: Boys Hostel"
                            value={location}
                            onChange={(e) =>
                                setLocation(
                                    e.target.value
                                )
                            }
                            required
                        />

                    </div>


                    {/* Description */}

                    <div className="sell-form-group">

                        <label htmlFor="description">
                            Description
                        </label>

                        <textarea
                            id="description"
                            placeholder="Describe your item..."
                            value={description}
                            onChange={(e) =>
                                setDescription(
                                    e.target.value
                                )
                            }
                        />

                    </div>


                    {/* Product Image */}

                    <div className="sell-form-group">

                        <label htmlFor="image">
                            Product Image
                        </label>


                        <div className="image-upload">

                            <input
                                id="image"
                                type="file"
                                accept="image/*"
                                onChange={
                                    handleImageChange
                                }
                            />

                        </div>

                    </div>


                    {/* Buttons */}

                    <div className="sell-buttons">

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={() =>
                                navigate("/account")
                            }
                        >
                            Cancel
                        </button>


                        <button
                            type="submit"
                            className="publish-btn"
                        >
                            Publish Listing
                        </button>

                    </div>

                </form>


                {/* =========================
                    SELLING TIPS
                ========================= */}

                <aside className="sell-tips">

                    <h2>
                        Before you sell
                    </h2>


                    <div className="tip">

                        <h3>
                            Use a clear title
                        </h3>

                        <p>
                            Make it easy for students
                            to understand what you're selling.
                        </p>

                    </div>


                    <div className="tip">

                        <h3>
                            Set a fair price
                        </h3>

                        <p>
                            Check similar items before
                            deciding your price.
                        </p>

                    </div>


                    <div className="tip">

                        <h3>
                            Add a good description
                        </h3>

                        <p>
                            Mention important details
                            about the item's condition.
                        </p>

                    </div>


                    <div className="tip">

                        <h3>
                            Choose a convenient location
                        </h3>

                        <p>
                            Let buyers know where they
                            can meet you on campus.
                        </p>

                    </div>

                </aside>

            </main>

        </div>
    );
}

export default Sell;