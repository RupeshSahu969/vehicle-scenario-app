import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styles from "./scenario.module.css";

const ScenarioEdit = () => {
  const { id } = useParams()
  console.log(id)
  const [name, setName] = useState("")
  const [time, setTime] = useState("")
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
    const userdata = { name, time };

    fetch(`http://localhost:8080/scenario/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleReset = () => {
    setName("")
    setTime("")
  }
  return (
    <div>
      <div>
        <h2>Create Scenario</h2>
        <form onSubmit={handlesubmit}>
          <div className={styles.form_container}>
            <div>
              <lable>Scenario Name</lable><br />
              <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <lable>Scenario Time (Second)</lable> <br />
              <input type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles.btn}>
            <button type="submit" className={styles.btn1}>Edit </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ScenarioEdit
