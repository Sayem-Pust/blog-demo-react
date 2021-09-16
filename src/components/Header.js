import React from "react";
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header className="header">
      <h2 className="logo">Blog-Post</h2>
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
