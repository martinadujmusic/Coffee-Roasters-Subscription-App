import qualityImage from "../../assets/about/desktop/image-quality.jpg";
function AboutQuallity() {
  return (
    <div>
      <p>
        Although we work with growers who pay close attention to all stages of
        harvest and processing, we employ, on our end, a rigorous quality
        control program to avoid over-roasting or baking the coffee dry. Every
        bag of coffee is tagged with a roast date and batch number. Our goal is
        to roast consistent, user-friendly coffee, so that brewing is easy and
        enjoyable.
      </p>
      <img src={qualityImage} />
    </div>
  );
}

export default AboutQuallity;
