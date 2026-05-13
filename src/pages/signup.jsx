import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";

export default function Signup() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
    const [error, setError] = useState("");

    function onChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    }

    function onSubmit(e) {
        e.preventDefault();
        if (!form.name || !form.email || !form.password) {
            setError("All fields are required");
            return;
        }
        if (form.password !== form.confirm) {
            setError("Passwords do not match");
            return;
        }
        // TODO: replace with real signup logic (Firebase / API)
        console.log("Signup payload:", { name: form.name, email: form.email });
        navigate("/");
    }

    return (
        <div className="auth-page">
            <form className="auth-card" onSubmit={onSubmit} aria-label="signup-form">
                <h2 className="auth-title">Create account</h2>

                {error && <div className="auth-error">{error}</div>}

                <label className="auth-label">Name
                    <input name="name" value={form.name} onChange={onChange} className="auth-input" placeholder="Your name" />
                </label>

                <label className="auth-label">Email
                    <input name="email" type="email" value={form.email} onChange={onChange} className="auth-input" placeholder="you@example.com" />
                </label>

                <label className="auth-label">Password
                    <input name="password" type="password" value={form.password} onChange={onChange} className="auth-input" placeholder="••••••••" />
                </label>

                <label className="auth-label">Confirm password
                    <input name="confirm" type="password" value={form.confirm} onChange={onChange} className="auth-input" placeholder="Repeat password" />
                </label>

                <button type="submit" className="auth-button">Sign up</button>

                <div className="auth-footer">Already have an account? <Link to="/signin">Sign in</Link></div>
            </form>
        </div>
    );
}
