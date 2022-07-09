
type State = {
    alert: { msg: string, type: string}
}

const alertReducer = (state: State, action: any) => {
    switch (action.type) {
        case 'SET_ALERT':
            return action.payload;
        case 'REMOVE_ALERT':
            return { msg: "", type: "" }
        default:
            return state
    }
}

export default alertReducer;