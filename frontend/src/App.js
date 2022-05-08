import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLanding from './tab/MainLanding';
function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<div>Landing</div>} />
            </Routes>
        </Router>
    );
}

export default App;
