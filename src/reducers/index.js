import { combineReducers } from 'redux'
import appReducer from './appreducer'
import playerReducer from './playerreducer'

const rootReducer = combineReducers({
    appReducer,
    playerReducer
})

export default rootReducer