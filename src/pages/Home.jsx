import Collection from "../components/Collection";
import Hero from "../components/Hero";
import StepCards from "../components/StepCards";
import WhyChoose from "../components/WhyChoose";

import imgOurCollectionMobile from "../../assets/home/mobile/our-collection-heading-mobile.svg";
import imgOurCollectionTablet from "../../assets/home/tablet/our-collection-heading-tablet.svg";
import imgOurCollectionDesktop from "../../assets/home/desktop/our-collection-heading.svg";

function Home() {
  return (
    <main className="px-6 mb-[7.5rem] md:px-10 md:mb-36 xl:mb-[12.5rem]">
      <div className="max-w-7xl mx-auto flex flex-col gap-[7.5rem] md:gap-36 xl:gap-[12.5rem]">
        <Hero
          page="home"
          title="Great coffee made simple."
          description="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
          biggerHeroSection
          largeHeading
        />

        <section className="flex flex-col items-center xl:-mt-16">
          <h2 className="sr-only">Our collection</h2>

          <picture>
            <source
              srcSet={imgOurCollectionDesktop}
              media="(min-width:1280px)"
            />
            <source srcSet={imgOurCollectionTablet} media="(min-width:768px)" />
            <img
              src={imgOurCollectionMobile}
              alt="Our collection text"
              aria-hidden="true"
            />
          </picture>

          <Collection />
        </section>

        <section></section>
        <WhyChoose />
        <StepCards isHome />
      </div>
    </main>
  );
}

export default Home;
