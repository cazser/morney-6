import { useEffect, useState } from "react";

const useRecords=()=>{
const [records, setRecords] = useState([])
const addRecord=(record)=>{
	if(record.amount<=0){alert('请输入金额');return false}
	if(record.tagIds.length<1){alert("请选择标签"); return false}
	let newRecord = {...record, createAt:(new Date()).toISOString()}
setRecords([...records, newRecord])
return true;
}
useEffect(()=>{setRecords(JSON.parse(window
	.localStorage.getItem("records") || '[]'))},[])
useEffect(()=>{
window.localStorage.setItem("records", 
JSON.stringify(records))
}, [ records])
return {records, addRecord}
}

export default useRecords;