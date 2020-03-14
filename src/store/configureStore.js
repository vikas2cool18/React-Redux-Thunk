import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import countReducer from '../reducers/count'
import generateReducer from '../reducers/random'
import  randomNumbersReducer from '../reducers/randomNumbers'
import articlesReducer from '../reducers/article'
import usersReducer from '../reducers/user'
import postsReducers from '../reducers/postReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        count: countReducer,
        generatedValue : generateReducer,
        randomNumbers: randomNumbersReducer,
        articles: articlesReducer,
        users: usersReducer,
        posts: postsReducers
    }), applyMiddleware(thunk))

    return store
}

export default configureStore