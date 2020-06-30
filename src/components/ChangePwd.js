import React, { Component } from "react";
import axios from "axios";
import logo from "./Images/Mainlogo.png";

const header = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};

class ChangePwd extends Component {
  state = {
    mob: "",
    password: "",
    confirmPassword: "",
    error: "",
    loading: false,
  };

  componentDidMount() {
    this.setState({
      mob: this.props.location.state.mobileNumber.mobileNumber,
    });
  }

  handleChange1 = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleChange2 = (e) => {
    this.setState({
      confirmPassword: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
      error: "",
    });
    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({
        password: "",
        confirmPassword: "",
        error: "Password & Confpassword miss-match",
        loading: false,
      });
    } else {
      axios
        .put(
          "/stskFmsApi/userLogin/resetpassword",
          {
            countryCode: 91,
            mob: this.state.mob,
            password: this.state.password,
          },
          { headers: header }
        )
        .then((Response) => {
          console.log(Response);
          console.log(Response.data);
          if (Response.data.success === 1) {
            this.props.history.push("./userLogin");
          } else
            this.setState({
              error: "Please Try again...",
              loading: false,
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  render() {
    const { loading } = this.state;
    return (
      <div id="body">
        <div className="row" id="main2">
          <center id="center">
            <img
              className="center"
              id="logo"
              src={logo}
              width="70"
              height="70"
            ></img>
            <br></br>
            <br></br>
            <form id="frm" onSubmit={this.handleSubmit}>
              <div className="input-field">
                <i id="iconn" className="material-icons prefix">
                  lock
                </i>
                <input
                  id="icon_prefix"
                  type="password"
                  required
                  value={this.state.password}
                  onChange={this.handleChange1}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
                  placeholder="Enter password"
                  onChange={this.handleChange1}
                />
              </div>
              <div className="input-field">
                <i id="iconn" className="material-icons prefix">
                  lock
                </i>
                <input
                  id="icon_prefix"
                  type="password"
                  required
                  value={this.state.confirmPassword}
                  onChange={this.handleChange2}
                  placeholder="Confirm password"
                  onChange={this.handleChange2}
                />
                <br></br>
                <strong className="red-text center">{this.state.error}</strong>
                <br></br>
              </div>
              {loading && loading ? (
                <button id="input-type4">
                  {loading && <i className="fa fa-spinner fa-spin"></i>}
                  saving...
                </button>
              ) : (
                <button id="input-type4">save</button>
              )}
            </form>
          </center>
        </div>
      </div>
    );
  }
}

export default ChangePwd;
