import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="my-20  px-4 md:px-0">
      <div className="flex items-center justify-center">
        <div className="card-body max-w-md border dark:bg-white border-[#0F0F0F26] rounded-md">
          <h2 className="text-2xl font-semibold mt-4 mb-2 border-b border-b-[#0F0F0F26] pb-4 text-center">
            Register Your Account
          </h2>

          <form>
            <label className="label text-[14px] font-medium mb-1">Name</label>
            <input
              type="text"
              className="input w-full border border-gray-300 rounded-md"
              placeholder="Enter your name "
            />

            <label className="label text-[14px] mt-2 font-medium mb-1">
              Enter Your Photo URL
            </label>
            <input
              type="text"
              placeholder="Enter your photo url"
              className="input w-full border border-gray-300 rounded-md"
            />

            <label className="label text-[14px] mt-2 font-medium mb-1">
              Email
            </label>
            <input type="email" className="input w-full border border-gray-300 rounded-md" placeholder="Email" />

            <label className="label text-[14px] mt-2 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="input w-full border border-gray-300 rounded-md"
              placeholder="Password"
            />

            <button
              type="submit"
              className="bg-black text-white font-sans font-medium py-2 rounded-md mt-4 w-full"
            >
              Register
            </button>

            <p className="text-center text-[14px] mt-2 font-medium">
              Already have an account?{" "}
              <Link href="/login" className="text-red-400 underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
