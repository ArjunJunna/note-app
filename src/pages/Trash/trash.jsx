import { useUserData } from '../../context/userDataContext';
import { SingleNoteCard } from '../../components/SingleNoteCard/singleNoteCard';

const Trash = () => {
  const {userData: { trashData }} = useUserData();
  return (
    <>
      {trashData.length ? (
        <section>
          {trashData.length ? (
            <h1 className="info">Trash - {trashData.length}</h1>
          ) : null}
          <div className="main__container-content">
            {trashData.map(note => (
              <SingleNoteCard note={note} key={note._id} />
            ))}
          </div>
        </section>
      ) : (
        <h1 className="fall-back-text">You haven't added any notes in Trash...</h1>
      )}
    </>
  );
};

export default Trash;
