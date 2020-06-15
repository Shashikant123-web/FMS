import React, { Component } from "react";

class NavbarBottom extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id="ques">
          <h4 className="center" id="headinggg">
            You still have a questions?
          </h4>
          <h5 className="center gray-text" id="textcolor">
            Lets talk about everything!
          </h5>
        </div>

        <div className="row container" id="helpDetails">
          <div
            className="col s6 m5 l5 offset-m3 offset-l3 z-depth-1 center "
            id="mail"
          >
            <i className="material-icons">email</i>
            <p id="textcolor">
              send us an email <a href="">info@stskfecilities.com</a>
            </p>
          </div>
          <div
            className="col s6 m5 l5 offset-s1 offset-l1 offset-m1 z-depth-1 center"
            id="mail"
          >
            <i className="material-icons ">call</i>
            <p id="textcolor">
              Call us on <a href="">1800-121-0786</a>
            </p>
          </div>
        </div>

        <br></br>
        <br></br>

        <div className="container z-depth-1">
          <ul className="">
            <div className="collapsible-header" id="jobtypesbtn">
              System info:
            </div>
          </ul>
        </div>

        <footer className="page-footer" id="addresss">
          <div className="center align">
            <div className="row ">
              <div className="col l6 s12 m6 ">
                <h5 className="black-text">Come and visit our office</h5>
                <p className="" id="textcolor">
                  To get in touch with us, and to know more about us and our
                  service,
                </p>
                <p className="" id="textcolor">
                  please come and visit us.
                </p>
                <p className="black-text ">Working hours: 9 to 7</p>
                <div className="center">
                  <i className="material-icons small" id="locicon">
                    location_on
                  </i>
                  <p id="textcolor">
                    #195/6/2,#3rd Floor, Ward No. 192, Bhartena Agrahara,Above
                    MGShowroom, Hosur Main Road, Electronic City,
                    Bengaluru-560100
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
