import Button from "components/Button";
import Layout from "components/Layout";
import { useParams } from "react-router";
import useTags from "useTags"

const Tag = ()=>{
	const {findTag}= useTags();
	const {id} = useParams()
	const tag = findTag(parseInt(id))
	return(
		<Layout>
		<header>
		 <span className="left">&lt;</span>
		 <span>编辑标签</span>
		</header>
		<div>
			{tag.name}
		</div>
		 <label>
        	<span>标签名</span>
        	  <input type='text' placeholder="标签名"/>
      		</label>
		<div>
			<Button>删除标签</Button>
		</div>
		
		</Layout>
	)
}

export default Tag