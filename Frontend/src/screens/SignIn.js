
import React, { useState } from "react";
import { useNavigate,Link}  from "react-router-dom";
import axios from "axios";
import '../App.css'

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/user/signin", { username, password })
      .then((result) => {
        console.log(result.data);
        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
        alert("error")
      });
      
  };

  return (
   
    <div className="signin-background_image-other">
      <div className="d-flex justify-content-center align-items-center vh-90px">
        <div className="bg-transparent p-3 rounded w-25">
          <div className="login-content">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username">
                <strong>User Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter User Name"
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
              type="submit"
              className="btn btn-success border w-80  rounded-20 text-decoration-none align-items- center">
              Sign In
            </button>
          </form>
          <p>If you don't have an account <Link to="/signup">Sign Up</Link></p>
          </div>
          </div>
      </div>
    </div>

        
  );
};
export default SignIn;
