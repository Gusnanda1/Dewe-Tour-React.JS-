import { useNavigate } from "react-router-dom";
import { DataTrip } from "./DataTrip";

export const Card = () => {
  let navigator = useNavigate();

  return (
    <>
      {DataTrip.map((Trip) => (
        <div
          onClick={() => navigator(`/Detail-tour/user/${Trip.id}`)}
          style={{
            width: "25%",
            marginLeft: "50px",

            backgroundColor: "white",
            textAlign: "left",
            marginBottom: "10px",
          }}
        >
          <img
            src={Trip.path}
            style={{
              width: "95%",
              marginLeft: "8px",
              marginTop: "8px",
            }}
          />
          <p style={{ fontSize: "24px", marginLeft: "5px", color: "black" }}>
            {Trip.titleContent}
          </p>
          <div style={{ display: "flex", marginTop: "-10px" }}>
            <p
              style={{
                fontWeight: "bold",
                color: "orange",
                marginLeft: "5px",
              }}
            >
              IDR.{Trip.price_trip.toLocaleString()}
            </p>
            <p style={{ color: "#606060", marginLeft: "100px" }}>
              {Trip.place}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export const Card2 = () => {
  let navigator = useNavigate();

  return (
    <>
      {DataTrip.map((Trip) => (
        <div
          onClick={() => navigator(`/Detail-tour/${Trip.id}`)}
          style={{
            width: "25%",
            marginLeft: "50px",

            backgroundColor: "white",
            textAlign: "left",
            marginBottom: "10px",
          }}
        >
          <img
            src={Trip.path}
            style={{
              width: "95%",
              marginLeft: "8px",
              marginTop: "8px",
            }}
          />
          <p
            style={{
              fontSize: "24px",
              marginLeft: "5px",
              color: "black",
            }}
          >
            {Trip.titleContent}
          </p>
          <div style={{ display: "flex", marginTop: "-10px" }}>
            <p
              style={{
                fontWeight: "bold",
                color: "orange",
                marginLeft: "5px",
              }}
            >
              IDR.{Trip.price_trip.toLocaleString()}
            </p>
            <p style={{ color: "#606060", marginLeft: "112px" }}>
              {Trip.place}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
