

const initialState = {


    greeting: "Greetings Dude"

}

const SAY_HELLO = "SAY_HELLO"

export function sayHello(greeting){
    return{
        type: SAY_HELLO,
        payload: greeting,
    }
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case SAY_HELLO:
            console.log(state) 
            return Object.assign({}, state, {greeting: action.payload});
        default:
            return state;    
    }
    
}