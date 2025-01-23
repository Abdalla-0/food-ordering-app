import Link from "@/components/common/Link";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import CartButton from "./HeaderEnd/CartButton";
import LangToggler from "./HeaderEnd/LangToggler";
import Navbar from "./Navbar/Navbar";

const Header = async () => {
  const locale = await getCurrentLocale();
  const { logo, navbar } = await getTrans(locale);
  return (
    <header className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="text-primary font-semibold text-2xl"
          >
            🍕 {logo}
          </Link>
          <Navbar translation={navbar} />
          <div className="flex gap-6 items-center ms-8">
            <CartButton />
            <LangToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
