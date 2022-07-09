import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";


type ProviderProp = {
    children?: JSX.Element
}

type ContextProp = {
    alert: { msg: string, type: string }
    setAlert: (msg:string, type: string) => void
}

const AlertContext = createContext({} as ContextProp);

export const AlertProvider = ({ children }: ProviderProp) => {
    const initialState = {
        alert: { msg: "", type: "" }
    }
    const [state, dispatch] = useReducer(alertReducer, initialState);

    const setAlert = (msg:string, type: string) => {
        dispatch({
            type: 'SET_ALERT',
            payload: { msg, type }
        });

        setTimeout(() => {
            dispatch({ type: 'REMOVE_ALERT' })
        }, 3000);
    }
    return (
        <AlertContext.Provider value={{alert: state, setAlert}}>
            {children}
        </AlertContext.Provider>
        )
}

export default AlertContext;