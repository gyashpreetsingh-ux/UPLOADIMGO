import { useState } from "react";

export default function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {

        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/signup", {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                name,
                email,
                password,
            }),

        });

        const data = await response.json();

        alert(data.message);

        window.location.href = "/login";

    };

    return (

        <form onSubmit={handleSignup}>

            <input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />

            <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button>Signup</button>

        </form>

    );

}