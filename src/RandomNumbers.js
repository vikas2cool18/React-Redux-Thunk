import React from 'react'
import { connect } from 'react-redux'
import { generate } from './actions/randomNumbers'

function RandomNumbers(props) {

    console.log('in render ')
    console.log(props)

    const handleCLick = () => {
        const random = Math.round(Math.random() * 100 )
        props.dispatch(generate(random))
    }

    return(
        <div>
            <h1>
                Random Number - {props.randomNumbers.random}
            </h1>
            <button onClick={handleCLick}>generate</button>
            <ul>
                {
                    props.randomNumbers.numbers.map((n, i) => {
                        return <li key={i}>{n}</li>
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('in RandomNumbers')
    console.log(state)
    return {
        randomNumbers: state.randomNumbers
    }
}

export default connect(mapStateToProps)(RandomNumbers)