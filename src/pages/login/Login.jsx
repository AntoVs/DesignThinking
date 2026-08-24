import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [uid, setUid] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");
    const [messageColor, setMessageColor] = useState("");


    // =========================
    // LOGIN
    // =========================

    const handleSubmit = (e) => {

        e.preventDefault();

        const enteredUid = uid.trim();

        const storedUser = localStorage.getItem(
            `user_${enteredUid}`
        );


        if (!storedUser) {

            setMessageColor("red");

            setMessage(
                "Invalid College UID or password!"
            );

            return;
        }


        const user = JSON.parse(storedUser);


        if (user.password === password.trim()) {

            // Remember the currently logged-in user
            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(user)
            );


            setMessageColor("cyan");

            setMessage(
                "Login successful!"
            );


            setTimeout(() => {

                navigate("/home");

            }, 1000);

        } else {

            setMessageColor("red");

            setMessage(
                "Invalid College UID or password!"
            );

        }
    };


    // =========================
    // CLEAR ACCOUNT
    // =========================

    const handleClearAccount = () => {

        const uidToDelete = uid.trim();


        if (!uidToDelete) {

            setMessage(
                "Enter your College UID first."
            );

            setMessageColor("red");

            return;
        }


        const confirmed = window.confirm(
            "Are you sure you want to delete this account?"
        );


        if (confirmed) {

            localStorage.removeItem(
                `user_${uidToDelete}`
            );


            // If the deleted account is currently logged in,
            // remove the logged-in user as well.
            const loggedInUser =
                localStorage.getItem("loggedInUser");


            if (loggedInUser) {

                const currentUser =
                    JSON.parse(loggedInUser);


                if (currentUser.uid === uidToDelete) {

                    localStorage.removeItem(
                        "loggedInUser"
                    );

                }
            }


            setUid("");
            setPassword("");

            setMessage(
                "Account deleted."
            );

            setMessageColor("cyan");
        }
    };


    return (

        <main className="login-page">

            <div className="form-container">


                {/* Header */}

                <div className="login-header">

                    <h2>
                        Welcome Back
                    </h2>

                    <p>
                        Login to continue to Rajagiri OLX
                    </p>

                </div>


                {/* Form */}

                <form
                    id="loginForm"
                    onSubmit={handleSubmit}
                >


                    {/* UID */}

                    <label htmlFor="uid">
                        College UID
                    </label>

                    <input
                        type="text"
                        id="uid"
                        placeholder="Enter your College UID"
                        value={uid}
                        onChange={(e) =>
                            setUid(e.target.value)
                        }
                        required
                    />


                    {/* Password */}

                    <label htmlFor="pass">
                        Password
                    </label>

                    <input
                        type="password"
                        id="pass"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        required
                    />


                    {/* Buttons */}

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
                            onClick={() =>
                                navigate("/signup")
                            }
                        >
                            Don't have an account?
                            <span> Signup</span>
                        </button>


                        <button
                            className="clear-account-btn"
                            type="button"
                            onClick={
                                handleClearAccount
                            }
                        >
                            Clear Account
                        </button>

                    </div>


                    {/* Message */}

                    <p
                        id="message"
                        style={{
                            color: messageColor
                        }}
                    >
                        {message}
                    </p>

                </form>

            </div>

        </main>
    );
}

export default Login;