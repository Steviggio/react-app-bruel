import React from 'react'
import ReactDOM from 'react-dom/client'
import Routing from './config/Routing/Routing'
import './index.css'
import store from './lib/store'
import { Provider } from 'react-redux'
// import { AuthProvider } from 'react-auth-kit'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>,
)
