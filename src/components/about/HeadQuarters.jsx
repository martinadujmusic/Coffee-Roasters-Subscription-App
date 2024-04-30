import { headquarters } from "../../../data";

function HeadQuarters() {
  return (
    <section className="xl:ml-[5.25rem]">
      <span className="font-fraunces font-black text-center text-light-gray-blue text-[1.5rem] leading-[1.5rem] xl:text-left ">
        Our headquarters
      </span>
      <div className="mt-[4.5rem] flex flex-col gap-20 text-[1rem] leading-[1.5 rem] md:flex-row md:gap-[0.625rem] xl:gap-24">
        {headquarters.map((location, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center md:flex-1 md:items-start xl:max-w-[285px]"
            >
              <img src={location.icon} className="h-[50px]" />
              <h3 className="mt-12 font-fraunces font-black text-dark-gray-blue text-[1.5rem] leading-[2rem] md:text-[1.75] xl:mt-11">
                {location.location}
              </h3>
              <div className="mt-[1.375rem] text-center md:text-left xl:mt-6 *:block">
                <span>{location.information.street}</span>
                <span>{location.information.city}</span>
                <span>{location.information.region}</span>
                <span>{location.information.phone}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HeadQuarters;
