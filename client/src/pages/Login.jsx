import { useState } from "react";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                email,
                password,
            }),

        });

        const data = await response.json();

        if (data.success) {

            localStorage.setItem("token", data.token);

            alert("Login Successful");

            window.location.href = "/";

        } else {

            alert(data.message);

        }

    };

    return (

        <form onSubmit={handleLogin}>

            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button>Login</button>

        </form>

    );

}