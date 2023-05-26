import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Scenario = () => {
    const [getdata,setGetdata]=useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/scenario")
        .then((res) => {
            
            setGetdata(res.data)
        } )
        .catch((err) => console.log(err))
    },[])
    console.log(getdata)
  return (
    <div>
        { getdata.map((item) => (
            <div key={item.id}>
                {item.name}
                {item.time}
                 </div>
        ))}
    </div>
  )
}

export default Scenario
