import Link from "@/components/common/Link";
import { Routes } from "@/constants/enums";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="section-gap">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:py-12 flex flex-col gap-4">
            <h1 className="text-4xl font-semibold">Slice Into Happiness</h1>
            <p>
              Carving pizza? we&apos;ve got you covered with fresh ingredients,
              endless flavors, fastest delivery, your perefect slice just a tap
              away!
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={`/${Routes.MENU}`}
                className={`${buttonVariants({
                  size: "lg",
                })} space-x-2 !px-4 !rounded-full uppercase`}
              >
                Order Now
                <ArrowRightCircle className={`!w-5 !h-5`} />
              </Link>
              <Link
                href={`/${Routes.ABOUT}`}
                className="flex gap-2 items-center text-black hover:text-primary duration-200 transition-colors font-semibold"
              >
                Learn More
                <ArrowRightCircle className={`!w-5 !h-5`} />
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <Image
              src={"/assets/images/pizza.png"}
              alt="Hero pizza image"
              fill
              loading="eager"
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
