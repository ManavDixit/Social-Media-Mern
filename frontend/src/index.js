import reactDom from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {createStore,compose,applyMiddleware} from 'redux';
import Thunk from 'redux-thunk'
import Reducers from './Reducers';
const store=createStore(Reducers,compose(applyMiddleware(Thunk)))
const container=document.getElementById('root');
const root=reactDom.createRoot(container);
root.render(
<Provider store={store}><App/></Provider>);