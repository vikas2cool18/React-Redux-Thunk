import React from 'react'
import {connect } from 'react-redux'
import {increment} from './actions/count'

function Button(props) {
    return (
        <button onClick={() => {
            props.dispatch(increment())
        }}>Increment</button>
    )
}
export default connect()(Button)