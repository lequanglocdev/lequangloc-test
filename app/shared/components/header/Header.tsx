"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        <Link href={"/"}>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={120}
            height={50}
            priority
            className="object-contain"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {[
            { name: "Về chúng tôi", path: "/about" },
            { name: "Giải pháp", path: "/solution" },
            { name: "Tài nguyên", path: "/posts" },
            { name: "Liên hệ", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative px-3 py-2 text-sm ${
                isActive(item.path) ? "text-[#1AD598] " : "text-gray-700"
              }`}
            >
              {item.name}
              {isActive(item.path) && (
                <span className="absolute left-1/2 -bottom-1 w-2 h-2 bg-[#1AD598] rounded-full transform -translate-x-1/2"></span>
              )}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="default"
            className="w-[94px] flex items-center gap-2"
          >
            <Image
              src="/images/icon_country.png"
              alt="iconLanguage"
              width={20}
              height={20}
            />
            VI
            <MdKeyboardArrowDown />
          </Button>
          <Button variant="destructive" className="flex items-center gap-2">
            Trở Thành Khách Hàng
            <div className="w-[22px] h-[22px] bg-black rounded-full text-white flex justify-center items-center">
              <GoArrowUpRight />
            </div>
          </Button>
        </div>
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 flex flex-col items-center gap-4">
          {[
            { name: "Về chúng tôi", path: "/about" },
            { name: "Giải pháp", path: "/solution" },
            { name: "Tài nguyên", path: "/posts" },
            { name: "Liên hệ", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block w-full text-center py-2 ${
                isActive(item.path) ? "text-[#1AD598] " : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Button variant="default" className="w-full">
            <Image
              src="/images/icon_country.png"
              alt="iconLanguage"
              width={20}
              height={20}
            />
            VI
            <MdKeyboardArrowDown />
          </Button>
          <Button
            variant="destructive"
            className="w-full flex justify-center items-center gap-2"
          >
            Trở Thành Khách Hàng
            <div className="w-[22px] h-[22px] bg-black rounded-full text-white flex justify-center items-center">
              <GoArrowUpRight />
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};
