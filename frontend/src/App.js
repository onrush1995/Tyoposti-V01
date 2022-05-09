import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLanding, Signin, Signup, TyopostiWidget } from './tab';
import Errorpage from './tab/Errorpage';
function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<TyopostiWidget />} />
                <Route path='/main' element={<MainLanding />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='*' element={<Errorpage />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default App;
