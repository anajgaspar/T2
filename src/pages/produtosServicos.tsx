import { Component } from "react";
import BarraPrincipal from "../components/barraPrincipal";
import Footer from "../components/footer";
import CardsListagens from "../components/cardsListagens";
import Botao from "../components/botao";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
export default class Produtos extends Component {
    render() {
        return (
            <>
                <BarraPrincipal rota="/"></BarraPrincipal>
                <div className="container-md">
                    <ul className="nav nav-underline ps-1 mt-2">
                        <li className="nav-item">
                            <a id="link-ativo" className="nav-link active" aria-current="page" href="/produtos">Produtos</a>
                        </li>
                        <li className="nav-item">
                            <a id="link-nao-ativo" className="nav-link" aria-current="page" href="/servicos">Serviços</a>
                        </li>
                    </ul>
                    <div id="titulo" className="container-md d-flex justify-content-between align-items-center">
                        <h3>Produtos</h3>
                        <div>
                            <Botao link="" conteudo="Adicionar Produto"></Botao>
                        </div>
                    </div>
                    <ul className="list-group container-lg d-flex flex-column gap-2 my-4">
                        <CardsListagens nome="Ração Premium Cães 10kg" valor={180} />
                        <CardsListagens nome="Areia Higiênica 4kg" valor={35} />
                        <CardsListagens nome="Shampoo Antipulgas" valor={45} />
                        <CardsListagens nome="Brinquedo Mordedor" valor={25} />
                        <CardsListagens nome="Coleira Antipulgas" valor={60} />
                        <CardsListagens nome="Caminha Pequena" valor={120} />
                        <CardsListagens nome="Arranhador para Gatos" valor={95} />
                        <CardsListagens nome="Comedouro Duplo Inox" valor={50} />
                        <CardsListagens nome="Caixa de Transporte Média" valor={140} />
                        <CardsListagens nome="Petisco Natural 300g" valor={32} />
                    </ul>
                </div>
                <Footer></Footer>
            </>
        )
    }
}