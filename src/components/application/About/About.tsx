import { Routes } from "@/constants/enums";
import MainHeading from "@/components/common/MainHeading";
import getTrans from "@/lib/translation";
import { getCurrentLocale } from "@/lib/getCurrentLocale";

const About = async () => {
  const locale = await getCurrentLocale();
  const { about } = (await getTrans(locale)).home;

  return (
    <section className="section-gap" id={Routes.ABOUT}>
      <div className="container text-center">
        <MainHeading subTitle={about.ourStory} title={about.aboutUs} />
        <div className="text-accent max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>{about.descriptions.one}</p>
          <p>{about.descriptions.two}</p>
          <p>{about.descriptions.three}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
