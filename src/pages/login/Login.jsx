import { useState } from "react";
import "./Login.css";

function Login({ onSignup, onLogin }) {
    const [uid, setUid] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageColor, setMessageColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUser = localStorage.getItem(`user_${uid.trim()}`);

        if (!storedUser) {
            setMessageColor("red");
            setMessage("Invalid College UID or password!");
            return;
        }

        const user = JSON.parse(storedUser);

        if (user.password === password.trim()) {
            setMessageColor("cyan");
            setMessage("Login successful!");

            setTimeout(() => {
                 onLogin();
            }, 1000);
        } else {
            setMessageColor("red");
            setMessage("Invalid College UID or password!");
        }
    };

    const handleClearAccount = () => {
        const uidToDelete = uid.trim();

        if (!uidToDelete) {
            setMessage("Enter your College UID first.");
            setMessageColor("red");
            return;
        }

        const confirmed = window.confirm(
            "Are you sure you want to delete this account?"
        );

        if (confirmed) {
            localStorage.removeItem(`user_${uidToDelete}`);

            setUid("");
            setPassword("");
            setMessage("Account deleted.");
            setMessageColor("cyan");
        }
    };

    return (
        <main className="login-page">
            <div className="form-container">

                <div className="login-header">
                    <h2>Welcome Back</h2>
                    <p>Login to continue to Rajagiri OLX</p>
                </div>

                <form id="loginForm" onSubmit={handleSubmit}>

                    <label htmlFor="uid">College UID</label>

                    <input
                        type="text"
                        id="uid"
                        placeholder="Enter your College UID"
                        value={uid}
                        onChange={(e) => setUid(e.target.value)}
                        required
                    />

                    <label htmlFor="pass">Password</label>

                    <input
                        type="password"
                        id="pass"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <div className="buttons">

                        <button
                            className="login-btn"
                            type="submit"
                        >
                            Login
                        </button>

                        <div className="divider">
                            <span>or</span>
                        </div>

                        <button
                            className="signup-btn"
                            type="button"
                            onClick={onSignup}
                        >
                            Don't have an account? <span>Signup</span>
                        </button>

                        <button
                            className="clear-account-btn"
                            type="button"
                            onClick={handleClearAccount}
                        >
                            Clear Account
                        </button>

                    </div>

                    <p
                        id="message"
                        style={{ color: messageColor }}
                    >
                        {message}
                    </p>

                </form>
            </div>
        </main>
    );
}

export default Login;