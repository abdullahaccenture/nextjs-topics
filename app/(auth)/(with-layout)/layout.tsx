"use client";
import { Metadata } from "next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React, { useState } from "react";

// can not be used with client component
// export const metadata: Metadata = {
//   title: "Authization screen",
// };

function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [input, setInput] = useState("");
  //   console.log(router);
  const navLinks = [
    { href: "/login", text: "Login" },
    { href: "/signup", text: "Signup" },
    { href: "/forgot-password", text: "Forgot Password" },
  ];

  const onHandleClickForgotpassword = () => {
    router.replace("/");
    // router.forward();
    // router.back( );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="container mx-auto flex flex-col justify-between items-center">
          <Link href="/" className="text-lg font-semibold">
            MyApp
          </Link>

          <button
            onClick={onHandleClickForgotpassword}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Go to home page
          </button>
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              onChange={(e) => setInput(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>

          <div>
            {navLinks.map((link) => {
              const isActive = pathname == link.href;
              // replace: dont remember the history
              return (
                <Link
                  replace
                  key={link.href}
                  href={link.href}
                  className={` ${
                    isActive ? "text-blue-900" : "text-red-300"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  {link.text}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            from auth layout: My nextjs learning project
          </h2>
        </div>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
