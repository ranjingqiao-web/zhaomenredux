import React, { Component } from 'react'
import {connect} from 'react-redux'
 class HomeB extends Component {
    render() { 
        /**
         * 解构赋值对变量进行优化 
         */
        const { count } =this.props;
        return (
            <div>
             { count}  
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => { 
    /**
     * mapStateToProps  接收数据
     * 获取state里面的数据
     * 必须return
     *  */ 
    return {
        count: state.count
    }
}

export default connect( mapStateToProps )(HomeB);


/**
 * 组件里面循环首先要用 {} 表达式
 */
// {
//     this.props.list.map((item)=>{
//     return <组件 key={item}>{item}</组件>
//     })
// }