import { useEffect, useState } from "react";
import "./login.scss";

//Login Component

const Login = () => {
  //ser user data state
  const [userData, setUserData] = useState({ username: "", password: "" });

  //error state
  const [errors, setErrors] = useState({
    username: null,
    password: null,
  });

  const [isValid, setIsError] = useState(false);

  const [loginButton, setLoginButton] = useState(true);

  //handing onchange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("name", name, "value", value);
    setUserData({
      ...userData,
      [name]: value,
    });
    const errorMessage = validateFieldsOnChange(name, value);

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
    console.log(errors.username, errorMessage, "errors inside handle change");
  };

  //this functio will handle form while you type it
  const validateFieldsOnChange = (name, value) => {
  

    
    switch (name) {
      case "username":
        if (value.length < 1) {
          return "please Enger your username"; // alert("Enter user name");
        }
        break;
      case "password":
        if (value.length < 1) {
          return "please Enter password";
        }
    }
    return "";
  };

  //disable login button loggic

  const disableLogicButton = () => {
    console.log(errors.username);
    if (errors.username == null && errors.password == null) {
      setLoginButton(true);
    } else if (errors.username === "" && errors.password == null) {
      setLoginButton(true);
    } else if (errors.username === null && errors.password == "") {
      setLoginButton(true);
    } else {
      setLoginButton(false);
    }
  };

  

  //this function will submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log("Login Button Status", errors.username);
    disableLogicButton();
  }, [errors]);

  return (
    <div className="login-container">
      <h1>Please Loign</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col-lg-4">
          <form>
            <div className="form-group user-name py-3">
              {/* <label for="formGroupExampleInput">Example label</label> */}
              <input
                type="text"
                name="username"
                className="form-control"
                id="formGroupExampleInput"
                value={userData.username}
                placeholder="Entr Username"
                onChange={handleChange}
                onBlur={handleChange}
              />
              {errors.username && <span>Please Enter your user name</span>}
            </div>
            <div className="form-group password py-3">
              {/* <label for="formGroupExampleInput2">Another label</label> */}
              <input
                type="password"
                name="password"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter password"
                onChange={handleChange}
                onBlur={handleChange}
              />
              {errors.password && <span>Please Enter your user name</span>}
            </div>
            <div className="form-group py">
              <button
                className={
                  loginButton ? "btn btn-secondary" : "btn btn-primary "
                }
                onClick={handleSubmit}
                disabled={loginButton}
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Login;
