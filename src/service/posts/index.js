import {req} from '../axios.config'


// Private Key
// const headers = {
//     "Authorization": 'Bearer' + localStorage.getItem('token')
// }

// Public API
export const postAPI={
    getALl:async()=>req.get(`/posts`),
    getById:async(id)=>req.get(`/posts/${id}`)
}
