import React, { Component } from 'react';
import logo from './logo.svg';
import Request from 'superagent';
import _ from 'lodash';
import './App.css';

class App extends Component {
    constructor(){
      super();
      this.state={};
      // this.numbers = [1, 2, 3, 4, 5];
      // this.listItems = this.numbers.map((number) =>
      //   <li>{number}</li>
      // );
    }
    componentWillMount(){
      var url="https://jsonplaceholder.typicode.com/posts";
      Request.get(url).then((response)=>{
        console.log(response);
        // this.setState({
        //   info:response.body
        // });
        this.allInfo=response.body;
        this.movies=_.map(this.allInfo,(movie)=>{
          return <li>{movie.title}</li>;
        });
      });
    };
    render() {
      setTimeout(()=>{
        this.setState({name:"naieem"});
      }, 3000);
      return ( 
        <div className="App">
        {this.movies}
          <div className="App-header">
          <img src={ logo }
          className="App-logo"
          alt="logo" />
          <h2> Welcome {this.state.name}!!!!!! </h2> </div> <p className="App-intro">
          To ge started, edit <code> src / App.js </code> and save to reload. </p> </div>
      );
    }
}

export default App;
