import qualityImgMobile from "/assets/about/mobile/image-quality.jpg";
import qualityImgTablet from "/assets/about/tablet/image-quality.jpg";
import qualityImgDesktop from "/assets/about/desktop/image-quality.jpg";

function AboutQuallity() {
  return (
    <section className="flex flex-col items-center gap-16 text-very-light-yellow px-6 pb-[3.75rem] rounded-[10px] mt-[68px]  md:pb-[4.25rem] md:mt-40 xl:flex-row-reverse xl:px-[5.25rem] xl:pb-[5.5rem] xl:mb-[5.5rem] about-quality">
      <picture>
        <source srcSet={qualityImgDesktop} media="(min-width: 1280px)" />
        <source srcSet={qualityImgMobile} media="(min-width: 768px)" />
        <img
          src={qualityImgTablet}
          className="rounded-lg mt-[-4.875rem] md:-mt-40 xl:mt-[-5.5rem]"
          alt="Cup of coffee on a table."
        />
      </picture>

      <article className="text-center max-w-[540px] xl:text-left">
        <h2 className="text-2xl font-fraunces font-black mx-5 md:text-[2rem] md:leading-[2.5rem] xl:text-[2.5rem]">
          Uncompromising quality
        </h2>
        <p className="text-very-light-yellow mx-5 mt-6 xl:mt-8">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </article>
    </section>
  );
}

export default AboutQuallity;
