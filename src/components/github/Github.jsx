import React,{useEffect,useState} from 'react'

function Github() {
    const [data, setdata] = useState([])
    useEffect(() => {
      fetch('http://api.github.com/users/mushtaq2050')
      .then((res)=>res.json())
      .then((daata)=>{
        console.log(daata)
        setdata(daata)
      })
    
      
    }, [])
  return (
    <div className=' bg-gray-900 text-white m-4 p-4 text-3xl flex gap-10 align-baseline'>
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="github pic" width={300}/>
    </div>
  )
}

export default Github
