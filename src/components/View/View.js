import React from "react";
import {useLocation} from 'react-router-dom'
export default function View() {
    const location=useLocation()
    return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="" className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Name</h5>
            <p className="card-text">{location.state.firstname+" "+location.state.lastname}</p>
            <h5 className="card-title">Email Id</h5>
            <p className="card-text">{location.state.email}</p>
            <h5 className="card-title">Date of Birth</h5>
            <p className="card-text">{location.state.date}</p>
            <h5 className="card-title">Address</h5>
            <p className="card-text">{location.state.address}</p>
            <h5 className="card-title">City</h5>
            <p className="card-text">{location.state.city}</p>
            <h5 className="card-title">Zipcode</h5>
            <p className="card-text">{location.state.zipcode}</p>
            <h5 className="card-title">State</h5>
            <p className="card-text">{location.state.state}</p>
            <h5 className="card-title">Country</h5>
            <p className="card-text">{location.state.country}</p>
            <h5 className="card-title">Contact No.</h5>
            <p className="card-text">{location.state.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
