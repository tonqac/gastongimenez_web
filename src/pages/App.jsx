import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from './Index';
import Works from './Works';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/works" element={<Works />} />
                </Routes>
            </div>
        </BrowserRouter>

    )
}

export default App