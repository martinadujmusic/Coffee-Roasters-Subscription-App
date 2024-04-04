import { collection } from "../../data";

function Collection() {
  return (
    <div className="mt-3 flex flex-col items-center gap-12 md:gap-8 md:mt-[-3.625rem] xl:flex-row xl:gap-[1.875rem] xl:-mt-16">
      {collection.map((item, i) => {
        return (
          <article
            key={i}
            className="max-w-[573px] flex flex-col items-center gap-6 md:flex-row md:gap-9 md:items-start xl:flex-col xl:items-center xl:gap-[4.5rem] xl:max-w-[255px]"
          >
            <img src={item.image} className="max-w-[200px] md:max-w-[255px]" />
            <div className="text-center md:text-left md:mt-[1.875rem] xl:text-center xl:mt-0">
              <h3 className="font-serif font-black text-1.5rem">{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Collection;
