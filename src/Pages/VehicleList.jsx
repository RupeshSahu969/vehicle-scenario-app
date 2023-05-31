import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdEdit } from "react-icons/md"
import styles from "./vehicle.module.css";
const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {

    fetch('http://localhost:8080/Vehicle')
      .then(response => response.json())
      .then(data => setVehicles(data));
  }, []);

  const LoadEdit = (id) => {
    navigate(`/vehicle/${id}`)
    console.log(id)
  };


  const RemoveData = (id) => {

    fetch("http://localhost:8080/Vehicle/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        alert("Removed successfully.");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });

  };


  return (
    <div>
      <div className={styles.form_container}>
      <div className={styles.scenarios}>
            <lable>Scenario </lable><br/>
              <select>
                {vehicles.map((item) => (
                  <option key={item.id}> {item.name} </option>
                ))}

              </select>
            
          </div>
      </div>
      <div className="container">
        <div>
          <div>
            <h2>Vehicle Listing</h2>
          </div>
          <div>
            <table className='customers'>
              <thead>
                <tr>
                  <td>Vehicle ID</td>
                  <td>Vehicle Name</td>
                  <td>Position X</td>
                  <td>Position Y</td>
                  <td>Speed</td>
                  <td> Direction</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
              </thead>
              <tbody>
                {vehicles &&
                  vehicles.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.position_x}</td>
                      <td>{item.position_y}</td>
                      <td> {item.speed} </td>
                      <td> {item.direction} </td>
                      <td>

                        <MdEdit onClick={() => LoadEdit(item.id)} />

                      </td>
                      <td>
                        <Link
                          onClick={() => {
                            RemoveData(item.id)
                          }}
                          
                        >
                          <RiDeleteBin6Line />
                        </Link>

                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VehicleList