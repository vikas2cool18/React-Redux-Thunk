import React from 'react'
import { connect } from 'react-redux'
import ArticleTable from './ArticleTable'
import ArticleForm from './Form'


function ArticleList(props) {
    // console.log('article list')
    // console.log(props)
    return (
        <div>
            <h1>article listing : {props.articles.length}  </h1>
            <ArticleTable />
            <ArticleForm />
        </div>
    )
}

const mapStoreToProps = (state) => {
    return {
        articles: state.articles
    }
}

export default connect(mapStoreToProps)(ArticleList)