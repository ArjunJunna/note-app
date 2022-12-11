import React from 'react';
import { NoteModal } from '../../components/NoteModal/noteModal';
import { useState } from 'react';
import { SingleNoteCard } from '../../components/SingleNoteCard/singleNoteCard';
import { useDataContext } from '../../context/dataContext';
import { useUserData } from '../../context/userDataContext';
import '../../utilities/css/util.css';
import './note.css';
import {
  filterBySelectedTags,
  filterDataByPriority,
  filterDataByTime,
  filterBySearch,
} from '../../utilities/js/filterFunctions';

const Notes = () => {
  const [showModal, setShowModal] = useState(false);
  const [editNoteData, setEditNoteData] = useState(null);
  const {
    state: { createdTime, priority, isLoading, selectedTags, searchFor },
  } = useDataContext();
  const {
    userData: { notesData },
  } = useUserData();

  const pinnedNotes = notesData.filter(notes => notes.isPinned);
  const unPinnedNotes = notesData.filter(notes => !notes.isPinned);

  const filteredByTags = filterBySelectedTags(unPinnedNotes, selectedTags);
   const filteredByPriority = filterDataByPriority(filteredByTags, priority);
   const filteredByTime = filterDataByTime(filteredByPriority, createdTime);
   const finalUnPinnedNotes = filterBySearch(filteredByTime, searchFor);
  
  return (
    <>
      <button
        className="btn note__btn-fixed"
        onClick={() => setShowModal(prev => !prev)}
      >
        <i className="bi bi-plus-lg"></i>
        Add Note
      </button>
      <div className="note-container">
        {isLoading ? (
          <img
            className="loader--image"
            src="https://cutewallpaper.org/21/loading-gif-transparent-background/HopeWell.gif"
            alt="loader"
          />
        ) : (
          <>
            {notesData.length ? (
              <section>
                {pinnedNotes.length ? (
                  <h1 className="info">Pinned Notes - {pinnedNotes.length}</h1>
                ) : null}
                <div className="main__container-content">
                  {pinnedNotes.map(note => (
                    <SingleNoteCard
                      note={note}
                      key={note._id}
                      setShowModal={setShowModal}
                      editNoteData={editNoteData}
                      setEditNoteData={setEditNoteData}
                    />
                  ))}
                </div>
                {finalUnPinnedNotes.length ? (
                  <h1 className="info">
                    My Notes - {finalUnPinnedNotes.length}
                  </h1>
                ) : null}
                <div className="main__container-content">
                  {finalUnPinnedNotes.map(note => (
                    <SingleNoteCard
                      note={note}
                      key={note._id}
                      setShowModal={setShowModal}
                      editNoteData={editNoteData}
                      setEditNoteData={setEditNoteData}
                    />
                  ))}
                </div>
              </section>
            ) : (
              <h1 className="fall-back-text">You haven't added any notes...</h1>
            )}
          </>
        )}
      </div>

      {showModal && (
        <NoteModal
          setShowModal={setShowModal}
          editNoteData={editNoteData}
          setEditNoteData={setEditNoteData}
        />
      )}
    </>
  );
};

export default Notes;
