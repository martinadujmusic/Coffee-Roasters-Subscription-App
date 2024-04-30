function Hero({
  page,
  biggerHeroSection,
  largeHeading,
  title,
  description,
  children,
}) {
  return (
    <section
      className={`${page}-hero bg-cover px-6 flex flex-col justify-center items-center rounded-[10px] md:px-[3.625rem] md:items-start xl:px-[5.25rem] ${
        biggerHeroSection
          ? "min-h-[500px] xl:min-h-[600px]"
          : "min-h-[400px] xl:min-h-[450px]"
      } `}
    >
      <div className="text-neutral-100 text-center max-w-[400px] md:text-left xl:max-w-[500px]">
        <h1
          className={`mb-6 font-fraunces font-black text-balance 
        ${
          largeHeading
            ? "text-[2.5rem] leading-10 font-black md:text-5xl xl:text-7xl xl:leading-7xl xl:mb-8"
            : "text-[1.75rem] leading-7 md:text-3xl md:leading-10 xl:text-[2.5rem] xl:leading-[2.5rem]"
        }`}
        >
          {title}
        </h1>
        <p
          className={`text-neutral-100 xl:max-w-[440px] ${
            children ? "mb-10 xk:mb-14" : ""
          }`}
        >
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}

export default Hero;
