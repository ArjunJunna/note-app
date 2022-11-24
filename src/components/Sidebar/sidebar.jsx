import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar=()=>{
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar-header">
          <h5 className="sidebar-h5">Filters</h5>
          <button className="sidebar--btn">Clear</button>
        </div>

        <div className="sidebar-block">
          <h5 className="sidebar-h5">Category</h5>
          <ul>
            <li>
              <input type="checkbox" className="sub-option" />
              <label className="sidebar-label">ola</label>
            </li>
            <li>
              <input type="checkbox" className="sub-option" />
              <label className="sidebar-label">ola</label>
            </li>
            <li>
              <input type="checkbox" className="sub-option" />
              <label className="sidebar-label">ola</label>
            </li>
            <li>
              <input type="checkbox" className="sub-option" />
              <label className="sidebar-label">ola</label>
            </li>
            <li>
              <input type="checkbox" className="sub-option" />
              <label className="sidebar-label">ola</label>
            </li>
          </ul>
        </div>
        <div className="sidebar-block">
          <h5 className="sidebar-h5">Sort By Time</h5>
          <ul>
            <li>
              <input
                type="radio"
                className="sub-option"
                
              />
              <label className="sidebar-label">
                New to Old
              </label>
            </li>
            <li>
              <input
                type="radio"
                className="sub-option"
                
              />
              <label className="sidebar-label">
                Old to New
              </label>
            </li>
          </ul>
        </div>
        <div className="sidebar-block">
          <h5 className="sidebar-h5">Sort By Priority</h5>
          <ul>
            <li>
              <input
                type="radio"
                className="sub-option"
               
              />
              <label className="sidebar-label">
                Low to High
              </label>
            </li>
            <li>
              <input
                type="radio"
                className="sub-option"
                
              />
              <label className="sidebar-label">
                High to Low
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
