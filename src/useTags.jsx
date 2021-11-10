 import createId from "lib/createId"
import { useState } from "react"
const defaultTags = [	
	{id:createId(), name:"衣"},
	{id:createId(), name:"食"},
	{id:createId(), name:"住"},
	{id:createId(), name:"行"}
	]
 const useTags=()=>{
 const [tags, setTags]= useState(defaultTags)
const findTag =(id)=> tags.filter((tag)=>{return tag.id === parseInt(id)})[0]
const findTagIndex = (id)=>{
	let result = -1;
	for(let i=0; i<tags.length; i++){
		if(tags[i].id === id){
			result = i;
			break;
		}
	}
	return result

}
const updateTag = (id, obj)=>{
	setTags(tags.map((tag)=>{
		if(tag.id===id){
			return {id:id, name: obj.name}
		}else{
			return tag
		}
	}))
}

const deleteTag =(id)=>{
	setTags(tags.filter((tag)=>{return tag.id!==id}))
}
 return {
		tags: tags,
		setTags: setTags,
		findTag: findTag,
		updateTag: updateTag,
		findTagIndex: findTagIndex,
		deleteTag: deleteTag
	}
 }


 export default useTags