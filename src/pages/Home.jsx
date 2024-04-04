import Collection from "../components/Collection";
import Hero from "../components/Hero";
import StepCards from "../components/StepCards";
import WhyChoose from "../components/WhyChoose";

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
        <div className="flex flex-col items-center xl:-mt-16">
          <h2 className="sr-only">Our collection</h2>
          <Collection />
        </div>
        <WhyChoose />
        <StepCards />
      </div>
    </main>
  );
}

export default Home;
