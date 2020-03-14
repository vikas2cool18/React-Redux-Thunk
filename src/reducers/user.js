 const usersInitialValue = [
//     {id: 1, name: 'suresh', email: 'suresh@gmail.com'}, 
//     {id: 2, name: 'sagar', email: 'sagar@gmail.com'},
//     {id: 3, name: 'deepak', email: 'depak@gmail.com'}
]

const usersReducer = (state = usersInitialValue, action) =>{

    switch(action.type) {

        case 'DELETE_USER' : {
            return state.filter(user => user.id !== action.payload.id)
        }

        case 'SET_USERS' : {
            return [...action.payload]
        }

        default: {
            return [...state]
        }
    }
}


export default usersReducer