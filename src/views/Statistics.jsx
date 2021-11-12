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

const Header = styled.h4`
font-size: 18px;
line-height: 20px;
padding: 10px 16px;
`;
function Statistics(){
  const [category, setCategory]= useState('-')
  const {records} = useRecords();
  const {getName} = useTags();
  const hash ={}
  const displayRecords=
     records.filter((r)=>{return r.category === category})
  displayRecords.forEach((r)=>{
    const key = day(r.createAt).format('YYYY年MM月DD日')
    
    if(!(key in hash)){
      hash[key] = []
    }
    hash[key].push(r);
  })

  const array = Object.entries(hash).sort((a,b)=>{
    if(a[0]===b[0]) return 0;
    if(a[0]>b[0]) return -1;
    if(a[0]<b[0]) return 1;
    return 0;
  });
  return(
  <Layout>
    
    <WhiteWrapper>
    <CategorySection value={category} onChange={(value)=>{setCategory(value)}}/>
    </WhiteWrapper>
    <div>
      
      {array.map(([date, records])=>{
       return (
        <div>
          <Header>{date}</Header>
          <div>
          {records.map((r)=>{
        return (
        <Item>
          <div className="tags"> 
          {r.tagIds.map(tagId=><span key={tagId}>{getName(tagId)} </span>)}
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
          </div>
       )})}

        </div>
    </Layout>
  )
}


export default Statistics;
