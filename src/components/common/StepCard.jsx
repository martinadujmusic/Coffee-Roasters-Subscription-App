function StepCard({ number, title, description, isHome }) {
  return (
    <article className="text-center group md:text-left md:flex-1 xl:max-w-[285px]">
      <div className="hidden items-center md:flex mb-12 relative xl:mb-[4.25rem] xl:max-w-2xl w-full">
        <div
          className={`group size-8 shrink-0 rounded-full border-2 border-dark-cyan z-10 ${
            isHome ? "bg-very-light-yellow" : "bg-white"
          }`}
        ></div>
        <div
          className={
            "hidden group-first:block group-last:block absolute left-4 w-screen h-[2px] bg-transparent"
          }
        ></div>
      </div>

      <span className="font-serif font-black text-[4.5rem] leading-[4.5rem] text-pale-orange">
        {String(number).padStart(2, "0")}
      </span>
      <h3 className="mt-6 text-[1.75rem] leading-[1.5rem] font-serif font-black md:min-h-16 md:mt-10 md:max-w-[200px] xl:text-[2rem] xl:leading-[2rem]">
        {title}
      </h3>
      <p className="mt-6 md:mt-10">{description}</p>
    </article>
  );
}

export default StepCard;
