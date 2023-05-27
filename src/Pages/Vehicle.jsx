import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from "./vehicle.module.css";
const Vehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [name, setName] = useState("")
  const [position_x, setPositionx] = useState("")
  const [position_y, setPositionY] = useState("")
  const [speed, setSpeed] = useState("")
  const [direction, setDirection] = useState("")
  const [count, setCount] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()

    const payload = {
      name,
      position_x,
      position_y,
      speed,
      direction
    }
    axios.post("http://localhost:8080/Vehicle", payload)
      .then((res) => {
        console.log(res.data)

      })
      .catch((err) => {
        console.log(err);

      }
      )
    setName("")
    setPositionY("")
    setDirection("")
    setSpeed("")
    setDirection("")
  }
  useEffect(() => {
    axios.get("http://localhost:8080/scenario")
      .then((res) => {

        setCount(res.data)
      })
      .catch((err) => console.log(err))
  }, [])



  return (
    <div className='row'>
      <form onSubmit={handleSubmit}>
        <div>
          <lable>Scenario List</lable><br/>
          <select>

            {count.map((item) => (
              <option key={item.id}> {item.name} </option>
            ))}

          </select>
          <lable>Vehicle Name</lable>
          <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />


          <lable>Vehicle Speed</lable>
          <input type="number"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            required
          />
        </div>

        <div>

          <lable>Position X</lable>
          <input type="number"
            value={position_x}
            onChange={(e) => setPositionx(e.target.value)}
            required
          />


          <lable>Position Y</lable>
          <input type="number"
            value={position_y}
            onChange={(e) => setPositionY(e.target.value)}
            required
          />


          <lable>Direction</lable>
          <select value={direction}
            onChange={(e) => setDirection(e.target.value)} required>
            <option>Select Direction</option>
            <option value="Towards">Towards  </option>
            <option value="Backwards"> Backwards </option>
            <option value="Upwards"> Upwards </option>
            <option value="Downwards">Downwards  </option>
          </select>
        </div>

        <button type="submit">Add </button>
        <button type="submit">Reset </button>
        <button type="submit">Go Back </button>
      </form>
    </div>
  )
}

export default Vehicle