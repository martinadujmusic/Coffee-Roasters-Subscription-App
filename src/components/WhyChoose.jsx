import { whyChoose } from "../../data";
function WhyChoose() {
  return (
    <div>
      <div>
        <span>Why choose us?</span>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div>
        {whyChoose.map((item, i) => {
          return (
            <div key={i}>
              <img src={item.image} />
              <span>{item.title}</span>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhyChoose;
