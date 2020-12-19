import React, { createContext, useContext, useReducer } from "react"; 

export const stateContext = createContext(); 

export const stateProvider = ({ reducer, initialState, children }) => (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}

    </stateContext.Provider>
    //stateContext.Provider is this data layer where children is like the whole app and is getting pushed into this data layer
    //we are trying to push the user into this data, and we should be able to pull the user from the app no matter where they are in the app

    
); 

export const useStateValue = () => useContext(useStateValue); //this allows us to access the data from above 


