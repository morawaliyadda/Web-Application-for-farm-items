
import React, { useState } from "react";
import { useNavigate}  from "react-router-dom";


import '../App.css'

export const AdminSignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAdmin = () => {
    if(username ==="admin" && password==="admin"){
        navigate('/admin')
    }else{
        window.alert("Incorrect username or password. Please try again")
    }
      
  };

  return (
   
    <div className="signin-background_image-other">
      <div className="d-flex justify-content-center align-items-center vh-90px">
        <div className="bg-transparent p-3 rounded w-25">
          <div className="login-content">
          <h2>Sign In</h2>
          <form >
            <div className="mb-3">
              <label htmlFor="username">
                <strong>Admin Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                autoComplete="off"
                name="username"
                className="form-control rounded-0"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <button
              type="button" onClick={handleAdmin}
              className="btn btn-success border w-80  rounded-20 text-decoration-none align-items- center">
              Sign In
            </button>
          </form>
          
          </div>
          </div>
      </div>
    </div>

        
  );
};
export default AdminSignIn;
