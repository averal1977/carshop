import { createContext, useContext, useReducer } from "react";

//--------------------------------------------------------
//Context
//--------------------------------------------------------

export const AppContextUi = createContext({});


export const AppProviderUi = ({ children }) => {
    const [menu, dispatch] = useReducer(reducerui, initialStateui);

    return (
        <AppContextUi.Provider value={{ menu, dispatch }}>
            {children}
        </AppContextUi.Provider>
    )
}

export const useAppContextUi = () => {
    return useContext (AppContextUi);
}

//--------------------------------------------------------
//Reducer
//--------------------------------------------------------
export const initialStateui = {
    component: 1
}


export const reducerui = (state = initialStateui, action) => {
    switch (action.type) {
        case 'setForm':
            return {
                ...state,
                component: action.value
            }
        default:
            return state;
    }

}
