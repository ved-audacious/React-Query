import { useQuery } from "react-query"
import axios from "axios"


const fatchUserbyemail=(email)=>{
  return axios.get(`http://localhost:4000/users/${email}`)
}

const fatchCoursebyChannelid=(channelId)=>{
  return axios.get(`http://localhost:4000/channels/${channelId}`)
}


export const Dependentqueries = ({email}) => {

const{data:user}=useQuery("user",()=>fatchUserbyemail(email))
console.log(user)

const channelId=user?.data.channelid
console.log(channelId)

const data=useQuery("cKey",()=>fatchCoursebyChannelid(channelId))
console.log(data.data.data.courses)
const cousesName=data.data.data.courses
//console.log()
return (
    <div>
      <h1>{channelId}</h1>
      <h2>{cousesName }</h2>
      <h1>Dependent Query</h1>
    </div>
  )
}


