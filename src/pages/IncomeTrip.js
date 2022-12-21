import { Card } from "../contents/Card";
import daun_img from "../asset/Leaf.svg";
import NavbarAdmin from "../components/NavbarAdmin";
function IncomeTrip() {
  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <div
        style={{
          display: "flex",
          marginLeft: "85px",
          marginTop: "110px",
          fontWeight: "600",
        }}
      >
        <h2 style={{}}>Income Trip</h2>
        <button
          type="button"
          className="btn btn-primary"
          style={{
            backgroundColor: "#FFAF00",
            margin: "0px 0px 0px 65%",
            border: "none",
            padding: "0px 45px 0px 45px",
          }}
        >
          Add Trip
        </button>
      </div>

      <div
        style={{
          paddingLeft: "60px",
          display: "flex",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <Card />
      </div>

      <footer>
        <div
          style={{
            marginTop: "50px",
            width: "100%",
            textAlign: "center",
            color: "white",
            backgroundColor: "orange",
            fontSize: "20px",
            padding: "15px 0px 2px 0px",
          }}
        >
          <p>
            Copyright @ 2020 Dewe Tour - Bagus Wikananda - NIS. All Rights
            reserved
          </p>
        </div>
        <img
          src={daun_img}
          style={{ position: "absolute", bottom: "-273px", left: "1225px" }}
        />
      </footer>
    </div>
  );
}
export default IncomeTrip;
