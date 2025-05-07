import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Clientes from './pages/clientes';
import ClientePets from './pages/clientePets';
import Produtos from './pages/produtosServicos';
import Servicos from './pages/servicos';
import Consumos from './pages/consumos';
import Rankings from './pages/relatorios';

export default function App() {
    return (       
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/clientes" element={< Clientes />} />
                <Route path="/cliente-pets" element={< ClientePets />} />
                <Route path="/produtos" element={< Produtos />} />
                <Route path="/servicos" element={< Servicos />} />
                <Route path="/consumos" element={<Consumos />} />
                <Route path="/relatorios" element={< Rankings />} />
            </Routes>
        </BrowserRouter>
    )
}

