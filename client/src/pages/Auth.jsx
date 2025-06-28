import { useState } from 'react';
import axios from 'axios';
import Heading from '../components/Heading';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

export default function Auth() {
    const [mode, setMode] = useState('login'); // 'login' | 'register'
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const toggleMode = () => {
        setError('');
        setMode(mode === 'login' ? 'register' : 'login');
        setUsername('');
        setEmail('');
        setPassword('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            let res;
            if (mode === 'login') {
                res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, { email, password });
            } else {
                res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, {
                    username,
                    email,
                    password,
                    role: 'user',
                });
            }

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            navigate('/home')
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred.');
        }
    };

    return (
        <div className="min-h-screen w-full bg-gradient flex flex-col justify-center items-center">
            <Heading>Welcome</Heading>
            <div className="max-w-md h-fit p-6 bg-white shadow-lg rounded-xl">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                    {mode === 'login' ? 'Login' : 'Register'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {mode === 'register' && (
                        <>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-2 border rounded"
                            />
                        </>
                    )}

                    {mode === 'login' && (
                        <input
                            type="email"
                            placeholder="User Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 border rounded"
                        />
                    )}

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
                        {mode === 'login' ? 'Login' : 'Register'}
                    </button>
                </form>

                <div className="mt-4 text-center text-sm">
                    {mode === 'login' ? (
                        <>
                            Don’t have an account?{' '}
                            <button onClick={toggleMode} className="text-blue-600 hover:underline">
                                Register
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <button onClick={toggleMode} className="text-blue-600 hover:underline">
                                Login
                            </button>
                        </>
                    )}
                </div>
                <div className="mt-4 text-center text-sm">
                    Admin login here{' '}
                    < button onClick={() => {
                        toggleMode()
                        navigate('/admin/login')
                    }} className="text-blue-600 hover:underline">
                        Go to Admin Login
                    </button>
                </div>
            </div>
        </div>
    );
};
