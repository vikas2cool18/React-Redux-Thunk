const generatedValueInitialValue = ''
const randomReducer = (state = generatedValueInitialValue, action) => {
    switch(action.type) {

        case 'GENERATE_RANDOM' : {
            return action.payload
        }

        default: {
            return state
        }
    }
}

export default randomReducer