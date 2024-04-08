import Hero from "../components/Hero";
import StepCards from "../components/StepCards";

function Plan() {
  return (
    <main className="flex flex-col gap-[7.5rem] mb-[7.5rem] md:gap-36 md:mb-36 xl:gap-[10.5rem] xl:mb-[10.5rem]">
      <div className="px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Hero
            page="plan"
            title="Create a plan"
            description="Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
            biggerHeroSection
            largeHeading
          />
        </div>
      </div>
      <section className="px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="px-6 py-20 rounded-[10px] bg-cover text-red-100 overflow-hidden md:px-10 md:pt-24 md:pb-[4.375rem] xl:px-[5.25rem] xl:py-[6.25rem] bg-sky-900 ">
            <StepCards />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Plan;
