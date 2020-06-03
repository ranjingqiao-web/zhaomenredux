/**
 * npx create-react-app <项目名>  
 *安装地址react  https://www.jianshu.com/p/68e849768d8e
 *  npm add redux   和   npm add react-redux  npm install --save redux-thunk
 * 加动画 npm  add react-transition-group
 * 自定义组件 npm install --save styled-components  
 */

 /***
  * redux 接口数据方法统一管理
  *  
  * 
  */

  /***
   * 
   * 技术胖路由  https://jspang.com/detailed?id=33     https://jspang.com/detailed?id=33#toc21
   */

   /***
    *  可用的时候看 redux-immutable 的讲解视频 https://www.bilibili.com/video/BV1rJ411R7m3?p=21
    *  npm install redux-immutable --save     地址  https://www.cnblogs.com/superlizhao/p/9474859.html
    *  为了保证原来的state不会被修改，我们引入 immutable 库
    *  npm install immutable     
    *  import { fromJS } from 'immutable'
    * 注意： const initState=fromJS({focused:false})
    * 用set()方法改变数据
    * return state.set('focused',true);
    * 用get()方法获取数据
    * mapStateToProps=(state)=>{
    * return {
    * focused:sate.header.get('focused')
    * }
    * }
    */