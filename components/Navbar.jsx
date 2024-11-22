import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-2 shadow-sm border-b-[1px]">
      <div className="ml-10">
        <Image src="/logo2.png" alt="logo" width={100} height={100} />
      </div>
      <div className="md:flex gap-4 hidden">
        <h2>
          <button variant="link">
            <span className="text-xl">Home</span>
          </button>
        </h2>
        <h2>
          <button variant="link">
            <span className="text-xl">History</span>
          </button>
        </h2>
        <h2>
          <button variant="link">
            <span className="text-xl">Contact Us</span>
          </button>
        </h2>
      </div>
      <div className="mr-10">
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
