function StepCard({ number, title, description }) {
  return (
    <article>
      <div>
        <div></div>
        <div></div>
      </div>
      <span>{String(number).padStart(2, "0")}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </article>
  );
}

export default StepCard;
