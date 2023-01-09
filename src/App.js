import './App.css';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./components/HomePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/page"/>
        </Routes>
    )
}

export default App;
