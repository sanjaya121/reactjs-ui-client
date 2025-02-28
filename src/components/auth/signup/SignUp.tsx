import { useState } from "react";
import "./signup.scss";
import axios from "axios";
const SignUp = () => {
  const formInitialState = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  };

  const [userData, setUserData] = useState(formInitialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8080/signup',userData).then((response)=>{
        console.log("response",response)
    })
    console.log(userData,"User Signup Data")
  }

  return (
    <div className="signup-form">
      <h1>Sign Up</h1>
      <div className="signup-form-container">
        <div className="row">
          <div className="col"></div>
          <div className="col-lg-6">
            <div className="form-group user-name py-3">
              {/* <label for="formGroupExampleInput">Example label</label> */}
              <input
                type="text"
                name="email"
                className="form-control"
                id="formGroupExampleInput1"
                // value={userData.username}
                placeholder="Enter your Email"
                onChange={handleChange}
                // onBlur={handleChange}
              />
              {/* {errors.username && <span>Please Enter your user name</span>} */}
            </div>
            <div className="form-group user-name py-3">
              {/* <label for="formGroupExampleInput">Example label</label> */}
              <input
                type="text"
                name="firstName"
                className="form-control"
                id="formGroupExampleInput2"
                // value={userData.username}
                placeholder="Enter your Firstname"
                onChange={handleChange}
                // onBlur={handleChange}
              />
              {/* {errors.username && <span>Please Enter your user name</span>} */}
            </div>
            <div className="form-group user-name py-3">
              {/* <label for="formGroupExampleInput">Example label</label> */}
              <input
                type="text"
                name="lastName"
                className="form-control"
                id="formGroupExampleInput3"
                // value={userData.username}
                placeholder="Enter your LastName"
                onChange={handleChange}
                // onBlur={handleChange}
              />
              {/* {errors.username && <span>Please Enter your user name</span>} */}
            </div>
            <div className="form-group password py-3">
              {/* <label for="formGroupExampleInput2">Another label</label> */}
              <input
                type="password"
                name="password"
                className="form-control"
                id="formGroupExampleInput4"
                placeholder="Enter password"
                onChange={handleChange}
                // onBlur={handleChange}
              />
            </div>
            {/* <div className="form-group password py-3">
                <label for="formGroupExampleInput2">Another label</label>
                <input
                  type="password"
                  name="repassword"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Re-enter password"
                  onChange={handleChange}
                  onBlur={handleChange}
                />
              </div> */}
            <div className="form-group password py-3">
              <button className="btn btn-primary btn-lg" onClick={handleSubmit}>Sing Up</button>
            </div>
          </div>

          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
