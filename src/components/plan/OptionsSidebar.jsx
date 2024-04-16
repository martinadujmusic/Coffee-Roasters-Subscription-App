import { orderOptions } from "../../../data.js";

export default function OptionsSidebar({ settings, scrollToSection }) {
  return (
    <div className="hidden xl:block w-full max-w-[255px] font-serif font-black text-[1.5rem] leading-[1.5rem]">
      <div className="flex flex-col sticky top-12">
        {orderOptions.map((option, index) => (
          <button
            key={option.id}
            className="text-left py-6 border-b border-b-gray-blue last:border-none first:pt-0 group"
            disabled={
              option.id === "grindOption" &&
              settings?.howDrink?.name === "Capsule"
            }
            onClick={() => scrollToSection(option.id)}
          >
            <div className="opacity-40 group-disabled:opacity-20 group-hover:opacity-100 transition-opacity">
              <span
                className={`${
                  settings[option.id]
                    ? "text-dark-cyan group-disabled:text-inherit"
                    : ""
                }`}
              >
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <span className="ml-7">{option.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
