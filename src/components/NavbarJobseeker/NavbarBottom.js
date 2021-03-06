import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/NavbarBottom.css";
import map from "../Images/map.png";
import phone from "../Images/phone.png";
import mail from "../Images/mailHelp.png";

class NavbarBottom extends Component {
  state = {
    curTime: new Date().toLocaleTimeString(),
    data: "",
  };

  // callMe() {
  //   console.log(this.state.curTime.slice(0, 2));
  //   setInterval(() => {
  //     this.setState({
  //       curTime: new Date().toLocaleString(),
  //     });
  //   }, 10000000000000000);
  // }
  render() {
    var { curTime, data } = this.state;
    return (
      <div>
        <div id="ques">
          <h4 className="center" id="headinggg">
            <strong> You still have a questions?</strong>
          </h4>
          <h5 className="center gray-text" id="textcolor">
            Lets talk about everything!
          </h5>
        </div>

        <div>
          <div className="container px-lg-5 px-lg-offset-3">
            <div className="row mx-lg-n5">
              <div className="center col py-3 px-lg-5 border bg-white">
                <img
                  className="center"
                  alt="mail"
                  src={mail}
                  width="25"
                  height="25"
                ></img>
                <p id="textcolor">
                  send us an email-
                  <u className="blue-text" style={{ cursor: "pointer" }}>
                    info@stskfecilities.com
                  </u>
                </p>
              </div>
              <div className="center col py-3 px-lg-5 border bg-white">
                <img
                  className="center"
                  alt="phone"
                  src={phone}
                  width="22"
                  height="22"
                ></img>
                <p id="textcolor">
                  Call us on-
                  <u
                    className="blue-text hide-on-small-only"
                    style={{ cursor: "pointer" }}
                  >
                    1800-121-0786
                  </u>
                  <span className="show-on-small hide-on-med-and-up">
                    <u className="blue-text" style={{ cursor: "pointer" }}>
                      1800-121-0786
                    </u>
                  </span>
                </p>
              </div>
            </div>

            <br></br>
            <div className="container border" style={{ padding: "0px" }}>
              <div className="card-body">
                System info: {curTime}
                {data}
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <footer className="page-footer" id="addresss">
          <div className="center align">
            <div className="row ">
              <div className="col l6 s12 m6 ">
                <h4 className="black-text">
                  <strong>Come and visit our office</strong>
                </h4>
                <p className="" id="textcolor">
                  To get in touch with us, and to know more about us and our
                  service,
                </p>
                <p className="" id="textcolor">
                  please come and visit us.
                </p>
                <strong className="black-text ">Working hours: 9 to 7</strong>
                <div className="center">
                  <img
                    className="center"
                    alt="map"
                    src={map}
                    width="28"
                    height="28"
                  ></img>
                  <p id="textcolor">
                    #195/6/2,#3rd Floor, Ward No. 192, Bhartena Agrahara,Above
                    MGShowroom, Hosur Main Road, Electronic City,
                    Bengaluru-560100
                  </p>

                  <p>
                    <a
                      className="map"
                      href="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d31115.44716423899!2d77.6347607214851!3d12.879991018615911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d12.8688906!2d77.6650548!4m5!1s0x3bae15b15cc1af17%3A0xd7dc35c692468e44!2sstsk%20properties%20private%20limited!3m2!1d12.8913914!2d77.6415901!5e0!3m2!1sen!2sin!4v1593842701370!5m2!1sen!2sin"
                      target="iframe_a"
                    >
                      <u className="teal-text">See on the map</u>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-copyright" id="footer">
          <h6 className="center">
            Copyright @2020 All rights reserved | This tamplate is made with
            STSK
          </h6>
        </div>
      </div>
    );
  }
}

export default NavbarBottom;
//{this.callMe()}
