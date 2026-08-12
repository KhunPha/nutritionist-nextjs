"use client";

import { menuItems } from "@/constants/menu";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="hidden bg-dark-green-shades-15 px-16 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <img src="logo.png" alt="Logo" className="w-[130px]" />

        <ul className="flex items-center space-x-2 text-green-shades-97">
          {menuItems.map((menu, index) => {
            return (
              <li key={index}>
                <Link
                  href={menu.href}
                  className={`px-2 py-2 text-[14px] font-semibold`}
                >
                  {menu.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <p className="text-[16px] font-semibold text-absolute-white">
            Go To Top
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-full bg-dark-green-shades-20 p-3 text-absolute-white"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
