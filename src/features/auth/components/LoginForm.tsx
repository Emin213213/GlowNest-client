import {useEffect, useState} from 'react';
import {useMutation, useQuery} from '@tanstack/react-query';
import {fetchUser, login} from '../api';
import {useNavigate} from "react-router";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const {data: user, isSuccess} = useQuery({
        queryKey: ['login'],
        queryFn: fetchUser,
        retry: false,
        staleTime: 1000 * 60 * 5
    });

    useEffect(() => {
        if (isSuccess && user) {
            navigate('/profile');
        }
    }, [isSuccess, user, navigate]);

    const { mutate,loading, error } = useMutation({
        mutationFn: login,
        onSuccess: () => {
            navigate('/profile');
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate({ email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-200 disabled:opacity-50"
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>

                {error && (
                    <p className="text-red-500 text-sm text-center">Login failed. Please try again.</p>
                )}
            </form>
        </div>
    );
};

export default LoginForm;
