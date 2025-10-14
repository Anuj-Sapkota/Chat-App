import Link from "next/link";
import React from "react";
import Image from "next/image";
import animatedLogo from "@/assets/animated/logo-animated.apng";

const AnimatedLogo = () => {
  return (
    <>
      <Link
        href="#"
        className="flex items-center mb-6 text-3xl font-semibold text-gray-900 dark:text-white"
      >
        <Image
          className="w-8 h-8 mr-2 select-none"
          src={animatedLogo}
          alt="logo"
        />
        Chat
      </Link>
    </>
  );
};

export default AnimatedLogo;
