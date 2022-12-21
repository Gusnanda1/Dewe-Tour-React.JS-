import navImg from "../asset/background-nav.jpg";
import iconImg from "../asset/Icon.png";
import profileImg from "../asset/Profile.png";
import journey from "../asset/journey 1.png";
import logoutIcon from "../asset/logout_icon.png";
import Dropdown from "react-bootstrap/Dropdown";
import PolygonImg from "../asset/Polygon 1.png";
import { useNavigate } from "react-router-dom";

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
};
function NavbarAdmin() {
  let navigator = useNavigate();
  const toTrip = (e) => {
    e.preventDefault();
    navigator("/Admin/IncomeTr");
  };
  return (
    <nav style={style.navStyle}>
      <div style={{ display: "flex", marginTop: "-8px" }}>
        <img src={iconImg} style={style.iconStyle} />
        <Dropdown style={{ backgroundColor: "transparent", marginTop: "20px" }}>
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
                left: "100px",
                top: "-10px",
              }}
            />
            <Dropdown.Item
              onClick={toTrip}
              style={{ fontWeight: "bold", marginTop: "10px" }}
            >
              <img
                src={journey}
                style={{
                  width: "17%",
                  marginTop: "-3px",
                  marginLeft: "15px",
                  marginRight: "9px",
                }}
              />
              Trip
            </Dropdown.Item>

            <Dropdown.Divider style={{ border: "1px solid #A8A8A8" }} />
            <Dropdown.Item
              onClick={(e) => {
                localStorage.setItem("Admin", "false");
                e.preventDefault();
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
    </nav>
  );
}

export default NavbarAdmin;
