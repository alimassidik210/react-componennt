import React from "react";
import "./CSS/Blog.css";

const Blog = (props) => {
  return (
    <div className="blog-wrap">
      <img src="https://placeimg.com/640/480/any" alt="Teach" />
      <p>{props.date}</p>
      <h2>{props.Title}</h2>
      <p>{props.summary}</p>
    </div>
  );
};

export default Blog;
