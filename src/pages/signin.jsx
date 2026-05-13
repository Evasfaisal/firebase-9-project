import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";

export default function Signin() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    function onChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    }

    function onSubmit(e) {
        e.preventDefault();
        if (!form.email || !form.password) {
            setError("Email and password are required");
            return;
        }
        // TODO: replace with real signin logic
        console.log("Signin payload:", form);
        navigate("/");
    }

    return (
        <div className="auth-page">
            <form className="auth-card" onSubmit={onSubmit} aria-label="signin-form">
                <h2 className="auth-title">Welcome back</h2>

                {error && <div className="auth-error">{error}</div>}

                <label className="auth-label">Email
                    <input name="email" type="email" value={form.email} onChange={onChange} className="auth-input" placeholder="you@example.com" />
                </label>

                <label className="auth-label">Password
                    <input name="password" type="password" value={form.password} onChange={onChange} className="auth-input" placeholder="••••••••" />
                </label>

                <button type="submit" className="auth-button">Sign in</button>

                <div className="auth-footer">New here? <Link to="/signup">Create an account</Link></div>
            </form>
        </div>
    );
}
