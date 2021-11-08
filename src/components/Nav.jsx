import Icon from './Icon'
import styled from "styled-components"
import {NavLink} from 'react-router-dom'
import React from 'react'
import x from '../icons/chart.svg'
import y from '../icons/money.svg'
import z from '../icons/tag.svg'
const NavWrapper = styled.nav
`
box-shadow: 0 0 3px rgba(0,0,0,0.25);
line-height: 24px;
>ul{
  display: flex;
  >li{
    width: 33.3%;
    text-align: center;
    >a{
    display: flex;
    flex-direction: column;
    padding: 4px 0;
    justify-content: center;
    align-items: center;
    &.selected{
      color:red;
      fill: red;
    }
    }
    .icon{
      width: 24px;
      height: 24px;
    }
}
}
`

const  Nav=()=>{
  return (
  <NavWrapper>
        <ul>
          <li>
            <NavLink to="/tags" activeClassName="selected">
              <Icon name="tag"/>
              <span>标签页</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/money" activeClassName="selected"> 
            <Icon name="money" />
            <span>记账页</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart" />
            <span>统计页</span>
            </NavLink>
          </li>
        </ul>
  </NavWrapper>
     
  )
}
export default Nav;