import React from 'react';
import HtmlParser from 'react-html-parser/lib/HtmlParser';

import { notePinHandler } from '../../utilities/DataHandlers/noteDataHandler';
import { useAuth } from '../../context/authContext';
import { useUserData } from '../../context/userDataContext';

import './singleNoteCard.css';

const SingleNoteCard = ({ note, setEditNoteData, setShowModal }) => {

  const { title, content, bgColor, isPinned, priority, tag, date, _id } = note;
  const {auth: { token }} = useAuth();
  const { userDataDispatch } = useUserData();

  const callNotePinHandler = e => {
    e.preventDefault();
    notePinHandler(note, token, userDataDispatch);
  };

  const editNoteDataHandler = e => {
    e.preventDefault();
    setEditNoteData(note);
    setShowModal(true);
  };

  return (
    <>
      <div className={`note-card ${bgColor}`} key={_id}>
        <div className="note-card__header">
          <h1 className="note-card__title">{title}</h1>
          <div className="note-card__action">
            <i
              className={` ${isPinned ? 'bi bi-x-lg' : 'bi bi-pin-angle-fill'}`}
              onClick={callNotePinHandler}
            ></i>
          </div>
        </div>
        <div className="note-card__content"> {HtmlParser(content)}</div>
        <div className="note-card__footer">
          <div className="note-card__info">
            <span
              className={`note-card__priority note-card__priority--${priority.toLowerCase()}`}
            >
              {priority}
            </span>

            {tag ? <span className="note-card__tag">{tag}</span> : null}
            <span className="note-card__date">{date}</span>
          </div>
          <div className="note-card__action">
            <i
              className="bi bi-pencil-square"
              onClick={editNoteDataHandler}
            ></i>
            <i className="bi bi-archive-fill"></i>
            <i className="bi bi-trash3-fill"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export { SingleNoteCard };
