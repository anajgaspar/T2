import { Component } from "react";
import BarraPrincipal from "../components/barraPrincipal";
import Footer from "../components/footer";
import CardsListagensCliente from "../components/cardsListagensClientes";
import Botao from "../components/botao";

export default class Clientes extends Component {
    render() {
        return (
            <>
                <BarraPrincipal rota="/"></BarraPrincipal>
                <div id="titulo" className="container-md d-flex justify-content-between align-items-center">
                    <h3>Clientes</h3>
                    <div>
                        <Botao link="" conteudo="Adicionar Cliente"></Botao>
                    </div>
                </div>
                <ul className="list-group container-lg d-flex flex-column gap-2 my-4">
                    <CardsListagensCliente nome="Lavínia" cpf="123456789" telefone="987654321" />
                    <CardsListagensCliente nome="João" cpf="987654321" telefone="912345678" />
                    <CardsListagensCliente nome="Marina" cpf="456789123" telefone="998877665" />
                    <CardsListagensCliente nome="Thiago" cpf="321654987" telefone="911223344" />
                    <CardsListagensCliente nome="Beatriz" cpf="789123456" telefone="934561278" />
                    <CardsListagensCliente nome="Lucas" cpf="159753486" telefone="945612378" />
                    <CardsListagensCliente nome="Aline" cpf="951357852" telefone="986543210" />
                    <CardsListagensCliente nome="Caio" cpf="753951456" telefone="923456789" />
                    <CardsListagensCliente nome="Isadora" cpf="852456789" telefone="912398765" />
                    <CardsListagensCliente nome="Fernando" cpf="147258369" telefone="909876543" />
                </ul>
                <Footer></Footer>
            </>
        )
    }
}