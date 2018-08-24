const initialState = {
    data: null
}
  
const OwnerReducer = (state = initialState, action) => {
    if (action.type === 'OWNER_LOGGED_IN'){
        console.log('track_1');
        console.log(action);
        return Object.assign({}, state, {
            data: action.payload
        })
    }
    if (action.type === 'CHANGE_USER_STATE') {
        let mem = state;
        const mindex = 0;
        mem.data.userData.forEach((key, index) => {
            if(key.id === action.data.id) mindex = index;
        })
        mem.data.userData[mindex].userState = action.data.status;
        console.log('mem');
        console.log(mem);
        return {...state, ...mem };
    }
    if (action.type === 'CHANGE_USER_TYPE') {
        let mem = state;
        const mindex = 0;
        mem.data.userData.forEach((key, index) => {
            if(key.id === action.data.id) mindex = index;
        })
        mem.data.userData[mindex].userType = action.data.type;
        console.log('type');
        console.log(mem);
        return {...state, ...mem };
    }

    return state
}

export default OwnerReducer
  