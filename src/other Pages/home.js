import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//import {button} from 'react-bootstrap';
class Home extends Component {
  state = {
    news: [],
  };
  componentDidMount() {
    axios
      .get(
        "https://newsdata.io/api/1/news?apikey=pub_3910818af12f20b3ff1004354a7e97620638&country=in&category=business"
      )
      .then((app) => this.setState({ news: app.data["results"] }));
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="h2">Todays Stories</div>
        <br></br>
        <br></br>
        {console.log(this.state.news)}
        {this.state.news.map((app) => (
          <div key={app.id}>
            <div class="jumbotron">
              <div class="row no-gutters">
                <div class="col-auto">
                  <img
                    class="rounded float"
                    src={app.urlToImage}
                    alt="news.logo"
                    width="400px"
                  />
                </div>
                <div class="col">
                  <div class="card-block px-2"></div>
                  <p className="lead">{app.title}</p>
                  <p>{app.description}</p>
                  <a href={app.link} class="btn btn-primary" target="_blank">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
