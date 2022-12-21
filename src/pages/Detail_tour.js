import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import gambar1 from "../asset/gambar1.png";
import gambar2 from "../asset/gambar2.png";
import gambar3 from "../asset/gambar3.png";
import vector1 from "../asset/vector1.png";
import time1 from "../asset/time 1.png";
import hotel1 from "../asset/hotel 1.png";
import eat1 from "../asset/meal 1.png";
import plusImg from "../asset/Plus.png";
import minusImg from "../asset/Minus.png";
import lineImg from "../asset/Line 11.png";
import vector4 from "../asset/vector4.png";
import daun_img from "../asset/Leaf.svg";
import bunga from "../asset/Hibiscus.svg";
import daun from "../asset/Palm.svg";
import { useEffect, useState } from "react";
import { DataUser } from "../App";
export let total_pay = "0";
export let Qty = 0;

export let DataDetail = {
  PlaceData: "",
  AcomodationData: "",
  MakananData: "",
  TransportData: "",
  DurationData: "",
  DatetripData: "",
};
function Detail_tour({
  path,
  place,
  price_trip,
  titleContent,
  Acomodation,
  Eat,
  Transport,
  Duration,
  Datetrip,
}) {
  console.log(DataUser.fullname, DataUser.phone);
  let navigator = useNavigate();
  let [number, setNumber] = useState(1);
  Qty = number;

  let addNumber = () => {
    setNumber(number + 1);
    Qty = number + 1;
    return setNumber;
  };
  let minNumber = () => {
    number > 1 ? setNumber(number - 1) : setNumber(1);
    Qty = number - 1;
    return setNumber;
  };

  useEffect(() => {
    DataDetail.PlaceData = place;
    DataDetail.AcomodationData = Acomodation;
    DataDetail.MakananData = Eat;
    DataDetail.TransportData = Transport;
    DataDetail.DurationData = Duration;
    DataDetail.DatetripData = Datetrip;
  }, []);

  let price = price_trip;
  let format_pr = price.toLocaleString();
  let Totalprc = number * price;
  let formatTotal = Totalprc.toLocaleString();
  total_pay = formatTotal;

  return (
    <div style={{ width: "100%", backgroundColor: "#f1f1f1" }}>
      <h2
        style={{
          position: "absolute",
          left: "980px",
          color: "White",
          top: "730px",
        }}
      >
        +5
      </h2>
      <Navbar />
      <img
        src={bunga}
        style={{
          position: "absolute",
          top: "70px",
          left: "91%",
        }}
      />
      <img
        src={daun}
        style={{
          position: "absolute",
          top: "300px",
        }}
      />
      <div style={{ textAlign: "center", marginTop: "110px" }}>
        <h1 style={{ marginRight: "235px", fontWeight: "bold" }}>
          {titleContent}
        </h1>
        <p
          style={{ color: "GrayText", marginRight: "820px", fontSize: "25px" }}
        >
          {place}
        </p>
        <img src={path} style={{ width: "71%", height: "440px" }} />

        <div
          style={{ display: "flex", marginTop: "20px", paddingLeft: "180px" }}
        >
          <img src={gambar1} style={{ width: "26%", marginLeft: "20px" }} />
          <img src={gambar2} style={{ width: "26%", marginLeft: "20px" }} />
          <img src={gambar3} style={{ width: "26%", marginLeft: "20px" }} />
        </div>
        <p
          style={{
            color: "black",
            marginRight: "790px",
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "45px",
          }}
        >
          Information Trip
        </p>
        <div style={{ display: "flex" }}>
          <p
            style={{
              color: "GrayText",
              marginLeft: "210px",
              fontSize: "14px",
              fontWeight: "bold",
              marginTop: "8px",
            }}
          >
            Acomodation
          </p>

          <p
            style={{
              color: "GrayText",
              marginLeft: "110px",
              fontSize: "14px",
              fontWeight: "bold",
              marginTop: "8px",
            }}
          >
            Transportaion
          </p>

          <p
            style={{
              color: "GrayText",
              marginLeft: "90px",
              fontSize: "14px",
              fontWeight: "bold",
              marginTop: "8px",
            }}
          >
            Eat
          </p>

          <p
            style={{
              color: "GrayText",
              marginLeft: "190px",
              fontSize: "14px",
              fontWeight: "bold",
              marginTop: "8px",
            }}
          >
            Duration
          </p>

          <p
            style={{
              color: "GrayText",
              marginLeft: "120px",
              fontSize: "14px",
              fontWeight: "bold",
              marginTop: "8px",
            }}
          >
            Date trip
          </p>
        </div>

        <div style={{ display: "flex" }}>
          <img
            src={hotel1}
            style={{ marginLeft: "207px", width: "35px", height: "25px" }}
          />
          <p
            style={{ marginLeft: "10px", fontSize: "16px", fontWeight: "bold" }}
          >
            {Acomodation}
          </p>
          <img
            src={vector1}
            style={{ marginLeft: "42px", width: "35px", height: "25px" }}
          />
          <p
            style={{ marginLeft: "10px", fontSize: "16px", fontWeight: "bold" }}
          >
            {Transport}
          </p>
          <img
            src={eat1}
            style={{ marginLeft: "42px", width: "35px", height: "25px" }}
          />
          <p
            style={{ marginLeft: "10px", fontSize: "16px", fontWeight: "bold" }}
          >
            {Eat}
          </p>
          <img
            src={time1}
            style={{ marginLeft: "42px", width: "35px", height: "25px" }}
          />
          <p
            style={{ marginLeft: "10px", fontSize: "16px", fontWeight: "bold" }}
          >
            {Duration}
          </p>
          <img
            src={vector4}
            style={{ marginLeft: "31px", width: "35px", height: "25px" }}
          />
          <p
            style={{ marginLeft: "10px", fontSize: "16px", fontWeight: "bold" }}
          >
            {Datetrip}
          </p>
        </div>
        <p
          style={{
            color: "black",
            marginRight: "838px",
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "40px",
          }}
        >
          Description
        </p>
        <div style={{ textAlign: "justify", marginTop: "-5px" }}>
          <p style={{ color: "gray", marginLeft: "209px", fontSize: "14px" }}>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s{" "}
          </p>

          <p
            style={{
              color: "gray",
              marginLeft: "209px",
              fontSize: "14px",
              marginTop: "-15px",
            }}
          >
            {" "}
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into{" "}
          </p>

          <p
            style={{
              color: "gray",
              marginLeft: "209px",
              fontSize: "14px",
              marginTop: "-15px",
            }}
          >
            {" "}
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages{" "}
          </p>

          <p
            style={{
              color: "gray",
              marginLeft: "209px",
              fontSize: "14px",
              marginTop: "-15px",
            }}
          >
            {" "}
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.{" "}
          </p>
        </div>

        <div style={{ display: "flex" }}>
          <h1
            style={{
              color: "orange",
              marginLeft: "213px",
              fontSize: "25px",
              fontWeight: "bold",
              marginTop: "40px",
            }}
          >
            IDR. {format_pr}
          </h1>
          <p
            style={{
              color: "black",
              marginLeft: "13px",
              fontSize: "25px",
              fontWeight: "bold",
              marginTop: "35px",
            }}
          >
            / Person
          </p>

          <div style={{ display: "flex", marginLeft: "460px" }}>
            <img
              onClick={minNumber}
              src={minusImg}
              style={{
                marginLeft: "80px",
                width: "30px",
                height: "30px",
                marginTop: "35px",
              }}
            />
            <p
              style={{
                color: "black",
                marginLeft: "23px",
                fontSize: "25px",
                fontWeight: "bold",
                marginTop: "30px",
                marginRight: "20px",
              }}
            >
              {number}
            </p>
            <img
              onClick={addNumber}
              src={plusImg}
              style={{
                marginLeft: "8px",
                width: "30px",
                height: "30px",
                marginTop: "35px",
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <p
            style={{
              color: "black",
              marginLeft: "13px",
              fontSize: "25px",
              fontWeight: "bold",
              marginTop: "35px",
              marginLeft: "213px",
            }}
          >
            Total :{" "}
          </p>

          <h1
            style={{
              color: "orange",
              marginLeft: "709px",
              fontSize: "25px",
              fontWeight: "bold",
              marginTop: "35px",
            }}
          >
            IDR. {formatTotal}
          </h1>
          <img
            src={lineImg}
            style={{ position: "absolute", left: "175px", top: "1290px" }}
          />
          <img
            src={lineImg}
            style={{ position: "absolute", left: "175px", top: "1370px" }}
          />
        </div>

        <div style={{ display: "flex", marginTop: "35px" }}>
          <button
            onClick={() => navigator("/Payment-pay")}
            type="button"
            className="btn btn-lg btn-primary"
            style={{
              backgroundColor: "orange",
              border: "none",
              marginLeft: "984px",
              width: "200px",
            }}
          >
            Book NOW
          </button>
        </div>
      </div>

      <footer>
        <div
          style={{
            marginTop: "60px",
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
          style={{ position: "absolute", bottom: "-873px", left: "1225px" }}
        />
      </footer>
    </div>
  );
}

export default Detail_tour;
