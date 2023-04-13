import React from 'react'
import { useQuery } from "react-query";
import axios from "axios";

import { Card } from "reactstrap";
import Navbar from '../components/Navbar';



const delay=()=>new Promise((resolve) => {setTimeout(resolve,2000)})
const randaomProducts=async()=>{ 
  try{
    await delay()
  const {data}= await axios.get("https://dummyjson.com/products")
  return data.products
}catch(error){console.log(error,"heyy error")}
}
const Productdata = () => {

const{isLoading,error,data}=useQuery("products",randaomProducts,)
if(isLoading){return "loading the products....."}
if(error){return (`an error is occured`)}
if(data){console.log(data)}



  return (
    <div>
      <Navbar/>
    <h2>
    {
     data.map((el)=>{
      return(
        <Card style={{border:"2px solid red", width:"600px"}}>
        <li><img alt= "pics" src={el.images[0]}/></li>
        <li>{el.title}</li>
        <li>{el.price}$</li>
        </Card>
      )
     })
    }
  </h2>
    </div>
  )
}

export default Productdata
