import React, { Component } from "react";
import axios from "axios";
import "./css/dashboard.css";
import mainLogo from "./Images/Mainlogo.png";
import dashboard from "./Images/dashboard.png";
import { withRouter, Link, NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logout from "./Images/logout.png";
import call from "./Images/call.png";
import location from "./Images/location.png";
import experiance from "./Images/experiance.png";
import book from "./Images/book.png";
import edit from "./Images/edit.png";
import mail from "./Images/mail.png";
import file from "./Images/file.png";
import uploadfile from "./Images/upload.png";
import { Multiselect } from "multiselect-react-dropdown";
import { Form } from "react-bootstrap";
import EditProfile from "./Editprofile";

import { connect } from "react-redux";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

const header = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};

toast.configure();
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createeditprofileimage: "null",

      createeditprofileimagepath: "",
      createeditprofileimagedocId: "",
      editprofileimage: "",
      editprofileimagedocId: "",
      mobileNumberUserloginId: "",
      wantedit: "",
      profileimagepath: "",
      profileimageretrievedocId: "",
      blobData: null,
      resume: null,
      uploadedResume: "",
      Types: [],
      selectedValue: null,
      posts: [],
      details: [],
      editProfile: [],
      userId: "",
      LoggedIn: "true",
      mobileNumber: this.props.sendOtp.mobileNumber,
      search: "",
      appliedJobs: "",
      searchedJobs: [],
      searchLoading: false,
      searchError: "",
      appliedJobsId: [18],
      Updates: ["Send Mail", "SMS", "Both", "None"],
      //docId:'',
      path: "",
      fileName: "",

      recomendedJobs: [],
      appliedJobs: [],
      savedJobs: [],
      newJobs: [],
      saveNumber: "",
      recomendedJobsLength: "",
    };
  }
  handlejobtypes() {}
  handleRadioEdit(e) {
    console.log(e.target.value);
    // this.setState({
    //     wantedit:e.target.value
    // })
    if (e.target.value == "false") {
      alert("hi");
    }
  }

  componentDidMount(e) {
    // fetch("http://stskfacilities.com:8081/stskFmsApi/jobTypes/getAllJobTypes", {
    //   headers: header,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     let TypesFromApi = data.data.map((Type) => {
    //       return { id: Type.id, name: Type.name };
    //     });
    //     this.setState({
    //       Types: [
    //         {
    //           id: "",
    //           name: "(Select your desire job)",
    //         },
    //       ].concat(TypesFromApi),
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // this._isMounted = true;
    // this.setState({
    //   mobileNumber: this.props.location.state.mobileNumber.mobileNumber,
    // });
    // axios
    //   .get("/stskFmsApi/jobseeker/getByMob/" + this.state.mobileNumber, {
    //     headers: header,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     this.setState({
    //       userId: res.data.data.id,
    //       details: res.data.data,
    //       editProfile: res.data.data,
    //       userLoginMobile: res.data.data.mob,
    //     });
    //   });

    const timer = setTimeout(() => {
      axios
        .get("/stskFmsApi/jobs/recommendedJobs/" + 27, {
          headers: header,
        })
        .then((res) => {
          console.log(res.data.data);
          if (res.data.success === 1) {
            this.setState({
              recomendedJobs: res.data.data,
            });
          } else {
            console.log("No jobs present");
          }
        });
      axios
        .get("/stskFmsApi/jobseeker/getSavedJobs/" + 27, {
          headers: header,
        })
        .then((res) => {
          if (res.data.success === 1) {
            this.setState({
              savedJobs: res.data.data,
            });
          } else {
            this.setState({
              savedJobs: "",
            });
          }
        });

      axios
        .get("/stskFmsApi/jobs/newJobs/" + 27, {
          headers: header,
        })
        .then((res) => {
          if (res.data.success === 1) {
            this.setState({
              newJobs: res.data.data,
            });
          } else {
            this.setState({
              newJobs: "",
            });
          }
        });
    }, 3000);

    const timer1 = setTimeout(() => {
      axios
        .get("/stskFmsApi/jobseeker/getById/" + 27, { headers: header })
        .then((res) => {
          console.log(res.data);
          if (res.data.success === 1) {
            this.setState({
              appliedJobs: res.data.data.jobs,
            });
          } else {
            this.setState({
              appliedJobs: 0,
            });
          }
        });
    }, 3000);

    // const timer2 = setTimeout(() => {
    //   axios
    //     .get("/stskFmsApi/jobseekerdoc/getByJobSeekerId/" + this.state.userId, {
    //       headers: header,
    //     })
    //     .then((res) => {
    //       console.log(res.data.data[0].docId);
    //       this.setState({
    //         docId: res.data.data[0].docId,
    //       });
    //     });
    // }, 4000);
    // const timer3 = setTimeout(() => {
    //   axios
    //     .get("/stskFmsApi/jobseekerdoc/retriveWithPath/" + this.state.docId, {
    //       headers: header,
    //     })
    //     .then((res) => {
    //       console.log(res.data.data.path);
    //       this.setState({
    //         path: res.data.data.path,
    //         fileName: res.data.data.docName,
    //       });
    //     })
    //     .catch((err) => console.log(err));
    // }, 5000);
    // const timer4 = setTimeout(() => {
    //   axios
    //     .get("/stskFmsApi/userLogin/getByMob/" + this.state.mobileNumber, {
    //       headers: header,
    //     })
    //     .then((res) => {
    //       console.log(res.data.data.id);
    //       this.setState({
    //         mobileNumberUserloginId: res.data.data.id,
    //       });
    //     })
    //     .catch((err) => console.log(err));
    // }, 6000);
    // const timer5 = setTimeout(() => {
    //   axios
    //     .get(
    //       "/stskFmsApi/imageDoc/getByLoginId/" +
    //         this.state.mobileNumberUserloginId,
    //       { headers: header }
    //     )
    //     .then((res) => {
    //       console.log(res.data.data[0].docId);
    //       this.setState({
    //         profileimageretrievedocId: res.data.data[0].docId,
    //       });
    //     })
    //     .catch((err) => console.log(err));
    // }, 7000);
    // const timer6 = setTimeout(() => {
    //   axios
    //     .get(
    //       "/stskFmsApi/imageDoc/retriveWithPath/" +
    //         this.state.profileimageretrievedocId,
    //       { headers: header }
    //     )
    //     .then((res) => {
    //       console.log(res);
    //       this.setState({
    //         profileimagepath: res.data.data.path,
    //       });
    //     })
    //     .catch((err) => console.log(err));
    // }, 8000);
    // axios
    //   .get("/stskFmsApi/jobseekerdoc/getByJobSeekerId" + this.state.userId, {
    //     headers: header,
    //   })
    //   .then((res) => {
    //     console.log(res.data.data.docId);
    //     console.log(res);
    //     this.setState({
    //       docId: res.data.data.docId,
    //     });
    //   });
    // const timerrr2 = setTimeout(() => {
    //   axios
    //     .get("/stskFmsApi/jobseekerdoc/getByJobSeekerId/" + this.state.userId, {
    //       headers: header,
    //     })
    //     .then((res) => {
    //       console.log(res.data.data.docId);
    //       console.log(res);
    //       this.setState({
    //         docId: res.data.data.docId,
    //       });
    //     });
    // }, 4000);
  }

  handleApply = (id) => {
    console.log(id);
    toast.success("Applied successfully", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    axios
      .post(
        "/stskFmsApi/jobseeker/applyJobs",
        {
          id: this.state.userId,
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

    const posts = this.state.posts.filter((job) => {
      return job.id !== id;
    });
    const searchedJobs = this.state.searchedJobs.filter((job) => {
      return job.id !== id;
    });
    this.setState({
      posts,
      searchedJobs,
      //appliedJobsId:[...this.state.appliedJobsId, id],
    });
  };
  handleLogout = (e) => {
    this.setState({
      LoggedIn: false,
    });
    this.props.history.push("/userLogin");
    localStorage.clear();
  };

  handleinputSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handlepopup = (e) => {
    const { editProfile } = { ...this.state };
    const currentState = editProfile;
    const { name, value } = e.target;
    currentState[name] = value;
    this.setState({ editProfile: editProfile });
  };
  handleResume = (e) => {
    e.preventDefault();

    console.log(e);
    console.log(e.target.files[0]);
    console.log(e.target.files[0].name);
    this.setState({
      resume: e.target.files[0],
    });
  };
  handleResume1Submit = (e) => {
    let formData = new FormData();
    formData.append("file", this.state.resume);
    axios
      .post("/stskFmsApi/jobseekerdoc/editDoc/" + this.state.docId, formData, {
        headers: {
          "x-api-key":
            " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  popupsubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        "/stskFmsApi/jobseeker/editJS",
        {
          name: this.state.name,
          email: this.state.email,
          mob: this.state.mob,
          panNum: this.state.panNum,
          aadharNum: this.state.editprofile.aadharNum,
          eduQual: this.state.editprofile.eduQual,
          experience: this.state.editprofile.experience,
          working: this.state.editprofile.working,
          jobUpdate: this.state.editprofile.jobUpdate,
          address: this.state.editprofile.address,
          fresher: this.state.editprofile.fresher,
          companyName: this.state.editprofile.companyName,
          destination: this.state.editprofile.destination,
          noticeperiod: this.state.editprofile.noticeperiod,
          noOfDays: this.state.editprofile.noOfDays,
          currentLocation: this.state.editprofile.currentLocation,
          negotiable: this.state.editprofile.negotiable,
          upTo: this.state.editprofile.upTo,
          jobLocation: this.state.editprofile.jobLocation,
          userLogin: this.state.editprofile.jobLocation,
          jobTypes: this.state.editprofile.jobTypes,
        },
        { headers: header }
      )
      .then((res) => {
        console.log(res.data);
      });
    if (formValid(this.state)) {
      console.log(`
              --SUBMITTING--
              Full Name: ${this.state.editprofile.name}
              Mobile Number: ${this.state.editprofile.mob}
              Email: ${this.state.editprofile.email}
              panNumber: ${this.state.editprofile.panNum}
              aadhar: ${this.state.editprofile.aadharNum}
              years: ${this.state.editprofile.experience}
              education: ${this.state.editprofile.eduQual}
              jobUpdate:${this.state.editprofile.jobUpdate}
              address:${this.state.editprofile.address},
              working : ${this.state.editprofile.working},
              userLogin:{
                id:this.state.userId
              }},
              jobTypes:[{
                id:this.state.jobTypes.id
              }],
              fresher:${this.state.editprofile.fresher},
           
            noticePeriod:${this.state.editprofile.noticePeriod},
            companyName:${this.state.editprofile.companyName},
            currentLocation:${this.state.editprofile.currentLocation},
            jobLocation:${this.state.editprofile.jobLocation},
            designation:${this.state.editprofile.designation},
            negotiable:${this.state.editprofile.negotiable},
            upTo:${this.state.editprofile.upTo},
            noOfDays:${this.state.editprofile.noOfDays},
            address:${this.state.editprofile.address},
            prevcompanyName:${this.state.editprofile.prevcompanyName},
          prevdesignation:${this.state.editprofile.prevdesignation},
          prevjobLocation:${this.state.editprofile.prevjobLocation},
             `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };
  handleEditImage = (e) => {
    console.log(e.target.files[0]);
    console.log(e.target.files[0].name);
    this.setState({
      editprofileimage: e.target.files[0],
      createeditprofileimage: e.target.files[0],
    });
    const timer10 = setTimeout(() => {
      let formData = new FormData();

      formData.append("file", this.state.createeditprofileimage);
      axios
        .post("/stskFmsApi/imageDoc/createDoc/" + this.state.userId, formData, {
          headers: {
            "x-api-key":
              " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
          },
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          this.setState({
            createeditprofileimagedocId: res.data.data,
          });
        })
        .catch((err) => console.log(err));
    }, 4000);
    const timer11 = setTimeout(() => {
      axios
        .get(
          "/stskFmsApi/imageDoc/retriveWithPath/" +
            this.state.createeditprofileimagedocId,
          { headers: header }
        )
        .then((res) => {
          console.log(res);
          this.setState({
            createeditprofileimagepath: res.data.data.path,
          });
        })
        .catch((err) => console.log(err));
    }, 5000);

    const timer = setTimeout(() => {
      let formData = new FormData();

      formData.append("file", this.state.editprofileimage);
      axios
        .post(
          "/stskFmsApi/imageDoc/EditDoc/" +
            this.state.profileimageretrievedocId,
          formData,
          {
            headers: {
              "x-api-key":
                " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
            },
          }
        )
        .then((res) => {
          console.log(res, "test");
          console.log(res.data);
          this.setState({
            editprofileimagedocId: res.data.data,
          });
        })
        .catch((err) => console.log(err));
    }, 3000);

    // if(editprofileimagedocId==null){

    // }
  };
  handleChange2Arg = (selectedvalue) => {
    console.log(selectedvalue);
    console.log(`Option selected:`, selectedvalue);
    this.setState({ selectedvalue });
    this.setState({ jobTypes: selectedvalue });
    // var test=document.getElementsByClassName('_2OR24XnUXt8OCrysr3G0XI ')[0].innerHTML;
    // document.getElementById("valsel").innerHTML=test;
  };
  handleSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
    const timer1 = setTimeout(() => {
      axios
        .get("/stskFmsApi/jobs/getByJobs/" + this.state.search, {
          headers: header,
        })
        .then((res) => {
          if (res.data.success === 1) {
            this.setState({
              searchedJobs: res.data.data,
              searchLoading: true,
              searchError: "",
            });
          } else {
            this.setState({
              searchError: "Sorry, No job updates..!",
            });
          }
        });
    }, 3000);
  };

  render() {
    console.log(this.props.sendOtp.mobileNumber);

    /*saved jobs */
    const { savedJobs } = this.state;
    const saveNumber = savedJobs.length;

    /*new jobs */
    const { newJobs } = this.state;
    const newNumber = newJobs.length;

    /*recomended jobs*/

    const { recomendedJobs } = this.state;
    const nmbr = recomendedJobs.length;

    const recommendedList = recomendedJobs.length ? (
      recomendedJobs.slice(0, 3).map((job) => {
        return (
          <div className="col 12 m6 l4" key={job.id}>
            <div className="card darken-1 hoverable ">
              <div className="card-content " id="recomendedJobsMain">
                <strong className="black-text">
                  Job position-
                  <span className="grey-text">{job.jobType}</span>
                </strong>
                <br></br>
                <strong className="black-text">
                  Experience-
                  <span className="grey-text">{job.experience}</span>
                </strong>
                <br></br>
                <strong className="black-text">
                  Location-
                  <span className="grey-text">{job.serviceArea}</span>
                </strong>
                <br></br>
              </div>
              <div className="card-action">
                <strong className="left">{job.createdAt}</strong>
                <i
                  className="material-icons teal-text right"
                  onClick={() =>
                    this.props.history.push({
                      pathname: "/recomendedJobs",
                      state: {
                        recomendedJobs: this.state,
                        appliedJobs: this.state,
                      },
                    })
                  }
                >
                  arrow_forward
                </i>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div>Loading please wait...</div>
    );

    /*applied jobs*/
    console.log(this.state);
    const { appliedJobs } = this.state;
    const appliedJobsNmbr = appliedJobs.length;
    const appliedJobsList = appliedJobs.length ? (
      appliedJobs.slice(0, 3).map((applied) => {
        return (
          <div className="col 12 m6 l4" key={applied.id}>
            <div className="card darken-1 hoverable">
              <div className="card-content " id="recomendedJobsMain">
                <strong className="black-text">
                  Job position-
                  <span className="grey-text">{applied.jobType}</span>
                </strong>
                <br></br>
                <strong className="black-text">
                  Experience-
                  <span className="grey-text">{applied.experience}</span>
                </strong>
                <br></br>
                <strong className="black-text">
                  Location-
                  <span className="grey-text">{applied.serviceArea}</span>
                </strong>
                <br></br>
              </div>
              <div className="card-action">
                <strong className="left">{applied.createdAt}</strong>
                <i className="material-icons teal-text right">arrow_forward</i>
              </div>
            </div>
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
        </div>

        <div className="row">
          <div className="">
            <img className="center" id="dashboard" src={dashboard}></img>
            <div className="center-align show-on-large">
              <h6 id="textimg">Find your job here</h6>
            </div>
          </div>

          <nav className="container white" id="search">
            <div className="nav-wrapper">
              <div className="input-field">
                <input
                  id="dashinput"
                  type="search"
                  onChange={this.handleSearch}
                  required
                  placeholder="Search jobs"
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
            </div>
          </nav>
        </div>
        {/* edit profile*/}
        <div className="" id="details">
          <div className="row">
            <div className="col s12 m12 l12">
              <div
                className="col s10 m3 l2 offset-m1 offset-l1 offset-s1 z-depth-1"
                id="profile"
              >
                <div id="editicn">
                  <Popup
                    contentStyle={{ width: "75%" }}
                    modal
                    trigger={
                      <div className="right-align" style={{ width: "75%" }}>
                        <img src={edit} width="20" height="20"></img>
                      </div>
                    }
                    position="center"
                    width="70%"
                  >
                    <div class="popup-content">
                      <EditProfile />
                    </div>
                  </Popup>
                </div>
                <div className="center" id="profile1">
                  <div className="center">
                    <img
                      src={this.state.profileimagepath}
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "50px",
                      }}
                    ></img>
                    {/* <i className="material-icons large">person</i> */}
                    <br></br>
                  </div>
                  <strong className="center-align">
                    {this.state.details.name}
                  </strong>
                  <div className="left-align">
                    <p>
                      <img
                        className="center"
                        id="dashicn"
                        src={location}
                        width="23"
                        height="23"
                      ></img>
                      {this.state.details.currentLocation}
                    </p>
                    <p>
                      <img
                        className="center"
                        id="dashicn"
                        src={mail}
                        width="20"
                        height="20"
                      ></img>
                      {this.state.details.email}
                    </p>
                    <p>
                      <img
                        className="center"
                        id="dashicn"
                        src={call}
                        width="20"
                        height="20"
                      ></img>
                      {this.state.details.mob}
                    </p>
                    <p>
                      <img
                        className="center"
                        id="dashicn"
                        src={experiance}
                        width="20"
                        height="20"
                      ></img>
                      {this.state.details.experience}
                    </p>
                    <p>
                      <img
                        className="center"
                        id="dashicn"
                        src={book}
                        width="23"
                        height="23"
                      ></img>
                      {this.state.details.eduQual}
                    </p>
                  </div>

                  <hr></hr>
                  <a
                    className="waves-effect waves-light btn"
                    onClick={this.handleLogout}
                    id="logout"
                  >
                    <img
                      className="center"
                      src={logout}
                      width="20"
                      height="20"
                    ></img>
                    Logout
                  </a>
                  <br></br>
                </div>
              </div>

              <div>
                <div
                  className="col s12 m7 l8 offset-l1 z-depth-1"
                  id="container"
                >
                  <div>
                    <h4 className="grey-text">Recomended jobs</h4>

                    {recommendedList}
                    <div className="col s12 m12 l12">
                      <strong>
                        <div className="numberCircle left">{nmbr}</div>
                        <h5 className="left">jobs recommended</h5>
                      </strong>
                      <a
                        className="btn right"
                        id="viewMore"
                        onClick={() =>
                          this.props.history.push({
                            pathname: "/recomendedJobs",
                            state: {
                              recomendedJobs: this.state,
                              savedJobs: this.state,
                              appliedJobs: this.state,
                            },
                          })
                        }
                      >
                        View more
                      </a>
                      <br></br>
                      <br></br>
                    </div>
                  </div>
                </div>

                <div className="col s12 m10 l8 offset-m1">
                  <div className="col s12 m6 l6">
                    <div className="card white newJobs">
                      <div className="card-content white-text">
                        <span className="card-title right" id="number">
                          {newNumber}
                        </span>
                        <h5>New jobs</h5>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h5 className="left">Security Guard</h5>
                        <h6 className="right" id="viewdetailss">
                          View Details
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="card white newJobs">
                    <div className="card-content white-text">
                      <span className="card-title right" id="number">
                        {saveNumber}
                      </span>
                      <h5>Saved jobs</h5>
                      <br></br>
                      <br></br>
                      <br></br>
                      <h5 className="left">Security Guard</h5>
                      <h6
                        className="right"
                        id="viewdetailss"
                        onClick={() =>
                          this.props.history.push({
                            pathname: "/savedJobs",
                            state: {
                              savedJobs: this.state,
                              appliedJobs: this.state,
                            },
                          })
                        }
                      >
                        View Details
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/*applied status*/}
              <div className="col s12 m10 l10 offset-l1 offset-m1 z-depth-1">
                <h4 className="grey-text">Appied status</h4>
                {appliedJobsList}
                <div className="col s12 m12 l12">
                  <strong>
                    <div className="numberCircle left">{appliedJobsNmbr}</div>
                    <h5 className="left">jobs </h5>
                  </strong>
                  <a className="btn right" id="viewMore">
                    View more
                  </a>
                  <br></br>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright" id="footer">
          <h6 className="center v-center">
            Copyright @2020 All rights reserved | This tamplate is made with
            STSK
          </h6>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sendOtp: state.SendOtp.SendOtp,
  };
};
export default connect(mapStateToProps)(withRouter(Dashboard));
