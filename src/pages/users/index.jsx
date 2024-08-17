import { useState, useEffect } from 'react';
import { getUsers } from '../../service/users';
import { Loader } from '@components/ui';
import './style.scss'


const index = () => {
    const [users, setUsers] = useState([])
    const [load, setLoader] = useState(true)

    console.log(users);
    useEffect(()=>{
        getUsers().then(res=>setUsers(res))
        setLoader(false)
    },[])

if(load){
    return <Loader/>
}

    return (
        <div>
            <ul>
                {
                    users.map(user=>(
                        <li key={user.id} className='p-2 m-2 border rounded bg-indigo-500 text-white'>
                            <strong>ID: {user.id}</strong>
                            <h3>Username: {user.username}</h3>
                            <p>Email: {user.email}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default index;