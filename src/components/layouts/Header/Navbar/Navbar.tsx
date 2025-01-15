import Link from "@/components/common/Link";
import links from "./Links";
import { Pages, Routes } from "@/components/constants/enums";
import { buttonVariants } from "@/components/ui/button";
const Navbar = () => {
  return (
    <nav className="flex flex-1 justify-end">
      <ul
        className={`fixed lg:static top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10`}
      >
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
