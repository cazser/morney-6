import { useState } from "react";
const CategorySection=(props)=>{
  const [categoryList] = useState(['-','+'])
  const category= props.value;
  const categoryMap = {'-':"支出", "+":"收入"}
  return (
    <ul>
      {categoryList.map((c)=>{
        return (
          <li className={category===c ? "selected": ''}
             key={c} onClick={()=>{props.onChange(c)}}
          >{categoryMap[c]}</li> 
        )
      })}
     
    </ul>
  )
}


export default CategorySection;