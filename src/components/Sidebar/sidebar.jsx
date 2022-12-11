import React from 'react';
import './sidebar.css';
import { useDataContext } from '../../context/dataContext';

const Sidebar = () => {
  const {state: { createdTime, priority, tags, selectedTags },dataDispatch} = useDataContext();

   const tagHandler = tag => {
     if (selectedTags.includes(tag)) {
       return selectedTags.filter(tagName => tagName !== tag);
     } else {
       selectedTags.push(tag);
       return selectedTags;
     }
   };

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar-header">
          <h5 className="sidebar-h5">Filters</h5>
          <button
            className="sidebar--btn"
            onClick={() => dataDispatch({ type: 'CLEAR' })}
          >
            Clear
          </button>
        </div>

        <div className="sidebar-block">
          <h5 className="sidebar-h5">Sort by Tags</h5>

          {tags.map((tag, id) => {
            return (
              <div>
                <input
                  type="checkbox"
                  className="sub-option"
                  id={tag._id}
                  key={tag._id}
                  checked={selectedTags.includes(tag.tagTitle)}
                  onChange={e =>
                    dataDispatch({
                      type: 'SORT_BY_TAGS',
                      payload: tagHandler(e.target.value),
                    })
                  }
                  value={tag.tagTitle}
                />
                <label className="sidebar-label" key={id} htmlFor={tag._id}>
                  {tag.tagTitle}
                </label>
              </div>
            );
          })}
        </div>
        <div className="sidebar-block">
          <h5 className="sidebar-h5">Sort By Time</h5>

          <div>
            <input
              type="radio"
              className="sub-option"
              name="createdTime"
              id="NEW_TO_OLD"
              onChange={() => dataDispatch({ type: 'NEW_TO_OLD' })}
              checked={createdTime === 'NEW_TO_OLD'}
            />
            <label className="sidebar-label" htmlFor="NEW_TO_OLD">
              New to Old
            </label>
          </div>
          <div>
            <input
              type="radio"
              className="sub-option"
              name="createdTime"
              id="OLD_TO_NEW"
              onChange={() => dataDispatch({ type: 'OLD_TO_NEW' })}
              checked={createdTime === 'OLD_TO_NEW'}
            />
            <label className="sidebar-label" htmlFor="OLD_TO_NEW">
              Old to New
            </label>
          </div>
        </div>
        <div className="sidebar-block">
          <h5 className="sidebar-h5">Sort By Priority</h5>

          <div>
            <input
              type="radio"
              className="sub-option"
              name="priority"
              id="HIGH_TO_LOW"
              onChange={() => dataDispatch({ type: 'HIGH_TO_LOW' })}
              checked={priority === 'HIGH_TO_LOW'}
            />
            <label className="sidebar-label" htmlFor="HIGH_TO_LOW">
              High to Low
            </label>
          </div>
          <div>
            <input
              type="radio"
              className="sub-option"
              name="priority"
              id="LOW_TO_HIGH"
              onChange={() => dataDispatch({ type: 'LOW_TO_HIGH' })}
              checked={priority === 'LOW_TO_HIGH'}
            />
            <label className="sidebar-label" htmlFor="LOW_TO_HIGH">
              Low to High
            </label>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
