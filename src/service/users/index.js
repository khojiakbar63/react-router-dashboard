import {api} from '../axios.config'



export async function getUsers(){
    try{
       const res = await api.get('/users')
        return res.data
    }catch(err){
        console.log(err);
    }
}

export async function getUsersById(id){
    try{
       const res = await api.get(`/users/${id}`)
        return res.data
    }catch(err){
        console.log(err);
    }
}