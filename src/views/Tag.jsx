import { useParams } from "react-router";
import useTags from "useTags"

const Tag = ()=>{
	const {findTag}= useTags();
	const {id} = useParams()
	const tag = findTag(parseInt(id))
	return(
		<div>
			{tag.name}
		</div>
	)
}

export default Tag