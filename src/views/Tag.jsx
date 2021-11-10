import Button from "components/Button";
import Center from "components/Center";
import LabelWrapper from "components/LabelWrapper";
import Layout from "components/Layout";
import Space from "components/Space";
import { useParams } from "react-router";
import styled from "styled-components";
import useTags from "useTags"
const Topbar = styled.header`
display: flex;
line-height: 20px;
padding: 14px;
justify-content: space-between;
align-items: center;
background: white;
margin-bottom: 8px;
`;



const Tag = ()=>{
	const {findTag, updateTag, deleteTag}= useTags();
	const {id} = useParams()
	const tag = findTag(parseInt(id))
	
	return(
		<Layout>
		<Topbar>
		 <span className="left">&lt;</span>
		 <span>编辑标签</span>
		 <span></span>
		</Topbar>
		{tag? 
		 <LabelWrapper>
		<label>
        	<span>标签名</span>
        	  <input type='text' value={tag.name}
		  		     onChange={(e)=>{updateTag( tag.id, {name: e.target.value})}}
					/>
      		</label>
		</LabelWrapper>
		:
		<Center>tag不存在</Center>
		}
		<Center>
		<Space />
		<Space />
		<Space />
		<Button onClick={()=>{deleteTag(tag.id)}}>删除标签</Button>
		</Center>
		
		
		</Layout>
	)
}

export default Tag