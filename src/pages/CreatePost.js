import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CreatePosts } from "../redux/blog/actions";

function Login(props) {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.requestPosts);

  const { success, error } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadData = new FormData();
    uploadData.append("title", title);
    uploadData.append("description", description);
    uploadData.append("image", image, image.name);
    dispatch(CreatePosts(uploadData));
  };

  let errorMessage = null;
  if (error) {
    errorMessage = <p>{error.message}</p>;
  }

  if (success) {
    history.push("/blog");
  }

  return (
    <section className="form section">
      {errorMessage}
      <h2 className="section-title">Create Post</h2>
      <form className="login-form">
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <div className="form-control">
            <label htmlFor="repeatPass">Image</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-block btn-primary"
          onClick={handleSubmit}
        >
          submit
        </button>
      </form>
    </section>
  );
}


export default Login;
