import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'


const NoqueryData = () => {

    const [isLoading,setIsLoading]=useState(true)
    const [data2,setData2]=useState([])

    
    useEffect(()=>{ axios.get("http://localhost:4000/superheroes").then((response)=>{
        setData2(response.data)
            setIsLoading(false)
    })},[])
    
    if(isLoading){return <h2>Loading Data.......</h2>}
  return (
    <div>

    <Navbar/>
    <h1>Supperheroes with  NO RQ</h1>
    {data2.map((hero)=>{
        return <div key={hero}>{hero.name} </div>
    })}
    </div>
  )
}

export default NoqueryData
