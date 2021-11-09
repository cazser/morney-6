import React from 'react'
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
  return(
    <MyLayout>
    <TagsSection />
    <NoteSection />
    <CategorySection />
    <NumberPadSection />
    </MyLayout>
  )
}

export default Money;