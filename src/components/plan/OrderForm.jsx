import { useState, useEffect, Fragment, forwardRef } from "react";
import { RadioGroup, Transition } from "@headlessui/react";

import arrowIcon from "/assets/plan/desktop/icon-arrow.svg";

const OrderForm = forwardRef(
  ({ orderOption, onChange, disabled, settings }, ref) => {
    const [isDisclosureOpen, setIsDisclosureOpen] = useState(true);

    useEffect(() => {
      setIsDisclosureOpen(!disabled);
    }, [disabled]);

    function toggleDisclosure() {
      if (disabled) return;
      setIsDisclosureOpen((previousState) => !previousState);
    }

    return (
      <div
        ref={ref}
        className="text-[1rem] leading-[1rem] flex flex-col gap-8 md:gap-10 xl:gap-14 has-[:disabled]:opacity-50 transition-opacity"
      >
        <button
          className="text-gray-blue font-fraunces font-black text-[1.25rem] leading-7 text-left flex justify-between items-center md:text-[2rem] md:leading-[2.5rem] xl:text-[2.5rem]"
          onClick={toggleDisclosure}
          disabled={disabled}
        >
          <span className="mr-[4.375rem]">{orderOption.heading}</span>
          <img
            src={arrowIcon}
            className={`${
              isDisclosureOpen ? "rotate-180" : ""
            } transition-transform`}
            alt="Arrow down"
            aria-hidden="true"
          />
        </button>

        <Transition show={isDisclosureOpen} className="transition-transform">
          <RadioGroup
            id={orderOption.id}
            className="flex flex-col gap-4 md:flex-row md:gap-[0.625rem] xl:gap-6 transition-transform"
            value={settings[orderOption.id]}
            onChange={(value) => onChange(orderOption.id, value)}
          >
            <RadioGroup.Label className="sr-only">
              {orderOption.type}
            </RadioGroup.Label>
            {orderOption.options.map((option) => (
              <RadioGroup.Option key={option.type} value={option} as={Fragment}>
                {({ checked }) => (
                  <div
                    className={`p-6 rounded-lg transition-colors md:flex-1 md:py-8 md:min-h-[250px] cursor-pointer ${
                      checked
                        ? "bg-dark-cyan text-white"
                        : "bg-light-yellow hover:bg-pale-orange text-gray-blue"
                    }`}
                  >
                    <h3 className="font-fraunces font-black text-[1.5rem] leading-8">
                      {option.type}
                    </h3>
                    <p className="mt-2 md:mt-6 font-fraunces text-[1rem] leading-[1.5rem]">
                      {option.prices && settings.quantity?.type && (
                        <span>{`$${option.prices[
                          settings.quantity.type
                        ]?.toFixed(2)} per shipment. `}</span>
                      )}

                      {option.description}
                    </p>
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </Transition>
      </div>
    );
  }
);

OrderForm.displayName = "OrderForm";
export default OrderForm;
