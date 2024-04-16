import imgCommitmentMobile from "../../../assets/about/mobile/image-commitment.jpg";
import imgCommitmentTablet from "../../../assets/about/tablet/image-commitment.jpg";
import imgCommitmentDesktop from "../../../assets/about/desktop/image-commitment.jpg";

function Commitment() {
  return (
    <div className="flex flex-col items-center gap-12 md:flex-row md:gap-[4.375rem] xl:justify-center xl:gap-[7.75rem]">
      <picture className="shrink-0">
        <source srcSet={imgCommitmentDesktop} media="(min-width: 1280px)" />
        <source srcSet={imgCommitmentTablet} media="(min-width: 768px)" />
        <img src={imgCommitmentMobile} className="rounded-lg" />
      </picture>

      <div className="text-center md:text-left xl:max-w-[540px]">
        <h2 className="text-[2.25rem] leading-[3rem] font-serif font-black xl:text-[3rem]">
          Our commitment
        </h2>
        <p className="text-dark-gray-blue mt-[1.875rem] xl:mt-8">
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </div>
  );
}

export default Commitment;
