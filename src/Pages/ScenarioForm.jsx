import axios from 'axios'
import React, { useState } from 'react'

const ScenarioForm = () => {
    const [name,setName]=useState("")
    const[time,setTime]=useState("")

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

  return (
    <div>
      <h2>Create Scenario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Scenario Name:</label>
          <input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Scenario Time Second:</label>
          <input
            type="text"
            value={time}
            onChange={event => setTime(event.target.value)}
            required
          />
        </div>
        <button type="submit">Add </button>
        <button type="submit">Reset </button>
        <button type="submit">Go Back </button>
      </form>
    </div>
  )
}

export default ScenarioForm
