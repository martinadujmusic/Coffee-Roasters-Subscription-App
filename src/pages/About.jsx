import AboutQuality from "../components/about/AboutQuality";
import Commitment from "../components/about/Commitment";
import HeadQuarters from "../components/about/HeadQuarters";
import Hero from "../components/common/Hero";

function About() {
  return (
    <main className="px-6 mb-[7.5rem] md:px-10 md:mb-36 xl:mb-[10.5rem]">
      <div className="max-w-7xl mx-auto flex flex-col gap-[7.5rem] md:gap-36 xl:gap-[10.5rem]">
        <Hero
          page="about"
          title="About Us"
          description="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
        />
        <Commitment />
        <AboutQuality />
        <HeadQuarters />
      </div>
    </main>
  );
}

export default About;
