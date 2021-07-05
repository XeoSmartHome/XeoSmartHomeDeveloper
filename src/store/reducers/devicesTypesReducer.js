const initialState = [];

const devicesTypesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DEVICES_TYPES':
            return action.payload
        case 'ADD_DEVICE_TYPE':
            return [...state, action.payload]
        case 'DELETE_DEVICE_TYPE':
            return state.filter((deviceType) => deviceType.id !== action.payload)
        default:
            return state;
    }
};


export default devicesTypesReducer;
