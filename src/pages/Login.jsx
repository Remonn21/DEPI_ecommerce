import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';
import BrandLogos from '@/components/BrandLogos';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-h4 font-bold text-center mb-6">Login</h2>
                <p className="text-gray text-center mb-6">Please login using account details below.</p>

                <form className="space-y-6" onSubmit={handleLogin}>
                    <InputField
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <InputField
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="flex justify-start">
                        <a href="#" className="text-sm text-Purple hover:underline">Forgot Password?</a>
                    </div>

                    <Button type="submit" label="Sign In" />
                </form>

                <p className="text-center mt-6 text-gray">
                    Don’t have an account? <Link to="/signup" className="text-Purple hover:underline">Create account</Link>
                </p>
            </div>
        </div>
        <BrandLogos/>
        
        </>
        
    );
    
}

export default Login;
