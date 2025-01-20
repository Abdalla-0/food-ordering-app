import Link from "@/components/common/Link";
import { Routes } from "@/constants/enums";
import Navbar from "./Navbar/Navbar";
import CartButton from "./HeaderEnd/CartButton";

const Header = () => {
  return (
    <header className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link
            href={Routes.ROOT}
            className="text-primary font-semibold text-2xl"
          >
            🍕Pizza
          </Link>
          <Navbar />
          <CartButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
