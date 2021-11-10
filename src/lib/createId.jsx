let id =Math.max( parseInt(window.localStorage.getItem('idMax') || '5'), 5);
const createId = ()=>{
id+=1;
window.localStorage.setItem('idMax', id.toString())
return id;
}


export default createId;