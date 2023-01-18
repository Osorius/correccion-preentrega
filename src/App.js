import './App.css';
import Navbar from './components/Header/Navbar';
import ItemListContainer from './components/Main/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import Nosotros from './components/Main/Nosotros';
const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <ItemListContainer titulo="Tienda de Hongos Gourmet y Medicinales "  />
                    }
                />
                <Route
                    path="/categoria/:categoryName"
                    element={
                        <ItemListContainer titulo="Tienda de Hongos Gourmet y Medicinales " />
                    }
                />
                <Route path="/detail/:id" element={<ItemDetailContainer />} />
                <Route path="/nosotros" element={<Nosotros />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
