import { useState } from "react";
import "./Comment.css";
import CommentForm from "./commentForm";

function Comment() {
  let [comments, setComments] = useState([]);

  let handleComment = (comment) => {
    setComments((oldData) => [...oldData, comment]);
  };

  return (
    <>
      {comments.map((comment,idx) => (
        <div className="comment" key={idx}>
          <p>comment : {comment.comment} </p>
          <p>Username : {comment.username} </p>
          <p>rating : {comment.rating} </p>
        </div>
      ))}

      <CommentForm handleComment={handleComment} />
    </>
  );
}

export default Comment;
