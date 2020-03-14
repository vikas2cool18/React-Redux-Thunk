import React from 'react'
import { addArticle } from '../../actions/article'


class ArticleForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            ispublished: false
        }
    }

    handleChange = (e) => {
        this.setState({ name: e.target.value })
        //console.log(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const article = {
            id:Date().toString(),
            name: this.state.name,
            ispublished: false
        }
        this.props.dispatch(addArticle(article))
    }

    render() {
        return (
            <div>
                <h2>Add article </h2>
                <form action={this.handleSubmit}>
                    <label>Article name
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default ArticleForm