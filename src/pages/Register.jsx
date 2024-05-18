import { useState } from "react";

function Register() {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    const registerFormObj = { email, password };
    console.log('Submitted:', registerFormObj);
  };


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
    <input type="email" id="email" className="form-control" required value={email} onChange={handleEmailChange}/>
  </div>
</div>
<div className="row">
  <div className="col">
    <label htmlFor="inputPassword5" className="form-label">Password</label>
    <input type="password" id="inputPassword5" required className="form-control" value={password} onChange={handlePasswordChange}/>
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