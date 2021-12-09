import React, { Component } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import {button} from 'react-bootstrap';
class Home extends Component {
    state={
        news:[]
    }
    componentDidMount(){
        axios.get("https://api.webz.io/filterWebContent?token=af02a8c7-b854-4a12-95b3-99a22d41e461&q=site_type:news%20country:IN%20site_category:financial_news")
        .then(app=> this.setState({news:app.data["posts"]}))

    }
    render() { 
        return (<div  className="container-sm">

            <div className="h2">
                Todays Stories
            </div>
            <br></br>
            <br></br>
            {console.log(this.state.news)}
            {this.state.news.map(app => 
            <div key={app.id}>
                <div class="jumbotron">
                    <table>
                        <tr>
                            <td>
                                <img src={app.main_image} alt="news.logo" width="400px" />
                            </td>
                            <td>
                                <p className="lead">{(app.title)}</p>
                                <p>{(app.text).substring(0,500)}...</p>
                                <a href={app.url} class="btn btn-primary">Read More</a> 
                            </td>
                        </tr>
                    </table>
                </div>
                <br></br>                            
            </div>) }
        </div>
        );
    }
}
 
export default Home;