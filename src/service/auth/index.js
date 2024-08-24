import { api } from "../axios.config";

export async function useAuth(userObject) {
    try{
        const res = await api.post(`/auth/login`,  userObject)
        localStorage.setItem('token', res.data.access_token)
        if(res.data.access_token){
            location.href='/'
        }
    }catch(er){
        console.error(er);
    }
}