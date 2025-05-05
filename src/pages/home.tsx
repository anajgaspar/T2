import { Component } from "react";
import BarraSecundaria from "../components/barraSecundaria";
import CardsHome from "../components/cardsHome";
import Footer from "../components/footer";

export default class Home extends Component {
    render() {
        return (
            <>
                <BarraSecundaria></BarraSecundaria>
                <div className="container-fluid">
                    <div className="container-md text-center mt-5">
                        <h4>Seja bem-vindo(a) ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias!</h4>
                    </div>
                    <div id="cards" className="container-lg d-flex flex-column align-items-center">
                        <div id="cards-linha-cima" className="row justify-content-center flex-wrap gap-5">
                            <div id="card" className="col-md-3 rounded shadow-sm">
                                <CardsHome icone="https://img.icons8.com/?size=100&id=82751&format=png&color=F39C12" titulo="Clientes & Pets" descricao="Gerencie os dados dos seus clientes e seus pets com facilidade." rota="/clientes"></CardsHome>
                            </div>
                            <div id="card" className="col-md-3 rounded shadow-sm">                        
                                <CardsHome icone="https://img.icons8.com/?size=100&id=85073&format=png&color=F39C12" titulo="Produtos & Serviços" descricao="Cadastre, edite e acompanhe produtos e serviços disponíveis." rota="/produtos-servicos"></CardsHome>
                            </div>
                            <div id="card" className="col-md-3 rounded shadow-sm">                        
                                <CardsHome icone="https://img.icons8.com/?size=100&id=86550&format=png&color=F39C12" titulo="Registrar Consumo" descricao="Registre produtos e serviços consumidos por um determinado cliente." rota="registro-consumo"></CardsHome>
                            </div>
                        </div>
                        <div id="card-relatorios" className="align-self-center rounded shadow-sm">
                            <CardsHome icone="https://img.icons8.com/?size=100&id=82742&format=png&color=F39C12" titulo="Relatórios" descricao="Acompanhe os principais indicadores do seu negócio, como vendas, serviços prestados e entre outros." rota="rankings"></CardsHome>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </>
        )
    }
}