"use client";

import { useAuth } from "@/context/AuthContext";
import LoginForm from "./LoginForm";
import Image from "next/image";

export default function AuthGuard({ children }) {
  const { isAuthenticated, isLoading } = useAuth();

  // Show loading spinner while reading stored authentication state
  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-neutral-950 text-white font-sans">
        <div className="flex flex-col items-center gap-4">
          <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-2xl">
            <Image
              src="/gripcrm-web.svg"
              alt="GripCRM Logo"
              width={140}
              height={32}
              priority
              className="h-7 w-auto filter invert brightness-200"
            />
          </div>
          <div className="size-6 border-2 border-white border-t-transparent rounded-full animate-spin mt-2" />
        </div>
      </div>
    );
  }

  // If not authenticated, lock website and display Login Page
  if (!isAuthenticated) {
    return <LoginForm />;
  }

  // User is authenticated, render protected website
  return <>{children}</>;
}
