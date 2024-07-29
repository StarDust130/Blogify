"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const UserVerify = ({ params }: { params: { slug: string } }) => {
  const [token, setToken] = useState(params.slug);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const verifyUser = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/users/verifyemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      setVerified(true);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="text-center">
        {!verified ? (
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">
              Verify Your Email
            </h1>
            {loading && <div className="text-lg">Loading...</div>}
            {error && <div className="text-red-500">{error}</div>}
            <Button
              onClick={verifyUser}
              disabled={loading}
              className="px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Verify
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl font-bold text-green-500">
              Email Verified!
            </h1>
            <p className="text-lg text-gray-700">
              You can now log in to your account.
            </p>
            <div className="w-16 h-16 bg-green-500 rounded-full animate-bounce"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserVerify;
