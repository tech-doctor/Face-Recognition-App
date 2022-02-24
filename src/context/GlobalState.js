import React, {createContext, useReducer} from 'react';
import storage from 'local-storage-fallback';
import AppReducer from './AppReducer';


const getInitialTheme = () => {
    //check if there is a theme in local storage
    const savedTheme = storage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme).lightMode : {lightMode: true};
  }

//initial state
const initialState = {
    lightMode: getInitialTheme(),
}


//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);
   
   //Actions
    const  toggleTheme = () => {
        dispatch({
            type: 'TOGGLE_THEME',   
        })
    }




   return (<GlobalContext.Provider value={{
       lightMode: state.lightMode,
       toggleTheme
   }}>
        {children}
   </GlobalContext.Provider>)
    
}

