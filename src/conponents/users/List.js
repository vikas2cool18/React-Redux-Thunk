import React from 'react'
import { connect } from 'react-redux'
import { deleteUser } from '../../actions/users'
import { Link } from 'react-router-dom'

function ListUsers(props) {

    const handleClick = (user) => {
        const name = window.prompt('Re enter the name')
        if(name == user.name){
            props.dispatch(deleteUser(user))
        } else {
            alert('Invalid user')
        }
        
    }

    return(
        <div>
            <h2>Listing users : {props.users.length}</h2>
            <table border="2">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>email</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.map((user) => {
                            return(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button onClick={()=> {
                                            handleClick(user)} }>delete</button>
                                        <Link to={`/users/${user.id}`}>Show</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(ListUsers)