import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const VehicleEdit = () => {

const {id}=useParams();

    
  const [name,setName]=useState("")
  const[position_x,setPositionx]=useState("")
  const[position_y,setPositionY]=useState("")
  const[speed,setSpeed]=useState("")
  const[direction,setDirection]=useState("")

const navigate=useNavigate();

  useEffect(() =>{
    fetch(`http://localhost:8080/Vehicle/${id}`)
    .then((res) => res.json())
    .then((res) =>{
            setName(res.name)
            setDirection(res.direction)
            setPositionY(res.position_y)
            setPositionx(res.position_x)
            setSpeed(res.speed)
            
    })
    .catch((err) => console.log(err))
  },[])


const handleEdit=(e)=>{
    e.preventDefault();

const editData={name,speed,position_x,position_y,direction}

fetch(`http://localhost:8080/Vehicle/${id}`,{
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
    <div>
    <form onSubmit={handleEdit}>
      
      <div>
        <lable>Vehicle Name</lable>
        <input type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required
        />
      </div>
      <div>
        <lable>Vehicle Speed</lable>
        <input type="number" 
        value={speed}
        onChange={(e)=>setSpeed(e.target.value)}
        required
        />
      </div>
      <div>
        <lable>Position X</lable>
        <input type="number"
        value={position_x}
        onChange={(e)=>setPositionx(e.target.value)}
        required
        />
      </div>
      <div>
        <lable>Position Y</lable>
        <input type="number"
        value={position_y}
        onChange={(e)=>setPositionY(e.target.value)}
        required
        />
      </div>
      <div>
        <lable>Direction</lable>
        <select  value={direction}
        onChange={(e)=>setDirection(e.target.value)} required>
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

export default VehicleEdit