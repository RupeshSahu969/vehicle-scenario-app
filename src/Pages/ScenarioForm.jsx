import axios from 'axios'
import React, { useState } from 'react'
import styles from "./scenario.module.css";
import { useNavigate } from 'react-router-dom';
const ScenarioForm = () => {
    const [name,setName]=useState("")
    const[time,setTime]=useState("")

const navigate=useNavigate()

const handleSubmit=(e) =>{
    e.preventDefault()

    const payload={
        name,
        time,
    }
    axios.post("http://localhost:8080/scenario",payload)
    .then((res) =>{
        console.log(res.data)
        
    })
    .catch((err)=>
    {
        console.log(err);
       
    }
    )
    setName("")
    setTime("")
}

const handleReset=()=>{
  setName("")
  setTime("")
}
const handleGoback=()=>{
  navigate("/")
}
  return (
    <div>
      <h2>Create Scenario</h2>
      <form onSubmit={handleSubmit}>
      <div className={styles.form_container}>       
         <div>
           <lable>Scenario Name</lable><br/>
             <input type="text"
             placeholder='Enter Scenario Name'
               value={name}
               onChange={(e) => setName(e.target.value)}
               required
             />
           
         </div>
         <div>
           <lable>Scenario Time (Second)</lable> <br/>
             <input type="text"
             placeholder='Enter Time'
               value={time}
               onChange={(e) => setTime(e.target.value)}
               required
             />
           
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

export default ScenarioForm
