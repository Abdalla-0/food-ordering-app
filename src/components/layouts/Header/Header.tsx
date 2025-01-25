import Link from "@/components/common/Link";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import CartButton from "./HeaderEnd/CartButton";
import LangToggler from "./HeaderEnd/LangToggler";
import Navbar from "./Navbar/Navbar";
import AuthButtons from "./AuthButtons/AuthButtons";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";

const Header = async () => {
  const initialSession = await getServerSession(authOptions);
  const locale = await getCurrentLocale();
  const translations = await getTrans(locale);
  return (
    <header className="py-5">
      <div className="container">
        <div className="flex items-center justify-between gap-6 lg:gap-10">
          <Link
            href={`/${locale}`}
            className="text-primary font-semibold text-2xl"
          >
            🍕 {translations.logo}
          </Link>
          <Navbar translations={translations} initialSession={initialSession}/>
          <div className="flex items-center gap-6 flex-1 justify-end">
            <div className="hidden lg:flex lg:items-center lg:gap-6">
              <AuthButtons
                translations={translations}
                initialSession={initialSession}
              />
              <CartButton />
            </div>
            <LangToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
