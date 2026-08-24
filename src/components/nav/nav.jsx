import "./Nav.css";

function Nav({ simple = false }) {
    return (
        <nav className={`nav ${simple ? "simple-nav" : ""}`}>

            {/* Logo */}

            <div className="nav-brand">

                <div className="nav-logo-image">
                    <img
                        src="/images/logo.jpg"
                        alt="Spot Logo"
                    />
                </div>

                <div className="nav-brand-text">

                    <h1>
                        Spot.
                    </h1>

                    <p>
                        Rajagiri Marketplace
                    </p>

                </div>

            </div>


            {/* Search */}
            {/* Hidden when simple=true */}

            {!simple && (
                <div className="nav-search">

                    <input
                        type="text"
                        placeholder="Search books, laptops, hostel items..."
                    />

                    <button>
                        Search
                    </button>

                </div>
            )}


            {/* Navigation */}

            <div className="nav-links">

                <a href="/home">
                    Home
                </a>

                <a href="/buy">
                    Buy
                </a>

                <a href="/sell">
                    Sell
                </a>

                <a href="/account">
                    Account
                </a>

                <a
                    href="/"
                    className="logout-btn"
                >
                    Logout
                </a>

            </div>

        </nav>
    );
}

export default Nav;