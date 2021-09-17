import React from "react";
import { Link } from "react-router-dom";

export default function Product({ id, title, description, image }) {
  return (
    <article className="post">
      <div className="img-container">
        <img src={image} alt={title} />
        <Link to={`blog/${id}`} className="btn btn-primary post-link">
          Details
        </Link>
      </div>
      <div className="post-footer">
        <div className="post-title">{title}</div>
        <div className="post-body">{description}</div>
      </div>
    </article>
  );
}
