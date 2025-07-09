import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {register} from "../api";
import {Link, useNavigate} from "react-router-dom";

const RegisterForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const {mutate, isPending, isSuccess, isError, error} = useMutation({
        mutationFn: register,
        onSuccess:() => {
            navigate('/login')
        }
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(formData);
    };

    return (

        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />


                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition"
                    >
                        {isPending ? "Registering..." : "Register"}

                    </button>
                <Link className={'flex justify-center'} to={'/login'} > Sign in</Link>


                {isSuccess && (
                    <p className="text-green-600 text-sm text-center">Registration successful!</p>
                )}
                {isError && (
                    <p className="text-red-600 text-sm text-center">
                        Error: {error instanceof Error ? error.message : "Something went wrong"}
                    </p>
                )}

            </form>
        </div>


    );
};

export default RegisterForm;
