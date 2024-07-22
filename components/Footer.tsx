import React from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full h-20 p-2 z-10 flex gap-4 md:gap-8 justify-center items-center bg-background/60 backdrop-blur-xs shadow-foreground shadow-sm transition-shadow-bg duration-300">
      <Link
        target="_blank"
        href={"/CV.pdf"}
        className="hover:bg-gray-100 dark:hover:bg-black rounded-full p-4"
      >
        <span className="text-fs-300 flex items-center gap-1">
          CV <Download aria-label="Download CV Icon" size={18} />
        </span>
      </Link>
      <Link
        href="mailto:danny.boy.developer@gmail.com"
        className="hover:bg-gray-100 dark:hover:bg-black rounded-full p-4"
      >
        <Mail aria-label="Mail Icon" />
      </Link>
    </footer>
  );
}
