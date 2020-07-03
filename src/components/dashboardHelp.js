import React, { Component } from "react";
import "./css/dashboardHelp.css";
import dashboard from "./Images/dashboard.png";
import { withRouter } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/js/materialize.min.js";
import NavbarJobseeker from "../components/NavbarJobseeker";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
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

    // const jobseekerList = jobseker.length
    //   ? jobseker.map((Qes) => {
    //       return (
    //         <div key={Qes.id}>
    //           <div className="" id="accordionExample">
    //             <div className="card">
    //               <div
    //                 className="card-header white"
    //                 id="headingTwo"
    //                 data-toggle="collapse"
    //                 data-target="#collapseTwo"
    //               >
    //                 <p className="mb-0">
    //                   {Qes.question}
    //                   <i className="material-icons right">arrow_drop_down</i>
    //                 </p>
    //               </div>
    //               <div id="collapseTwo" className="collapse">
    //                 <div className="card-body">{Qes.ans}</div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })
    //   : null;
    console.log(jobseker);
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

          <div
            className="container z-depth-1"
            style={{ borderRadius: "5px" }}
            // style={{ border: "1px solid grey" }}
            id="colli"
          >
            <h5 className="center-align" id="coll">
              Job Seeker
            </h5>
            <div className="" id="accordionExample">
              <div className="card">
                <div
                  className="card-header white"
                  id="headingTwo"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                >
                  <p className="mb-0">
                    {jobseker[0].question}
                    <i className="material-icons right">arrow_drop_down</i>
                  </p>
                </div>
                <div id="collapseOne" className="collapse">
                  <div className="card-body">{jobseker[0].ans}</div>
                </div>
              </div>
            </div>
            <div className="" id="accordionExample">
              <div className="card">
                <div
                  className="card-header white"
                  id="headingTwo"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                >
                  <p className="mb-0">
                    {jobseker[1].question}
                    <i className="material-icons right">arrow_drop_down</i>
                  </p>
                </div>
                <div id="collapseTwo" className="collapse">
                  <div className="card-body">{jobseker[1].ans}</div>
                </div>
              </div>
            </div>
            <div className="" id="accordionExample">
              <div className="card">
                <div
                  className="card-header white"
                  id="headingTwo"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                >
                  <p className="mb-0">
                    {jobseker[2].question}
                    <i className="material-icons right">arrow_drop_down</i>
                  </p>
                </div>
                <div id="collapseThree" className="collapse">
                  <div className="card-body">{jobseker[2].ans}</div>
                </div>
              </div>
            </div>
            <div className="" id="accordionExample">
              <div className="card">
                <div
                  className="card-header white"
                  id="headingTwo"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                >
                  <p className="mb-0">
                    {jobseker[3].question}
                    <i className="material-icons right">arrow_drop_down</i>
                  </p>
                </div>
                <div id="collapseFour" className="collapse">
                  <div className="card-body">{jobseker[3].ans}</div>
                </div>
              </div>
            </div>
            <div className="" id="accordionExample">
              <div className="card">
                <div
                  className="card-header white"
                  id="headingTwo"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                >
                  <p className="mb-0">
                    {jobseker[4].question}
                    <i className="material-icons right">arrow_drop_down</i>
                  </p>
                </div>
                <div id="collapseFive" className="collapse">
                  <div className="card-body">{jobseker[4].ans}</div>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
          </div>
          <br></br>
          <br></br>
          <NavbarBottom />
        </div>
      </div>
    );
  }
}

export default withRouter(dashboardHelp);
