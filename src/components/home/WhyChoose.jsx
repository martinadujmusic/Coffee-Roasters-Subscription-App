import { whyChoose } from "../../../data";
function WhyChoose() {
  return (
    <section className="bg-dark-gray-blue text-very-light-yellow px-6 pt-16 rounded-[10px] flex flex-col gap-16 mb-[37.25rem] md:px-[3.625rem] md:pt-14 md:gap-[4.375rem] md:mb-[18.125rem] xl:pt-[6.25rem] xl:px-[5.25rem] xl:gap-[5.375rem] xl:mb-[9.375rem]">
      <div className="text-center max-w-[540px] self-center">
        <h2 className="font-serif font-black text-[1.75rem] leading-none md:text-[2.25rem] md:leading-[4.5rem] xl:text-[2.5rem] ">
          Why choose us?
        </h2>
        <p className="mt-6 text-very-light-yellow xl:mt-8">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>

      <div className="flex flex-col gap-6 mb-[-37.25rem] md:mb-[-18.125rem] xl:flex-row xl:justify-between xl:mb-[-9.375rem]">
        {whyChoose.map((item, i) => {
          return (
            <div
              key={i}
              className="bg-dark-cyan hover:bg-pale-orange rounded-lg flex flex-col justify-between items-center gap-14 px-3 pt-[4.5rem] pb-[3.25rem] min-h-[383px] md:flex-row md:min-h-0 md:max-w-[700px] md:self-center md:py-10 md:pl-[4.375px] md:pr-12 xl:flex-col xl:max-w-[350px] xl:pt-[4.5rem] xl:px-12 xl:pb-12 xl:flex-1 xl:self-stretch"
            >
              <img src={item.image} className="md:w-[56px] xl:w-[72px]" />

              <div className="text-center md:flex-1 md:text-left xl:text-center xl:flex-grow-0">
                <h3 className="font-serif font-black text-[1.5rem] leading-[1.5rem]">
                  {item.heading}
                </h3>
                <p className="max-w-[212px] mt-6 md:max-w-none md:mt-[1.125rem] xl:mt-6">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyChoose;
