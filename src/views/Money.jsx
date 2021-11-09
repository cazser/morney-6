import React, { useState } from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout'
import NoteSection from 'components/money/NoteSection';
import TagsSection from 'components/money/TagsSection';
import CategorySection from 'components/money/CategorySection';
import NumberPadSection from '../components/money/NumberPadSection';

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;
function Money(){
  const [selected, setSelected] = useState({
    tags:[],
    note:'',
    category: '-',
    amount: 0
  });
  
  return(
    <MyLayout>
      {selected.category}
      <hr/>
      {selected.amount}
    <TagsSection value={selected.tags}
                  onChange={(tags)=>{setSelected({
                    ...selected, tags: tags})}}/>
    <NoteSection  value={selected.note}
                  onChange={(note)=>{
                    setSelected({...selected, note:note})
                  }}
                  />
    <CategorySection value={selected.category}
                      onChange={(category)=>{setSelected({
                        ...selected, category: category})}} />
    <NumberPadSection value={selected.amount}
                      onChange={
                          (amount)=>{
                            setSelected({
                              ...selected,
                              amount:amount
                            })
                          }
                      }
                      onOk={()=>{}}/>
    </MyLayout>
  )
}

export default Money;