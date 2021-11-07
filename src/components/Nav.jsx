import styled from "styled-components"
import {Link} from 'react-router-dom'
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
    display: flex;
    flex-direction: column;
    padding: 4px 0;
    justify-content: center;
    align-items: center;
    >.icon{
      width: 28px;
      height: 28px;
    }
}
}
`

const  Nav=()=>{
  return (
  <NavWrapper>
        <ul>
          <li>
            <svg className="icon">
              <use xlinkHref="#tag" />
            </svg>
            <Link to="/tags">标签页</Link>
          </li>
          <li>
            <svg className="icon">
              <use xlinkHref="#money"/>
              </svg>
            <Link to="/money">记账页</Link>
          </li>
          <li>
            <svg className="icon">
              <use xlinkHref="#chart"/>
              </svg>
            <Link to="/statistics">统计页</Link>
          </li>
        </ul>
  </NavWrapper>
     
  )
}
export default Nav;