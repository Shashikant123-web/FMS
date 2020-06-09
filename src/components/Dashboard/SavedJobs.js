import React, { Component } from "react";
import "../css/RecomendedJobs.css";
import mainLogo from "../Images/Mainlogo.png";
import dashboard from "../Images/dashboard.png";
import { withRouter, Link } from "react-router-dom";
import Popup from "reactjs-popup";
import axios from "axios";

const header = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};

export class RecomendedJobs extends Component {
  state = {
    // mobileNumber: this.props.location.state.mobileNumber.mobileNumber,
    savedJobs: [],
  };
  componentDidMount() {
    this.setState({
      savedJobs: this.props.location.state.savedJobs.savedJobs,
    });
  }

  handleHide = (id) => {
    console.log(id);
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
  };
  handleSave = (id) => {
    axios
      .post(
        "/stskFmsApi/jobseeker/saveJobs",
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
  };

  render() {
    console.log(this.state);
    return (
      <div id="back">
        <div>
          <div className="navbar-fixed">
            <nav className="white">
              <div className="nav-wrapper white container">
                <a className="brand-logo left jobnav" id="img">
                  <img
                    className="center"
                    src={mainLogo}
                    width="50"
                    height="50"
                  ></img>
                </a>
                <ul id="nav-mobile jonnav" className="right">
                  <li>
                    <Link
                      to="/dashboard"
                      className="waves-effect waves-light btn-small"
                      id="btnnav"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="home"
                      to={{
                        pathname: "/help",
                        state: {
                          mobileNumber: this.state,
                        },
                      }}
                    >
                      Help
                    </Link>
                  </li>
                  <img
                    src={this.state.profileimagepath}
                    style={{
                      height: "63px",
                      width: "63px",
                      borderRadius: "50px",
                    }}
                  ></img>
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
          <div className="container">
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
                <strong className="teal-text">Saved jobs</strong>
              </strong>
            </div>
            <br></br>
            <hr></hr>
            <div>
              <h5 className="left">
                <strong>Saved jobs for you</strong>
              </h5>
              <strong className="right">
                <div className="numberCircle left">10</div>
                <h5 className="right">jobs</h5>
              </strong>
            </div>
            <br></br>
            <br></br>
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

export default withRouter(RecomendedJobs);
