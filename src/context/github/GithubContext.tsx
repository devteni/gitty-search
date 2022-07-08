import { createContext, useState, useReducer } from "react";
import githubReducer from "./GithubReducer";
import { UserProp } from "@/src/components/users/UsersLists";


type ProviderProp = {
    children?: JSX.Element
}

type ContextProp = {
    users: UserProp[],
    loading: boolean
    searchUsers: (text: string) => void,
    clearUsers: () => void
}

const GithubContext = createContext({} as ContextProp);

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const initialState = {
    users: [],
    loading: false
}

export const GitHubProvider = ({ children }: ProviderProp) => {
    const [state, dispatch] = useReducer(githubReducer, initialState);
    
    const searchUsers = async (text: string) => {
        setLoading();

        const params = new URLSearchParams({ q: text })

        const res = await fetch(`${GITHUB_URL}/search/users?${params}`, { headers: { 
          "Authorization": `token ${GITHUB_TOKEN}`
        }});
        const { items } = await res.json();
    
        dispatch({
            type: 'GET_USERS',
            payload: items
        });
    }

    const clearUsers = () => dispatch({type: 'CLEAR_USERS'});

    const setLoading = () => dispatch({type: 'SET_LOADING'});

    return (
        <GithubContext.Provider value={{
            users: state.users, 
            loading: state.loading,
            searchUsers,
            clearUsers
            }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;