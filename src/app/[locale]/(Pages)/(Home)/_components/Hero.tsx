import Link from "@/components/common/Link";
import { Languages, Routes } from "@/constants/enums";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import pizzaImage from './../../../../../../public/assets/images/pizza.png';

const Hero = async () => {
  const locale = await getCurrentLocale();

  const { hero } = (await getTrans(locale)).home;

  return (
    <section className="section-gap">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:py-12 flex flex-col gap-4">
            <h1 className="text-4xl font-semibold">{hero.title}</h1>
            <p>{hero.description}</p>
            <div className="flex items-center gap-4">
              <Link
                href={`/${Routes.CATEGORIES}`}
                className={`${buttonVariants({
                  size: "lg",
                })} space-x-2 !px-4 !rounded-full uppercase`}
              >
                {hero.orderNow}
                <ArrowRightCircle
                  className={`!w-5 !h-5 ${
                    locale === Languages.ARABIC && "rotate-180"
                  }`}
                />
              </Link>
              <Link
                href={`/${Routes.ABOUT}`}
                className="flex gap-2 items-center text-black hover:text-primary duration-200 transition-colors font-semibold"
              >
                {hero.learnMore}
                <ArrowRightCircle
                  className={`!w-5 !h-5 ${
                    locale === Languages.ARABIC && "rotate-180"
                  }`}
                />
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <Image
              src={pizzaImage}
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
