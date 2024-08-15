import {Routes, Route} from 'react-router-dom';
import { Dashboard, AuthLayout } from '@layout';
import { Home, Leads, Orders, Users } from '@pages';




const App = () => {
  return (
    <>

      <Routes>

        <Route path='/' element={<Dashboard/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/leads' element={<Leads/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/users' element={<Users/>}/>
        </Route>

        <Route path='/login' element={<AuthLayout/>}/>
      </Routes>
    </>
  );
};

export default App;