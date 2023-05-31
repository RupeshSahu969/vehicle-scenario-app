import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styles from "./vehicle.module.css";

const VehicleEdit = () => {

  const { id } = useParams();
  const [name, setName] = useState("")
  const [position_x, setPositionx] = useState("")
  const [position_y, setPositionY] = useState("")
  const [speed, setSpeed] = useState("")
  const [direction, setDirection] = useState("")

  const [vehicles, setVehicles] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    fetch('http://localhost:8080/Vehicle')
      .then(response => response.json())
      .then(data => setVehicles(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/Vehicle/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setName(res.name)
        setDirection(res.direction)
        setPositionY(res.position_y)
        setPositionx(res.position_x)
        setSpeed(res.speed)

      })
      .catch((err) => console.log(err))
  }, [])


  const handleEdit = (e) => {
    e.preventDefault();

    const editData = { name, speed, position_x, position_y, direction }

    fetch(`http://localhost:8080/Vehicle/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(editData),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/vehicle");
      })
      .catch((err) => {
        console.log(err)
      })

  }

  return (
    <div className={styles.container_edit}>
      <h2>Edit Vehicle</h2>
      <form onSubmit={handleEdit}>
        <div className={styles.form_container}>
          <div>
            <lable>Vehicle Name</lable><br />
            <input type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <lable>Vehicle Speed</lable><br />
            <input type="number"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
              required
            />
          </div>
          <div>
            <lable>Position X</lable> <br />
            <input type="number"
              value={position_x}
              onChange={(e) => setPositionx(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={styles.form_container}>
          <div>
            <lable>Position Y</lable><br />
            <input type="number"
              value={position_y}
              onChange={(e) => setPositionY(e.target.value)}
              required
            />
          </div>
          <div>
            <lable>Direction</lable> <br />
            <select value={direction}
              onChange={(e) => setDirection(e.target.value)} required>
              <option>Select Direction</option>
              <option value="Towards">Towards  </option>
              <option value="Backwards"> Backwards </option>
              <option value="Upwards"> Upwards </option>
              <option value="Downwards">Downwards  </option>
            </select>
          </div>
        </div>
        <div className={styles.btn}>
          <button type="submit" className={styles.btn1}>Edit </button>
        </div>
      </form>
    </div>
  )
}

export default VehicleEdit