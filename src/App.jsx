import { useState } from "react";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";

function App() {
    const [page, setPage] = useState("login");

    return (
        <>
            {page === "login" && (
                <Login
                    onSignup={() => setPage("signup")}
                    onLogin={() => setPage("home")}
                />
            )}

            {page === "signup" && (
                <Signup
                    onLogin={() => setPage("login")}
                />
            )}

            {page === "home" && (
                <Home />
            )}
        </>
    );
}

export default App;