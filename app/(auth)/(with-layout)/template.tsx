"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function TemplateLayout({ children }: Props) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  //   console.log(router);
  const navLinks = [
    { href: "/login", text: "Login" },
    { href: "/signup", text: "Signup" },
    { href: "/forgot-password", text: "Forgot Password" },
  ];

  return (
    <div className="border-red-500 border-2">
      <h1>Im tempplate layout : append in layout</h1>

      <input
        type="text"
        id="first_name"
        onChange={(e) => setInput(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="John"
        required
      />

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

      {children}
    </div>
  );
}
