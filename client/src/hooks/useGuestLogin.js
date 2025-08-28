import { useEffect } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

function useGuestLogin() {
    useEffect(() => {
        const token = localStorage.getItem("token");
        let isExpired = true;

        if (token) {
            try {
                const decoded = jwtDecode(token);
                const now = Date.now() / 1000;
                isExpired = decoded.exp < now;
            } catch (err) {
                console.error("Invalid token:", err);
                isExpired = true;
            }
        }

        if (!token || isExpired) {
            axios
                .post(`${import.meta.env.VITE_BACKEND_URL}/auth/login/guest`)
                .then((res) => {
                    const { token, user } = res.data;
                    localStorage.setItem("token", token);
                    localStorage.setItem("user", JSON.stringify(user));
                })
                .catch((err) => {
                    console.error("Guest login failed:", err.response?.data || err.message);
                });
        }
    }, []);
}

export default useGuestLogin;
