import { Component } from "react";
import NavbarCompleta from "../components/NavbarCompleta";
import ListagemProdutosServicos from "../components/ListagemProdutosServicos";
import FormCadastroProdutoServico from "../components/FormCadastroProdutoServico";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/produtosServicos.css"

export default class Produtos extends Component {
    state = {
        modalVisivel: false,
    };

    abrirModal = () => {
        this.setState({ modalVisivel: true });
    };

    fecharModal = () => {
        this.setState({ modalVisivel: false });
    };

    render() {
        return (
            <>
                <NavbarCompleta rota="/"></NavbarCompleta>
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
                            <button id="botao" className="rounded rounded-full" onClick={this.abrirModal}>Cadastrar Serviço</button>
                        </div>
                    </div>
                    <ul className="list-group container-lg d-flex flex-column gap-2 my-4">
                        <ListagemProdutosServicos nome="Banho e Tosa" valor={80} />
                        <ListagemProdutosServicos nome="Consulta Veterinária" valor={120} />
                        <ListagemProdutosServicos nome="Aplicação de Vacina" valor={90} />
                        <ListagemProdutosServicos nome="Hospedagem (dia)" valor={150} />
                        <ListagemProdutosServicos nome="Hidratação de Pelagem" valor={70} />
                        <ListagemProdutosServicos nome="Corte de Unhas" valor={30} />
                        <ListagemProdutosServicos nome="Limpeza de Ouvidos" valor={40} />
                        <ListagemProdutosServicos nome="Escovação de Dentes" valor={35} />
                        <ListagemProdutosServicos nome="Tosa Higiênica" valor={50} />
                        <ListagemProdutosServicos nome="Acompanhamento Nutricional" valor={100} />
                    </ul>
                </div>
                {this.state.modalVisivel && (
                    <div className="modal-cadastro">
                        <div className="modal-conteudo">
                            <span className="botao-fechar-modal" onClick={this.fecharModal}>&times;</span>
                            <h4 style={{ color: '#F39C12' }}>Cadastro de Serviço</h4>
                            <FormCadastroProdutoServico></FormCadastroProdutoServico>
                        </div>
                    </div>
                )}
            </>
        )
    }
}