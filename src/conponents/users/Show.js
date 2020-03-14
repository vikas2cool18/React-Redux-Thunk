import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectuser } from '../../selectors/users'
import { resetUserPosts, startgetUserPosts } from '../../actions/users'

class UserShow extends React.Component {

    componentWillUnmount() {
        this.props.dispatch(resetUserPosts())
    }

    render() {
        const id = this.props.match.params.id
        console.log(this.props)
        if (this.props.user) {
            if (this.props.posts.length == 0) {
                this.props.dispatch(startgetUserPosts(id))
            }
        }
        return (
            <div>
                <h2>User show </h2>
                {
                    this.props.user ? (
                        <div>
                            <h3>{this.props.user.name}</h3>
                            <p>{this.props.user.email}</p>

                            <h2>User Posts</h2>
                            <ul>
                                {
                                    this.props.posts.map(post => {
                                        return <li key={post.id}>{post.title}</li>
                                    })
                                }
                            </ul>
                        </div>
                    ) : (
                            <div>
                                <p> Loading..</p>
                            </div>
                        )
                }
                <Link to="/users">Back</Link>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        user: selectuser(state.users, id),
        posts: state.posts
    }
}

export default connect(mapStateToProps)(UserShow)