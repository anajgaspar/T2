import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default class NavbarLogo extends Component {
    render() {
        return (
            <>
                <nav className="navbar sticky-top">
                    <div className="container-fluid justify-content-end">
                        <div className="navbar-brand">
                            <img id="logo" className="img-fluid" src="/logo.png" alt="logo" width={230}></img>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}