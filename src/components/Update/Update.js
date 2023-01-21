import React from "react";
import { useLocation } from "react-router-dom";
export default function Update(props) {
    const update=()=>{
          props.item.firstname= document.getElementById('firstname').value
          props.item.lastname= document.getElementById('lastname').value
          props.item.email=document.getElementById('mail').value
          props.item.date= document.getElementById('dob').value
          props.item.phone= document.getElementById('phone').value
          props.item.key= document.getElementById('firstname').value+document.getElementById('phone').value
          props.item.address= document.getElementById('address').value
          props.item.city= document.getElementById('city').value
          props.item.zipcode= document.getElementById('zipcode').value
          props.item.state= document.getElementById('state').value
          props.item.country= document.getElementById('country').value
          props.item.password= document.getElementById('password').value
          props.item.confirmpassword= document.getElementById('cpassword').value
          console.log(props.item.firstname)
      }
  return (
    <div className="container h-50 w-80 p-4 shadow mb-4 bg-body-tertiary rounded">
      <h3 className="text-center mb-4">
        <b>UPDATE FORM</b>
      </h3>
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          id="inputGroup-sizing-default"
          style={{ backgroundColor: "#adb5bd" }}
        >
          Email
        </span>
        <input
          type="email"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          defaultValue={props.item.email}
          id="mail"
        />
      </div>
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          id="inputGroup-sizing-default"
          style={{ backgroundColor: "rgb(211 195 23)" }}
        >
          First Name
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          id="firstname"
          defaultValue={props.item.firstname}
        />
        <span
          className="input-group-text"
          id="inputGroup-sizing-default"
          style={{ backgroundColor: "rgb(211 195 23)" }}
        >
          Last Name
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          id="lastname"
          defaultValue={props.item.lastname}
        />
      </div>
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          id="inputGroup-sizing-default"
          style={{ backgroundColor: "#adb5bd" }}
        >
          Date of Birth
        </span>
        <input
          type="date"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          id="dob"
          defaultValue={props.item.date}
        />
      </div>
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          id="inputGroup-sizing-default"
          style={{ backgroundColor: "rgb(211 195 23)" }}
        >
          Address
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          id="address"
          defaultValue={props.item.address}
        />
      </div>
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          id="inputGroup-sizing-default"
          style={{ backgroundColor: "#adb5bd" }}
        >
          City
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          id="city"
          defaultValue={props.item.city}
        />
        <span
          className="input-group-text"
          id="inputGroup-sizing-default"
          style={{ backgroundColor: "#adb5bd" }}
        >
          Zipcode
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          id="zipcode"
          defaultValue={props.item.zipcode}
        />
      </div>
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          id="inputGroup-sizing-default"
          style={{ backgroundColor: "rgb(211 195 23)" }}
        >
          State
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          id="state"
          defaultValue={props.item.state}
        />
        <span
          className="input-group-text"
          id="inputGroup-sizing-default"
          style={{ backgroundColor: "rgb(211 195 23)" }}
        >
          Country
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          id="country"
          defaultValue={props.item.country}
        />
      </div>
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          id="inputGroup-sizing-default"
          style={{ backgroundColor: "#adb5bd" }}
        >
          Contact No.
        </span>
        <input
          type="tel"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="eg:- +91 9999999999"
          id="phone"
          defaultValue={props.item.phone}
        />
      </div>
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          id="inputGroup-sizing-default"
          style={{ backgroundColor: "rgb(211 195 23)" }}
        >
          Password
        </span>
        <input
          type="password"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          id="password"
          defaultValue={props.item.password}
        />
        <span
          className="input-group-text"
          id="inputGroup-sizing-default"
          style={{ backgroundColor: "rgb(211 195 23)" }}
        >
          Confirm Password
        </span>
        <input
          type="password"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          id="cpassword"
          defaultValue={props.item.cpassword}
        />
      </div>
      <div className="text-center mt-5">
        <button type="submit" className="btn btn-dark mx-5" onClick={update}>
          Update
        </button>
      </div>
    </div>
  );
}
