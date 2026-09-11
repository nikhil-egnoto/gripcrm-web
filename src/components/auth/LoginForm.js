"use client";

import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { User, Lock, Eye, EyeOff, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

export default function LoginForm() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim()) {
      setError("Please enter your username or email.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setIsSubmitting(true);

    // Short timeout for realistic smooth login interaction
    setTimeout(() => {
      const result = login(username, password);
      setIsSubmitting(false);

      if (result.success) {
        setLoginSuccess(true);
      } else {
        setError(result.error);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-neutral-950 via-neutral-900 to-black px-4 py-12 relative overflow-hidden font-sans">
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neutral-800/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neutral-700/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Login Card */}
      <div className="w-full max-w-md bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10 text-white transition-all duration-300">
        
        {/* Logo & Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="mb-4 p-3 bg-neutral-800/80 border border-neutral-700/60 rounded-2xl shadow-inner flex items-center justify-center">
            <Image
              src="/gripcrm-web.svg"
              alt="GripCRM Logo"
              width={160}
              height={36}
              priority
              className="h-8 w-auto filter invert brightness-200"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 font-grotesk">
            Protected Portal
          </h1>
          <p className="text-sm text-neutral-400">
            Sign in to access the platform.
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs flex items-start gap-2.5 animate-in fade-in slide-in-from-top-1 duration-200">
            <AlertCircle className="size-4 shrink-0 text-rose-400 mt-0.5" />
            <span className="leading-relaxed">{error}</span>
          </div>
        )}

        {/* Success Alert */}
        {loginSuccess && (
          <div className="mb-6 p-3.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-300 text-xs flex items-center gap-2.5">
            <CheckCircle className="size-4 shrink-0 text-emerald-400" />
            <span>Login successful! Unlocking site access...</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Username Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-neutral-300 ml-1">
              Username or Email
            </label>
            <div className="relative flex items-center">
              <User className="absolute left-3.5 size-4 text-neutral-400 pointer-events-none" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username or email"
                autoComplete="username"
                className="w-full bg-neutral-950/80 border border-neutral-800 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-semibold text-neutral-300">
                Password
              </label>
            </div>
            <div className="relative flex items-center">
              <Lock className="absolute left-3.5 size-4 text-neutral-400 pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="current-password"
                className="w-full bg-neutral-950/80 border border-neutral-800 rounded-xl py-3 pl-10 pr-10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-neutral-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || loginSuccess}
            className="mt-2 w-full bg-white hover:bg-neutral-200 text-neutral-950 font-semibold py-3 px-4 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-white/5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="size-5 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Sign In to Access Website</span>
                <ArrowRight className="size-4" />
              </>
            )}
          </button>
        </form>

        {/* Footer Notice */}
        <div className="mt-8 text-center text-xs text-neutral-500 border-t border-neutral-800/80 pt-6">
          <p>Protected by GripCRM Authentication Guard</p>
        </div>

      </div>
    </div>
  );
}
