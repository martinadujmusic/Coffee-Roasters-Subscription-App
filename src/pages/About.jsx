import AboutQuality from "../components/AboutQuality";
import Commitment from "../components/Commitment";
import HeadQuarters from "../components/HeadQuarters";
import Hero from "../components/Hero";

function About() {
  return (
    <div>
      <Hero
        page="about"
        title="About Us"
        description="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
      />
      <Commitment />
      <AboutQuality />
      <HeadQuarters />
    </div>
  );
}

export default About;
