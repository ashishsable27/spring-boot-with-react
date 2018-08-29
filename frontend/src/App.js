import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class App extends Component {

    constructor(props){
      super(props);
      this.state={
        contacts:[]
      }
    }

    componentDidMount(){
      axios.get('http://localhost:8080/contact')
      .then(res=>{
        this.setState({contacts:res.data});
        console.log("Contats:"+this.state.contacts);
      });
    }

    render(){
      return(
        <div className="container">
          <h3>Contact List</h3>
          <h2><Link to={'/create'}>Add Contact</Link></h2>

          <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                  </tr>
                </thead>
                <tbody>

                  {this.state.contacts.map((c,index)=>
                    <tr key={'key'+index}>
                      <td><Link to={`/show/${c.id}`}>{c.id}</Link></td>
                      <td>{c.name}</td>
                      <td>{c.address}</td>
                    </tr>
                  )}

                </tbody>
            </table>
        </div>
      );

    }

}

export default App;
