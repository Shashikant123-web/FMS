import React, { Component } from "react";
import "../css/RecomendedJobs.css";
import mainLogo from "../Images/Mainlogo.png";
import dashboard from "../Images/dashboard.png";
import { withRouter, Link } from "react-router-dom";
import Popup from "reactjs-popup";
import axios from "axios";
import rightMark from "../Images/tic.png";
import M from "materialize-css/dist/js/materialize.min.js";
import NavbarTop from "../NavbarJobseeker/NavbarTop";
import { connect } from "react-redux";

const header = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};

export class newJobs extends Component {
  handleHide = (id) => {
    // M.toast({ Forhtml: "I am a toast", classes: "rounded" });
    const recomendedJobs = this.state.recomendedJobs.filter((job) => {
      return job.id !== id;
    });
    this.setState({
      recomendedJobs,
    });
  };
  handleApply = (id) => {
    axios
      .post(
        "/stskFmsApi/jobseeker/applyJobs",
        {
          id: 27,
          jobs: [
            {
              id: id,
            },
          ],
        },
        { headers: header }
      )
      .then((res) => {
        console.log(res.data);
        console.log(res);
      });
    const timer1 = setTimeout(() => {
      axios
        .get("/stskFmsApi/jobseeker/getById/" + 27, { headers: header })
        .then((res) => {
          this.setState({
            appliedJobs: res.data.data.jobs,
          });
        });
    }, 1000);
  };
  handleSave = (id) => {
    // axios
    //   .post(
    //     "/stskFmsApi/jobseeker/saveJobs",
    //     {
    //       id: 27,
    //       jobs: [
    //         {
    //           id: id,
    //         }
    //       ]
    //     },
    //     { headers: header }
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     console.log(res);
    //   });
    // {
    //   this.state.saved.map((savedId) => {
    //     var flag = document.getElementById(id).innerHTML;

    //     if (flag === "turned_in_not" && id == savedId) {
    //       var a = (document.getElementById(id).innerHTML = "turned_in");
    //       flag = 1;
    //     } else {
    //       var a = (document.getElementById(id).innerHTML = "turned_in_not");
    //     }
    //   });
    // }
    console.log(id);
    this.setState({
      saved: [...this.state.saved, id],
    });
  };

  render() {
    const { newJobs, appliedJobs } = this.props.dashboard;

    const nmbr = newJobs.length;
    const newJobsList = newJobs.length ? (
      newJobs.map((job) => {
        return (
          <div key={job.id}>
            <div className="col s12 m12 l12">
              <div className="card darken-1 hoverable" id="recomendedJobsMain">
                <Popup
                  trigger={
                    <div className="card-content recomendedJobs ">
                      <div>
                        <h5>
                          <strong className="left">{job.jobType}</strong>
                        </h5>
                        {appliedJobs &&
                          appliedJobs.map((id, index) => {
                            if (id.id === job.id) {
                              return (
                                <h6 className="right teal-text" key={index}>
                                  <img
                                    src={rightMark}
                                    width="20"
                                    height="20"
                                  ></img>
                                  Applied
                                </h6>
                              );
                            }
                          })}
                        <br></br>
                      </div>

                      <br></br>

                      <div className="row">
                        <div className="col s12 m4 l4" id="marginLeft">
                          <strong className="black-text">
                            Job position-
                            <span className="grey-text">{job.jobType}</span>
                          </strong>
                          <br></br>
                          <strong className="black-text">
                            Language-
                            <span className="grey-text">{job.language}</span>
                          </strong>
                          <br></br>
                          <strong className="black-text">
                            Valid Upto-
                            <span className="grey-text">{job.validUpto}</span>
                          </strong>
                        </div>
                        <div className="col s12 m4 l4">
                          <strong className="black-text">
                            Experiance-
                            <span className="grey-text">{job.experience}</span>
                          </strong>
                          <br></br>
                          <strong className="black-text">
                            Age limit-
                            <span className="grey-text">{job.experience}</span>
                          </strong>
                          <br></br>
                          <strong className="black-text">
                            Location-
                            <span className="grey-text">{job.serviceArea}</span>
                          </strong>
                        </div>
                        <div className="col s12 m4 l4">
                          <strong className="black-text">
                            Vacancy-
                            <span className="grey-text">{job.vacancy}</span>
                          </strong>
                          <br></br>
                          <strong className="black-text">
                            Salary range-
                            <span className="grey-text">{job.salaryRange}</span>
                          </strong>
                          <br></br>
                        </div>
                      </div>
                    </div>
                  }
                  modal
                >
                  {(close) => (
                    <div className="popup-content">
                      <div className="col s12 m12 l12">
                        <div className="right-align">
                          <i
                            className="material-icons"
                            id="dashcancelbtn"
                            onClick={() => {
                              close();
                            }}
                          >
                            clear
                          </i>
                        </div>

                        <h4 className="center align grey-text">View Details</h4>

                        <div className="row">
                          <div className="col s12 m4 l4">
                            <br></br>
                            <strong className="black-text">
                              Job position-
                              <span className="grey-text">{job.jobType}</span>
                            </strong>
                            <br></br>
                            <br></br>
                            <strong className="black-text">
                              Language-
                              <span className="grey-text">{job.language}</span>
                            </strong>
                            <br></br>
                            <br></br>
                            <strong className="black-text">
                              Valid Upto-
                              <span className="grey-text">{job.validUpto}</span>
                            </strong>
                            <br></br>
                            <br></br>
                            <strong className="black-text">
                              Salary range-
                              <span className="grey-text">
                                {job.salaryRange}
                              </span>
                            </strong>
                          </div>
                          <div className="col s12 m4 l4">
                            <br></br>
                            <strong className="black-text">
                              Experiance-
                              <span className="grey-text">
                                {job.experience}
                              </span>
                            </strong>
                            <br></br>
                            <br></br>
                            <strong className="black-text">
                              Age limit-
                              <span className="grey-text">
                                {job.experience}
                              </span>
                            </strong>
                            <br></br>
                            <br></br>
                            <strong className="black-text">
                              Location-
                              <span className="grey-text">
                                {job.serviceArea}
                              </span>
                            </strong>
                            <br></br>
                            <br></br>
                            <strong className="black-text">
                              Vacancy-
                              <span className="grey-text">{job.vacancy}</span>
                            </strong>
                          </div>
                        </div>
                        <div>
                          <strong>Description</strong>
                          <br></br>
                          <p className="grey-text">{job.description}</p>
                        </div>
                        <div className="center">
                          <a className="btn center" id="savebtn">
                            <i className="material-icons left">turned_in_not</i>
                            save
                          </a>
                          <a
                            className="btn center"
                            onClick={() => this.handleApply(job.id)}
                            id="applybtn"
                          >
                            Apply
                          </a>
                        </div>

                        <br></br>
                      </div>
                    </div>
                  )}
                </Popup>
                <div className="card-action">
                  <strong className="left">{job.createdAt}</strong>
                  <div className="right">
                    {this.state.saved &&
                      this.state.saved.map((id, index) => {
                        if (id === job.id) {
                          return (
                            <strong className="right" key={index}>
                              <i className="material-icons teal-text left">
                                turned_in
                              </i>
                              saved
                            </strong>
                          );
                        } else {
                          return (
                            <strong
                              key={index}
                              className="right"
                              onClick={() => this.handleSave(job.id)}
                            >
                              <i className="material-icons teal-text left">
                                turned_in_not
                              </i>
                              save
                            </strong>
                          );
                        }
                      })}
                    <strong
                      className="right"
                      onClick={() => {
                        this.handleHide(job.id);
                      }}
                    >
                      <i className="material-icons teal-text left">
                        visibility_off
                      </i>
                      hide
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div>
        Loading please wait...
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );

    return (
      <div id="back" className="grey lighten-5">
        <div>
          <NavbarTop />
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
                    placeholder="Search jobs"
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

          <div className="container mainContainer">
            <div className="left">
              <strong
                className="waves-effect waves-light"
                onClick={() => {
                  this.props.history.push("/dashboard");
                }}
              >
                <i className="material-icons left grey-text">home</i>Home
              </strong>
              <strong className="waves-effect waves-light">
                <i className="material-icons left">chevron_right</i>
                <strong className="teal-text">New jobs</strong>
              </strong>
            </div>
            <br></br>
            <hr></hr>
            <div>
              <h5 className="left">
                <strong>Recomended jobs for you</strong>
              </h5>
              <strong className="right">
                <div className="numberCircle left">{nmbr}</div>
                <h5 className="right">jobs</h5>
              </strong>
            </div>
            <br></br>
            <br></br>
            {newJobsList}
          </div>

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

const mapStateToProps = (state) => {
  return {
    dashboard: state.userLogin.userLogin,
  };
};
export default connect(mapStateToProps)(withRouter(newJobs));
