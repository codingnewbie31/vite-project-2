import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { loginUser } from "../assets/constants/api";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

    const handleSignIn = async () => {
    setError("");

    // Basic validation
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
        try {
      setLoading(true);
      const res = await loginUser({ email, password });

      if (res.data.status) {
        // Save token to localStorage
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        // Redirect to dashboard
        navigate("/home");
      } else {
        setError(res.data.message);
      }
          } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 px-8 py-4 border-b border-gray-100">
        <Link to="/" className="text-[#2196F3]">Home</Link>
        <span>/</span>
        <span className="text-gray-700">Sign in</span>
      </div>

      {/* Form Container */}
      <div className="flex flex-col items-center py-12">
        <div className="w-[400px]">

          <h2 className="text-2xl font-bold text-gray-900 mb-1">Sign in</h2>
          <p className="text-sm text-gray-500 mb-8">Upgrade your tech game with us!</p>

          

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-gray-700 mb-1 block">Email</label>
            <input
              type="email"
              placeholder="myemail@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded bg-[#F5F5F5] border border-gray-200 outline-none text-sm"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="text-sm text-gray-700 mb-1 block">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded bg-[#F5F5F5] border border-gray-200 outline-none text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded">
              {error}
            </div>
          )}

          {/* Forgot Password */}
          <div className="flex justify-end mb-6">
            <span className="text-sm text-gray-400 cursor-pointer hover:text-[#2196F3]">
              Forget Password?
            </span>
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleSignIn}
            disabled={loading}
            className="w-full bg-[#2196F3] text-white py-3 rounded text-sm font-semibold hover:bg-blue-600 transition mb-4 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#2196F3] font-medium">
              Sign up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default SignIn;