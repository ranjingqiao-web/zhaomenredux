import React, { Component } from 'react'
import {connect} from 'react-redux'
import './home.css'
/**
 * 1:导入connect
 * 
 */ 

 class Home extends Component {
     state ={
         isShow:false
     }
    handeClick=()=>{
        let {isShow} =this.state;
        this.setState({
            isShow :!isShow
        })
        /**
         * 发送action 请求
         */
        this.props.dispatch1()
       console.log('HOME;;',this.props)
    }
    render() {
        return (
            <div>
                <button className="clickButtom" onClick={this.handeClick}>{this.state.isShow ?'点我':'点我lo' }  </button>
                
            </div>
        )
    }
}
const changeList=(string_type,data)=>({
    type:string_type,
    data
})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            /***
             * 利用dispatch 发送一个action
             * 传递action 对象 我们要定义一个 type 属性
             */
            // dispatch({  type:'changeUserInfo'  })
            dispatch(changeList('changeUserInfo',{a:1,b:2}))
        }
    }
}
export default connect(null, mapDispatchToProps)(Home)

 