const initialState = {
    users: [
        {id: 1, name: 'Adam Yi', email: 'adam@test.com', phone: '123-1234'},
        {id: 2, name: 'steve Yi', email: 'steve@test.com', phone: '123-1234'},
        {id: 3, name: 'dave Yi', email: 'dave@test.com', phone: '123-1234'}
    ],
    user: {}
}


const contactReducer = (state  = initialState, action) => {
    switch(action.type){
        case 'GET_CONTACTS':
            return {
                ...state
            }
        case 'ADD_CONTACT':
            return state;
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