import React from 'react';
import { Link } from 'react-router-dom';
import './PostNav.css'
function PostNav() {
  return (
    <nav>
      <Link to="/post">Post</Link>
      <Link to="/find-question">Find Question</Link>
    </nav>
  );
}

export default PostNav;
