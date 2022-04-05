import { Route, Routes, BrowserRouter ,Navigate} from 'react-router-dom';
import Home from '../home';
import Tourism from '../tourism/tourism';
import Fitness from '../fitness/fitness';
import Technology from '../technology/technology';
import Bollywood from '../bollywood/bollywood';
import Food from '../food/food';
import Display from './display';
import { Nav } from './nav';

import './UI.css';

export const Ui = () => {
    return (
        <div className="container">
            <div className="title_box">
                <span className="the">The</span><h1> in<span className="fo">Fo</span>B<span className="oo">oo</span>k</h1>
            </div>
            <BrowserRouter >
                <Nav />
                <Routes>
                    <Route path='/' element={ <Navigate to='/Home' /> } />
                    <Route path='/Home' element={<Home />} />
                    <Route path='/Tourism' element={<Tourism />} />
                    <Route path='/Fitness' element={<Fitness />} />
                    <Route path='/Technology' element={<Technology />} />
                    <Route path='/Bollywood' element={<Bollywood />} />
                    <Route path='/Food' element={<Food />} /> 
                    <Route path={`/individual/:`} element={<Display path={"pra"}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}