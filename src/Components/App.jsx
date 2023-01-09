import { Routes, Route,Link } from 'react-router-dom';
import {Homepage} from './Homepage';
import AllPlans from './AllPlans';
import {AllTenders} from './AllTenders';
import {Tender} from './Tender';
import {Plan} from './Plan';

function App(){
    return(
        <>
      <div className='content'>
      <nav >
        
      <Link to='/'>Home</Link>
      <Link to='/AllPlans' >AllPlans</Link>
      <Link to='/AllTenders' >AllTenders</Link>
      <Link to='/tender' >Tender</Link>
      <Link to='/plan' >Plan</Link>
      
      </nav>
     
      <Routes>
      <Route path='/'  element ={<Homepage/>}></Route>
      <Route path='/AllPlans' element ={<AllPlans/>}></Route>
      <Route path='/AllTenders' element ={<AllTenders/>}></Route>
      <Route path='/tender' element ={<Tender/>}></Route>
      <Route path='/plan' element ={<Plan/>}></Route>
      </Routes>
      </div>
      </>
    )
}

export default App