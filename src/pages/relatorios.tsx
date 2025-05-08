import { Component } from "react";
import BarraPrincipal from "../components/navbarCompleta";
import CardsListagens from "../components/cardsListagens";
import "../styles/relatorios.css"

export default class Rankings extends Component {
    render() {
        return (
            <>
                <BarraPrincipal rota="/"></BarraPrincipal>
                <div>
                    <div id="titulo" className="container-md">
                        <h3>Relatórios</h3>
                    </div>
                    <form className="container-lg d-flex flex-column gap-2 my-4">
                        <div className="mb-3">
                            <label htmlFor="cliente-select" className="form-label">Escolha um relatório:</label>
                            <select id="cliente-select" className="form-select">
                                <option></option>
                                <option>Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade.</option>
                                <option>Listagem dos 5 clientes que mais consumiram em valor.</option>
                                <option selected>Listagem geral dos serviços ou produtos mais consumidos.</option>
                            </select>
                        </div>
                        <ul className="list-group container-lg d-flex flex-column gap-2 my-4">
                            <CardsListagens nome="Ração Premium Cães 10kg" valor={180} />
                            <CardsListagens nome="Areia Higiênica 4kg" valor={35} />
                            <CardsListagens nome="Shampoo Antipulgas" valor={45} />
                            <CardsListagens nome="Brinquedo Mordedor" valor={25} />
                            <CardsListagens nome="Coleira Antipulgas" valor={60} />
                        </ul>
                    </form>
                </div>
            </>
        )
    }
}