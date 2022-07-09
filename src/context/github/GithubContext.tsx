import { createContext, Dispatch, useReducer } from "react";
import githubReducer from "./GithubReducer";
import { UserProp } from "src/components/users/UsersLists";


type ProviderProp = {
    children?: JSX.Element
}

type ContextProp = {
    users: UserProp[],
    user: any,
    dispatch: Dispatch<any>,
    repos: any[],
    loading: boolean
}

const GithubContext = createContext({} as ContextProp);

export const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
}

export const GitHubProvider = ({ children }: ProviderProp) => {
    const [state, dispatch] = useReducer(githubReducer, initialState);

    return (
        <GithubContext.Provider value={{
            ...state,
            dispatch
            }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;