import React, { Component } from "react";
import "./css/dashboardHelp.css";
import dashboard from "./Images/dashboard.png";
import { withRouter, Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import NavbarJobseeker from "../components/NavbarJobseeker";

import "react-accessible-accordion/dist/fancy-example.css";
import UserLogin from "./UserLogin";
import NavbarBottom from "./NavbarJobseeker/NavbarBottom";

export class dashboardHelp extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".collapsible");
      var instances = M.Collapsible.init(elems, {});
    });
  }
  render() {
    console.log(this.state);
    const jobseker = require("./Json/Jobseeker.json");

    const jobseekerList = jobseker.length
      ? jobseker.map((Qes) => {
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
                    <i className="material-icons right-align">
                      arrow_drop_down
                    </i>
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
      : null;

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
