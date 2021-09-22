import rootReducer from './Reducer/rootReducer';


import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'


//Use 'redux-logger' only in development
const middlewares = [thunk];
//if (process.env.NODE_ENV === `development`) {
  const { createLogger } = require(`redux-logger`);
  const logger = createLogger({
      collapsed: true
  })
  middlewares.push(logger);
//}

 const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);
//const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
export default store