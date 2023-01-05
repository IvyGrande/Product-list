import './App.css';
import {Header} from "./components/Header/Header";
import {ProductPage} from "./components/ProductContainer/ProductPage";
import {Modal} from "./components/common/Modal";


function App() {
    return (
        <div>
            <Header/>
            <ProductPage/>
        </div>
    )
}


export default App;
