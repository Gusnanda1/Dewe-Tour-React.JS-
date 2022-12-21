import Navbar2 from "../components/Navbar2";
import imgContent from "../asset/sidney.png";
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
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import palm2 from "../asset/palm 1.png";
import hibiscus2 from "../asset/hibiscus 1.png";
import { DataUser } from "../App";
function Detail_tour2({
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
  let Navigator = useNavigate();
  let dataAdmin = {
    email: "wikananda@gmail.com",
    password: "12345",
  };
  const Booking = (e) => {
    alert("Please Login First");
    e.preventDefault();
    Navigator("/");
  };
  const checkLogin = (e) => {
    e.preventDefault();
    getData();

    if (localStorage.getItem(DataLogin.email_log) != null) {
      if (
        DataLogin.email_log == dataAdmin.email &&
        DataLogin.pw_log == dataAdmin.password
      ) {
        localStorage.setItem("User", "false");
        localStorage.setItem("Admin", "true");
        alert("Welcome Admin");
        setShowLogin(false);
        navigator("/Admin/ListTr");
      } else if (
        DataLogin.email_log != dataAdmin.email &&
        DataLogin.pw_log == DataUser.password
      ) {
        localStorage.setItem("Admin", "false");
        localStorage.setItem("User", "true");
        alert(`Welcome ${DataUser.fullname}`);

        setShowLogin(false);

        navigator("/Home");
      } else {
        alert("Login Failed, Wrong email or password");

        setShowLogin(true);
        localStorage.setItem("Admin", "false");
        localStorage.setItem("User", "false");
      }
    } else {
      alert("Akun ini berlum teregistrasi");
      setShowLogin(true);
      localStorage.setItem("Admin", "false");
      localStorage.setItem("User", "false");
    }
  };
  const [Data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const [DataLogin, setDataLogin] = useState({
    email_log: "",
    pw_log: "",
  });

  const handleData = (e) => {
    e.preventDefault();
    setData({
      ...Data,
      [e.target.id]: e.target.value,
    });
  };

  const handleDataLogin = (e) => {
    e.preventDefault();
    setDataLogin({
      ...DataLogin,
      [e.target.id]: e.target.value,
    });
  };

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleToRegister = (e) => {
    setShowLogin(false);
    e.preventDefault();
    setShowRegister(true);
  };

  const handleToLogin = (e) => {
    setShowRegister(false);
    e.preventDefault();
    setShowLogin(true);
  };

  let addData = (e) => {
    localStorage.setItem(Data.email, JSON.stringify(Data));
    e.preventDefault();
    handleToLogin(e);
    getData();
  };

  let getData = () => {
    let dataLogin = localStorage.getItem(DataLogin.email_log);
    let strData = JSON.parse(dataLogin);
    DataUser.email = strData?.email;
    DataUser.fullname = strData?.fullname;
    DataUser.phone = strData?.phone;
    DataUser.address = strData?.address;
    DataUser.password = strData?.password;
  };
  let [number, setNumber] = useState(1);

  let addNumber = () => {
    setNumber(number + 1);
    return setNumber;
  };
  let minNumber = () => {
    number > 0 ? setNumber(number - 1) : setNumber(0);
    return setNumber;
  };

  let price = price_trip;
  let format_pr = price.toLocaleString();
  let Totalprc = number * price;
  let formatTotal = Totalprc.toLocaleString();
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
      <Navbar2 />
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
            onClick={Booking}
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
          style={{ position: "absolute", bottom: "-872px", left: "1225px" }}
        />
      </footer>
      {/* modal for register */}
      <Modal show={showRegister} onHide={handleCloseRegister}>
        <div style={{ display: "flex" }}>
          <img
            src={palm2}
            style={{
              width: "30%",
            }}
          />
          <img
            src={hibiscus2}
            style={{
              width: "13%",
              margin: "0px 0px 0px 58%",
              height: "70px",
            }}
          />
        </div>

        <Modal.Body
          style={{
            textAlign: "center",
            overflow: "auto",
            height: "430px",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "40px",
              marginTop: "-30px",
            }}
          >
            Register
          </p>

          <form onSubmit={addData} style={{ marginTop: "60px" }}>
            <label
              for="exampleInputEmail1"
              className="form-label"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                marginLeft: "-50%",
                color: "black",
              }}
            >
              Full Name
            </label>
            <input
              onChange={handleData}
              type="text"
              className="form-control"
              id="fullname"
              aria-describedby="emailHelp"
              style={{
                width: "85%",
                marginLeft: "36px",
                backgroundColor: "#D2D2D240",
              }}
            />

            <label
              for="exampleInputEmail1"
              class="form-label"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                marginLeft: "-64%",
                marginTop: "20px",
                color: "black",
              }}
            >
              Email
            </label>
            <input
              onChange={handleData}
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              style={{
                width: "85%",
                marginLeft: "36px",
                backgroundColor: "#D2D2D240",
              }}
            />

            <label
              for="exampleInputEmail1"
              class="form-label"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                marginLeft: "-52%",
                marginTop: "20px",
                color: "black",
              }}
            >
              Password
            </label>
            <input
              onChange={handleData}
              type="password"
              className="form-control"
              aria-describedby="emailHelp"
              id="password"
              style={{
                width: "85%",
                marginLeft: "36px",
                backgroundColor: "#D2D2D240",
              }}
            />

            <label
              for="exampleInputEmail1"
              class="form-label"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                marginLeft: "-61%",
                marginTop: "20px",
                color: "black",
              }}
            >
              Phone
            </label>
            <input
              onChange={handleData}
              type="text"
              className="form-control"
              id="phone"
              aria-describedby="emailHelp"
              style={{
                width: "85%",
                marginLeft: "36px",
                backgroundColor: "#D2D2D240",
              }}
            />

            <label
              for="exampleInputEmail1"
              class="form-label"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                marginLeft: "-57%",
                marginTop: "20px",
                color: "black",
              }}
            >
              Address
            </label>
            <textarea
              onChange={handleData}
              className="form-control"
              id="address"
              rows="7"
              style={{
                width: "85%",
                marginLeft: "38px",
                backgroundColor: "#D2D2D240",
              }}
            ></textarea>

            <button
              type="submit"
              class="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#FFAF00",
                marginTop: "30px",
                border: "none",
                width: "85%",
                marginLeft: "10px",
                fontWeight: "bold",
              }}
            >
              Register
            </button>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  fontSize: "20px",
                  marginLeft: "70px",
                  marginTop: "20px",
                  color: "gray",
                }}
              >
                Already have an account? Click
              </p>
              <Link style={{ color: "transparent" }}>
                <p
                  onClick={handleToLogin}
                  style={{
                    marginLeft: "7px",
                    color: "#B1B1B1",
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginTop: "20px",
                  }}
                >
                  Here
                </p>
              </Link>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      {/* modal login */}
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <div style={{ display: "flex" }}>
          <img
            src={palm2}
            style={{
              width: "30%",
            }}
          />
          <img
            src={hibiscus2}
            style={{
              width: "13%",
              margin: "0px 0px 0px 58%",
              height: "70px",
            }}
          />
        </div>

        <Modal.Body style={{ textAlign: "center", height: "400px" }}>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "40px",
              marginTop: "-80px",
            }}
          >
            Login
          </p>

          <form onSubmit={checkLogin} style={{ marginTop: "30px" }}>
            <label
              for="exampleInputEmail1"
              class="form-label"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                marginLeft: "-64%",
                marginTop: "20px",
                color: "black",
              }}
            >
              Email
            </label>
            <input
              onChange={handleDataLogin}
              type="email"
              className="form-control"
              id="email_log"
              aria-describedby="emailHelp"
              style={{
                width: "85%",
                marginLeft: "36px",
                backgroundColor: "#D2D2D240",
              }}
            />

            <label
              for="exampleInputEmail1"
              class="form-label"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                marginLeft: "-52%",
                marginTop: "20px",
                color: "black",
              }}
            >
              Password
            </label>
            <input
              onChange={handleDataLogin}
              type="password"
              className="form-control"
              id="pw_log"
              aria-describedby="emailHelp"
              style={{
                width: "85%",
                marginLeft: "36px",
                backgroundColor: "#D2D2D240",
              }}
            />

            <button
              type="submit"
              class="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#FFAF00",
                marginTop: "30px",
                border: "none",
                width: "85%",
                marginLeft: "10px",
                fontWeight: "bold",
              }}
            >
              Login
            </button>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  fontSize: "20px",
                  marginLeft: "80px",
                  marginTop: "20px",
                  color: "gray",
                }}
              >
                Don't have an account? Click
              </p>
              <Link style={{ color: "transparent" }}>
                <p
                  style={{
                    marginLeft: "7px",
                    color: "#B1B1B1",
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginTop: "20px",
                  }}
                  onClick={handleToRegister}
                >
                  Here
                </p>
              </Link>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Detail_tour2;
