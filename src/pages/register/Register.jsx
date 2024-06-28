import "./register.css"
const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialHive</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SocialHive.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" className="loginInput" placeholder="Username" />
            <input type="text" className="loginInput" placeholder="Email" />
            <input type="text" className="loginInput" placeholder="Password" />
            <input type="text" className="loginInput" placeholder="Password Agin" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Creat a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;