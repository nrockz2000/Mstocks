import React, { Component } from "react";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import ShowStockList from './other Pages/showStockList.js';
import Home from "./other Pages/home.js";
import Login from './other Pages/login.js';
//import watchlist from './other Pages/watchlist.js';
//import About from './other Pages/About.js';
//import userInfo from './other Pages/userInfo.js';
class App extends Component {
    render() { 
        return (
            <div>
            <Router>
                < Login/>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/stocklist" element= {<ShowStockList />} />
                </Routes>
            </Router>
            </div>
        
        );
    }
}
 
export default App;