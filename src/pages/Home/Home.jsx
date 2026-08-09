import { useState } from "react";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import Nav from "../../components/Nav/Nav";
import "./Home.css";

function Home() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [condition, setCondition] = useState("All");
    const [maxPrice, setMaxPrice] = useState("");
    const [sortBy, setSortBy] = useState("default");

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

    const filteredProducts = products
        .filter((product) => {
            const keyword = search.toLowerCase();

            const searchMatch =
                product.name.toLowerCase().includes(keyword) ||
                product.category.toLowerCase().includes(keyword) ||
                product.seller.toLowerCase().includes(keyword);

            const categoryMatch =
                category === "All" ||
                product.category === category;

            const conditionMatch =
                condition === "All" ||
                product.condition === condition;

            const priceMatch =
                maxPrice === "" ||
                product.price <= Number(maxPrice);

            return (
                searchMatch &&
                categoryMatch &&
                conditionMatch &&
                priceMatch
            );
        })
        .sort((a, b) => {
            if (sortBy === "low") {
                return a.price - b.price;
            }

            if (sortBy === "high") {
                return b.price - a.price;
            }

            if (sortBy === "az") {
                return a.name.localeCompare(b.name);
            }

            return 0;
        });

    const clearFilters = () => {
        setSearch("");
        setCategory("All");
        setCondition("All");
        setMaxPrice("");
        setSortBy("default");
    };

    const handleLogout = () => {
        const confirmed = window.confirm(
            "Are you sure you want to logout?"
        );

        if (confirmed) {
            window.location.reload();
        }
    };

    return (
        <div className="home-page">

            {/* ================= HEADER ================= */}

            <header className="header">

                <div className="logo">

                    <img
                        src="/images/logo.jpg"
                        alt="Spot Logo"
                    />

                    <div>
                        <h1>
                            Spot<span>.</span>
                        </h1>

                        <p>
                            Rajagiri Marketplace
                        </p>
                    </div>

                </div>


                <div className="search-container">

                    <input
                        type="text"
                        placeholder="Search books, laptops, hostel essentials..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                    <button type="button">
                        Search
                    </button>

                </div>


                <Nav />


                <div className="header-actions">

                    <button className="sell-btn">
                        + Sell
                    </button>

                    <button>
                        Profile
                    </button>

                    <button onClick={handleLogout}>
                        Logout
                    </button>

                </div>

            </header>


            {/* ================= CATEGORY BAR ================= */}

            <section className="category-bar">

                {categories.map((item) => (
                    <button
                        key={item}
                        className={`category-btn ${
                            category === item ? "active" : ""
                        }`}
                        onClick={() => setCategory(item)}
                    >
                        {item}
                    </button>
                ))}

            </section>


            {/* ================= HERO ================= */}

            <section className="hero">

                <div>

                    <h2>
                        Buy & Sell Within Rajagiri
                    </h2>

                    <p>
                        Find textbooks, gadgets, furniture,
                        cycles, hostel essentials and much
                        more from fellow Rajagiri students.
                    </p>

                </div>

            </section>


            {/* ================= MAIN ================= */}

            <main className="main-layout">

                {/* ================= SIDEBAR ================= */}

                <aside className="sidebar">

                    <h2>
                        Filters
                    </h2>


                    <div className="filter-group">

                        <label>
                            Category
                        </label>

                        <select
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value)
                            }
                        >

                            {categories.map((item) => (
                                <option
                                    key={item}
                                    value={item}
                                >
                                    {item === "All"
                                        ? "All Categories"
                                        : item}
                                </option>
                            ))}

                        </select>

                    </div>


                    <div className="filter-group">

                        <label>
                            Condition
                        </label>

                        <select
                            value={condition}
                            onChange={(e) =>
                                setCondition(e.target.value)
                            }
                        >

                            <option value="All">
                                All
                            </option>

                            <option value="New">
                                New
                            </option>

                            <option value="Used">
                                Used
                            </option>

                        </select>

                    </div>


                    <div className="filter-group">

                        <label>
                            Maximum Price ($)
                        </label>

                        <input
                            type="number"
                            placeholder="Maximum price"
                            value={maxPrice}
                            onChange={(e) =>
                                setMaxPrice(e.target.value)
                            }
                        />

                    </div>


                    <div className="filter-group">

                        <label>
                            Sort By
                        </label>

                        <select
                            value={sortBy}
                            onChange={(e) =>
                                setSortBy(e.target.value)
                            }
                        >

                            <option value="default">
                                Default
                            </option>

                            <option value="low">
                                Price : Low → High
                            </option>

                            <option value="high">
                                Price : High → Low
                            </option>

                            <option value="az">
                                Name : A → Z
                            </option>

                        </select>

                    </div>


                    <button
                        className="primary-btn"
                        onClick={() => {}}
                    >
                        Apply Filters
                    </button>

                    <button
                        className="secondary-btn"
                        onClick={clearFilters}
                    >
                        Clear Filters
                    </button>

                </aside>


                {/* ================= CONTENT ================= */}

                <section className="content">

                    <div className="top-row">

                        <div>

                            <h2>
                                Latest Listings
                            </h2>

                            <p id="resultCount">
                                {filteredProducts.length} Product
                                {filteredProducts.length !== 1
                                    ? "s"
                                    : ""}{" "}
                                Found
                            </p>

                        </div>

                    </div>


                    {/* ================= PRODUCTS ================= */}

                    {filteredProducts.length > 0 ? (

                        <div className="products">

                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}

                        </div>

                    ) : (

                        <div className="empty-state">

                            <h2>
                                No Products Found
                            </h2>

                            <p>
                                Try changing the search
                                or filter options.
                            </p>

                        </div>

                    )}

                </section>

            </main>


            {/* ================= FOOTER ================= */}

            <footer>

                <div className="footer-content">

                    <div>

                        <h3>
                            Spot
                        </h3>

                        <p>
                            Rajagiri Student Marketplace
                        </p>

                    </div>


                    <div>

                        <h4>
                            Categories
                        </h4>

                        <ul>
                            <li>Books</li>
                            <li>Electronics</li>
                            <li>Furniture</li>
                            <li>Cycles</li>
                        </ul>

                    </div>


                    <div>

                        <h4>
                            Support
                        </h4>

                        <ul>
                            <li>Help</li>
                            <li>Contact</li>
                            <li>Privacy</li>
                        </ul>

                    </div>

                </div>


                <p className="copyright">
                    © 2026 Spot Marketplace.
                    Built for Rajagiri Students.
                </p>

            </footer>

        </div>
    );
}

export default Home;