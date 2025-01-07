
import { createRoot } from 'react-dom/client';

import App from './App.jsx'
import "./css/style.css";
import "./css/cartSlyce.css";
import "./css/ShopPro.css"

import 'bootstrap/dist/css/bootstrap.min.css';
// import "react-multi-carousel/lib/styles.css";
import store from './store.jsx';
import {Provider} from "react-redux";

createRoot(document.getElementById('root')).render(
  <Provider  store={store}>
    <App />

  </Provider>
    
)
