import Nav_img from "../asset/background-nav.jpg";
import Icon_img from "../asset/Icon.png";
import "../App.css";
import profileImg from "../asset/Profile.png";
import { Dropdown } from "react-bootstrap";
import userIcon from "../asset/user_icon.png";
import billIcon from "../asset/bill_icon.png";
import logoutIcon from "../asset/logout_icon.png";
import PolygonImg from "../asset/Polygon 1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Card_guarantee from "../contents/Card_info";
import Card_travellers from "../contents/Travellers_love";
import Card_agent from "../contents/Travel_agent";
import Card_support from "../contents/Card_support";
import Hibiscus from "../asset/Hibiscus.svg";
import Palm from "../asset/Palm.svg";

import { Card } from "../contents/Card";
import daun_img from "../asset/Leaf.svg";
import { useNavigate } from "react-router-dom";

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

function Home2() {
  let navigator = useNavigate();

  return (
    <div style={style.container}>
      <div style={style.bgimg_nav}>
        <div style={style.header}>
          <img src={Icon_img} style={{ width: "150px" }} />

          <Dropdown style={{ backgroundColor: "transparent" }}>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              style={{
                backgroundColor: "transparent",
                border: "none",
                margin: "0px 0px 0px 1000px",
                color: "rgba(0,0,0,0)",
              }}
            >
              <img src={profileImg} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <img
                src={PolygonImg}
                style={{
                  position: "absolute",
                  width: "14%",
                  left: "30px",
                  top: "-10px",
                }}
              />
              <Dropdown.Item
                href="/Profile-history"
                style={{ fontWeight: "bold", marginTop: "0px" }}
              >
                <img
                  src={userIcon}
                  style={{
                    width: "17%",
                    marginTop: "-3px",
                    marginLeft: "15px",
                    marginRight: "9px",
                  }}
                />
                Profile
              </Dropdown.Item>
              <Dropdown.Item
                href="/Payment-pay"
                style={{ fontWeight: "bold", marginTop: "6px" }}
              >
                <img
                  src={billIcon}
                  style={{
                    width: "17%",
                    marginTop: "-3px",
                    marginLeft: "15px",
                    marginRight: "9px",
                  }}
                />
                Pay
              </Dropdown.Item>
              <Dropdown.Divider style={{ border: "1px solid #A8A8A8" }} />
              <Dropdown.Item
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.setItem("User", "false");
                  navigator("/");
                }}
                style={{ fontWeight: "bold" }}
              >
                <img
                  src={logoutIcon}
                  style={{
                    width: "17%",
                    marginTop: "-3px",
                    marginLeft: "15px",
                    marginRight: "9px",
                  }}
                />
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
        <Card />
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
      </footer>
    </div>
  );
}

export default Home2;
