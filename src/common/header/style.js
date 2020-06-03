/**
 * 自定义组件 npm install --save styled-components  
 */
import styled from 'styled-components';
import LOGOPIC from '../../assets/jianshu.png'



export const HeaderWrapper = styled.div`
position:relative;
height:56px;
border-bottom:1px solid #ccc; 
`
/**
 * background-size:contain;  可以让图片居中对齐
 * 
 */
export const Logo = styled.a.attrs({
    href:'/'
})`
position:absolute;
top:0;
left:0;
display:block;
width:100px;
height:56px; 
background:url(${LOGOPIC});
background-size:contain;
`
export const Nav = styled.div `
width:960px;
height:56px; 

margin:0 auto;
background:red;
`

export const NavItem = styled.div `
line-height:56px;
padding :0 15px;
 &.left{
     float:left
 }
 &.right{
    float:right
} `
export const SearchWrapper = styled.div `

.slide-enter{
     transition:all 2s ease-out;
}
.slide-enter-active{
    width:240px
}

.slide-exit{ 

    transition:all  2s ease-out;
}
.slide-exit-active{
    width:160px
}
`
 
/**
 * 不想让元素撑开 就用  box-sizing:border-box;
 * padding:0 20px;
 * box-sizing:border-box;
 */
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
}) `
width:160px;
height:38px;
padding:0 20px;
box-sizing:border-box;
border:none;
margin-top:9px;
outline:none;
border-radius:19px;
background:#ccc;

 &.focuseds{
     width:240px
 } 
&::placeholder{
    font-size:12px;
    color:#fff
}
  `
 
 
/**
 *   使用地址 https://www.jianshu.com/p/c7b8f1625088
 *   <Button>Normal Button</Button>
 *   <Button primary>Primary Button</Button>
 */
export const Button = styled.button`
  min-width: 64px;
  background: ${props => (props.primary ? "blue" : "transparent")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 14px;
  margin: 8px;
  padding: 8px;
  border: ${props => (props.primary ? "none" : `2px solid palevioletred`)};
  border-radius: 3px;
`;
