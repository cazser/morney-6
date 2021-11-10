import styled from "styled-components";

const LabelWrapper = styled.section`
background: white;
padding: 0px 16px;font-size: 14px;
>label{
  display: flex;  align-items: center;
  >span{margin-right: 16px;white-space: nowrap;}
  >input{
    display: block;
    
    width: 100%;    height: 44px;
    background: none;    border: none;
  }
}
`;

export default LabelWrapper;