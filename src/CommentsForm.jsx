import { useState } from "react";
import {useFormik} from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username cannot be empty!";
  }

  return errors;
};

export default function CommentsForm({addNewComment}) {
  // let [formData, setFormData] = useState({
  //   userName: "",
  //   remarks: "",
  //   rating: 5,
  // });

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // let handleInputchange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };

  // let handleSubmit = (event) => {
  //   addNewComment(formData);
  //   event.preventDefault();
  //   setFormData({
  //     userName: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // };

  return (
    <div>
      <h4>Give a comment!</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          placeholder="username"
          type="text"
          // value={formData.userName}
          value={formik.values.username}
          onChange={formik.handleChange}
          id="username"
          name="username"
        />
        {formik.errors.username ? <p style={{color: "red"}}>{formik.errors.username}</p> : null}
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          // value={formData.remarks}
          value={formik.values.remarks}
          placeholder="Add Few remarks!"
          // onChange={handleInputchange}
          onChange={formik.handleChange}
          id="remarks"
          name="remarks"
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          placeholder="rating"
          type="number"
          min={1}
          max={5}
          // value={formData.rating}
          value={formik.values.rating}
          // onChange={handleInputchange}
          onChange={formik.handleChange}
          id="rating"
          name="rating"
        />
        <br />
        <br />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
