import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default class Footer extends Component {
    render() {
        return (
            <footer className="text-center mt-5 p-4">
                <p className="m-0"><strong>&copy; Pet Lovers, 2025 <br></br> Todos os direitos reservados.</strong></p>
            </footer>
        )
    }
}