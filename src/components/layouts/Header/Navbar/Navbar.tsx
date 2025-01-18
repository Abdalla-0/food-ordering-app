"use client";
import Link from "@/components/common/Link";
import links from "./Links";
import { Pages, Routes } from "@/constants/enums";
import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { Menu, XIcon } from "lucide-react";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="flex flex-1 justify-end">
      <Button
        variant="secondary"
        size="sm"
        className="lg:hidden"
        onClick={() => setOpenMenu(true)}
      >
        <Menu className="!w-6 !h-6" />
      </Button>
      <ul
        className={`fixed lg:static ${
          openMenu ? "left-0 z-50" : "-left-full"
        } top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10`}
      >
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-10 right-10 lg:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <XIcon className="!w-6 !h-6" />
        </Button>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className={`font-semibold ${
                link.href === `${Routes.AUTH}/${Pages.LOGIN}`
                  ? `${buttonVariants({ size: "lg" })} !px-8 !rounded-full`
                  : `text-accent hover:text-primary duration-200 transition-colors`
              }  `}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
