import React, { useState } from "react";
import "./registration.css";
import { ToastContainer, toast } from "react-toastify";
import url from "../pass";

let databse = url[0].DATABASE.db;
const Registration = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
    dob: "",
    message: "",
  });

  let name, value;
  const changeData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, gender, age, dob, message } = userData;
    if ((name, email, gender, age, dob, message)) {
      const res = await fetch(databse, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          gender,
          age,
          dob,
          message,
        }),
      });

      setUserData({
        name: "",
        email: "",
        gender: "",
        age: "",
        dob: "",
        message: "",
      });
      toast.success("Data Successfully post");
    } else {
      toast.error("please fill all the fields");
    }
  };
  return (
    <>
      <div className="reg">
        <div className="mainreg">
          <form method="POST">
            <li>
              NAME:{" "}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={userData.name}
                onChange={changeData}
              />
            </li>
            <li>
              Email:{" "}
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={userData.email}
                onChange={changeData}
              />
            </li>
            <li>
              Gender:{" "}
              <input
                type="text"
                name="gender"
                placeholder="Enter your gender"
                value={userData.gender}
                onChange={changeData}
              />
            </li>
            <li>
              AGE:{" "}
              <input
                type="text"
                name="age"
                placeholder="Enter Age"
                value={userData.age}
                onChange={changeData}
              />
            </li>
            <li>
              DOB:{" "}
              <input
                type="text"
                name="dob"
                placeholder="Enter DOB"
                value={userData.dob}
                onChange={changeData}
              />
            </li>
            <li>
              MESSAGE:
              <textarea
                name="Enter message"
                value={userData.message}
                onChange={changeData}
                placeholder="Enter your message"
              ></textarea>
            </li>
            <li>
              <button onClick={postData}>Submit</button>
              <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </li>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
