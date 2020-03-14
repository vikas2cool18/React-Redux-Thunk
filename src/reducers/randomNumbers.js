const randomNumbersInitialValue = {
    random: '',
    numbers: []
}

const randomNumbersReducer = (state = randomNumbersInitialValue, action) => {
    switch(action.type) {
        case 'GENERATE' : {
            return {
                random: action.payload,
                numbers: state.numbers.concat(action.payload)
            }
        }

        default: {
            return {...state}
        }
    }
}

export default randomNumbersReducer