import React, { Component } from 'react'
import './style.css';
import User from './User';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      fields: {
        check: false,
        pass: ""
      },
      errors: {}
    }
  };



  handleChange = (e) => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;

    this.setState({
      fields
    });
  }


  submitRegistration = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["username"] = "";
      fields["emailid"] = "";
      fields["mobileno"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }


    if (this.state.fields.fname && this.state.fields.lname && this.state.fields.email) {
      console.log("Successfully submitted");
      this.setState((state) =>

        state.fields.check = true,
      );
    } else {
      console.log("please enter the value");
    }
  }



  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let valid = true;

    if (!fields["fname"]) {
      valid = false;
      errors["fname"] = "Please enter your firstName";
    }
    if (!fields["fname"].match(/^[a-zA-Z ]*$/)) {
      valid = false;
      errors["fname"] = "Please enter alphabet characters only";
    }
    console.log("submit")


    if (!fields["lname"]) {
      valid = false;
      errors["lname"] = "Please enter your LastName";
    }
    if (!fields["lname"].match(/^[a-zA-Z ]*$/)) {
      valid = false;
      errors["lname"] = "Please enter alphabet characters only";
    }

    if (!fields["pass"]) {
      valid = false;
      errors["pass"] = "*Please enter your password.";
    }
    if (!fields["pass"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!]).*$/)) {
      valid = false;
      errors["pass"] = "*Please enter secure and strong password.";
    }


    this.setState({
      errors: errors
    });
    return valid;
  }




  render() {
    return (
      <div id="main-registration">
        <div id="register">
          <h3>Registration form</h3>
          <form method="post" name="registrationForm" onSubmit={this.submitRegistration}>
            <label>
              FirstName:  <input type="text" name="fname" onChange={this.handleChange} /><br></br>
            </label>
            <div className="errorMsg">{this.state.errors.fname}</div>
            <label> LastName:<input type="text" name="lname" onChange={this.handleChange} /><br></br>
            </label>
            <div className="errorMsg">{this.state.errors.lname}</div>
            <label>  password:<input type="password" name="pass" onChange={this.handleChange} /><br></br>
            </label>
            <div className="errorMsg">{this.state.errors.pass}</div>
            <label> emailid:<input type="email" name="email" onChange={this.handleChange} /><br></br>
            </label>
            <div className="errorMsg">{this.state.errors.email}</div>
            <label> mobile:<input type="tel" name="mob" max="10" maxlength="10" onChange={this.handleChange} pattern="[0-9]{10}" /><br></br>
            </label>
            <label> DOB:<input type="date" name="dob" max="2020-02-07" onChange={this.handleChange} /><br></br>
            </label>
            <lable>
              <h5>Gender</h5>
              male:<input type="radio" name="gender" onChange={this.handleChange} /><br></br>
            </lable>
            <lable>
              Female:<input type="radio" name="gender" onChange={this.handleChange} /><br></br>
            </lable>
            <lable>
              Other:<input type="radio" name="gender" onChange={this.handleChange} /><br></br>
            </lable>

            <input type="submit" className="button" value="submit" />
          </form>
          {
            this.state.fields.check ? <User fname={this.state.fields.fname} lname={this.state.fields.lname}
              email={this.state.fields.email} dob={this.state.fields.dob} /> : null
          }
        </div>
      </div>



    );
  }


}


