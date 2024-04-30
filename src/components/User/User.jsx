
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
   
    
  return (
    <div className='bg-blue-400 text-white text-3xl text-center'>
      USER:{userid}
    </div>
  )
}

export default User
