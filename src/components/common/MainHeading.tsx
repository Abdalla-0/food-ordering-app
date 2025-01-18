const MainHeading = ({
  title,
  subTitle,
  className,
}: {
  title: string;
  subTitle: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <span className="uppercase text-accent font-semibold leading-4">
        {subTitle}
      </span>
      <h2 className="text-primary font-bold text-4xl italic">{title}</h2>
    </div>
  );
};

export default MainHeading;
