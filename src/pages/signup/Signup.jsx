import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
    const navigate = useNavigate();

    const [uid, setUid] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageColor, setMessageColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do not match!");
            setMessageColor("red");
            return;
        }

        const existingUser = localStorage.getItem(`user_${uid}`);

        if (existingUser) {
            setMessage("This UID is already registered!");
            setMessageColor("red");
            return;
        }

        const user = {
            uid: uid,
            name: name,
            password: password
        };

        localStorage.setItem(
            `user_${uid}`,
            JSON.stringify(user)
        );

        setMessage("Account created successfully!");
        setMessageColor("cyan");

        setUid("");
        setName("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <main className="signup-page">
            <div className="signup-container">

                <div className="signup-header">
                    <h2>Create Account</h2>
                    <p>Join Rajagiri OLX</p>
                </div>

                <form onSubmit={handleSubmit}>

                    <label htmlFor="uid">
                        College UID
                    </label>

                    <input
                        type="text"
                        id="uid"
                        placeholder="Enter your college UID"
                        value={uid}
                        onChange={(e) => setUid(e.target.value)}
                        required
                    />

                    <label htmlFor="name">
                        Name
                    </label>

                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label htmlFor="password">
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label htmlFor="confirmPassword">
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) =>
                            setConfirmPassword(e.target.value)
                        }
                        required
                    />

                    <button
                        className="signup-main-btn"
                        type="submit"
                    >
                        Sign Up
                    </button>

                    <p
                        className="signup-message"
                        style={{ color: messageColor }}
                    >
                        {message}
                    </p>

                    <p className="login-link">
                        Already have an account?{" "}
                        <span
                            onClick={() => navigate("/")}
                        >
                            Login
                        </span>
                    </p>

                </form>
            </div>
        </main>
    );
}

export default Signup;