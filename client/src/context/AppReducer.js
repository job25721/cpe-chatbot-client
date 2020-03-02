export default (state, action) => {
    switch (action.type) {
        case 'CHANGE_MESSAGE_BOX':
            return {
                ...state,
                messageBox: action.payload,
            }
        case 'CLEAR_MESSAGE_BOX':
            return {
                ...state,
                messageBox: ""
            }
        default:
            return state;
    }
}