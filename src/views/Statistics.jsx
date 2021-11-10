import CategorySection from 'components/money/CategorySection';
import React, { useState } from 'react'
import styled from 'styled-components';
import WhiteWrapper from 'components/WhiteWrapper';
import Layout from '../components/Layout'
import useRecords from 'useRecords';
import day from 'dayjs'
function Statistics(){
  const [category, setCategory]= useState('-')
  const {records} = useRecords();
  return(
  <Layout>
    
    <WhiteWrapper>
    <CategorySection value={category} onChange={(value)=>{setCategory(value)}}/>
    </WhiteWrapper>
    <div>
      
      {records.map((r)=>{
        return <div>{r.amount}</div>
      })}
      
    </div>
    </Layout>
  )
}


export default Statistics;
