import MainHeading from "@/components/common/MainHeading";

const Contact = () => {
  // const locale = await getCurrentLocale();
  // const { home } = await getTrans(locale);
  // const { contact } = home;
  return (
    <section className="section-gap">
      <div className="container text-center">
        <MainHeading subTitle={"Don'tHesitate"} title={"Contact Us"} />
        <div className="mt-8">
          <a className="text-4xl underline text-accent" href="tel:+2012121212">
            +2012121212
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
