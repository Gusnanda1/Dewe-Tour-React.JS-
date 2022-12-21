import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Detail_tour from "./pages/Detail_tour";
import Detail_tour2 from "./pages/Detail_tour2";
import Payment_pending from "./pages/Payment_pending";
import Profile_history from "./pages/Profile_history";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListTr from "./pages/ListTr";
import IncomeTrip from "./pages/IncomeTrip";
import Payment_pay from "./pages/Payment-pay";
import imgContent1 from "./asset/sidney.png";
import imgContent2 from "./asset/Rectangle 2.png";
import imgContent3 from "./asset/Rectangle 3.png";
import imgContent4 from "./asset/Rectangle 4.png";
import imgContent5 from "./asset/Rectangle 5.png";
import imgContent6 from "./asset/Rectangle 6.png";
import { Navigate, Outlet } from "react-router-dom";
import { DataTrip } from "./contents/DataTrip";
export let DataUser = {
  fullname: "",
  email: "",
  password: "",
  phone: "",
  address: "",
};
function App() {
  let checkAdmin;
  let checkUser;
  checkAdmin = localStorage.getItem("Admin");
  checkUser = localStorage.getItem("User");
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* public route */}
          <Route exact path="/" element={<Home />}></Route>

          {DataTrip.map((Trip) => (
            <Route
              exact
              path={`/Detail-tour/${Trip.id}`}
              element={
                <Detail_tour2
                  titleContent={Trip.titleContent}
                  path={Trip.path}
                  place={Trip.place}
                  price_trip={Trip.price_trip}
                  Acomodation={Trip.acomodtion}
                  Eat={Trip.eat}
                  Transport={Trip.transportation}
                  Duration={Trip.duaration}
                  Datetrip={Trip.datetrip}
                />
              }
            ></Route>
          ))}
          {/* <Route
            exact
            path="/Detail-tour/1"
            element={
              <Detail_tour2
                titleContent={title.title1}
                path={imgContent1}
                place="Australia"
                price_trip={12398000}
              />
            }
          ></Route>
          <Route
            exact
            path="/Detail-tour/2"
            element={
              <Detail_tour2
                titleContent={title.title2}
                path={imgContent2}
                place="South Korea"
                price_trip={10288000}
              />
            }
          ></Route>
          <Route
            exact
            path="/Detail-tour/3"
            element={
              <Detail_tour2
                titleContent={title.title3}
                path={imgContent3}
                place="Japan"
                price_trip={28999000}
              />
            }
          ></Route>
          <Route
            exact
            path="/Detail-tour/4"
            element={
              <Detail_tour2
                titleContent={title.title4}
                path={imgContent4}
                place="Indonesia"
                price_trip={3118000}
              />
            }
          ></Route>
          <Route
            exact
            path="/Detail-tour/5"
            element={
              <Detail_tour2
                titleContent={title.title5}
                path={imgContent5}
                place="Indonesia"
                price_trip={10488000}
              />
            }
          ></Route>
          <Route
            exact
            path="/Detail-tour/6"
            element={
              <Detail_tour2
                titleContent={title.title6}
                path={imgContent6}
                place="Japan"
                price_trip={11188000}
              />
            }
          ></Route> */}

          {/* private route User*/}
          <Route
            element={checkUser == "false" ? <Navigate to="/" /> : <Outlet />}
          >
            <Route exact path="/home" element={<Home2 />}></Route>
            <Route exact path="/Payment-pay" element={<Payment_pay />}></Route>
            <Route
              exact
              path="/Profile-history"
              element={<Profile_history />}
            ></Route>
            <Route
              exact
              path="/Payment-pending"
              element={<Payment_pending />}
            ></Route>

            {DataTrip.map((Trip) => (
              <Route
                exact
                path={`/Detail-tour/user/${Trip.id}`}
                element={
                  <Detail_tour
                    titleContent={Trip.titleContent}
                    path={Trip.path}
                    place={Trip.place}
                    price_trip={Trip.price_trip}
                    Acomodation={Trip.acomodtion}
                    Eat={Trip.eat}
                    Transport={Trip.transportation}
                    Duration={Trip.duaration}
                    Datetrip={Trip.datetrip}
                  />
                }
              ></Route>
            ))}
            {/* <Route
              exact
              path="/Detail-tour/user/1"
              element={
                <Detail_tour
                  titleContent={title.title1}
                  path={imgContent1}
                  place="Australia"
                  price_trip={12398000}
                />
              }
            ></Route>
            <Route
              exact
              path="/Detail-tour/user/2"
              element={
                <Detail_tour
                  titleContent={title.title2}
                  path={imgContent2}
                  place="South Korea"
                  price_trip={10288000}
                />
              }
            ></Route>
            <Route
              exact
              path="/Detail-tour/user/3"
              element={
                <Detail_tour
                  titleContent={title.title3}
                  path={imgContent3}
                  place="Japan"
                  price_trip={28999000}
                />
              }
            ></Route>
            <Route
              exact
              path="/Detail-tour/user/4"
              element={
                <Detail_tour
                  titleContent={title.title4}
                  path={imgContent4}
                  place="Indonesia"
                  price_trip={11999000}
                />
              }
            ></Route>
            <Route
              exact
              path="/Detail-tour/user/5"
              element={
                <Detail_tour
                  titleContent={title.title5}
                  path={imgContent5}
                  place="Indonesia"
                  price_trip={10488000}
                />
              }
            ></Route>
            <Route
              exact
              path="/Detail-tour/user/6"
              element={
                <Detail_tour
                  titleContent={title.title6}
                  path={imgContent6}
                  place="Japan"
                  price_trip={11188000}
                />
              }
            ></Route> */}
          </Route>

          {/* private route Admin */}
          <Route
            element={checkAdmin == "false" ? <Navigate to="/" /> : <Outlet />}
          >
            <Route exact path="/Admin/ListTr" element={<ListTr />}></Route>
            <Route
              exact
              path="/Admin/IncomeTr"
              element={<IncomeTrip />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
