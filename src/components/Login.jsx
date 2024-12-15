import { useState } from 'react'
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("bell@gmail.com");
  const [password, setPassword] = useState("Test@1234");
  const handleLogin = async () => {
    try{
      let result = await axios.post("http://localhost:7777/login",{
        email,
        password
      },{withCredentials:true})
      console.log(result);
    }catch(e){
      console.log(`Error: ${e}`)
    }
  }
  return (
    <div className="flex-grow flex justify-center">
      <div className="card bg-base-500 w-96 shadow-xl h-full mt-5">
        <div className="card-body">
          <h2 className="card-title py-4">Login</h2>
          
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email*</span>
            </div>
            <input type="text" 
              placeholder="Email" 
              className="input input-bordered w-full max-w-xs" 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)}
            />
          </label>
          
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">password*</span>
            </div>
            <input type="password" 
              placeholder="Password" 
              className="input input-bordered w-full max-w-xs" 
              value={password} 
              onChange={(e)=>setPassword(e.target.value)} 
            />
          </label>
          
          <div className="card-actions justify-end pt-5">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default Login
