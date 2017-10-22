import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import todo from './reducers/todo'
import message from './reducers/messages'

const reducer = combineReducers({ todo, message })

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)
