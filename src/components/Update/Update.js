import React from "react";
import { useLocation } from "react-router-dom";
export default function Update(props) {
  const location=useLocation()
    const update=(event)=>{
      location.state.email=event.target.value
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
          value={location.state.email}
          onChange={update}
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
          onChange={update}
          value={location.state.firstname}
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
          onChange={update}
          value={location.state.lastname}
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
          onChange={update}
          value={location.state.date}
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
          onChange={update}
          value={location.state.address}
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
          onChange={update}
          value={location.state.city}
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
          onChange={update}
          value={location.state.zipcode}
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
          onChange={update}
          value={location.state.state}
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
          onChange={update}
          value={location.state.country}
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
          onChange={update}
          value={location.state.phone}
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
          onChange={update}
          value={location.state.password}
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
          onChange={update}
          value={location.state.cpassword}
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
