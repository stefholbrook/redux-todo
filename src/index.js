import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

// Need to be able to update app when state object changes - so we create render()
// const render = () => {
//   const state = store.getState()
//
//   ReactDOM.render(
//     <App
//       todos={state.todos}
//       currentTodo={state.currentTodo}
//       changeCurrent={actions.updateCurrent} />,
//     document.getElementById('root')
//   )
// }
// call render so app renders on the initial load
// render()
// subscribe to changes in the store
// store.subscribe(render)

// with Provider:
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
