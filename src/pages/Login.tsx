import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import api from "../api/axios";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post("/auth/login", { email, password });

            // Extract JWT token from response
            const token = response.data.jwt;
            if (!token) {
                setError("Invalid response from server.");
                return;
            }

            // Call login function from AuthContext
            login(token);

            // ✅ Redirect to dashboard AFTER successful login
            navigate("/dashboard", { replace: true });

        } catch (error) {
            setError("Login failed. Please check your credentials.");
            console.error("Login error:", error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleLogin} className="p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-lg font-bold mb-4">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    className="mb-2 p-2 border rounded"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="mb-2 p-2 border rounded"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
