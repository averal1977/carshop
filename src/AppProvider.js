import { createContext, useReducer, useContext } from "react";

//--------------------------------------------------------
//Context
//--------------------------------------------------------
export const AppContext = createContext();

export const useAppContext = () => {
    return useContext (AppContext);
}


export default function AppProvider ({children}) {
    const [systemcar, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{systemcar, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}


//--------------------------------------------------------
//Reducer
//--------------------------------------------------------

const initialState = {
    cliente:{
        nombres: '', 
        email: '', 
        celular: '', 
        identificacionFiscal: '', 
        tipoid: ''        
    },
    vehiculo:{
        marca: '', 
        modelo: '', 
        placa: '', 
        gasolina: '', 
        defectos: '',   
    },
    servicio:{
        aceite: false,
        frenos: false,
        balanceo: false,
        diagnostico: false,
        electrica: false,
        suspension: false,
    }      
}

const reducer = (state, action) => {
    //console.log(action);
    switch (action.type) {
        case 'ADD_CLIENTE': {
            return {
                ...state, 
                cliente: action.value
            }
        }

        case 'ADD_VEHICULO': {
            return {
                ...state, 
                vehiculo: action.value
            }
        }

        case 'ADD_SERVICIO': {
            return {
                ...state, 
                servicio: action.value
            }
        }

        case 'RESET':
            return {
                ...initialState,
            }

        default:
            return state;
    }
}

