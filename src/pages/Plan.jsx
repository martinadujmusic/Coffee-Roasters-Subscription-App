import Hero from "../components/Hero";
import StepCards from "../components/StepCards";

function Plan() {
  return (
    <div>
      <Hero
        page="plan"
        title="Create a plan"
        description="Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
        biggerHeroSection
        largeHeading
      />
      <StepCards />
    </div>
  );
}

export default Plan;
