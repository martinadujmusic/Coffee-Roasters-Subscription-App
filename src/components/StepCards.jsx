import { steps } from "../../data";
import StepCard from "./StepCard";

function StepCards() {
  return (
    <div>
      {steps.map((step, i) => {
        return (
          <StepCard
            key={i}
            number={i + 1}
            title={step.title}
            description={step.description}
          />
        );
      })}
    </div>
  );
}

export default StepCards;
