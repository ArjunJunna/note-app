import { createContext, useContext, useReducer, useEffect } from 'react';
import { userDataReducer } from '../reducers/userDataReducer';
import { useAuth } from './authContext';
import axios from 'axios';
import { getNotesHandler } from '../utilities/DataHandlers/noteDataHandler';

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
/*
  useEffect(() => {
    if (isAuthorized) {
      (async function () {
        try {
          let response = await axios.get('/api/notes', {
            headers: { authorization: token },
          });
          userDataDispatch({ type: 'GET_DATA' });
          userDataDispatch({
            type: 'SET_NOTES',
            payload: response?.data?.notes,
          });
        } catch (error) {
          alert(error.message);
        }
      })();
    }
  }, [isAuthorized, token]);
*/
    useEffect(() => {
      if (isAuthorized) {
        getNotesHandler(token, userDataDispatch);
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
