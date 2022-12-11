import { useContext, useEffect, createContext, useReducer } from 'react';
import axios from 'axios';
import { dataReducer } from '../reducers/dataReducer';
import { useAuth } from './authContext';

const dataContext = createContext();

const DataContextProvider = ({ children }) => {
  const {
    auth: { token },
  } = useAuth();
  const [state, dataDispatch] = useReducer(dataReducer, {
    priority: '',
    createdTime: '',
    isLoading: true,
    tags: [],
    selectedTags: [],
    reset: false,
    searchFor: '',
  });
/*
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get('/api/notes', {
          headers: { authorization: token },
        });
        dataDispatch({ type: 'GET_DATA' });
        const notesList = response.data.notes.map(note => {
          return { ...note };
        });
        console.log(notesList);
      } catch (err) {
        alert(err.message);
      }
    })();
  }, [token]);
*/
  useEffect(() => {
    (async function () {
      try {
        let response = await axios.get('/api/tags');
        dataDispatch({ type: 'GET_DATA' });
        const tags = response.data.tags;
        dataDispatch({
          type: 'LOAD_DATA',
          payload: { isLoading: false, tags },
        });
      } catch (err) {
        alert(err.message);
      }
    })();
  }, []);

  return (
    <dataContext.Provider value={{ state, dataDispatch }}>
      {children}
    </dataContext.Provider>
  );
};

const useDataContext = () => useContext(dataContext);

export { useDataContext, DataContextProvider };
