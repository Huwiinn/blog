"use client";
import React, { useEffect, useState } from "react";
import { DarkToggle } from "./Dark-toggle";
import { Edit02Icon, Home02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //   console.log("isScrolled : ", isScrolled);
  return (
    <header
      className={`
    flex items-center justify-between bg-neutral-100 text-black h-[62px] px-4 w-full
    sticky top-0 left-0 right-0 z-50 transition-all duration-200
    ${isScrolled && "drop-shadow-md dark:drop-shadow-stone-500"}
    dark:bg-stone-700 dark:text-white
    `}
    >
      <div className="flex items-center gap-2">
        <Link href="/">
          <HugeiconsIcon icon={Home02Icon} className="size-6" />
        </Link>
        {/* ⬇️ 내가 로그인 했을때만 노출 or 삭제 */}
        <Link href="/create">
          <HugeiconsIcon icon={Edit02Icon} className="size-6" />
        </Link>
      </div>
      <DarkToggle />
    </header>
  );
};
