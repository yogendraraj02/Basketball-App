import { useState } from "react";
import { NavLink } from "react-router-dom";

function Register() {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerSuccess , setRegisterSuccess] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const registerFormObj = { email, password };
    console.log('Submitted:', registerFormObj);
    const response = await fetch(`http://localhost:3000/users`,{
      method : "POST",
      body : JSON.stringify(registerFormObj),
      headers : {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json; charset=utf-8',
      } 
    })
    const result = await response.json();
    console.log(`result`,result);
    if(response.status === 201){
      console.log(`register success`);
      setRegisterSuccess(true);
    }
  };

  if (registerSuccess) {
    return (
      <>
        <div className="row">
          <div className="col">
            <h1>Register</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="alert alert-success" role="alert">
              Successfully Register!!! Please{" "}
              <NavLink to="/login">login</NavLink>.
            </div>
          </div>
        </div>
      </>
    );
  }



    return (
    <>
    <form action="" method="post" onSubmit={handleSubmit}>
    <div className="row">
  <div className="col">
    <h1>Register</h1>
  </div>
</div>
<div className="row">
  <div className="col">
    <label htmlFor="email" className="htmlForm-label">Email</label>
    <input type="email" id="email" name="email" className="form-control" required value={email} onChange={handleEmailChange}/>
  </div>
</div>
<div className="row">
  <div className="col">
    <label htmlFor="inputPassword5" className="form-label">Password</label>
    <input type="password" id="inputPassword5" name="password" required className="form-control" value={password} onChange={handlePasswordChange}/>
  </div>
</div>
<div className="row mt-3">
  <div className="col">
    <button className="btn btn-primary w-100" >Register</button>
  </div>
</div>


    </form>
    </>
  )
}

export default Register