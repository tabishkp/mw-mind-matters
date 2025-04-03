
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#121520] text-white p-6">
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-6">Welcome Back</h1>
        
        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <Input 
              id="email"
              type="email" 
              placeholder="Enter your email"
              className="bg-[#1A1F2C] border-gray-700"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <Input 
              id="password"
              type="password" 
              placeholder="Enter your password"
              className="bg-[#1A1F2C] border-gray-700"
              required
            />
          </div>
          
          <Button 
            type="submit"
            className="w-full bg-brand-purple hover:bg-purple-600 mt-4"
          >
            Login
          </Button>
        </form>
        
        <p className="mt-6 text-sm text-gray-400">
          Don't have an account?{" "}
          <button 
            onClick={() => navigate('/signup')}
            className="text-brand-purple hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
