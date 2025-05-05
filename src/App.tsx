import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Clientes from './pages/clientes';
import ClientePets from './pages/clientePets';
import ProdutosServicos from './pages/produtosServicos';
import RegistroConsumo from './pages/registroConsumo';
import Rankings from './pages/rankings';

export default function App() {
    return (       
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/clientes" element={< Clientes />} />
                <Route path="/cliente-pets" element={< ClientePets />} />
                <Route path="/produtos-servicos" element={< ProdutosServicos />} />
                <Route path="/registro-consumo" element={< RegistroConsumo />} />
                <Route path="/rankings" element={< Rankings />} />
            </Routes>
        </BrowserRouter>
    )
}

