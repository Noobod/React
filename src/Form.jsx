import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name</label>
      <input
        placeholder="enter full name"
        type="text"
        value={FormData.fullName}
        onChange={handleInputChange}
        id="fullname"
        name="fullName"
      />
      <br />
      <br />
      <label htmlFor="username">User Name</label>
      <input
        placeholder="enter full name"
        type="text"
        value={FormData.userName}
        onChange={handleInputChange}
        id="username"
        name="userName"
      />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input
        placeholder="enter password"
        type="password"
        value={FormData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      <button>Submit</button>
    </form>
  );
}
