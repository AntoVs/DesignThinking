import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";

import Nav from "../../components/Nav/Nav";

function EditProfile() {

    const navigate = useNavigate();


    // =========================
    // GET LOGGED-IN USER
    // =========================

    const storedUser = localStorage.getItem("loggedInUser");

    const user = storedUser
        ? JSON.parse(storedUser)
        : null;


    // =========================
    // FORM STATES
    // =========================

    const [name, setName] = useState(
        user?.name || ""
    );

    const [password, setPassword] = useState(
        user?.password || ""
    );

    const [showPassword, setShowPassword] = useState(false);

    const [message, setMessage] = useState("");

    const [messageType, setMessageType] = useState("");


    // =========================
    // SAVE CHANGES
    // =========================

    const handleSave = (e) => {

        e.preventDefault();

        const updatedName = name.trim();
        const updatedPassword = password.trim();


        if (!updatedName) {

            setMessage("Please enter your name.");
            setMessageType("error");

            return;
        }


        if (!updatedPassword) {

            setMessage("Please enter a password.");
            setMessageType("error");

            return;
        }


        const updatedUser = {
            ...user,
            name: updatedName,
            password: updatedPassword
        };


        // Update account

        localStorage.setItem(
            `user_${user.uid}`,
            JSON.stringify(updatedUser)
        );


        // Update current session

        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(updatedUser)
        );


        setMessage(
            "Profile updated successfully!"
        );

        setMessageType("success");
    };


    // =========================
    // ACCOUNT NOT FOUND
    // =========================

    if (!user) {

        return (
            <div className="edit-profile-page">

                <Nav simple />

                <main className="profile-error">

                    <h2>
                        You're not logged in
                    </h2>

                    <p>
                        Please login to edit your account.
                    </p>

                    <button
                        onClick={() => navigate("/")}
                    >
                        Go to Login
                    </button>

                </main>

            </div>
        );
    }


    return (
        <div className="edit-profile-page">

            <Nav simple />


            {/* =========================
                EDIT PROFILE
            ========================= */}

            <main className="edit-profile-container">

                <div className="edit-profile-card">


                    {/* Profile header */}

                    <div className="edit-profile-header">

                        <div className="profile-avatar">

                            {name.trim()
                                ? name
                                    .trim()
                                    .charAt(0)
                                    .toUpperCase()
                                : "A"}

                        </div>


                        <h2>
                            Edit Profile
                        </h2>


                        <p>
                            Update your account information
                        </p>

                    </div>


                    {/* Form */}

                    <form
                        className="edit-profile-form"
                        onSubmit={handleSave}
                    >


                        {/* Name */}

                        <div className="form-group">

                            <label htmlFor="name">
                                Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                placeholder="Enter your name"
                            />

                        </div>


                        {/* UID */}

                        <div className="form-group">

                            <label htmlFor="uid">
                                College UID
                            </label>

                            <input
                                id="uid"
                                type="text"
                                value={user.uid}
                                disabled
                            />

                            <small>
                                Your College UID cannot be changed.
                            </small>

                        </div>


                        {/* Password */}

                        <div className="form-group">

                            <label htmlFor="password">
                                Password
                            </label>

                            <div className="password-wrapper">

                                <input
                                    id="password"
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Enter your password"
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                >
                                    {showPassword
                                        ? "Hide"
                                        : "Show"}
                                </button>

                            </div>

                        </div>


                        {/* Message */}

                        {message && (

                            <div
                                className={`profile-message ${messageType}`}
                            >
                                {message}
                            </div>

                        )}


                        {/* Buttons */}

                        <div className="profile-buttons">

                            <button
                                type="button"
                                className="cancel-profile-btn"
                                onClick={() =>
                                    navigate("/account")
                                }
                            >
                                Cancel
                            </button>


                            <button
                                type="submit"
                                className="save-profile-btn"
                            >
                                Save Changes
                            </button>

                        </div>

                    </form>


                    <button
                        className="back-account-btn"
                        onClick={() =>
                            navigate("/account")
                        }
                    >
                        ← Back to Account
                    </button>

                </div>

            </main>

        </div>
    );
}

export default EditProfile;