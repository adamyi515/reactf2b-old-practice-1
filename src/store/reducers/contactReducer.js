const initialState = {
    users: [],
    user: {}
}


const contactReducer = (state  = initialState, action) => {
    switch(action.type){
        case 'GET_CONTACTS':
            return {
                ...state
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case 'DELETE_CONTACT':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        default:
            return state;
    }
}

export default contactReducer;