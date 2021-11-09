import { useRef, useState } from "react";
import styled from "styled-components";
const Wrapper = styled.section`
background: #f5f5f5;
padding: 0px 16px;font-size: 14px;
>label{
  display: flex;  align-items: center;
  >span{margin-right: 16px;white-space: nowrap;}
  >input{
    display: block;
    width: 100%;    height: 72px;
    background: none;    border: none;
  }
}
`;

const NoteSection = (props)=>{
  const note=props.value;
  const refInput = useRef(null);
  const onBlur = ()=>{
    if(refInput.current!==null){
      props.onChange(refInput.current.value);
    }
  }
  return(
    <Wrapper>
      <label>
        <span>备注</span>
        <input type='text' placeholder="在这里添加备注"
        defaultvalue={note}
        ref={refInput}
        onBlur={onBlur}
        />
      </label>
    
    </Wrapper>
  )
}
export default NoteSection;