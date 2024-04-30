import { useState, useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { orderOptions } from "../../data.js";

import Hero from "../components/common/Hero.jsx";
import InstructionCards from "../components/common/InstructionCards.jsx";
import Button from "../components/common/Button.jsx";
import OrderForm from "../components/plan/OrderForm.jsx";
import OrderSummary from "../components/plan/OrderSummary.jsx";
import OptionsSidebar from "../components/plan/OptionsSidebar.jsx";

const initialEntries = Object.fromEntries(
  orderOptions.map(({ id }) => [id, null])
);

export default function CreatePlan() {
  const [settings, setSettings] = useState(initialEntries);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRefs = useRef({});
  const { deliveries } = settings;

  const isCapsuleSelected = settings?.howToDrink?.type === "Capsule";
  const keysToCheck = isCapsuleSelected
    ? Object.keys(settings).filter((key) => key !== "grindOption")
    : Object.keys(settings);
  const isComplete = keysToCheck.every((key) => settings[key]);
  const totalPrice =
    deliveries?.prices[settings.quantity?.type] * deliveries?.multiplier || 0;

  function setValue(key, value) {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: value,
    }));
  }

  function scrollToSection(id) {
    const element = sectionRefs.current[id];
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  }

  function openModal() {
    if (!totalPrice) return;
    setIsModalOpen(true);
  }

  function complete() {
    window.scrollTo(0, 0);
    alert("Your plan is created succesfully!");
    setIsModalOpen(false);
    setSettings(initialEntries);
  }

  return (
    <main className="flex flex-col gap-[7.5rem] mb-[7.5rem] md:gap-36 md:mb-36 xl:gap-[10.5rem] xl:mb-[10.5rem]">
      <div className="px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Hero
            largeHeading
            page="plan"
            title="Create a plan"
            description="Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
          />
        </div>
      </div>

      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="instructions-plan-page  px-6 py-20 text-very-light-yellow overflow-hidden rounded-[10px] md:pt-24 md:pb-[4.375rem] xl:px-[5.25rem] xl:py-[6.25rem] ">
            <InstructionCards />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10">
        <div className="max-w-[69.375rem] mx-auto flex justify-between">
          <h2 className="sr-only">Customize your coffee</h2>
          <OptionsSidebar
            settings={settings}
            scrollToSection={scrollToSection}
          />

          <div className="flex flex-col gap-[7.5rem] text-[1.625rem] leading-[1.625rem] md:gap-36 xl:max-w-[730px] xl:gap-[5.5rem]">
            <div className="flex flex-col gap-24 md:gap-[6.25rem] xl:gap-[5.5rem]">
              {orderOptions.map((orderOption) => (
                <OrderForm
                  ref={(el) => (sectionRefs.current[orderOption.id] = el)}
                  key={orderOption.id}
                  settings={settings}
                  onChange={setValue}
                  orderOption={orderOption}
                  disabled={
                    orderOption.id === "grindOption" && isCapsuleSelected
                  }
                />
              ))}
            </div>

            <div className="max-w-7xl mx-auto flex flex-col items-center gap-14 md:gap-10 xl:items-end">
              <div className="p-8 rounded-[10px] bg-dark-gray-blue  text-white md:py-7 md:px-11 xl:px-16">
                <h2 className="text-[1.25rem] leading-[1.5rem] uppercase text-white/50 mb-4">
                  Order Summary
                </h2>
                <OrderSummary settings={settings} />
              </div>
              <Button isButton disabled={!isComplete} onClick={openModal}>
                Create my plan!
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Transition show={isModalOpen} as={Fragment}>
        <Dialog onClose={() => setIsModalOpen(false)} className="relative z-50">
          <Transition.Child as={Fragment} className="transition-opacity">
            <div className="fixed inset-0 bg-black/50" aria-hidden="true"></div>
          </Transition.Child>
          <div className="fixed inset-0 w-screen overflow-auto">
            <div className="flex justify-center items-center inset-0 min-h-full px-6 py-8 overflow-y-auto">
              <Transition.Child as={Fragment} className="transition-transform">
                <Dialog.Panel className="w-full max-w-[445px] rounded-lg bg-white overflow-hidden md:max-w-[540px]">
                  <Dialog.Title className="px-6 py-7 bg-dark-gray-blue text-white font-fraunces font-black text-[1.55rem] leading-[1.625rem] md:px-14 md:pt-12 md:pb-10 md:text-[2.25rem] md:leading-[2.5rem]">
                    Order Summary
                  </Dialog.Title>
                  <div className="px-6 pt-10 pb-6 text-dark-gray-blue md:p-14">
                    <OrderSummary settings={settings} />
                    <Dialog.Description className="text-dark-gray-blue/80 md:mt-2">
                      Is this correct? You can proceed to checkout or go back to
                      plan selection if something is off. Subscription discount
                      codes can also be redeemed at the checkout.
                    </Dialog.Description>
                    <div className="mt-6 md:mt-12 font-fraunces font-black flex gap-5 items-center">
                      <p className="hidden md:block text-dark-gray-blue text-[2.25rem] leading-[2.25rem]">
                        ${totalPrice.toFixed(2)} / mo
                      </p>
                      <Button isButton style={{ flex: "1" }} onClick={complete}>
                        <span>Checkout</span>
                        <span className="md:hidden">
                          {" "}
                          - ${totalPrice.toFixed(2)} / mo
                        </span>
                      </Button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
}
