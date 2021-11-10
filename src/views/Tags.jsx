import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useTags from 'useTags'
import Layout from 'components/Layout'
import Button from 'components/Button';
import Center from 'components/Center';
import Space from 'components/Space';
const TagList = styled.ol`
font-size: 16px;
background: white;
>li{
  border-bottom: 1px solid #d5d5d9;
  line-height: 20px;
  margin-left: 16px;
 
  >a{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px 12px 0;
   }
  &.right{
    font-size:20px;
  }
}
`;




function Tags(){
  const {tags, setTags} = useTags();
  return(
    <Layout>
    <TagList>
      {tags.map((tag)=>{
        return(
          <li key={tag.id}>
            <Link to={'/tags/'+tag.id}>
          <span>{tag.name}</span>
          <span className="right">&gt;</span>
          </Link>
          </li>
        )
      })}
    </TagList>
    <Center>
      <Space/>
      <Button>新增标签</Button>
      <Space />
    </Center>
    </Layout>
  )
}

export default Tags;