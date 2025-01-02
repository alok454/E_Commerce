import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { CartStore } from './store/CartStore.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={CartStore}>
    <App />
  </Provider>
)