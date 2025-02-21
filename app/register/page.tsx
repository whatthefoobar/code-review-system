"use client";
import { useState } from "react";
// import { useRouter } from "next/router";

const Register = () => {
  //   const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    console.log(username, email, password);

    // Request to register the user
    // const response = await fetch("/api/auth/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username, email, password }),
    // });

    // if (response.ok) {
    //   router.push("/login"); // Redirect to login page after successful registration
    // } else {
    //   const data = await response.json();
    //   setError(data.message || "Something went wrong.");
    // }

    // setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border  border-gray-300 rounded text-[#171717]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full p-2 text-white bg-blue-500 rounded ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 hover:underline">
          Login here
        </a>
      </p>
    </div>
  );
};

export default Register;
