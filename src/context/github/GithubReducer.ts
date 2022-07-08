import { UserProp } from "@/src/components/users/UsersLists"

type State = {
    users: UserProp[],
    loading: boolean
}

const githubReducer = (state: State, action: any) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state, 
                users: action.payload,
                loading: false
            }
        
        case 'CLEAR_USERS':
            return {
                ...state, 
                users: []
            }
        
        case 'SET_LOADING':
            return {
                ...state, loading: true
            }
        default:
            return state
    }
}

export default githubReducer;