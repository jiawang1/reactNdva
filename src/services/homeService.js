import {getJson, getContent} from '../utils/commonService';

export const fetchRandom = async (id)=>{
  console.log(`service got info from effect view ${id}`);
  try{
    var json =  await getJson({url: '/test/api'});

    if(json.status === 'success'){
      return getContent(json); 
    }
  }catch(err){
 // incase no http server running,  just for example  
    return await new Promise((res) => setTimeout(res, 1000))
      .then(() => ({number:Math.floor(Math.random() * 100)}));
  }
};