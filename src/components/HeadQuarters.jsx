import { headquarters } from "../../data";

function HeadQuarters() {
  return (
    <div>
      <span>Our headquarters</span>
      <div>
        {headquarters.map((location, i) => {
          return (
            <div key={i}>
              <img src={location.icon} />
              <h3>{location.location}</h3>
              <div>
                <span>{location.information.street}</span>
                <span>{location.information.city}</span>
                <span>{location.information.region}</span>
                <span>{location.information.phone}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeadQuarters;
