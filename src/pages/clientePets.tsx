import { Component } from "react";
import BarraPrincipal from "../components/barraPrincipal";
import Footer from "../components/footer";

export default class ClientePets extends Component {
    render() {
        return (
            <>
                <BarraPrincipal rota="/clientes"></BarraPrincipal>
                <div>
                    
                </div>
                <Footer></Footer>
            </>
        )
    }
}