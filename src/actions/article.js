export const deleteArticle = (articleId) => {
    return {
        type: 'DELETE_ARTICLE', payload: articleId
    }
}

export const addArticle = (article) => {
    return{
        type: 'ADD_ARTICLE', payload: article
    }
}