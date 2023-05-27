import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ScenarioEdit = () => {
const {id}=useParams()

console.log(id)
const [name,setName]=useState("")
const[time,setTime]=useState("")
const navigate = useNavigate();

useEffect(() => {
    fetch(`http://localhost:8080/scenario/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setName(resp.name);
        setTime(resp.time);
       
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    const userdata = { name,time};

    fetch(`http://localhost:8080/scenario/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/scenario");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };




  return (
    <div>
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card" style={{ textAlign: "left" }}>
            <div className="card-title">
              <h2>Scenario Edit</h2>
            </div>
            <div className="card-body">
              <div className="row">
               

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      required
                      value={name}
                      onMouseDown={(e) => (true)}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                    ></input>
                    
                      <span className="text-danger">Enter the name</span>
                    
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Time</label>
                    <input
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>

               
                <div className="col-lg-12">
                  <div className="form-group">
                    <button className="btn btn-success" type="submit">
                      Save
                    </button>
                    <button>
                    <Link to="/" className="btn btn-danger">
                      Back
                    </Link>
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default ScenarioEdit
