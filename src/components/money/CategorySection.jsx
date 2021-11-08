import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
font-size: 24px;
>ul{
  display: flex;   background: #c4c4c4;
  >li{
    width: 50%;     padding: 18px 0;
    text-align: center;    position: relative;
    &.selected::after{
      content:"";      display: block;
      height: 3px;      background:#333;
      position: absolute;      bottom: 0;
      width: 100%;      left:0;
    }
  }
}
`;

const CategorySection=()=>{
  const [categoryList] = useState(['-','+'])
  const [category, setCategory] = useState('-');
  const categoryMap = {'-':"支出", "+":"收入"}
  return (
    <Wrapper>
    <ul>
      {categoryList.map((c)=>{
        return (
          <li className={category===c ? "selected": ''}
             onClick={()=>{setCategory(c)}}
          >{categoryMap[c]}</li> 
        )
      })}
     
    </ul>
    </Wrapper>
  )
}


export default CategorySection;