"use client";

import { useAuth } from "@/context/AuthContext";
import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";
import { LogOut, Home, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const { isAuthenticated, user, logout, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-neutral-950 text-white">
        <div className="size-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-neutral-950 text-white p-4">
        <div className="max-w-md w-full bg-neutral-900 border border-neutral-800 rounded-3xl p-8 text-center flex flex-col items-center">
          <div className="size-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4 text-emerald-400">
            <ShieldCheck className="size-8" />
          </div>
          <h1 className="text-2xl font-bold mb-2">You are Logged In</h1>
          <p className="text-neutral-400 text-sm mb-6">
            Welcome back, <span className="text-white font-medium">{user?.name || "Admin"}</span> ({user?.username}).
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Link
              href="/"
              className="flex-1 bg-white hover:bg-neutral-200 text-neutral-950 font-semibold py-2.5 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2"
            >
              <Home className="size-4" />
              <span>Go to Website</span>
            </Link>
            <button
              onClick={logout}
              className="flex-1 bg-neutral-800 hover:bg-rose-950 hover:text-rose-300 text-neutral-300 font-semibold py-2.5 px-4 rounded-xl text-sm transition-all border border-neutral-700 flex items-center justify-center gap-2 cursor-pointer"
            >
              <LogOut className="size-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <LoginForm />;
}
