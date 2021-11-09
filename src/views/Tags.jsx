import React, { useState } from 'react'
import useTags from 'useTags'
import Layout from '../components/Layout'
function Tags(){
  const {tags, setTags} = useTags();
  return(
    <Layout>
    <div>标签页</div>
    </Layout>
  )
}

export default Tags;