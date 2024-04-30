import Collection from "../components/home/Collection.jsx";
import WhyChoose from "../components/home/WhyChoose.jsx";
import Hero from "../components/common/Hero.jsx";
import InstructionCards from "../components/common/InstructionCards.jsx";
import Button from "../components/common/Button.jsx";

import imgOurCollectionMobile from "/assets/home/mobile/our-collection-heading-mobile.svg";
import imgOurCollectionTablet from "/assets/home/tablet/our-collection-heading-tablet.svg";
import imgOurCollectionDesktop from "/assets/home/desktop/our-collection-heading.svg";

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
        >
          <Button to={"plan"}>Create your plan</Button>
        </Hero>

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

        <WhyChoose />

        <section className="xl:max-w-[1045px] xl:ml-[5.25rem] overflow-hidden">
          <h2 className="text-[1.5rem] leading-[1.5rem] font-fraunces font-black text-center text-very-light-yellow mb-20 md:text-left md:mb-10 xl:mb-20">
            How it works
          </h2>
          <InstructionCards />
          <div className="mt-20 flex justify-center md:justify-start md:mt-11 xl:mt-16">
            <Button to="/plan">Create your plan</Button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
