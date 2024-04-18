import SummaryOption from "./SummaryOption";

export default function OrderSummary({ settings }) {
  return (
    <p className="font-serif font-black text-[1.5rem] leading-10">
      “I drink my coffee{" "}
      {settings.howToDrink?.type === "Capsule" ? "using" : "as"}{" "}
      <SummaryOption value={settings.howToDrink?.type} />, with a{" "}
      <SummaryOption value={settings.beanType?.type} /> type of bean.{" "}
      <SummaryOption value={settings.quantity?.type} />
      {settings.howToDrink?.type !== "Capsule" && (
        <>
          <span> ground ala</span>{" "}
          <SummaryOption value={settings.grindOption?.type} />
        </>
      )}
      , sent to me <SummaryOption value={settings.deliveries?.type} />
      .”
    </p>
  );
}
