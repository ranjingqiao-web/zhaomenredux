 import {ACTION_STYPE} from './actions-type'
/***
 * 描述有什么事情发生
 * ChangeUserInfo 是组件中dispatch要调用的方法
 */
export function ChangeUserInfo( data ){ 
  console.log('actiondata',data)

  return {
    type: ACTION_STYPE.change_user_info,
    data: data
  }
}