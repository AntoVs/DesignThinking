import { useState } from "react";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
    const [page, setPage] = useState("login");

    return (
        <>
            {page === "login" ? (
                <Login onSignup={() => setPage("signup")} />
            ) : (
                <Signup onLogin={() => setPage("login")} />
            )}
        </>
    );
}

export default App;