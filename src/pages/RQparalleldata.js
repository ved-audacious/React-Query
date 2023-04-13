import { useQuery} from "react-query"
import axios from "axios"



//its for parallel Query

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


const friendsnames=async()=>{ 
    try{
      await delay()
    const {data}= await axios.get("http://localhost:4000/friends")
    console.log(data)
    return data
  }
  catch(error){console.log(error,"heyy error")}
  }
export const RQparalleldata = () => {

    const{data:superheroes}=useQuery("SuperHeroes",superHeronames,{})
    const{data:friends}=useQuery("friendsname",friendsnames,{})
  return (
    <div>
      <h1>Reached parallelpage</h1>
      {superheroes[0].name}
      <div>{friends[0].fname}</div>
    </div>
  )
}


