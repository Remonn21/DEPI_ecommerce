import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';
import BrandLogos from '@/components/BrandLogos';

function SignUp() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        // Handle sign-up logic here
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <h2 className="text-h4 font-bold text-center mb-6">Sign Up</h2>
                    <p className="text-gray text-center mb-6">Create a new account by filling in the details below.</p>

                    <form className="space-y-6" onSubmit={handleSignUp}>
                        <InputField
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />

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

                        <InputField
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <Button type="submit" label="Sign Up" />
                    </form>

                    <p className="text-center mt-6 text-gray">
                        Already have an account? <Link to="/login" className="text-Purple hover:underline">Login</Link>
                    </p>
                </div>
            </div>
            <BrandLogos />
        </>
    );
}

export default SignUp;
