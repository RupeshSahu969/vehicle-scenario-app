import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from "./vehicle.module.css";
import { useNavigate } from 'react-router-dom';

const Vehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [name, setName] = useState("")
  const [position_x, setPositionx] = useState("")
  const [position_y, setPositionY] = useState("")
  const [speed, setSpeed] = useState("")
  const [direction, setDirection] = useState("")
  const [count, setCount] = useState([])
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const payload = {
      name,
      position_x,
      position_y,
      speed,
      direction,
      count
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
    setPositionx("")
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

  const handleReset=()=>{
    setName("")
    setPositionY("")
    setPositionx("")
    setDirection("")
    setSpeed("")
    setDirection("")
    
  }
  const handleGoback=()=>{
    navigate("/vehicle")
  }

  return (
   
    <div className={styles.container}>
      <h2>Add Vehicle</h2>
    
      <form onSubmit={handleSubmit}>
      <div className={styles.container_data}>
        <div className={styles.form_container}>
          <div>
            <lable>Scenario </lable><br/>
              <select>
                {count.map((item) => (
                  <option key={item.id}> {item.name} </option>
                ))}

              </select>
            
          </div>
          <div>
            <lable>Vehicle Name</lable><br/>
              <input type="text"
              placeholder='Enter Vehicle Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            
          </div>
          <div>
            <lable>Vehicle Speed</lable><br/>
              <input type="number"
              placeholder='Enter Vehicle Speed'
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                required
              />
            
          </div>
        </div>
        <div className={styles.form_container}>
          <div>
            <lable>Position X</lable> <br/>
              <input type="number" id="tentacles" name="tentacles"
             min="0" max="800"
              placeholder='1000'
                value={position_x}
                onChange={(e) => setPositionx(e.target.value)}
                required
              />
            
          </div>

          <div>
            <lable>Position Y</lable><br/>
              <input type="number"
              placeholder='20'
                value={position_y}
                onChange={(e) => setPositionY(e.target.value)}
                required
              />
            
          </div>
          <div>
            <lable>Direction</lable> <br/>
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
        </div>
        <div className={styles.btn}>
       <button type="submit" className={styles.btn1}>Add </button>
        <button type="submit" className={styles.btn2} onClick={handleReset}>Reset </button>
        <button type="submit" className={styles.btn3} onClick={handleGoback}>Go Back </button>
       </div>
      </form>
    </div>
    
  )
}

export default Vehicle