"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Login from "@/app/login/page";
const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { id: 1, name: "Home", pathname: "/" },
    { id: 2, name: "Products", pathname: "/products" },
  ];
  return (
    <div className=" shadow-sm ">
      <div className="max-w-[1500px] mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content flex flex-col  gap-4  rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      className={` font-medium ${
                        pathname === link.pathname ||
                        (pathname === "/" && link.pathname === "/home")
                          ? "text-black font-semibold border-b border-black"
                          : "text-[#776E6E]"
                      }`}
                      href={link.pathname}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center ml-2 md:ml-0 gap-2">
              <h1 className="font-semibold text-xl md:text-2xl">QuickBuy</h1>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal flex items-center gap-3 px-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    className={`font-medium ${
                      pathname === link.pathname ||
                      (pathname === "/" && link.pathname === "/home")
                        ? "text-black font-semibold "
                        : "text-[#776E6E]"
                    }`}
                    href={link.pathname}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end">
            <Link
              className="bg-black px-6 py-2 rounded-full text-white"
              href="/login"
            >
              Login
            </Link>
            {/* <Login/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;





//! quickbuybyubaid      QuickBuy