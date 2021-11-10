import createId from "lib/createId";
import { useState } from "react";
import styled from "styled-components";
import useTags from "useTags";

const Wrapper = styled.section`
background: #FFFFFF;padding:12px 16px;
flex-grow:1;display: flex; flex-direction: column;
justify-content: flex-end; align-items: flex-start;
>ol{
margin: 0 -12px;
>li{
  background:#D9D9D9;border-radius: 18px;
  display: inline-block;  padding: 3px 18px;
  font-size: 14px;  margin: 8px 12px;
  &.selected{
    background: #f60;
  }
}
}

>button{
  background: none;  border: none;
  border-bottom: 1px solid #333;
  color: #666;  padding: 2px 4px;
  margin-top:8px;
}
`;
const TagsSection = (props)=>{
  const {tags, setTags, addTag}= useTags()
  const selectedTagIds = props.value
 

  const onToggleTag = (tagId)=>{
    const index = selectedTagIds.indexOf(tagId);
    if(index>=0){
      props.onChange( selectedTagIds.filter((t)=> t!==tagId))
    }else{
      props.onChange([...selectedTagIds, tagId])
    }
  }

  const getClass=(tagId)=>{return selectedTagIds.indexOf(tagId)>=0? 'selected': ''}
  return (
    <Wrapper>
       <ol>
        {tags.map((tag)=>
        <li key={tag.id} onClick={()=>{onToggleTag(tag.id)}}
        className={getClass(tag.id)}
        >{tag.name}</li>
        )}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}
export default TagsSection;