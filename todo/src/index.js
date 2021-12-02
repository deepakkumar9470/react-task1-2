import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store} from './store';
// import { PersistGate } from 'redux-persist/lib/integration/react';




ReactDOM.render(
        <Provider store={store}>
          
            <App />
             
        
        </Provider>
,document.getElementById('root'));


