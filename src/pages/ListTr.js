import NavbarAdmin from "../components/NavbarAdmin.js";
import SearchVec from "../asset/VectorCari.png";
import daun_img from "../asset/Leaf.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import lineImg from "../asset/Line 11.png";
import paymentImg from "../asset/payment.png";
import iconImg from "../asset/Icon2.png";
function ListTr() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <div>
      <Modal
        size="xl"
        show={showModal}
        onHide={handleCloseModal}
        style={{
          width: "90%",

          marginLeft: "60px",
        }}
      >
        <Modal.Body>
          <img
            src={paymentImg}
            style={{
              position: "absolute",
              left: "827px",
              top: "135px",
              border: "solid 1px black",
            }}
          />
          <div
            style={{
              width: "100%",
              backgroundColor: "white",
              margin: " 0px 30px 0px 0px",
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

              <h5 style={{ marginLeft: "60px", marginTop: "9px" }}>
                Date Trip
              </h5>
              <h5 style={{ marginLeft: "102px", marginTop: "9px" }}>
                Duration
              </h5>
            </div>

            <div style={{ display: "flex" }}>
              <p
                style={{
                  color: "gray",
                  margin: "5px 0px 0px 52px",
                  fontSize: "13px",
                }}
              >
                Australia
              </p>
              <p
                style={{
                  color: "gray",
                  margin: "-4px 0px 0px 333px",
                  fontSize: "13px",
                }}
              >
                26 August 2020
              </p>
              <p
                style={{
                  color: "gray",
                  margin: "-4px 0px 0px 93px",
                  fontSize: "13px",
                }}
              >
                6 Day 4 Night
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
                Hotel 4 Nights
              </p>
              <p
                style={{
                  color: "gray",
                  margin: "-4px 0px 0px 99px",
                  fontSize: "13px",
                }}
              >
                Qatar Airways
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

            <div
              style={{
                display: "flex",
                borderColor: "#B7B7B780",
                borderBottom: "solid 1px",
                borderTop: "solid 1px",
              }}
            >
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
                Bagus Ganteng
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
                083896833112
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
                1
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
                IDR. 12,398,000
              </p>
            </div>
            <div style={{ marginLeft: "65%" }}>
              <button
                type="button"
                className="btn btn-danger"
                style={{
                  bacgroundColor: "#FF0742",
                  width: "30%",
                  fontWeight: "bold",
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-success"
                style={{
                  bacgroundColor: "#0ACF83",
                  marginLeft: "20px",
                  width: "40%",
                  fontWeight: "bold",
                }}
              >
                Approve
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <NavbarAdmin />
      <h2 style={{ marginLeft: "80px", marginTop: "110px", fontWeight: "600" }}>
        Incoming Transaction
      </h2>
      <div
        style={{
          width: "85%",
          marginLeft: "80px",
          marginTop: "10px",
          backgroundColor: "white",
        }}
      >
        <table
          className="table"
          style={{ fontFamily: "Roboto", fontStyle: "normal" }}
        >
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">User</th>
              <th scope="col">Trip</th>
              <th scope="col">Bukti Transfer</th>
              <th scope="col">Status Payment</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: "#F9F9F9" }}>
              <th scope="row">1</th>
              <td>Bagus Wikananda</td>
              <td>6D/4N Fun Tassie Vaca ...</td>
              <td>bca.jpg</td>
              <td style={{ color: "#F7941E" }}>Pending</td>
              <td>
                <Link>
                  <img src={SearchVec} onClick={handleShowModal} />
                </Link>
              </td>
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>Bagus Wikananda 2</td>
              <td>6D/4N Fun Tassie Vaca ...</td>
              <td>bca.jpg</td>
              <td style={{ color: "#0ACF83" }}>Success</td>
              <td>
                <Link>
                  <img src={SearchVec} onClick={handleShowModal} />
                </Link>
              </td>
            </tr>

            <tr style={{ backgroundColor: "#F9F9F9" }}>
              <th scope="row">3</th>
              <td>Bagus Wikananda 3</td>
              <td>6D/4N Fun Tassie Vaca ...</td>
              <td>permata.jpg</td>
              <td style={{ color: "#FF0742" }}>Cancel</td>
              <td>
                <Link>
                  <img src={SearchVec} onClick={handleShowModal} />
                </Link>
              </td>
            </tr>

            <tr>
              <th scope="row">4</th>
              <td>Bagus Wikananda 4</td>
              <td>6D/4N Fun Tassie Vaca ...</td>
              <td>bri.jpg</td>
              <td style={{ color: "#FF0742" }}>Cancel</td>
              <td>
                <Link>
                  <img src={SearchVec} onClick={handleShowModal} />
                </Link>
              </td>
            </tr>

            <tr style={{ backgroundColor: "#F9F9F9" }}>
              <th scope="row">5</th>
              <td>Bagus Wikananda 5</td>
              <td>6D/4N Fun Tassie Vaca ...</td>
              <td>bni.jpg</td>
              <td style={{ color: "#0ACF83" }}>Success</td>
              <td>
                <Link>
                  <img src={SearchVec} onClick={handleShowModal} />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer>
        <div
          style={{
            marginTop: "220px",
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
          style={{ position: "absolute", bottom: "-1px", left: "1225px" }}
        />
      </footer>
    </div>
  );
}
export default ListTr;
