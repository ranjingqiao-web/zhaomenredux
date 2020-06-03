import { createStore ,applyMiddleware} from 'redux'

import thunk from 'redux-thunk';
import reducer from './reducer'
 /**
 * 用来把action和reducer关联到一起的
 * 通过createStore 来构建store
 * 通过subscribe 来注册监听
 *  
 */

 
const store = createStore(
    reducer,
    applyMiddleware(thunk))
export default store