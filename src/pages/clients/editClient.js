import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


export default function Editclient(props) {
  const { id } = useParams();  // to get id from url
  const [state, setState] = useState({});
  
  useEffect(() => {
    fetch("http://localhost:8000/clients/"+id) //api is fetched
      .then((res) => res.json())
      .then((response) => {
       setState(response);
      });
  }, []);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/clients/"+id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {}

       
      );
  };
  console.log(state)
  return (
    <div>
      <div className="container md-5 display">
        <h1> Add Client </h1>
        <form onSubmit={handleSubmit} className="form-horizontal row g-3">
          <div className="form-group txt">
            <label for="ID">ID</label>
            <div class="col-sm-6">
              <input
                type="text"
                value={state.id}
                class="form-control"
                name="id"
                placeholder="Enter ID"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group txt">
            <label for="name"> Name</label>
            <div class="col-sm-6">
              <input
                type="text"
                value={state.Name}
                className="form-control"
                name="Name"
                placeholder="Enter Name"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group txt">
            <label for="Domain">Domain</label>
            <div class="col-sm-6">
              <input
                type="text"
                value={state.domain}
                class="form-control"
                name="domain"
                placeholder="Enter Domain"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group txt">
            <label for="ManagerID">Manager ID</label>
            <div class="col-sm-6">
              <input
                type="text"
                value={state.manager_id}
                class="form-control"
                name="manager_id"
                placeholder="Enter ManagerID"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group txt">
            <label for="RevenuePerYear">Revenue Per Year</label>
            <div class="col-sm-6">
              <input
                type="text"
                value={state.RevenuePerYear}
                class="form-control"
                name="RevenuePerYear"
                placeholder="Enter Revenue Per Year"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="col-sm-6">
            <button type="submit" className=" btn btn-primary" >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
