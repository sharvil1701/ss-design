import React from "react";
import Logo from "./../assets/images/ssd-logo.png"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-primary sticky top-0 z-50">
      <div className="layout-padding-container mx-auto h-16">
        <nav className="flex items-center justify-between h-full">
            <div></div>
            <a href="/" className="text-foreground font-bold text-lg">
              <Image src={Logo} alt="Logo" width={100} height={120} />
            </a>
          <div className="flex items-center gap-2">
            <button className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-muted-foreground">
              Home
            </a>
            <a href="#" className="hover:text-muted-foreground">
              Services
            </a>
            <a href="#" className="hover:text-muted-foreground">
              About
            </a>
            <a href="#" className="hover:text-muted-foreground">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}