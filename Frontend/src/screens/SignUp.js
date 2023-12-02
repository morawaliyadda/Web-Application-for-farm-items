import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


export const SignUp =() =>{
    const[username, setUsername] = useState()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit =(e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/user/signup',{username,email,password})
        .then(result => {console.log(result)
         navigate('/signin')
        })
        .catch(err => console.log(err))

    }
    return( 
        <div className="signin-background_image-other">
        <div className="d-flex justify-content-center align-items-center  vh-90px">
         <div className="bg-transparent p-3 rounded w-25">
        <div className="login-content">
        <h2>
            Sign Up
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username">
                <strong>User Name</strong>
              </label>
              <input type="text"
              placeholder="Enter User Name"
              autoComplete="off"
              name="username"
              className="form-control rounded-0"
              onChange={(e) => setUsername(e.target.value)}
              />

            </div> 

            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="mb-3">
              <label htmlFor="email">
                <strong>Password</strong>
              </label>
              <input type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}/>
            </div>
            
            <button  type="submit" className="btn btn-success border w-80   rounded-10 text-decoration-none">
              Sign Up
            </button>  
          </form>

           <p>If you already have an account <Link to="/signin">Sign In</Link></p>

          </div>
          </div>
          </div>
        </div>
    );
};

export default SignUp;