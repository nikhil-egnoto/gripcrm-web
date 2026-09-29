"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={12}
      containerStyle={{
        top: 24,
        right: 24,
        zIndex: 99999,
      }}
      toastOptions={{
        duration: 4000,
        style: {
          background: "#1e1e24",
          color: "#ffffff",
          fontSize: "14px",
          fontWeight: 500,
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3)",
          padding: "12px 18px",
        },
        success: {
          duration: 4000,
          iconTheme: {
            primary: "#10b981",
            secondary: "#ffffff",
          },
        },
        error: {
          duration: 4500,
          iconTheme: {
            primary: "#ef4444",
            secondary: "#ffffff",
          },
        },
      }}
    />
  );
}
