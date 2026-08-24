import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Chat.css";

import products from "../../data/products";
import Nav from "../../components/Nav/Nav";

function Chat() {

    const navigate = useNavigate();
    const { id } = useParams();

    // Find the product we are interested in
    const product = products.find(
        (item) => String(item.id) === String(id)
    );

    const [message, setMessage] = useState("");

    // We are the buyer, so our first message is on the right
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: "sent",
            text: "Hi! Is this item still available?",
            time: "10:30 AM"
        },
        {
            id: 2,
            type: "received",
            text: "Yes, it is still available.",
            time: "10:32 AM"
        }
    ]);


    // =========================
    // PRODUCT NOT FOUND
    // =========================

    if (!product) {

        return (
            <div className="chat-page">

                <Nav />

                <main className="chat-not-found">

                    <h2>
                        Product Not Found
                    </h2>

                    <p>
                        The product you are trying to chat about
                        could not be found.
                    </p>

                    <button
                        onClick={() => navigate("/buy")}
                    >
                        Back to Buy
                    </button>

                </main>

            </div>
        );
    }


    // =========================
    // SEND MESSAGE
    // =========================

    const sendMessage = (e) => {

        e.preventDefault();

        if (!message.trim()) {
            return;
        }

        const newMessage = {
            id: Date.now(),
            type: "sent",
            text: message.trim(),
            time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            })
        };

        setMessages((previousMessages) => [
            ...previousMessages,
            newMessage
        ]);

        setMessage("");
    };


    return (
        <div className="chat-page">

            {/* =========================
                NAVBAR
            ========================= */}

            <Nav simple/>


            {/* =========================
                CHAT CONTAINER
            ========================= */}

            <main className="chat-container">


                {/* =========================
                    CHAT SIDEBAR
                ========================= */}

                <aside className="chat-sidebar">

                    <h2>
                        Messages
                    </h2>


                    <div className="conversation active">

                        <div className="conversation-avatar">

                            {product.seller
                                ? product.seller
                                    .charAt(0)
                                    .toUpperCase()
                                : "S"}

                        </div>


                        <div className="conversation-info">

                            <h3>
                                {product.seller}
                            </h3>

                            <p>
                                {product.name}
                            </p>

                            <span>
                                {messages[messages.length - 1]?.text}
                            </span>

                        </div>

                    </div>


                    {/* Prototype conversations */}

                    <div className="conversation">

                        <div className="conversation-avatar">
                            A
                        </div>

                        <div className="conversation-info">

                            <h3>
                                Anjali M
                            </h3>

                            <p>
                                Study Table
                            </p>

                            <span>
                                Is this still available?
                            </span>

                        </div>

                    </div>


                    <div className="conversation">

                        <div className="conversation-avatar">
                            R
                        </div>

                        <div className="conversation-info">

                            <h3>
                                Rahul S
                            </h3>

                            <p>
                                Scientific Calculator
                            </p>

                            <span>
                                Sure, we can meet tomorrow.
                            </span>

                        </div>

                    </div>

                </aside>


                {/* =========================
                    MAIN CHAT
                ========================= */}

                <section className="chat-main">


                    {/* =========================
                        CHAT HEADER
                    ========================= */}

                    <div className="chat-header">

                        <div className="chat-avatar">

                            {product.seller
                                ? product.seller
                                    .charAt(0)
                                    .toUpperCase()
                                : "S"}

                        </div>


                        <div>

                            <h2>
                                {product.seller}
                            </h2>

                            <p>
                                {product.name} · ₹{product.price}
                            </p>

                        </div>

                    </div>


                    {/* =========================
                        PRODUCT CARD
                    ========================= */}

                    <div className="chat-product-card">

                        <div className="chat-product-image">

                            <img
                                src={`/${product.image}`}
                                alt={product.name}
                            />

                        </div>


                        <div className="chat-product-info">

                            <h3>
                                {product.name}
                            </h3>

                            <p>
                                ₹{product.price} · {product.condition}
                            </p>

                            <button
                                onClick={() =>
                                    navigate(
                                        `/product/${product.id}`
                                    )
                                }
                            >
                                View Product
                            </button>

                        </div>

                    </div>


                    {/* =========================
                        MESSAGES
                    ========================= */}

                    <div className="messages-area">

                        {messages.map((msg) => (

                            <div
                                key={msg.id}
                                className={`message-row ${msg.type}`}
                            >

                                <div className="message-bubble">

                                    <p>
                                        {msg.text}
                                    </p>

                                    <span>
                                        {msg.time}
                                    </span>

                                </div>

                            </div>

                        ))}

                    </div>


                    {/* =========================
                        MESSAGE INPUT
                    ========================= */}

                    <form
                        className="message-form"
                        onSubmit={sendMessage}
                    >

                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={message}
                            onChange={(e) =>
                                setMessage(e.target.value)
                            }
                        />


                        <button type="submit">
                            Send
                        </button>

                    </form>

                </section>

            </main>

        </div>
    );
}

export default Chat;