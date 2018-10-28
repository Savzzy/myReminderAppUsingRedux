import { ADD_REMINDER, GREAT_COURSE } from '../constants'

const reminder = (action) => {
    return{
        text: action.text,
        id : Math.random()
    }
    
}
 const course = (action) => {
     return {
         text:action.text
        
     }
 }


const reminders = (state =[], action) => {
let reminders = null;
    switch (action.type) {
        case ADD_REMINDER:
        reminders = [...state,reminder(action)]
        console.log("reminders as state",reminders);
        return reminders;
        
        
        default:
        return state;
    }
}



export default reminders;