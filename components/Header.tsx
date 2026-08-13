"use client";

import { menuItems } from "@/constants/menu";
import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full bg-dark-green-shades-15 fixed px-3 z-10">
      <div className="mx-auto relative max-w-[1596px] my-3 bg-dark-green-shades-20 rounded-md p-2 flex justify-center items-center space-x-3 overflow-hidden">
        <img src="ball.png" alt="Ball" />
        <p className="text-[13px] md:text-[18px] font-medium text-absolute-white">
          Join Our Personalized Nutrition Demo For Free
        </p>
        <ArrowRight size={24} color="#FFF" />

        <img
          src="abstract_design.png"
          alt="abstract_design_left"
          className="hidden md:block absolute md:w-[154px] md:h-[60px] lg:w-[174px] lg:h-[80px] xl:w-[194px] xl:h-[100px] left-10"
        />
        <img
          src="abstract_design.png"
          alt="abstract_design_right"
          className="hidden md:block absolute md:w-[154px] lg:h-[60px] lg:w-[174px] lg:h-[80px] xl:w-[194px] xl:h-[100px] right-10"
        />
      </div>
      <hr className="text-dark-green-shades-25" />
      <div className="mx-auto max-w-[1596px] py-5 mx-3 flex items-center justify-between">
        <Link href={"/"}>
          <img src="logo.png" alt="Logo" className="w-[147px]" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center gap-3">
          <ul className="flex items-center space-x-2 text-green-shades-97">
            {menuItems.map((menu, index) => {
              const isActive = pathname == menu.href;

              return (
                <li key={index}>
                  <Link
                    href={menu.href}
                    className={`px-2 py-2 text-[14px] ${ isActive ? "text-green-shades-70" : "" } font-semibold`}
                  >
                    {menu.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          <motion.button 
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="text-[14px] font-semibold text-grey-shades-15 px-4 py-4 rounded-md bg-green-shades-70 cursor-pointer"> 
            Contact Us
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <Menu size={25} className="block md:hidden text-green-shades-70" />
      </div>
      <hr className="text-dark-green-shades-25" />
    </header>
  );
};

export default Header;
