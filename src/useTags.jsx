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

 return {
		tags: tags,
		setTags: setTags,
		findTag: findTag
	}
 }


 export default useTags