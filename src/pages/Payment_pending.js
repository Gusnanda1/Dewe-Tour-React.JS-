import Navbar from "../components/Navbar";
import iconImg from "../asset/Icon2.png";
import daun_img from "../asset/Leaf.svg";
import lineImg from "../asset/Line 11.png";
import paymentImg from "../asset/payment.png";
import { DataUser } from "../App";
import { Qty, total_pay } from "./Detail_tour";
import { DataDetail } from "./Detail_tour";
function Payment_pending() {
  return (
    <div style={{ width: "100%", backgroundColor: "whitesmoke" }}>
      <img
        src={lineImg}
        style={{ position: "absolute", left: "151px", top: "460px" }}
      />
      <img
        src={lineImg}
        style={{ position: "absolute", left: "151px", top: "520px" }}
      />
      <img
        src={paymentImg}
        style={{
          position: "absolute",
          left: "961px",
          top: "225px",
          border: "solid 2px black",
        }}
      />
      <Navbar />
      <div>
        <h1></h1>
      </div>
      {/* card history */}
      <div
        style={{
          width: "77%",
          backgroundColor: "white",
          margin: " 110px 30px 0px 150px",
          boxShadow: "0px 0px 3px",
          borderRadius: "5px",
          paddingBottom: "20px",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src={iconImg}
            style={{
              width: "25%",
              height: "70px",
              marginTop: "15px",
              marginLeft: "40px",
            }}
          />
          <div>
            <p
              style={{
                margin: "5px 0px 0px 500px",
                fontWeight: "bold",
                fontSize: "40px",
              }}
            >
              Booking
            </p>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  color: "gray",
                  fontWeight: "bold",
                  marginLeft: "8px",
                  marginLeft: "480px",
                  marginTop: "5px",
                  fontSize: "17px",
                }}
              >
                Saturday,{" "}
              </p>
              <p
                style={{
                  color: "gray",
                  marginLeft: "5px",
                  marginTop: "5px",
                  fontSize: "17px",
                }}
              >
                22 July 2020
              </p>
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <p
            style={{
              color: "black",
              margin: "5px 0px 0px 50px",
              fontWeight: "bold",
              fontSize: "27px",
            }}
          >
            6D/4N Fun Tassi Vacation
          </p>

          <h5 style={{ marginLeft: "60px", marginTop: "9px" }}>Date Trip</h5>
          <h5 style={{ marginLeft: "102px", marginTop: "9px" }}>Duration</h5>
        </div>

        <div style={{ display: "flex" }}>
          <p
            style={{
              color: "gray",
              margin: "5px 0px 0px 52px",
              fontSize: "13px",
            }}
          >
            {DataDetail.PlaceData}
          </p>
          <p
            style={{
              color: "gray",
              margin: "-4px 0px 0px 333px",
              fontSize: "13px",
            }}
          >
            {DataDetail.DatetripData}
          </p>
          <p
            style={{
              color: "gray",
              margin: "-4px 0px 0px 93px",
              fontSize: "13px",
            }}
          >
            {DataDetail.DurationData}
          </p>
        </div>

        <div style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: "	#ffebcd",
              width: "12%",
              marginLeft: "52px",
              marginTop: "40px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: "orange",
                margin: "3px 0px 4px 15px",
              }}
            >
              Waiting Approve
            </p>
          </div>
          <h5 style={{ marginLeft: "257px", marginTop: "29px" }}>
            Accomodation
          </h5>
          <h5 style={{ marginLeft: "50px", marginTop: "29px" }}>
            Transportaion
          </h5>
        </div>
        <div style={{ display: "flex" }}>
          <p
            style={{
              color: "gray",
              margin: "-4px 0px 0px 436px",
              fontSize: "13px",
            }}
          >
            {DataDetail.AcomodationData}
          </p>
          <p
            style={{
              color: "gray",
              margin: "-4px 0px 0px 99px",
              fontSize: "13px",
            }}
          >
            {DataDetail.TransportData}
          </p>
        </div>
        <p
          style={{
            color: "gray",
            margin: "11px 0px 0px 815px",
            fontSize: "13px",
          }}
        >
          Upload payment proof
        </p>

        <div style={{ display: "flex" }}>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "22px",
              marginLeft: "57px",
              marginTop: "10px",
            }}
          >
            No
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "22px",
              marginLeft: "57px",
              marginTop: "10px",
            }}
          >
            Fullname
          </p>

          <p
            style={{
              fontWeight: "bold",
              fontSize: "22px",
              marginLeft: "97px",
              marginTop: "10px",
            }}
          >
            Gender
          </p>

          <p
            style={{
              fontWeight: "bold",
              fontSize: "22px",
              marginLeft: "57px",
              marginTop: "10px",
            }}
          >
            Phone
          </p>
        </div>

        <div style={{ display: "flex" }}>
          <p
            style={{
              fontSize: "22px",
              marginLeft: "57px",
              marginTop: "10px",
              color: "gray",
            }}
          >
            1
          </p>
          <p
            style={{
              fontSize: "22px",
              marginLeft: "75px",
              marginTop: "10px",
              color: "gray",
            }}
          >
            {DataUser.fullname}
          </p>

          <p
            style={{
              fontSize: "22px",
              marginLeft: "47px",
              marginTop: "10px",
              color: "gray",
            }}
          >
            Male
          </p>

          <p
            style={{
              fontSize: "22px",
              marginLeft: "82px",
              marginTop: "10px",
              color: "gray",
            }}
          >
            {DataUser.phone}
          </p>

          <p
            style={{
              fontSize: "22px",
              marginLeft: "100px",
              marginTop: "10px",
              color: "Black",
              fontWeight: "bold",
            }}
          >
            Qty
          </p>
          <p
            style={{
              fontSize: "22px",
              marginLeft: "75px",
              marginTop: "10px",
              color: "Black",
              fontWeight: "bold",
            }}
          >
            :
          </p>
          <p
            style={{
              fontSize: "22px",
              marginLeft: "30px",
              marginTop: "10px",
              color: "Black",
              fontWeight: "bold",
            }}
          >
            {Qty}
          </p>
        </div>

        <div style={{ display: "flex" }}>
          <p
            style={{
              fontSize: "22px",
              marginLeft: "713px",
              marginTop: "10px",
              color: "Black",
              fontWeight: "bold",
            }}
          >
            Total
          </p>
          <p
            style={{
              fontSize: "22px",
              marginLeft: "60px",
              marginTop: "10px",
              color: "Black",
              fontWeight: "bold",
            }}
          >
            :
          </p>
          <p
            style={{
              fontSize: "22px",
              marginLeft: "30px",
              marginTop: "10px",
              color: "Red",
              fontWeight: "700",
            }}
          >
            IDR. {total_pay}
          </p>
        </div>
      </div>

      <footer>
        <div
          style={{
            marginTop: "100px",
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
          style={{ position: "absolute", bottom: "-69px", left: "1225px" }}
        />
      </footer>
    </div>
  );
}
export default Payment_pending;
