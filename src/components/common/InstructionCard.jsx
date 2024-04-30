function InstructionCard({ number, title, description }) {
  return (
    <article className="text-center group md:text-left md:flex-1 xl:max-w-[295px]">
      <span className="font-fraunces font-black text-[4.5rem] leading-[4.5rem] text-pale-orange">
        {String(number).padStart(2, "0")}
      </span>
      <h3 className="mt-6 text-[1.75rem] leading-[1.5rem] font-fraunces font-black md:min-h-16 md:mt-10 md:max-w-[200px] xl:text-[2rem] xl:leading-[2rem]">
        {title}
      </h3>
      <p className="mt-6 md:mt-10">{description}</p>
    </article>
  );
}

export default InstructionCard;
