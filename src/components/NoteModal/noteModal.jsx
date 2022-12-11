import React from 'react';
import './noteModal.css';
import { RichTextEditor } from '../RichTextEditor/richTextEditor';
import { useState, useRef, useEffect } from 'react';
import dayjs from 'dayjs';
import { useAuth } from '../../context/authContext';
import { useDataContext } from '../../context/dataContext.js';
import { useUserData } from '../../context/userDataContext';
import {
  createNoteHandler,
  editNoteHandler,
} from '../../utilities/DataHandlers/noteDataHandler';

const NoteModal = ({ setShowModal, editNoteData, setEditNoteData }) => {
  const [note, setNote] = useState(
    editNoteData ?? {
      title: '',
      content: '',
      bgColor: '',
      colorInRgb:'',
      isPinned: false,
      priority: 'Low',
      tag: '',
      date: dayjs().format('HH:mm - DD/MM/YYYY'),
    }
  );

   const {state: { tags },dataDispatch} = useDataContext();

   console.log(note);
  const [show, setShow] = useState(false);
  const [priority, setPriority] = useState(false);
  const [showTags,setShowTags]=useState(false);

  const titleRef = useRef();

  const { userDataDispatch } = useUserData();
  const {
    auth: { token },
  } = useAuth();

  const colorData = [
    {
      id: 1,
      color: 'white',
      backgroundColor: 'rgb(233, 236, 244)',
    },
    {
      id: 2,
      color: 'pink',
      backgroundColor: 'rgb(239, 145, 161)',
    },
    {
      id: 3,
      color: 'orange',
      backgroundColor: 'rgb(254, 176, 95)',
    },
    {
      id: 4,
      color: 'blue',
      backgroundColor: 'rgb(210, 223, 255)',
    },
    {
      id: 5,
      color: 'green',
      backgroundColor: 'rgb(217, 239, 130)',
    },
  ];

  const inputHandler = e => {
    const { id, value } = e.target;
    setNote(prev => ({ ...prev, [id]: value }));
  };
  const callNoteHandler = () => {
    editNoteData
      ? editNoteHandler(note, token, userDataDispatch)
      : createNoteHandler(note, token, userDataDispatch);
    setShowModal(false);
  };
const buttonDisabled = !note.title && note.content === '<p></p>';
  return (
    <>
      <div className="modal__container">
        <div className="modal">
          <div className="modal-header">
            <input
              type="text"
              className="modal-input"
              placeholder="Title"
              id="title"
              value={note.title}
              style={{ backgroundColor: note.colorInRgb }}
              ref={titleRef}
              onChange={inputHandler}
            />
          </div>
          <div className="modal-content">
            <RichTextEditor
              note={note}
              setNote={setNote}
              className={note.bgColor}
            />
          </div>
          <div
            className="modal-footer"
            style={{ backgroundColor: note.colorInRgb }}
          >
            <div className="modal-options">
              <i
                className="bi bi-palette-fill"
                onClick={() => setShow(prev => !prev)}
              ></i>
              <i
                className="bi bi-bar-chart-fill"
                onClick={() => setPriority(prev => !prev)}
              ></i>
              <i
                className="bi bi-tags-fill"
                onClick={() => setShowTags(prev => !prev)}
              ></i>
            </div>
            <div className="modal-actions">
              <button className="btn-line" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button
                type="submit"
                className={`btn-modal ${
                  buttonDisabled ? 'primary-disabled' : null
                }`}
                onClick={callNoteHandler}
                style={{
                  cursor: buttonDisabled ? 'not-allowed' : 'pointer',
                }}
                disabled={!note.title}
              >
                {editNoteData ? 'Save' : 'Create'}
              </button>
            </div>
            {priority ? (
              <div className="priority-options input-group">
                <label>
                  <input
                    type="radio"
                    name="priority"
                    value="Low"
                    id="priority"
                    onChange={inputHandler}
                  />
                  Low
                </label>
                <label>
                  <input
                    type="radio"
                    name="priority"
                    value="Medium"
                    className="mr"
                    id="priority"
                    onChange={inputHandler}
                  />
                  Medium
                </label>
                <label>
                  <input
                    type="radio"
                    name="priority"
                    value="High"
                    id="priority"
                    onChange={inputHandler}
                  />
                  High
                </label>
              </div>
            ) : null}
            {showTags ? (
              <div className="tag-options">
                {tags.map((tag, id) => {
                  return (
                    <div>
                      <label key={id} htmlFor={tag._id}>
                        <input
                          type="radio"
                          name="tag"
                          value={tag.tagTitle}
                          id="tag"
                          onChange={inputHandler}
                        />
                        {tag.tagTitle}
                      </label>
                    </div>
                  );
                })}
              </div>
            ) : null}
            {show ? (
              <div className="color-pallete">
                {colorData.map(colors => {
                  return (
                    <button
                      key={colors.id}
                      type="button"
                      className="btn-color"
                      style={{ backgroundColor: colors.backgroundColor }}
                      onClick={() => {
                        setNote({
                          ...note,
                          bgColor: colors.color,
                          colorInRgb: colors.backgroundColor,
                        });
                      }}
                    ></button>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export { NoteModal };
