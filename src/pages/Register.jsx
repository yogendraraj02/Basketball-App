
function Register() {
  return (
    <div>
        <div className="row">
  <div className="col">
    <h1>Register</h1>
  </div>
</div>
<div className="row">
  <div className="col">
    <label htmlFor="email" className="htmlForm-label">Email</label>
    <input type="email" id="email" className="form-control" />
  </div>
</div>
<div className="row">
  <div className="col">
    <label htmlFor="inputPassword5" className="form-label">Password</label>
    <input type="password" id="inputPassword5" className="form-control" />
  </div>
</div>
<div className="row mt-3">
  <div className="col">
    <button className="btn btn-primary w-100">Register</button>
  </div>
</div>

    </div>
  )
}

export default Register