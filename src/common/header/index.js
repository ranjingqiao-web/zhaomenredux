import React, { Component } from 'react'
import  { CSSTransition } from 'react-transition-group'
 
import { HeaderWrapper ,Logo,Nav,NavItem,NavSearch,
  SearchWrapper,
} from './style'
  class Header  extends Component {

    constructor(props){
        super( props)
        this.state={
            focused:false
          }
         
    }
      
    render() {
        return (
            <HeaderWrapper>
                 <Logo></Logo>
                 <Nav>
                     <NavItem className= 'left'>首页</NavItem>
                     <NavItem className= 'left'>App下载</NavItem>
                     <NavItem className= 'right'>Aa</NavItem>
                     <NavItem className= 'right'>登录</NavItem>
                    
                        <SearchWrapper  >
                        {/* 
                        要加s
                        classNames */}
                        <CSSTransition
                                in={this.state.focused}
                                timeout={2000} 
                                classNames= 'slide' 
                                > 
                        <NavSearch
                          className={this.state.focused ? 'focuseds':''}
                          onFocus={this.handInputFocus}
                          onBlur={this.handInputBlur}
                        ></NavSearch>
                         </CSSTransition>
                       </SearchWrapper>
                     
                      
                 </Nav>
            </HeaderWrapper>
        )
    }

    handInputFocus=()=>{
        console.log('8888')
        this.setState({
            focused:true
        })
    }
    handInputBlur=()=>{
        console.log('9999')
        this.setState({
            focused:false
        })
    }
}
export default   Header;