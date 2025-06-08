
import React from "react";
// import { Github, Twitter, Linkedin, Mail } from "lucide-react";


const Footer = () => {
  return (
    <footer className="mt-16 pb-8 px-4 md:px-6 lg:px-12 max-w-full md:max-w-[73%] mx-auto w-full">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold text-lg mb-2">Connect with me</h3>
            <p className="text-muted-foreground">
              Let's build something amazing together.
            </p>
          </div>
          <div className="flex space-x-4">
            <span className="font-semibold text-md">Dibuat dengan</span>
            <span
              className="animate-pulse text-red-500 text-xl"
              role="img"
              aria-label="love"
            >
              ❤️
            </span>
          </div>
        </div>
        <div className="border-t pt-4">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} NovitaIntanPermata. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
