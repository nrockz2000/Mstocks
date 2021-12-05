import React from 'react'
import{Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Component } from 'react'

 class Header extends Component {
        render() {
            return (
                <div className="navbar navbar-dark bg-white ">
                    <div className="col-0">
                        <Link className="nav-link text-dark" to="/stocklist">StockList</Link>
                    </div>
                    <div className="col-0">
                        <Link className="nav-link text-dark" to="/watchlist">Watchlist</Link>
                    </div>
                    <div className="col-0">
                        <Link className="nav-link text-dark" to="/about">About</Link>
                    </div>
                    <div className="col">
                        <Link className="nav-link text-dark" to="/userinfo" >userinfo</Link>
                    </div>
                    <div className="col-0">
                        <Link className="nav-link text-dark" to="/login" >Login</Link>
                    </div>
                </div>
            )
        }
}
export default Header;


