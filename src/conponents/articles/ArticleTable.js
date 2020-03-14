import React from 'react'
import { connect } from 'react-redux'
import { deleteArticle } from '../../actions/article'

function ArticleTable(props) {

    const handleRemove = (e) => {
        console.log(e)
        props.dispatch(deleteArticle(e))
    }

    return (
        <div>
            <h1>Article table here: {props.articles.length}</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>published</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.articles.map((article) => {
                            return (
                                <tr key={article.id}>
                                    <td>{article.id}</td>
                                    <td>{article.name}</td>
                                    <td>{article.isPublished ? 'Yes' : 'No'}</td>
                                    <td>
                                        <button onClick={() => {
                                            handleRemove(article.id)
                                        }}>remove</button>
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
        articles: state.articles
    }
}
export default connect(mapStateToProps)(ArticleTable)