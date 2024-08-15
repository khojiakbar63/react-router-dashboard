import './style.scss'
import {Container} from '@layouts'
import { SiApacheparquet } from "react-icons/si";

const index = () => {
    return (
        <header className='bg-indigo-600'>
            <Container className="container-fluid">
                <nav className='h-[50px] flex justify-between items-center'>
                    <a href="#" className='text-white font-bold flex items-center gap-x-2'><SiApacheparquet className='text-2xl'/><span>DASHBOARD</span></a>
                    <a href="#" className='text-white '>Profile</a>
                </nav>

            </Container>
        </header>
    );
};

export default index;