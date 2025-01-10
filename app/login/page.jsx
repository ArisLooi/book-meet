'use client'
import Link from "next/link";
import { useEffect } from "react";
import { useActionState } from 'react';
import createSession from "../actions/createSession";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const [state, submitAction] = useActionState(createSession, {})
    const router = useRouter();

    useEffect(() => {
        if (state.error) toast.error(state.error);
        if (state.success) {
            toast.success('Logged in successfully!');
            router.push('/');
        }
    }, [state]);

    return (
        <div className="flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mt-20">
                <form action={submitAction}>
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Login
                    </h2>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2"
                        >Email</label
                        >
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border rounded w-full py-2 px-3 text-gray-700"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2"
                        >Password</label
                        >
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="border rounded w-full py-2 px-3 text-gray-700"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-5">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Login
                        </button>

                        <p >
                            <span className="text-gray-700">No account? </span>
                            <Link href="/register" className="text-blue-500">Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default LoginPage