import React from 'react'
import { useQuery } from 'react-query' 
import axios from 'axios'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'



const delay=()=>new Promise((resolve) => {setTimeout(resolve,1000)})
const superHeronames=async()=>{ 
  try{
    await delay()
  const {data}= await axios.get("http://localhost:4000/superheroes")
  console.log(data)
  return data
}
catch(error){console.log(error,"heyy error")}
}
const QuerydataMain = () => {
 // promise lgaya hai to inki jarurat ni pdegi
 //const onSuccess=()=>{console.log("perform side effect after data fatching")}
 //const onError=()=>{console.log("perform side effect after after ERROR encountering")}

    const{isLoading,error,data,isError,isFetching}=useQuery("SuperHeroes",superHeronames,{})

if(isLoading){return "loading the data with names....."}
if(error){return (`an error is occured`)}

if(isError){return <h2>error.message</h2>}

console.log({isLoading,isFetching})   //dono false honge after datafatched and loading

  return (
    <div>
 
    <Navbar/>
    <h1>My favourate Superheroes with REACT QUERY</h1>
    <p>to Get names clikk here- <button >CLICK ME</button></p>
    {data?.map((hero)=>{
        return(
       <div key={hero.id}> <Link to={`/rqsuperherodatapage/${hero.id}`}>{hero.name}    = {hero.alterName}</Link></div>

        )
    }
    )}
    </div>
  )
}

export default QuerydataMain
