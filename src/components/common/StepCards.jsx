import { steps } from "../../../data";
import StepCard from "./StepCard";

function StepCards() {
  return (
    <div className="flex flex-col gap-14 md:flex-row md:gap-[0.625rem] xl:gap-24">
      {steps.map((step, i) => {
        return (
          <StepCard
            key={i}
            number={i + 1}
            title={step.heading}
            description={step.description}
          />
        );
      })}
    </div>
  );
}

export default StepCards;
