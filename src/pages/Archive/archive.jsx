import { useUserData } from "../../context/userDataContext";
import { SingleNoteCard } from "../../components/SingleNoteCard/singleNoteCard";

const Archive = () => {
    const {userData: { archivesData }} = useUserData();
  return (
    <>
      {archivesData.length ? (
        <section>
          {archivesData.length ? (
            <h1 className="info">Archives - {archivesData.length}</h1>
          ) : null}
          <div className="main__container-content">
            {archivesData.map(note => (
              <SingleNoteCard note={note} key={note._id} />
            ))}
          </div>
        </section>
      ) : (
        <h1 className="fall-back-text">
          You haven't added any notes in Archive...
        </h1>
      )}
    </>
  );
};

export default Archive;
