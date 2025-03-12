import { useState } from "react";
import { auth, sendPasswordResetEmail } from "../firebase";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Check your email for the reset link.");
    } catch (e) {
      setMessage("Error sending reset email. Try again." + e);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
        {message && (
          <p className="text-green-600 text-sm text-center">{message}</p>
        )}
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Send Reset Email
          </button>
        </form>
        <Link to="/home" className="mt-4 text-blue-500">
          Back to Sign In
        </Link>
      </div>
    </div>
  );
}
