"use client";
import { Metadata } from "next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React from "react";

// can not be used with client component
// export const metadata: Metadata = {
//   title: "Authization screen",
// };

function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
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
        <div className="container mx-auto flex justify-between items-center">
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
