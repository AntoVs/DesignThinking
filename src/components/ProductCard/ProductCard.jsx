import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const handleWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };

    const handleDetails = () => {
        alert(
            `${product.name}\n\n` +
            `Price: $${product.price}\n` +
            `Condition: ${product.condition}\n` +
            `Seller: ${product.seller}\n` +
            `Location: ${product.location}`
        );
    };

    return (
        <div className="card">

            <button
                className={`wishlist ${isWishlisted ? "active" : ""}`}
                onClick={handleWishlist}
            >
                {isWishlisted ? "♥" : "♡"}
            </button>

            <img
                src={product.image}
                alt={product.name}
                onError={(e) => {
                    e.target.src =
                        "/images/products/placeholder.jpg";
                }}
            />

            <div className="card-content">

                <h3>{product.name}</h3>

                <div className="price">
                    ${product.price}
                </div>

                <span className="condition">
                    {product.condition}
                </span>

                <div className="category">
                    {product.category}
                </div>

                <div className="seller">
                    👤 {product.seller}
                </div>

                <div className="location">
                    📍 {product.location}
                </div>

                <div className="posted">
                    {product.posted}
                </div>

                <button
                    className="details-btn"
                    onClick={handleDetails}
                >
                    View Details
                </button>

            </div>

        </div>
    );
}

export default ProductCard;