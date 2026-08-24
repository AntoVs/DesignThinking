import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";

import Buy from "./pages/product/Buy";
import Product from "./pages/product/Product";

import Sell from "./pages/sell/Sell";
import EditProfile from "./pages/EditProfile/EditProfile";
import Chat from "./pages/chat/Chat";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/signup" element={<Signup />} />

                <Route path="/home" element={<Home />} />

                {/* Buy Page */}
                <Route path="/buy" element={<Buy />} />

                {/* Individual Product */}
                <Route
                    path="/product/:id"
                    element={<Product />}
                />

                <Route path="/account" element={<Account />} />

                <Route path="/sell" element={<Sell />} />

                <Route
                    path="/edit-profile"
                    element={<EditProfile />}
                />

                {/* Product-specific Chat */}
                <Route
                    path="/chat/:id"
                    element={<Chat />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;