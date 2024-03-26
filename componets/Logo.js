import Link from "next/link";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="lg:flex">
      <Link href="/">
        <Image
          className="h-6 w-auto"
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={24}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
