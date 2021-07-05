const initialState = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: ''
};

const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_INFO':
            return action.payload;
        case 'UPDATE_USER_INFO':
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default userInfoReducer;