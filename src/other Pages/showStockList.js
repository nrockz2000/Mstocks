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
        stockdata:[],
        stock:[],
        value:[],
        stockname:"",
        valuestate:false
    }


    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
        axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&datatype=json&symbol="+this.state.value+".BSE&outputsize=compact&apikey=CX20863Y3WAKTKPT")
        .then(app=> this.setState({stock:app.data["Time Series (Daily)"]["2021-12-03"]}))
        this.setState({valuestate:true})
        console.log(new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate());
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
                        {this.getdata}
                            <Card.Title className="text-center" >{this.state.value}</Card.Title>
                            <Card.Text>
                                <table>
                                    <tr>
                                        <td>
                                            open:
                                        </td>
                                        <td>
                                            {this.state.stock["1. open"]}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            close:
                                        </td>
                                        <td>
                                            {this.state.stock["4. close"]}
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td>
                                            high:
                                        </td>
                                        <td>
                                            {this.state.stock["2. high"]}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            low:
                                        </td>
                                        <td>
                                            {this.state.stock["3. low"]}
                                        </td>
                                    </tr>
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