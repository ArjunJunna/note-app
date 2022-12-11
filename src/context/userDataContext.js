import { createContext, useContext, useReducer, useEffect } from 'react';
import { userDataReducer } from '../reducers/userDataReducer';
import { useAuth } from './authContext';
import { getNotesHandler } from '../utilities/DataHandlers/noteDataHandler';
import { getArchivesHandler } from '../utilities/DataHandlers/archiveDataHandler';

const userDataContext = createContext({});

function UserDataProvider({ children }) {
  const {
    auth: { token, isAuthorized },
  } = useAuth();

  const [userData, userDataDispatch] = useReducer(userDataReducer, {
    notesData: [],
    archivesData: [],
    trashData: [],
    isLoading: false,
  });
  
  useEffect(() => {
    if (isAuthorized) {
      getNotesHandler(token, userDataDispatch);
      getArchivesHandler(token, userDataDispatch);
    }
  }, [isAuthorized, token]);
  return (
    <userDataContext.Provider value={{ userData, userDataDispatch }}>
      {children}
    </userDataContext.Provider>
  );
}

const useUserData = () => useContext(userDataContext);

export { UserDataProvider, useUserData };
