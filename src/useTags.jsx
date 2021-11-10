 import createId from "lib/createId"
import { useEffect, useState } from "react"
const defaultTags = [	
	{id:1, name:"衣"},
	{id:2, name:"食"},
	{id:3, name:"住"},
	{id:4, name:"行"}
	]
 const useTags=()=>{
 const [tags, setTags]= useState([])
 useEffect(()=>{
	 let localTags =JSON.parse(window.localStorage.getItem("tags") || '[]')
	if(localTags.length===0){
		localTags= defaultTags;
	}
	setTags(localTags)
	}, [])
useEffect(()=>{
	window.localStorage.setItem('tags', JSON.stringify(tags))}, [tags])
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
 const addTag = ()=>{
    const tagName = window.prompt("新标签的名称为？")
    if(tagName!==null && tagName!== ''){
      setTags([...tags, {id:createId(), name:tagName}])
    }
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
const getName= (id)=>{
const tag = tags.filter((t)=>{return t.id===id})[0]
return tag? tag.name: '';
}
 return {
		tags: tags,
		setTags: setTags,
		findTag: findTag,
		updateTag: updateTag,
		findTagIndex: findTagIndex,
		deleteTag: deleteTag,
		addTag: addTag,
		getName: getName
	}
 }


 export default useTags