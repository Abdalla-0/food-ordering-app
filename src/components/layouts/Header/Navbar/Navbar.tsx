"use client";
import Link from "@/components/common/Link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Pages, Routes } from "@/constants/enums";
import { Menu, XIcon } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
const Navbar = ({
  translation,
}: {
  translation: { [key: string]: string };
}) => {
  const links = [
    {
      id: crypto.randomUUID(),
      title: translation.categories,
      href: `/${Routes.CATEGORIES}`,
    },
    {
      id: crypto.randomUUID(),
      title: translation.about,
      href: `/${Routes.ABOUT}`,
    },
    {
      id: crypto.randomUUID(),
      title: translation.contact,
      href: `/${Routes.CONTACT}`,
    },
    {
      id: crypto.randomUUID(),
      title: "Login",
      href: `${Routes.AUTH}/${Pages.LOGIN}`,
    },
  ];
  const { locale } = useParams();
  const pathname = usePathname();
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
              href={`/${locale}${link.href}`}
              className={`font-semibold ${
                pathname.startsWith(`/${locale}${link.href}`)
                  ? "text-primary"
                  : "text-accent"
              } ${
                link.href === `${Routes.AUTH}/${Pages.LOGIN}`
                  ? `${buttonVariants({ size: "lg" })} !px-8 !rounded-full`
                  : `hover:text-primary duration-200 transition-colors`
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
