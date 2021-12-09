import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Card,Button} from 'react-bootstrap';

import { Component } from 'react'

 class ShowStockList extends Component {


    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    state = {
        stockdatalist:[],
        stock:[],
        value:[],
        stockdata:[],
        date:[],
        valuestate:false
    } 


    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
        axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&datatype=json&symbol="+this.state.value.toUpperCase()+".BSE&outputsize=compact&apikey=CX20863Y3WAKTKPT")
        .then(app=> this.setState({stock:app.data["Meta Data"]}))
        axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&datatype=json&symbol="+this.state.value.toUpperCase()+".BSE&outputsize=compact&apikey=CX20863Y3WAKTKPT")
        .then(app=> this.setState({stockdatalist:app.data["Time Series (Daily)"][this.state.stock["3. Last Refreshed"]]}))
        this.setState({valuestate:true})
        
      event.preventDefault();
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Stock Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
                    <input type="submit" value="Submit" />
                </form>
                {this.state.valuestate?
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title className="text-center" >{this.state.stock["2. Symbol"]}</Card.Title>
                            <Card.Text>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>
                                            open:
                                        </td>
                                        <td>
                                            {this.state.stockdatalist["1. open"]}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            close:
                                        </td>
                                        <td>
                                            {this.state.stockdatalist["4. close"]}
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>
                                            high:
                                        </td>
                                        <td>
                                            {this.state.stockdatalist["2. high"]}
                                            </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            low:
                                        </td>
                                        <td>
                                            {this.state.stockdatalist["3. low"]}
                                            </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Card.Text>
                            <Button variant="primary">Add To Watchlist</Button>
                        </Card.Body>
                    </Card>:<div></div>}
        </div>
        );
    }
}
export default ShowStockList;