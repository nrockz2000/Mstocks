import React, { Component } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {button} from 'react-bootstrap';
class Home extends Component {
    state={
        news:[]
    }
    componentDidMount(){
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c27efdbe42c54c6a884d79171747d575")
        .then(app=> this.setState({news:app.data["articles"]}))

    }
    render() { 
        return (<div>

            <div className="display-4 center">
                Todays Stories
            </div>
            {this.state.news.map(app => 
            <div key={app.id}>
                <div class="jumbotron">
                    <table>
                        <tr>
                            <td>
                                <img src={app.urlToImage} alt-text="hello" width="400px" />
                            </td>
                            <td>
                                <p className="lead">{(app.title)}</p>
                                <p>{(app.description)}</p>
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