import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Show extends Component{

   constructor(props){
     super(props);
     this.state={
       contact:{

       }
     };
   }

   delete(id){
    console.log(id);
    axios.delete('http://localhost:8080/contact/'+id)
    .then((result) =>{
      this.props.history.push("/");
    })

   }
   componentDidMount(){

     axios.get('http://localhost:8080/contact/'+this.props.match.params.id)
     .then(res =>{
       this.setState({contact:res.data});
       console.log(this.state.contact);
     });

   }

  render(){
    return(
        <div className="card">


          <div className="card-body">
            <h5 className="card-title">{this.state.contact.name}</h5>
            <p className="card-text">{this.state.contact.address}</p>            
          </div>
          <Link to={`/edit/${this.state.contact.id}`} className="btn btn-success"> Edit </Link>
          <br></br>
         <button onClick={this.delete.bind(this,this.state.contact.id)} className="btn btn-primary"> Delete </button>
        </div>
    );
  }
}

export default Show;
