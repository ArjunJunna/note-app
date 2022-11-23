import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <ul className="list">
        <li>
          <Link to="/home">
            <i class="bi bi-house-door-fill"></i>
            Home
          </Link>
        </li>
        <li>
          <Link to="/labels">
            <i class="bi bi-tags-fill"></i>
            Labels
          </Link>
        </li>
        <li>
          <Link to="/archive">
            <i class="bi bi-archive-fill"></i>
            Archive
          </Link>
        </li>
        <li>
          <Link to="/trash">
            <i class="bi bi-trash3-fill"></i>
            Trash
          </Link>
        </li>
        <li>
          <Link to="/mockman">MockAPI</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
