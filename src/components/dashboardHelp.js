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
import NavbarJobseeker from "../components/NavbarJobseeker";

import axios from "axios";
import * as $ from "jquery";
import edit from "./Images/edit.png";

import "react-accessible-accordion/dist/fancy-example.css";
import UserLogin from "./UserLogin";
import NavbarBottom from "./NavbarJobseeker/NavbarBottom";

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
          <div key={Qes.id}>
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
          <NavbarJobseeker />

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

          <NavbarBottom />
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
