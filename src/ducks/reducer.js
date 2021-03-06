const initialState = {
    username:'',
    id:null,
    runs:0
}

const GET_USER = 'GET_USER';

export function getUser(userObj){
    return{
        type: GET_USER,
        payload:userObj
    }
}

export default function reducer(state=initialState,action){
    const {type,payload} = action
    switch(type){
        case GET_USER:
            return{...state, username:payload.username, id:payload.id, runs:payload.runs,}
        default:
            return state;
    }
}