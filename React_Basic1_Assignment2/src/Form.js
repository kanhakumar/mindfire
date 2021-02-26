import React, { Component } from 'react'
import './Form.css';

const initialState = {
    firstName: "",
    lastName: "",
    address: "",
    number:"",
    email:"",
    password:"",
    confirmPassword:"",
    firstNameError: "",
    lastNameError: "",
    adressError: "",
    numberError:"",
    emailError:"",
    passwordError:"",
    confirmPasswordError:""
}

export default class Form extends Component {
    state = initialState;

    validate = () => {
        let flag=true;
        if(!this.state.firstName){
            this.setState({ firstNameError: "Fill First Name" });
            flag=false;
            // return false;
        }
        if(!this.state.lastName){
            this.setState({ lastNameError: "Fill Last Name" });
            flag=false;
            // return false;
        }
        if(!this.state.address){
            this.setState({ addressError: "Enter your Address" });
            flag=false;
            // return false;
        }
        if(!this.state.number){
            this.setState({ numberError: "Enter Phone Number" });
            flag=false;
            // return false;
        }
        if(!this.state.email){
            this.setState({ emailError: "Enter Email Address" });
            flag=false;
            // return false;
        }
        if(!this.state.password){
            this.setState({ passwordError: "Enter Password" });
            flag=false;
            // return false;
        }
        if(!this.state.confirmPassword){
            this.setState({ confirmPasswordError: "Enter Confirm Password" });
            flag=false;
            // return false;
        }
        if(flag==true){
            return true;
        }
    };
    //First Name Validation
    validateFirstNameChange() {
        if (!this.state.firstName) {
            this.setState({ firstNameError: "Fill First Name" });
        }
        else {
            this.setState({ firstNameError: "" });
        }
    }

    handleFirstNameChange = (value) => {
        this.setState(prevState => {
            var obj = { ...prevState };
            obj.firstName = value;
            return obj;
        }, () => {
            this.validateFirstNameChange();
        })
    }

    //Last Name Validation
    validateLastNameChange() {
        if (!this.state.lastName) {
            this.setState({ lastNameError: "Fill Last Name" });
        }
        else {
            this.setState({ lastNameError: "" });
        }
    }

    handleLastNameChange = (value) => {
        this.setState(prevState => {
            var obj = { ...prevState };
            obj.lastName = value;
            return obj;
        }, () => {
            this.validateLastNameChange();
        })
    }

    //AddressLine1 Validation
    validateAddressChange() {
        if (!this.state.address) {
            this.setState({ addressError: "Enter your Address" });
        }
        else {
            this.setState({ addressError: "" });
        }
    }

    handleAddressChange = (value) => {
        this.setState(prevState => {
            var obj = { ...prevState };
            obj.address = value;
            return obj;
        }, () => {
            this.validateAddressChange();
        })
    }

    //Phone Number Validation
    validateNumberChange() {
        let pno = /^\d{10}$/;
        if (!this.state.number.match(pno)) {
            this.setState({ numberError: "Enter valid Phone Number" });
        }
        else {
            this.setState({ numberError: "" });
        }
    }

    handleNumberChange = (value) => {
        this.setState(prevState => {
            var obj = { ...prevState };
            obj.number = value;
            return obj;
        }, () => {
            this.validateNumberChange();
        })
    }

    //Email Address Validation
    validateEmailChange() {
        let emailRegEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        if (!(emailRegEx.test(this.state.email))) {
            this.setState({ emailError: "Enter valid Email Address" });
        }
        else {
            this.setState({ emailError: "" });
        }
    }

    handleEmailChange = (value) => {
        this.setState(prevState => {
            var obj = { ...prevState };
            obj.email = value;
            return obj;
        }, () => {
            this.validateEmailChange();
        })
    }

    //Password Validation
    validatePasswordChange() {
        let pwd=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (!this.state.password.match(pwd)) {
            this.setState({ passwordError: "Password must be in 6 to 20 characters with atleast 1 Uppercase,1 Lower case,1 Number" });
        }
        else {
            this.setState({ passwordError: "" });
        }
    }

    handlePasswordChange = (value) => {
        this.setState(prevState => {
            var obj = { ...prevState };
            obj.password = value;
            return obj;
        }, () => {
            this.validatePasswordChange();
        })
    }

    //Confirm Password Validation
    validateConfirmPasswordChange() {
        // let pwd=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        // if ((!this.state.confirmPassword.match(pwd)) && !(this.state.confirmPassword===this.state.password)) {
        //     this.setState({ confirmPasswordError: "Confirm Password" });
        // }
        if(!(this.state.confirmPassword===this.state.password)){
            this.setState({confirmPasswordError:"Confirm Password should be same as password."})
        }
        else {
            this.setState({ confirmPasswordError: "" });
        }
    }

    handleConfirmPasswordChange = (value) => {
        this.setState(prevState => {
            var obj = { ...prevState };
            obj.confirmPassword = value;
            return obj;
        }, () => {
            this.validateConfirmPasswordChange();
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state); 
            alert("Form Submitted Successfully!")
            this.setState(initialState);
        }
    };

    render() {
        return (
            <div className="container">
                <div className="form">
                    <form id="registrationForm" onSubmit={this.handleSubmit}>
                        <h3>USER FORM</h3>
                        <div className="row container">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="firstname">First Name <span className="important">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstname"
                                        name="firstname"
                                        value={this.state.firstName}
                                        onChange={(event) => { this.handleFirstNameChange(event.target.value) }}
                                    />
                                    <div className="error">{this.state.firstNameError}</div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="lastname">Last Name <span className="important">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastname"
                                        name="lastname"
                                        value={this.state.lastName}
                                        onChange={(event) => { this.handleLastNameChange(event.target.value) }}
                                    />
                                    <div className="error">{this.state.lastNameError}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="birthdate">Date of Birth</label>
                                    <input type="date" className="form-control" id="birthdate" name="birthdate" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="">Gender</label>
                                    <div className="radio col-sm">
                                        <label>
                                            <input type="radio" name="gender" id="male" value="m" />
                                  Male
                                </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" name="gender" id="female" value="f" />
                                  Female
                                </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" name="gender" id="" value="o" />
                                  Others
                                </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="addressLine1">Address line 1 <span className="important">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="addressLine1"
                                        name="address"
                                        value={this.state.address}
                                        onChange={(event) => { this.handleAddressChange(event.target.value) }}
                                    />
                                    <div className="error">{this.state.addressError}</div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="addressLine2">Address line 2</label>
                                    <input type="text" className="form-control" id="addressLine2" />
                                </div>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Country</label>
                                    <select className="form-control" id="country" name="country">

                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <input type="text" className="form-control" id="city" name="city" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>State</label>
                                    <select className="form-control" id="state" name="state">

                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pinCode">Pin Code</label>
                                    <input type="number" className="form-control" id="pinCode" name="pincode" />
                                </div>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="phoneNumber">Telephone <span className="important">*</span></label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        id="phoneNumber" 
                                        name="phonenumber"
                                        value={this.state.number}
                                        onChange={(event) => { this.handleNumberChange(event.target.value) }}
                                    />
                                    <div className="error">{this.state.numberError}</div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="emailAddress">Email <span className="important">*</span></label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="emailAddress" 
                                        name="email"
                                        value={this.state.email}
                                        onChange={(event) => { this.handleEmailChange(event.target.value) }}
                                    />
                                    <div className="error">{this.state.emailError}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="pwd">Password <span className="important">*</span></label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="password" 
                                        id="password" 
                                        value={this.state.password}
                                        onChange={(event) => { this.handlePasswordChange(event.target.value) }}
                                    />
                                    <div className="error">{this.state.passwordError}</div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="confirm-pwd">Confirm Password <span className="important">*</span></label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="confirmPassword" 
                                        id="confirmPassword" 
                                        value={this.state.confirmPassword}
                                        onChange={(event) => { this.handleConfirmPasswordChange(event.target.value) }}
                                    />
                                    <div className="error">{this.state.confirmPasswordError}</div>
                                </div>
                            </div>
                        </div>
                        <div className="center">
                            <button type="submit" className="btn btn-primary">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}