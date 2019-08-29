import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

const Store = createStore(rootReducer,applyMiddleware(thunk))

export default Store