import Nav_img from "../asset/background-nav.jpg";
import Icon_img from "../asset/Icon.png";
import "../App.css";
import { useEffect, useState } from "react";

import hibiscus2 from "../asset/hibiscus 1.png";
import palm2 from "../asset/palm 1.png";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Card_guarantee from "../contents/Card_info";
import Card_travellers from "../contents/Travellers_love";
import Card_agent from "../contents/Travel_agent";
import Card_support from "../contents/Card_support";
import Hibiscus from "../asset/Hibiscus.svg";
import Palm from "../asset/Palm.svg";
import { useNavigate, Link } from "react-router-dom";
import { Card2 } from "../contents/Card";
import daun_img from "../asset/Leaf.svg";
import { DataUser } from "../App";
const style = {
  navbar: {
    width: "100%",
    marginTop: "-20px",
  },
  container: {
    backgroundColor: "whitesmoke",
    width: "100%",
  },
  bgimg_nav: {
    width: "100%",
    backgroundImage: `url(${Nav_img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingBottom: "100px",
  },

  header: {
    paddingLeft: "25px",
    paddingBottom: "30px",
    display: "flex",
    paddingTop: "10px",
  },

  div_button: {
    display: "flex",
    marginLeft: "65%",
    marginTop: "8px",
  },

  button_login: {
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

  div_intro: {
    fontSize: "68px",
    marginLeft: "20px",
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
  },

  div_search: {
    color: "white",
    marginTop: "50px",
    marginLeft: "20px",
    fontWeight: "400",
  },
};

function Home() {
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
    // userMail = strData?.email;
    // userName = strData?.fullname;
    // userPwd = strData?.password;
    DataUser.email = strData?.email;
    DataUser.fullname = strData?.fullname;
    DataUser.phone = strData?.phone;
    DataUser.address = strData?.address;
    DataUser.password = strData?.password;
  };

  let navigator = useNavigate();
  let dataAdmin = {
    email: "wikananda@gmail.com",
    password: "12345",
  };

  useEffect(() => {
    localStorage.setItem(dataAdmin.email, JSON.stringify(dataAdmin));
    console.log(DataUser);
  }, []);

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

  return (
    <div style={style.container}>
      <div style={style.bgimg_nav}>
        <div style={style.header}>
          <img src={Icon_img} style={{ width: "150px" }} />
          <div style={style.div_button}>
            <button style={style.button_login} onClick={handleShowLogin}>
              Login
            </button>
            <button style={style.button_register} onClick={handleShowRegister}>
              Register
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
                    className="form-label"
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
                    className="form-label"
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
                    className="form-label"
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
                    className="form-label"
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
                    className="btn btn-primary btn-lg"
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
                    className="form-label"
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
                    className="form-label"
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
                    className="btn btn-primary btn-lg"
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
        </div>
        <div style={style.div_intro}>
          <p style={{ color: "white", fontWeight: "bold" }}>Explore</p>
          <p
            style={{
              color: "white",
              marginTop: "-50px",
              fontSize: "64px",
              fontWeight: "300",
            }}
            className="fw-ligth"
          >
            your amazing city together
          </p>
        </div>

        <div style={style.div_search}>
          <p>Find great places to holiday</p>
          <input
            type="text"
            style={{
              marginTop: "-10px",
              borderRadius: "3px",
              color: "black",
              border: "none",
              width: "84%",
              fontSize: "20px",
            }}
          />
          <button
            style={{
              border: "none",
              backgroundColor: "orange",
              color: "white",
              padding: "8px 32px 3px 32px",
              borderRadius: "3px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/*Card*/}

      <Card_guarantee></Card_guarantee>
      <Card_travellers></Card_travellers>
      <Card_agent></Card_agent>
      <Card_support></Card_support>

      <img
        src={Hibiscus}
        alt=""
        style={{
          marginLeft: "94%",
          width: "6%",
          marginTop: "-50px",
        }}
      />

      <div style={{ marginTop: "250px", display: "flex" }}>
        <img
          src={Palm}
          style={{
            marginTop: "-30px",
            width: "80px",
          }}
        />
        <h1 style={{ marginLeft: "450px" }}>Group Tour</h1>
      </div>

      <div
        style={{
          paddingLeft: "60px",
          display: "flex",
          marginTop: "-40px",
          flexWrap: "wrap",
        }}
      >
        <Card2 />
      </div>
      {/* <div
        style={{
          paddingLeft: "60px",
          display: "flex",
          marginTop: "40px",
        }}
      >
       
      </div> */}

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
      </footer>
    </div>
  );
}

export default Home;
