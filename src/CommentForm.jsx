import { useState } from "react";

function CommentForm() {
  let [formData, setFormData] = useState({
    username: "",
    comment: "",
    rating: "",
  });

  function handleForm(event) {
    setFormData((oldData) => {
      return { ...oldData, [event.target.name]: event.target.value };
    });
  }

  console.log(formData);

  function handleSubmit(event){
    event.preventDefault();
    setFormData({
        username: "",
        comment: "",
        rating: "",
      })

  }

  return (
    <>
      <h2>Give your comment</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          id="username"
          onChange={handleForm}
        />
        <br />
        <br />

        <label htmlFor="comment">Comment : </label>
        <textarea
          name="comment"
          value={formData.comment}
          id="comment"
          onChange={handleForm}
        ></textarea>
        <br />
        <br />

        <label htmlFor="rating">rating : </label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          id="rating"
          min={1}
          max={5}
          onChange={handleForm}
        />
          <br />
        <br />

        <button>Submit!</button>
      </form>
    </>
  );
}

export default CommentForm;
