import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { requestPosts } from "../redux/blog/actions";
import Loading from "../components/Loading";
import image from "../assets/book.jpg";

function ProductDetails({
  onRequestPosts,
  postState,
}) {
  useEffect(() => {
    onRequestPosts();
  }, []);
  const { id } = useParams();
  const history = useHistory();
  const { posts } = postState;
  const post = posts.find((item) => item.id === parseInt(id));
  if (posts.length === 0) {
    return <Loading />;
  } else {
    const { title, description } = post;
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
          </article>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    postState: state.requestPosts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestPosts: () => dispatch(requestPosts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
