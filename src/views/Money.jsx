import React, { useState } from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout'
import NoteSection from 'components/money/NoteSection';
import TagsSection from 'components/money/TagsSection';
import CategorySection from 'components/money/CategorySection';
import NumberPadSection from '../components/money/NumberPadSection';
import useRecords from 'useRecords';

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;
const defaultFormData={
   tagIds:[],
    note:'',
    category: '-',
    amount: 0
}
function Money(){
  const [selected, setSelected] = useState(defaultFormData);
  const {addRecord} = useRecords()
  const onChange=( obj)=>{
      setSelected({...selected, ...obj})
  }
  const submit=()=>{
  
 if( addRecord(selected)){
  alert("保存成功")
 }
  setSelected(defaultFormData)
  }
  return(
    <MyLayout>
     
    <TagsSection value={selected.tagIds}
                  onChange={(tagIds)=>{onChange({tagIds})}}
    />
    <NoteSection  value={selected.note}
                  onChange={(note)=>{onChange({note})}}
    />
    <CategorySection value={selected.category}
                      onChange={(category)=>{onChange({category})}} 
    />
    <NumberPadSection value={selected.amount}
                      onChange={(amount)=>{onChange({amount})}}
                      onOk={submit}/>
    </MyLayout>
  )
}

export default Money;