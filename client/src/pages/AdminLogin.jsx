import { useState } from 'react';
import axios from 'axios';
import Heading from '../components/Heading';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const toggleMode = () => {
        setError('');
        setEmail('');
        setPassword('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            let res;
            res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login/admin`, { email, password });

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            navigate('/admin/dashboard')
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred.');
        }
    };

    return (
        <div className="min-h-screen w-full gradient-background flex flex-col justify-center items-center">
            <Heading>Welcome</Heading>
            <div className="max-w-md h-fit p-6 bg-white shadow-lg rounded-xl">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                    Login as Admin
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Admin Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border rounded"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 border rounded"
                    />

                    {error && <p className="text-red-600 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-4 text-center text-sm">
                    Not an admin?{' '}
                    {import.meta.env.VITE_USE_CREDENTIAL_AUTH === 'true' ?
                        < button onClick={() => {
                            toggleMode()
                            navigate('/auth')
                        }} className="text-blue-600 hover:underline">
                            Go to User Login/Register
                        </button>
                        :
                        < button onClick={() => {
                            toggleMode()
                            navigate('/home')
                        }} className="text-blue-600 hover:underline">
                            Go to Home page
                        </button>
                    }
                </div>
            </div>
        </div >
    );
};
