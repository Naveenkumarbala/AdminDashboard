import { createContext, useReducer } from 'react';
import DarkModeReducer from './darkModeReducer';
// In our state if it is false it gives dark,if it is true it gives light
const INITIAL_STATE = {
    darkMode: false,
}
export const DarkModeContext = createContext(INITIAL_STATE)
//To reach the data every where we use the contextProvider
//children will be our application
export const DarkModeContextProvider = ({ children })=>{
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE)
    return <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>{children}</DarkModeContext.Provider>
}