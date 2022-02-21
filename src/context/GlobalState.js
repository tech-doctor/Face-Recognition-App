import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';


//initial state
const initialState = {
    lightMode: true,
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