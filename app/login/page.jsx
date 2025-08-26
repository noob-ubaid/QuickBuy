"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res?.error) {
      setError(res.error || "Login failed");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto px-4 md:px-0">
      <div className="flex items-center justify-center my-20">
        <div className="card-body dark:bg-white max-w-md border border-[#0F0F0F26] rounded-md">
          <h2 className="text-2xl font-semibold mt-4 mb-2 border-b border-b-[#0F0F0F26] pb-4 text-center">
            Login Your Account
          </h2>
          <form onSubmit={handleLogin}>
            {error && (
              <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
            )}

            <label className="label text-[14px] font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full border border-gray-300 rounded-md mb-2"
              placeholder="Email"
              required
            />

            <label className="label text-[14px] font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input w-full border border-gray-300 rounded-md mb-2"
              placeholder="Password"
              required
            />

            <div className="mt-2 flex justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white font-sans font-medium py-2 rounded-md mt-4 w-full"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="text-center text-[14px] mt-2 font-medium">
              Don't have an account?{" "}
              <Link href="/register" className="text-red-400 underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
