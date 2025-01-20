import { Routes } from "@/constants/enums";
import MainHeading from "@/components/common/MainHeading";
// import { getCurrentLocale } from '@/lib/getCurrentLocale';
// import getTrans from '@/lib/translation';

const About = () => {
  //   const locale = await getCurrentLocale();
  //   const { home } = await getTrans(locale);
  //   const { about } = home;
  return (
    <section className="section-gap" id={Routes.ABOUT}>
      <div className="container text-center">
        <MainHeading subTitle={"Our Story"} title={"About"} />
        <div className="text-accent max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Our journey with pizza began with a great passion to provide the
            best food that combines delicious taste and high quality. Since day
            one, our goal has been to turn every pizza order into a unique
            experience, as we carefully select every ingredient and make sure to
            present it in the best possible way.
          </p>
          <p>
            In our kitchen, we serve only the best. We use the finest fresh
            ingredients from our daily made dough to our carefully blended rich
            sauces, and we select premium cheeses and delicious toppings to
            satisfy all tastes.
          </p>
          <p>
            Our vision is to be the number one choice for pizza lovers. We
            always strive to provide a convenient and fast ordering experience
            while maintaining the highest quality standards. We are here to
            serve you, whether you are looking for a quick meal or a party full
            of pizza.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
