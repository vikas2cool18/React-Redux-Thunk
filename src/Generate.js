import React from 'react'
import { connect } from 'react-redux'
import { setRandom } from './actions/random';

function Generate(props) {

    const genrateRandom = () => {
        const random = Math.round(Math.random() * 100)
        props.dispatch(setRandom(random))
    }

    return (
        <div>
            <h1>Generate number </h1>
            <h1>{props.generatedValue}</h1>
            <button onClick={genrateRandom}>generate</button>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        generatedValue: state.generatedValue
    }
}
export default connect(mapStateToProps)(Generate)