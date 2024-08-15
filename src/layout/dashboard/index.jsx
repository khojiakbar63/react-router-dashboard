import './style.scss'
import { Header, Section, Aside, Footer } from '../../components/layouts';
import {Outlet} from 'react-router-dom';

const index = () => {
    return (
        <div>
            <Header/>

            <Section className='flex'>
                <Aside/>
                <Section className='p-2'>
                    <div className='border border-indigo-400 border-dashed p-4 rounded-lg'>
                        <Outlet/>
                    </div>
                </Section>    
            </Section>

            
            <Footer/>
        </div>
    );
};

export default index;