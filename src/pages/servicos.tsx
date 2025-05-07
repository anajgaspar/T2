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
                            <a id="link-nao-ativo" className="nav-link" aria-current="page" href="/produtos">Produtos</a>
                        </li>
                        <li className="nav-item">
                            <a id="link-ativo" className="nav-link active" aria-current="page" href="/servicos">Serviços</a>
                        </li>
                    </ul>
                    <div id="titulo" className="container-md d-flex justify-content-between align-items-center">
                        <h3>Serviços</h3>
                        <div>
                            <Botao link="" conteudo="Adicionar Serviço"></Botao>
                        </div>
                    </div>
                    <ul className="list-group container-lg d-flex flex-column gap-2 my-4">
                        <CardsListagens nome="Banho e Tosa" valor={80} />
                        <CardsListagens nome="Consulta Veterinária" valor={120} />
                        <CardsListagens nome="Aplicação de Vacina" valor={90} />
                        <CardsListagens nome="Hospedagem (dia)" valor={150} />
                        <CardsListagens nome="Hidratação de Pelagem" valor={70} />
                        <CardsListagens nome="Corte de Unhas" valor={30} />
                        <CardsListagens nome="Limpeza de Ouvidos" valor={40} />
                        <CardsListagens nome="Escovação de Dentes" valor={35} />
                        <CardsListagens nome="Tosa Higiênica" valor={50} />
                        <CardsListagens nome="Acompanhamento Nutricional" valor={100} />
                    </ul>
                </div>
                <Footer></Footer>
            </>
        )
    }
}