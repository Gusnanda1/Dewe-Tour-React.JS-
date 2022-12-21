import navImg from "../asset/background-nav.jpg";
import iconImg from "../asset/Icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import palm2 from "../asset/palm 1.png";
import { useNavigate } from "react-router-dom";
import hibiscus2 from "../asset/hibiscus 1.png";
import { DataUser } from "../App";
let style = {
  navStyle: {
    width: "100%",
    backgroundImage: `url(${navImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingBottom: "10px",
    marginTop: "-113px",
    position: "fixed",
  },

  iconStyle: {
    width: "12%",
    marginTop: "10px",
    marginLeft: "40px",
  },

  profileStyle: {
    width: "3%",
    margin: "10px 0px 0px 1000px",
  },

  button_register: {
    borderRadius: "5px",
    marginLeft: "10px",
    fontWeight: "bold",
    borderColor: "black",
    backgroundColor: "orange",
    color: "white",
    border: "none",
    fontSize: "15px",
    height: "30px",
    paddingLeft: "30px",
    paddingRight: "30px",
    margin: "10px 0px 0px 20px",
  },

  button_login: {
    margin: "10px 0px 0px 800px",
    borderRadius: "5px",
    borderStyle: "solid",
    borderColor: "black",
    backgroundColor: "transparent",
    color: "white",
    fontWeight: "bold",
    borderColor: "white",
    fontSize: "15px",
    height: "30px",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
};
function Navbar2() {
  let dataAdmin = {
    email: "wikananda@gmail.com",
    password: "12345",
  };
  let Navigator = useNavigate();

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
  return (
    <nav style={style.navStyle}>
      <img
        onClick={() => Navigator("/")}
        src={iconImg}
        style={style.iconStyle}
      />
      <button onClick={handleShowLogin} style={style.button_login}>
        Login
      </button>
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
      <button onClick={handleShowRegister} style={style.button_register}>
        Register
      </button>
    </nav>
  );
}

export default Navbar2;
