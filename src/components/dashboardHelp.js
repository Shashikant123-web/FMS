import React, { Component } from "react";
import "./css/dashboardHelp.css";
import mainLogo from "./Images/Mainlogo.png";
import dashboard from "./Images/dashboard.png";
import { withRouter, Link } from "react-router-dom";
import jobseeker from "./Images/JobseekerHelp.png";
import vendor from "./Images/vendorHelp.png";
import association from "./Images/AsssociationHelp.png";
import recident from "./Images/recidentHelp.png";
import M from "materialize-css/dist/js/materialize.min.js";
import axios from "axios";
import * as $ from "jquery";
import edit from "./Images/edit.png";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export class dashboardHelp extends Component {
  state = {
    mobileNumber: this.props.location.state.mobileNumber.mobileNumber,
  };
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".collapsible");
      var instances = M.Collapsible.init(elems, {});
    });
  }
  handleVendor = (e) => {
    this.props.history.push({
      pathname: "/vendorHelp",
      state: {
        mobileNumber: this.state,
      },
    });
  };
  handleJobseeker = (e) => {
    this.props.history.push({
      pathname: "/help",
      state: {
        mobileNumber: this.state,
      },
    });
  };
  handleAssociation = (e) => {
    this.props.history.push({
      pathname: "/associationHelp",
      state: {
        mobileNumber: this.state,
      },
    });
  };
  handleResident = (e) => {
    this.props.history.push({
      pathname: "/residentHelp",
      state: {
        mobileNumber: this.state,
      },
    });
  };

  render() {
    console.log(this.state);
    const jobseker = require("./Json/Jobseeker.json");

    const jobseekerList = jobseker.length ? (
      jobseker.map((Qes) => {
        return (
          <div>
            <ul
              className="collapsible container"
              data-collapsible="accordion"
              id="collpsible"
              key={Qes.id}
            >
              <li>
                <div className="collapsible-header">
                  <i className="material-icons right-align">arrow_drop_down</i>
                  {Qes.question}
                </div>
                <div className="collapsible-body">
                  <p>{Qes.ans}</p>
                </div>
              </li>
            </ul>
          </div>
        );
      })
    ) : (
      <div className="center">
        <h5>You have not Applied for any Jobs</h5>
      </div>
    );

    return (
      <div id="back">
        <div>
          <div className="navbar-fixed">
            <nav className="white">
              <div className="nav-wrapper container ">
                <a className="brand-logo left" id="img">
                  <img
                    className="center"
                    src={mainLogo}
                    width="50"
                    height="50"
                  ></img>
                </a>
                <ul id="nav-mobile" className="right">
                  <li>
                    <Link
                      id="home"
                      to={{
                        pathname: "/dashboard",
                        state: {
                          mobileNumber: this.state,
                        },
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <a
                      href=""
                      className="waves-effect waves-light btn-small"
                      id="btnnav"
                    >
                      Help
                    </a>
                  </li>
                  <li>
                    <i
                      className="material-icons grey-text large"
                      id="profileicn"
                    >
                      account_circle
                    </i>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="row">
            <img className="center" id="dashboard" src={dashboard}></img>
            <div className="center-align">
              <h6 className="show-on-large" id="textimg">
                How can we help?
              </h6>
            </div>

            <nav className="container white" id="search">
              <div className="nav-wrapper">
                <div className="input-field">
                  <input
                    type="search"
                    id="dashinput"
                    placeholder="Ask a question"
                    required
                  ></input>
                  <i className="material-icons right">
                    <a className="btn hide-on-small-only" id="src1">
                      <i className="material-icons right" id="src">
                        search
                      </i>
                      Search
                    </a>
                  </i>
                  <i className="material-icons right show-on-small grey-text hide-on-med-and-up">
                    search
                  </i>
                </div>
              </div>
            </nav>
          </div>

          <h4 className="center" id="headinggg">
            Got questions?
          </h4>
          <h5 className="center" id="textcolor">
            Perfect, we've got answer!
          </h5>

          <div className="row container center" id="jobtypesbtn">
            <div className="col s6 m3 l3 offset-l3 offset-m3 ">
              <div
                className="card hoverable z-depth-3"
                onClick={this.handleJobseeker}
              >
                <div className="card-image">
                  <img className="center-align" src={jobseeker}></img>
                  <h6 className="center-align" id="imghelp">
                    Job Seeker
                  </h6>
                </div>
                <div className="card-content"></div>
              </div>
            </div>

            <div className="col s6 m3 l3 " onClick={this.handleVendor}>
              <div className="card hoverable">
                <div className="card-image">
                  <img className="center-align" src={vendor}></img>
                  <h6 className="center-align" id="imghelp">
                    Vendor
                  </h6>
                </div>
                <div className="card-content"></div>
              </div>
            </div>

            <div className="col s6 m3 l3" onClick={this.handleAssociation}>
              <div className="card hoverable">
                <div className="card-image">
                  <img className="center-align" src={association}></img>
                  <h6 className="center-align" id="imghelp">
                    Association
                  </h6>
                </div>
                <div className="card-content"></div>
              </div>
            </div>

            <div className="col s6 m3 l3" onClick={this.handleResident}>
              <div className="card hoverable">
                <div className="card-image">
                  <img className="center-align" src={recident}></img>
                  <h6 className="center-align" id="imghelp">
                    Resident
                  </h6>
                </div>
                <div className="card-content"></div>
              </div>
            </div>
          </div>
          <br></br>

          <div className="container z-depth-1" id="colli">
            <h5 className="center-align" id="coll">
              Job Seeker
            </h5>
            {jobseekerList}
            <br></br>
            <br></br>
          </div>

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
      </div>
    );
  }
}

export default withRouter(dashboardHelp);

// <Accordion>
// <AccordionItem>
//     <AccordionItemHeading>
//         <AccordionItemButton>
//             What harsh truths do you prefer to ignore?
//         </AccordionItemButton>
//     </AccordionItemHeading>
//     <AccordionItemPanel>
//         <p>
//             Exercitation in fugiat est ut ad ea cupidatat ut in
//             cupidatat occaecat ut occaecat consequat est minim minim
//             esse tempor laborum consequat esse adipisicing eu
//             reprehenderit enim.
//         </p>
//     </AccordionItemPanel>
// </AccordionItem>
