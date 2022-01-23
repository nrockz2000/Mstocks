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
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=c27efdbe42c54c6a884d79171747d575"
      )
      .then((app) => this.setState({ news: app.data["articles"] }));
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="h2">Todays Stories</div>
        <br></br>
        <br></br>
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
                  <a href={app.url} class="btn btn-primary" target="_blank">
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
