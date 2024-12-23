import { useState } from "react";
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Username cannot be empty!';
  }

  return errors;
};

function CommentForm({handleComment}) {

  // let [formData, setFormData] = useState({
  //   username: "",
  //   comment: "",
  //   rating: "",
  // });

  const formik = useFormik({
    initialValues: {
      username: "",
    comment: "",
    rating: "",
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // function handleForm(event) {
  //   setFormData((oldData) => {
  //     return { ...oldData, [event.target.name]: event.target.value };
  //   });
  // }

  // function handleSubmit(event){
  //   event.preventDefault();
  //   handleComment(formData);
  //   setFormData({
  //       username: "",
  //       comment: "",
  //       rating: "",
  //     })

  // }

  return (
    <>
      <h2>Give your comment</h2>
      <form action="" onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          name="username"
          value={formik.values.username}
          id="username"
          onChange={formik.handleChange}
        />
         {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        <br />
        <br />

        <label htmlFor="comment">Comment : </label>
        <textarea
          name="comment"
          value={formik.values.comment}
          id="comment"
          onChange={formik.handleChange}
        ></textarea>
        <br />
        <br />

        <label htmlFor="rating">rating : </label>
        <input
          type="number"
          name="rating"
          value={formik.values.rating}
          id="rating"
          min={1}
          max={5}
          onChange={formik.handleChange}
        />
          <br />
        <br />

        <button type="submit">Submit!</button>
      </form>
    </>
  );
}

export default CommentForm;
