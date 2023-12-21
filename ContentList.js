import React from 'react';
import { Link } from 'react-router-dom';
import './ContentList.css'; // Make sure you import the CSS file

function ContentList({ anchorEl }) {
  const top = anchorEl ? anchorEl.getBoundingClientRect().bottom : 0;
  const left = anchorEl ? anchorEl.getBoundingClientRect().left : 0;

  return (
    <div className="content-list" style={{ top: `${top}px`, left: `${left}px` }}>
      <ul>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/exercises">Exercises</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
    </div>
  );
}

export default ContentList;
