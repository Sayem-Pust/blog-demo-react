import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
// import { connect } from "react-redux";
import { useSelector, useDispatch  } from "react-redux";
import { requestPosts } from "../redux/blog/actions";
import Loading from "../components/Loading";
import image from "../assets/book.jpg";

function ProductDetails({
  // onRequestPosts,
  // postState,
}) {
  const dispatch = useDispatch()
  const postState = useSelector((state) => state.requestPosts);
  console.log(postState);
  useEffect(() => {
    dispatch(requestPosts());
  }, []);
  const { id } = useParams();
  const history = useHistory();
  const { posts } = postState;
  const post = posts.find((item) => item.id === parseInt(id));
  if (posts.length === 0) {
    return <Loading />;
  } else {
    const { title, description, id } = post;
    return (
      <div>
        <section className="single-post">
          <img src={image} alt={title} className="single-post-image" />
          <article>
            <h1>{title}</h1>
            <p>{description}</p>

            <button
              className="btn btn-primary btn-block"
              onClick={() => {
                history.push("/blog");
              }}
            >
              Back to posts
            </button>
              <br></br>
            <button
              className="btn btn-primary btn-block"
              onClick={() => {
                history.push(`/blog/edit/${id}`);
              }}
            >
              Edit Post
            </button>
          </article>
        </section>
      </div>
    );
  }
}

export default ProductDetails;
