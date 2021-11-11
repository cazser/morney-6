import CategorySection from 'components/money/CategorySection';
import React, { useState } from 'react'
import styled from 'styled-components';
import WhiteWrapper from 'components/WhiteWrapper';
import Layout from '../components/Layout'
import useRecords from 'useRecords';
import day from 'dayjs'
import useTags from 'useTags';
const Item = styled.div`
display: flex;
background: white;
font-size: 18px;
line-height: 20px;
padding: 10px 16px;
justify-content: space-between;
>.note{
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
`;

function Statistics(){
  const [category, setCategory]= useState('-')
  const {records} = useRecords();
  const {getName} = useTags();
  return(
  <Layout>
    
    <WhiteWrapper>
    <CategorySection value={category} onChange={(value)=>{setCategory(value)}}/>
    </WhiteWrapper>
    <div>
      
      {records.map((r)=>{
        return (
        <Item>
          <div className="tags"> 
          {r.tagIds.map(tagId=><span>{getName(tagId)}</span>)}
          </div>
         {r.note && <div className="note">{r.note}</div>}
          
          <div className="amount">
           ￥{r.amount}
          </div>
        
        {/*day(r.createAt).format('YYYY年MM月DD日')*/}
        </Item>
        
        )
      })}
      
    </div>
    </Layout>
  )
}


export default Statistics;
