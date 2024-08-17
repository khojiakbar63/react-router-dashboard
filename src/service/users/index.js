import {api} from '../axios.config'



export async function getUsers(){
    try{
       const res = await api.get('/users')
        return res.data
    }catch(e){
        console.log(e);
    }
}

export async function getUsersById(id){
    try{
       const res = await api.get(`/users/${id}`)
        return res.data
    }catch(e){
        console.log(e);
    }
}