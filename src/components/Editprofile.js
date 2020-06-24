import React, { Component } from "react";
import "./css/EditProfile.css";
import file from "./Images/file.png";
import axios from "axios";
import { Form } from "react-bootstrap";
import Popup from "reactjs-popup";
import { Multiselect } from "multiselect-react-dropdown";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
const header = {
  "x-api-key": " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
};
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};
class Editprofile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      check: false,
      value: "",
      mobileNumber: "9462462856",
      editProfile: [],
      userId: "",
      details: [],
      userLoginMobile: "",
      userLogin: "",
      editprofileimage: "",
      createeditprofileimage: "",
      createeditprofileimagedocId: "",
      createeditprofileimagepath: "",
      Updates: ["Send Mail", "SMS", "Both", "None"],
      resume: null,
      uploadedResume: "",
      docId: "",
    };
  }
  componentWillMount() {
    fetch("http://stskfacilities.com:8081/stskFmsApi/jobTypes/getAllJobTypes", {
      headers: header,
    })
      .then((response) => response.json())

      .then((data) => {
        // console.log(data)
        let TypesFromApi = data.data.map((Type) => {
          return { id: Type.id, name: Type.name };
        });
        this.setState({
          Types: [
            {
              id: "",
              name: "(Select your desire job)",
            },
          ].concat(TypesFromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    axios
      .get("/stskFmsApi/jobseeker/getByMob/" + 9462462856, {
        headers: header,
      })

      .then((res) => {
        console.log(res.data.data);

        console.log(res.data.data.userLogin.id);
        this.setState({
          userId: res.data.data.id,
          details: res.data.data,
          editProfile: res.data.data,
          userLoginMobile: res.data.data.mob,
          userLogin: res.data.data.userLogin.id,
        });
      });
    const timer2 = setTimeout(() => {
      axios
        .get(
          "/stskFmsApi/jobseekerdoc/getByJobSeekerId/40",
          // + this.state.userId,
          {
            headers: header,
          }
        )
        .then((res) => {
          console.log(res);
          this.setState({
            //docId: res.data.data.docId,
          });
        });
    }, 4000);
  }
  handleResume = (e) => {
    e.preventDefault();

    console.log(e);
    console.log(e.target.files[0]);
    console.log(e.target.files[0].name);
    this.setState({
      resume: e.target.files[0],
    });
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
  // handleResume1Submit = (e) => {
  //   let formData = new FormData();
  //   formData.append("file", this.state.resume);
  //   axios
  //     .post("/stskFmsApi/jobseekerdoc/editDoc/" + this.state.docId, formData, {
  //       headers: {
  //         "x-api-key":
  //           " $2a$10$AIUufK8g6EFhBcumRRV2L.AQNz3Bjp7oDQVFiO5JJMBFZQ6x2/R/2",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };
  handleChange(e) {
    const { editProfile } = { ...this.state };
    const currentState = editProfile;
    const { name, value } = e.target;
    currentState[name] = value;
    this.setState({ editProfile: editProfile });
  }
  handleImageChange = (e) => {
    console.log(e.target.files[0]);
    console.log(e.target.files[0].name);
    this.setState({
      editprofileimage: e.target.files[0],
      createeditprofileimage: e.target.files[0],
    });
  };
  handleCheck = (e) => {
    this.setState({
      check: true,
    });
  };
  handleChange2Arg = (selectedvalue) => {
    var i = selectedvalue.length;
    var jobnamearray = [];
    for (var j = 0; j <= i - 1; j++) {
      var jobname = jobnamearray.push(selectedvalue[j]["name"]);
    }

    console.log(selectedvalue);
    console.log(`Option selected:`, selectedvalue);
    this.setState({ selectedvalue });
    this.setState({ jobTypes: selectedvalue });

    document.getElementById("valse").innerHTML = jobnamearray;
    //var str = jobnamearray;
    // if(str.length > 2)
    // {str = str.substring(0,10)};
    // alert('str')
  };
  handleImageUpdate = (e) => {
    // console.log(e.target.files[0]);
    // console.log(e.target.files[0].name);

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
    // retrieving the profile image
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
  };
  handleRadio = (e) => {
    console.log(e.target.value);

    if (e.target.value == "false") {
      document.getElementById("section-2").style.display = "block";
    } else {
      document.getElementById("section-2").style.display = "none";
    }
    if (e.target.value == "true") {
      document.getElementById("section-3").style.display = "none";
    } else {
      document.getElementById("section-3").style.display = "none";
    }
    if (e.target.value == "true") {
      document.getElementById("section-4").style.display = "none";
    } else {
      document.getElementById("section-4").style.display = "none";
    }
    if (e.target.value == "false") {
      document.getElementById("section-5").style.display = "none";
    } else {
      document.getElementById("section-5").style.display = "none";
    }
    this.setState({
      fresher: e.target.value,
    });
  };
  handleCheck = (e) => {
    this.setState({
      check: true,
    });
  };
  handleRadio1 = (e) => {
    console.log(e.target.value);
    if (e.target.value == "true") {
      document.getElementById("section-3").style.display = "flex";
    } else {
      document.getElementById("section-3").style.display = "none";
    }
    if (e.target.value == "false") {
      document.getElementById("section-5").style.display = "flex";
    } else {
      document.getElementById("section-5").style.display = "none";
    }
    if (e.target.value == "false") {
      document.getElementById("section-4").style.display = "none";
    } else {
      document.getElementById("section-4").style.display = "none";
    }
    this.setState({
      working: e.target.value,
    });
  };
  handleRadio2 = (e) => {
    console.log(e.target.value);
    if (e.target.value == "true") {
      document.getElementById("section-4").style.display = "flex";
    } else {
      document.getElementById("section-4").style.display = "none";
    }
    this.setState({
      noticePeriod: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.check === true) {
      axios
        .put(
          "/stskFmsApi/jobseeker/editJS",
          {
            id: this.state.userId,
            name: this.state.editProfile.name,
            email: this.state.editProfile.email,
            mob: this.state.editProfile.mob,
            panNum: this.state.editProfile.panNum,
            aadharNum: this.state.editProfile.aadharNum,
            eduQual: this.state.editProfile.eduQual,
            experience: this.state.editProfile.experience,
            working: this.state.editProfile.working,
            jobUpdate: this.state.editProfile.jobUpdate,
            address: this.state.editProfile.address,
            fresher: this.state.editProfile.fresher,
            companyName: this.state.editProfile.companyName,
            destination: this.state.editProfile.destination,
            noticeperiod: this.state.editProfile.noticeperiod,
            noOfDays: this.state.editProfile.noOfDays,
            currentLocation: this.state.editProfile.currentLocation,
            negotiable: this.state.editProfile.negotiable,
            upTo: this.state.editProfile.upTo,
            jobLocation: this.state.editProfile.jobLocation,
            userLogin: {
              id: this.state.userLogin,
            },
            //jobTypes: this.state.editProfile.editprofile.jobTypes,
          },
          { headers: header }
        )
        .then((res) => {
          console.log(res.data);
        });
      if (formValid(this.state.editProfile)) {
        console.log(`
              --SUBMITTING--
              Full Name: ${this.state.editProfile.name}
              Mobile Number: ${this.state.editProfile.mob}
              Email: ${this.state.editProfile.email}
              panNumber: ${this.state.editProfile.panNum}
              aadhar: ${this.state.editProfile.aadharNum}
              years: ${this.state.editProfile.experience}
              education: ${this.state.editProfile.eduQual}
              jobUpdate:${this.state.editProfile.jobUpdate}
              address:${this.state.editProfile.address},
              working : ${this.state.editProfile.working},
              userLogin:{
                id:this.state.editProfile.id
              }},
              jobTypes:[{
                id:this.state.editProfile.jobTypes.id
              }],
              fresher:${this.state.editProfile.fresher},
           
            noticePeriod:${this.state.editProfile.noticePeriod},
            companyName:${this.state.editProfile.companyName},
            currentLocation:${this.state.editProfile.currentLocation},
            jobLocation:${this.state.editProfile.jobLocation},
            designation:${this.state.editProfile.designation},
            negotiable:${this.state.editProfile.negotiable},
            upTo:${this.state.editProfile.upTo},
            noOfDays:${this.state.editProfile.noOfDays},
            address:${this.state.editProfile.address},
            prevcompanyName:${this.state.editProfile.prevcompanyName},
            prevdesignation:${this.state.editProfile.prevdesignation},
            prevjobLocation:${this.state.editProfile.prevjobLocation},
             `);
      } else {
        console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      }
    } else {
      this.setState({
        checkBoxerror: "Accept Terms & Conditions",
      });
    }
  };

  render() {
    console.log(this.state);
    // console.log(this.state.editProfile.userLogin.id)
    // console.log(this.state.editProfile.userLogin.id)
    return (
      <div class="container register-form">
        <div class="forms z-depth-1">
          <div class="note">
            <div class="profile-header-container align-self-center">
              {/* <h4 class="title">Job Seeker</h4>  */}
              <div class="profile-header-img">
                <center>
                  <img
                    class="img-circle"
                    //src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120"
                    src={this.state.createeditprofileimagepath}
                  />
                  <div class="rank-label-container">
                    <input
                      type="file"
                      name="image"
                      class="image_src"
                      accept="images.jpeg"
                      onChange={this.handleImageChange}
                    />
                  </div>
                  {/* <Button class="button button1">Green</Button>
                  <Button class="button button2">Blue</Button> */}
                  <div className="button">
                    <a class="btn" id="btn" onClick={this.handleImageUpdate}>
                      Update Image
                    </a>
                    <a class="btn red" onClick={this.handleImageRemove}>
                      Remove
                    </a>
                  </div>
                </center>
              </div>
            </div>
          </div>

          <div class="form-content">
            <div class="row" id="section-1">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Full Name *"
                    name="name"
                    required
                    onChange={this.handleChange.bind(this)}
                    pattern="[A-Za-z\\s]*"
                    title="only alphabetical values are allowed"
                    defaultValue={this.state.editProfile.name}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Email *"
                    type="email"
                    name="email"
                    defaultValue={this.state.editProfile.email}
                    required
                    onChange={this.handleChange.bind(this)}
                    //value={this.state.email}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Pan Number *"
                    type="text"
                    name="panNum"
                    required
                    onChange={this.handleChange.bind(this)}
                    pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                    title="Enter valid pannumber"
                    defaultValue={this.state.editProfile.panNum}
                  />
                </div>
                <div class="form-group">
                  <Popup
                    contentStyle={{ width: "418px", left: "35.125px" }}
                    trigger={
                      <div
                        class="form-group"
                        id="printjobname"
                        onChange={this.handleCheckLength}
                      >
                        <h6 id="valse">Applied For</h6>
                        <i
                          class="fa fa-sort-down"
                          style={{
                            fontSize: "30px",
                            color: "#3fb2aa",
                            float: "right",
                            marginTop: "-34px",
                          }}
                        ></i>
                      </div>
                    }
                  >
                    <Multiselect
                      options={this.state.Types}
                      //value={selectedvalue}
                      displayValue="name"
                      onSelect={this.handleChange2Arg}
                      id="demo"
                    />
                  </Popup>
                  <h5 id="valsel"></h5>
                </div>
                <div class="form-group">
                  <p id="label">Are you fresher?</p>

                  <p>
                    <label>
                      <input
                        name="fresher"
                        value="true"
                        onClick={this.handleRadio}
                        type="radio"
                        id="ra"
                      />
                      <span id="label">Yes</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input
                        name="fresher"
                        value="false"
                        onClick={this.handleRadio}
                        type="radio"
                        id="ra"
                      />
                      <span id="label">No</span>
                    </label>
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Phone Number *"
                    type="tel"
                    name="mob"
                    required
                    defaultValue={this.state.editProfile.mob}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Aadhar Card Number *"
                    type="text"
                    name="aadharNum"
                    required
                    onChange={this.handleChange.bind(this)}
                    pattern="^\d{4}\d{4}\d{4}$"
                    title="Addhar Card"
                    title="4 digit space 4 digit space 4digit"
                    defaultValue={this.state.editProfile.aadharNum}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Education Qualification *"
                    type="text"
                    name="eduQual"
                    required
                    onChange={this.handleChange.bind(this)}
                    defaultValue={this.state.editProfile.eduQual}
                  />
                </div>
                <div class="form-group">
                  {/* <input type="text" class="form-control" placeholder="Job Updates *" value=""/> */}
                  <Form.Control
                    as="select"
                    onChange={this.handleChange2}
                    id="update"
                  >
                    <option value="1">Get job opening updates</option>
                    {this.state.Updates.map((jobUpdate) => (
                      <option key={jobUpdate} value={jobUpdate}>
                        {jobUpdate}
                      </option>
                    ))}
                  </Form.Control>
                </div>
                <div class="form-group">
                  <textarea
                    type="text"
                    //class="form-control"
                    placeholder="Address *"
                    onChange={this.handleChange.bind(this)}
                    id="textarea"
                    defaultValue={this.state.editProfile.address}
                  ></textarea>
                </div>
              </div>
            </div>
            {/* end section-1 */}
            {/* start section-2 */}
            <div class="row" id="section-2">
              <div class="col-md-6">
                <div class="form-group">
                  <p id="label">Currently working?</p>

                  <p>
                    <label>
                      <input
                        name="working"
                        value="true"
                        onClick={this.handleRadio1}
                        type="radio"
                      />
                      <span id="label">Yes</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input
                        name="working"
                        value="false"
                        onClick={this.handleRadio1}
                        type="radio"
                      />
                      <span id="label">No</span>
                    </label>
                  </p>
                </div>
              </div>
            </div>
            {/* end section-2 */}
            {/* start section-3 if currently working yes*/}
            <div class="row" id="section-3">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Years of Experience *"
                    name="experience"
                    pattern="[0-9]*"
                    title="It should be Numeric"
                    onChange={this.handleChange.bind(this)}
                    maxLength="2"
                    defaultValue={this.state.editProfile.experience}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Job Location *"
                    name="jobLocation"
                    onChange={this.handleChange.bind(this)}
                    id="input"
                    pattern="[A-Za-z\\s]*"
                    title="only alphabetical values are allowed"
                    defaultValue={this.state.editProfile.jobLocation}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Current Location *"
                    name="currentLocation"
                    onChange={this.handleChange.bind(this)}
                    id="input"
                    pattern="[A-Za-z\\s]*"
                    title="only alphabetical values are allowed"
                    defaultValue={this.state.editProfile.currentLocation}
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Current Company Name *"
                    name="companyName"
                    onChange={this.handleChange.bind(this)}
                    defaultValue={this.state.editProfile.companyName}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Designation *"
                    name="designation"
                    onChange={this.handleChange.bind(this)}
                    pattern="[A-Za-z\\s]*"
                    title="only alphabetical values are allowed"
                    defaultValue={this.state.editProfile.designation}
                  />
                </div>
                <div class="form-group">
                  <p id="label">Are you serving notice period?</p>
                  <p>
                    <label>
                      <input
                        name="noticePeriod"
                        value="true"
                        onClick={this.handleRadio2}
                        type="radio"
                        id="ra"
                      />
                      <span id="label">Yes</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input
                        name="noticePeriod"
                        value="false"
                        onClick={this.handleRadio2}
                        type="radio"
                        id="ra"
                      />
                      <span id="label">No</span>
                    </label>
                  </p>
                </div>
              </div>
            </div>
            {/* end section-3 */}
            {/* start section-4 if serving notice period */}
            <div class="row" id="section-4">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="Days *"
                    type="number"
                    name="noOfDays"
                    onChange={this.handleChange.bind(this)}
                    defaultValue={this.state.editProfile.noOfDays}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="UpTo *"
                    type="number"
                    name="upTo"
                    onChange={this.handleChange.bind(this)}
                    defaultValue={this.state.editProfile.upTo}
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <p id="label">Is it negotiable?</p>

                  <p>
                    <label>
                      <input
                        name="negotiable"
                        value="true"
                        onClick={this.handleRadio3}
                        type="radio"
                        id="ra"
                      />
                      <span id="label">Yes</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input
                        name="negotiable"
                        value="false"
                        onClick={this.handleRadio3}
                        type="radio"
                        id="ra"
                      />
                      <span id="label">No</span>
                    </label>
                  </p>
                </div>
              </div>
            </div>
            {/*end section-4 */}
            {/*start section-5 */}
            <div class="row" id="section-5">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Years of Experience *"
                    name="experience"
                    pattern="[0-9]*"
                    title="It should be Numeric"
                    onChange={this.handleChange.bind(this)}
                    maxLength="2"
                    defaultValue={this.state.editProfile.experience}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Previous Job Location *"
                    name="prevjobLocation"
                    onChange={this.handleChange.bind(this)}
                    pattern="[A-Za-z\\s]*"
                    title="only alphabetical values are allowed"
                    defaultValue={this.state.editProfile.prevjobLocation}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Current Location *"
                    name="currentLocation"
                    onChange={this.handleChange.bind(this)}
                    pattern="[A-Za-z\\s]*"
                    title="only alphabetical values are allowed"
                    defaultValue={this.state.editProfile.currentLocation}
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Previous Company Name *"
                    type="text"
                    name="prevcompanyName"
                    onChange={this.handleChange.bind(this)}
                    defaultValue={this.state.editProfile.prevcompanyName}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Previous Designation *"
                    name="prevdesignation"
                    onChange={this.handleChange.bind(this)}
                    pattern="[A-Za-z\\s]*"
                    title="only alphabetical values are allowed"
                    defaultValue={this.state.editProfile.prevdesignation}
                  />
                </div>
              </div>
            </div>
            {/*end section-5 */}
            <div class="text-center">
              {/* </div> */}
              {/* <input type="file" onChange={this.handleResume}></input> */}
              <div
                class="btn btn-default image-preview-input"
                id="btnheight"
                style={{ marginLeft: "-121px" }}
              >
                <img src={file} id="fileimg" />
                <span class="image-preview-input-title">Update Resume</span>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/gif"
                  name="input-file-preview"
                />
              </div>
              {/* <input
                type="file"
                className="inputfile"
                id="embedpollfileinputs"
                name="resume "
                accept="images.jpeg"
                onChange={this.handleResume}
              />
              <label
                htmlFor="embedpollfileinputs"
                className="ui huge white center floated button"
                id="white"
              >
                <img src={file} id="fileimg" />
                <span id="doc">Upload Resume</span>
              </label> */}
            </div>
            <div class="profile-header-container" id="submission">
              {/* <div class="ui checkbox"> */}
              <center>
                {/* <div class="form-group">  */}

                {/* </div> */}
                <input
                  name="check"
                  onClick={this.handleCheck}
                  type="checkbox"
                  value=""
                />
                <span>Terms and Conditions</span>

                {/* <p className="center red-text">{this.state.checkBoxerror}</p> */}
              </center>
              {/* </div> */}
            </div>
            {/* start section-6 */}
            <div class="row" id="section-6">
              <div class="col-md-6">
                <button type="button" onSubmit={this.handleCancel} id="cancel">
                  Cancel
                </button>
              </div>
              <div class="col-md-6">
                <button type="button" onClick={this.handleSubmit} id="save">
                  Save
                </button>
              </div>
            </div>
            {/* End section-6 */}
            {/* <div class="profile-header-container" id="submission"> 
                    <div class="ui checkbox">
                    <label>
                      <input name="check" value="false " onClick={this.handleCheck} type="checkbox" />
                      <span >Terms and Conditions</span>
                    </label> */}
            {/* <p className="center red-text">{this.state.checkBoxerror}</p> */}
            {/* <div className="createAccount2"> */}
            {/* <button type="submit"  onClick={this.handleSubmit}>Submit</button> */}
            {/* </div> */}

            {/* </div> */}

            {/* </div> */}
            {/* </form> */}
            {/* <button type="button"  onSubmit={this.handleSubmit}>Submit</button> */}
            {/* </form> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Editprofile;
