import React, {Component} from 'react';
import axios from 'axios';

class Edit extends Component{

  constructor(props){
    super(props);

    this.state={
      contact:{

      }
    };
  }

  onChange=(e)=>{

    const state= this.state.contact;
    state[e.target.name]=e.target.value;
    this.setState({contact:state});
  }

  onSubmit=(e) =>{
    e.preventDefault();
    const{name,address,phone,email}=this.state.contact;
    console.log(this.state.contact);

    axios.put("http://localhost:8080/contact/"+this.props.match.params.id, {name,address,phone,email})
    .then((result) =>{
      console.log(result.data);
      //this.props.history.push("/show/"+this.props.match.params.id);
      this.props.history.push("/");
    });


  }
  componentDidMount(){

    axios.get("http://localhost:8080/contact/"+ this.props.match.params.id)
    .then(res =>{
      this.setState({contact:res.data});
      console.log(this.state.contact);
    });
  }

  render(){

    return(
      <div className="container">
        <form onSubmit={this.onSubmit}>
           <div className="form-group">
             <label htmlFor="name"> Name:</label>
             <input type="text" placeholder="Name" onChange={this.onChange} value={this.state.contact.name} className="form-control" name="name"/>
           </div>

           <div className="form-group">
             <label htmlFor="address">Address:</label>
             <input type="text" className="form-control" name="address" onChange={this.onChange} placeholder="Address" value={this.state.contact.address} />
           </div>

           <div className="form-group">
             <label htmlFor="phone">Phone:</label>
             <input type="phone" className="form-control" name="phone" onChange={this.onChange} placeholder="Phone" value={this.state.phone}/>
           </div>

           <div className="form-group">
             <label htmlFor="email">Email:</label>
             <input type="email" className="form-control" name="email" onChange={this.onChange} placeholder="email" value={this.state.email}/>
           </div>

           <button type="submit" className="btn btn-primary">Update Contact</button>
        </form>
      </div>
    );
  }


}
export default Edit;
