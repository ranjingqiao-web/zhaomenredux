import storeState from './state'
import { ACTION_STYPE } from './actions-type'

/***
 * 响应发送过来的action 
 * 函数接收两个参数。第一个是初始化state，第二个是发送过来的action
 * 必须要 return 返回值，更新store里面的数据
 */
 
// export default function Store( state = storeState, actions ){ 
//      console.log('reducer',ACTION_STYPE.change_user_info)


//     switch( actions.type ){
//         case ACTION_STYPE.change_user_info:
//             return { count:state.count+1  }
//         default:
//             return state
//     }
// }


export default function Store(state = storeState,action) {
    console.log('reducepayload', state)
    console.log('payload', action)
    if (action.type === ACTION_STYPE.change_user_info) {
        let newState = state.count + 1;
        /**
         * ...state 结构化
         *  count 是state里面的变量
         */
        return { ...state, count: newState }
    } else {
        return state
    }


}