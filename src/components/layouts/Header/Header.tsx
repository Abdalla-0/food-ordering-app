import Link from "@/components/common/Link";
import { Routes } from "@/components/constants/enums";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header className="lg:py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href={Routes.ROOT} className="text-primary font-semibold text-2xl">🍕Pizza</Link>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
