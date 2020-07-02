import React, { Component } from "react";
// import "../css/dashboardHelp.css";
import mainLogo from "../../components/Images/Mainlogo.png";
import dashboard from "../Images/dashboard.png";
import "../css/dashboard.css";
import "../css/NavbarTop.css";
import axios from "axios";

import { withRouter, Link } from "react-router-dom";
const header = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};
class NavbarTop extends Component {
  state = {
    nav: true,
    items: [],
    suggestions: [],
    names: [],
    text: "",
  };
  onTextChanged = (e, names) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = names.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };
  renderSuggestions() {
    console.log("hi");
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => (
          <li onClick={() => this.suggestionsSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  }
  suggestionsSelected(value) {
    this.setState({
      text: value,
      suggestions: [],
    });
  }
  handleSearch = (e) => {
    console.log("hello");
    e.preventDefault();
    this.props.history.push({
      pathname: "/searchedJobs",
      state: {
        userInput: this.state.text,
      },
    });
    axios
      .get("/stskFmsApi/jobs/getByJobName/" + this.state.text, {
        headers: header,
      })
      .then((res) => {
        console.log(res);
        if (res.data.success === 1) {
          this.props.history.push({
            pathname: "/searchedJobs",
            state: {
              userInput: this.state.text,
            },
          });
        }
      })
      .catch((err) => console.log(err));
  };

  componentDidMount(e) {
    axios
      .get("/stskFmsApi/jobTypes/getAllJobTypes", { headers: header })
      .then((res) => {
        console.log(res);
        console.log(res.data.data[0].name);
        this.setState({
          items: res.data.data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    console.log(this.state);
    const { text } = this.state;
    const names = this.state.items.map((name) => {
      return name.name;
    });
    return (
      <div className="navbar-fixed white">
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
                  }}
                >
                  Help
                </Link>
              </li>
              {/* <li><i className="material-icons grey-text large" id="profileicn">account_circle</i></li> */}
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
        <div className="row">
          <div className="container">
            <div class="row justify-content-center">
              <img id="dashboard" src={dashboard} className="center"></img>
            </div>
          </div>
          <div className="center-align">
            <h6 className="show-on-large" id="textimg">
              How can we help?
            </h6>
          </div>
        </div>

        <div className="container white" id="search">
          <input
            type="text"
            onChange={(e) => this.onTextChanged(e, names)}
            value={text}
            className="autosugest"
            style={{ width: "80%", border: "none" }}
          />
          <i className="material-icons right">
            <a
              className="btn hide-on-small-only"
              onClick={this.handleSearch}
              id="src1"
            >
              <i className="material-icons right" id="src">
                search
              </i>
              Search
            </a>
          </i>

          <i
            className="material-icons right show-on-small hide-on-med-and-up grey-text"
            onClick={this.handleSearch}
          >
            search
          </i>
        </div>
        <div className="suggestionbox z-depth-1">
          <ul id="listitem">
            <li>{this.renderSuggestions()}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavbarTop;
