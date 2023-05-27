import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdEdit } from "react-icons/md"
import { Link, useNavigate } from 'react-router-dom'
import styles from "./scenario.module.css";
const Scenario = () => {
  const [getdata, setGetdata] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8080/scenario")
      .then((res) => {

        setGetdata(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const LoadEdit = (id) => {
    navigate(`/scenario/${id}`)
    console.log(id)
  };

  const RemoveData = (id) => {

    fetch("http://localhost:8080/scenario/" + id, {
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
      <div className={styles.container}>
        <div>
          <div>
            <h2>All Scenario</h2>
          </div>
          <div>

            <table>

              <thead>
                <tr>
                  <td>Scenario ID</td>
                  <td>Scenario Name</td>
                  <td>Scenario Time </td>
                  <td>Add vehicle</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
              </thead>

              <tbody>

                {getdata &&
                  getdata.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.time}</td>
                      <td>
                        <div>
                          <Link to="vehicle">
                            +
                          </Link>
                        </div>
                      </td>
                      <td>

                        <MdEdit onClick={() => LoadEdit(item.id)} />

                      </td>
                      <td>
                        <Link
                          onClick={() => {
                            RemoveData(item.id)
                          }}
                          className="btn btn-danger"
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

export default Scenario
