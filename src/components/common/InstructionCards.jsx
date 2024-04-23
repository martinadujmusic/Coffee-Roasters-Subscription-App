import { instructions } from "../../../data";
import InstructionCard from "./InstructionCard";

function InstructionCards() {
  return (
    <div className="flex flex-col gap-14 md:flex-row md:gap-[0.625rem] xl:gap-24">
      {instructions.map((instruction, i) => {
        return (
          <InstructionCard
            key={i}
            number={i + 1}
            title={instruction.heading}
            description={instruction.description}
          />
        );
      })}
    </div>
  );
}

export default InstructionCards;
