import React,{Component} from 'react';
import axios from 'axios';

class Create extends Component{

  constructor(props){
    super(props);
    this.state={
      name:'',
      address:'',
      phone:'',
      email:''
    };

  }

  onChange=(e)=>{
    const state=this.state;
    state[e.target.name]=e.target.value;
    this.setState(state);
  }
  componentDidMount(){
    //console.log("Component Did Mount");
  }

  onSubmit=(e) =>{
    e.preventDefault();
    console.log("On Submit Clicked..");
    console.log(this.state);

    const{name,address,phone,email}=this.state;

    axios.post('http://localhost:8080/contact',{name,address,phone,email})
    .then((result) =>{
      console.log(result.data);
      this.props.history.push("/");
    });

  }

  render(){

    return(
      <div className="container">
        <form onSubmit={this.onSubmit}>
           <div className="form-group">
             <label htmlFor="name"> Name:</label>
             <input type="text" placeholder="Name" onChange={this.onChange} value={this.state.name} className="form-control" name="name"/>
           </div>

           <div className="form-group">
             <label htmlFor="address">Address:</label>
             <input type="text" className="form-control" name="address" onChange={this.onChange} placeholder="Address" value={this.state.address} />
           </div>

           <div className="form-group">
             <label htmlFor="phone">Phone:</label>
             <input type="phone" className="form-control" name="phone" onChange={this.onChange} placeholder="Phone" value={this.state.phone}/>
           </div>

           <div className="form-group">
             <label htmlFor="email">Email:</label>
             <input type="email" className="form-control" name="email" onChange={this.onChange} placeholder="email" value={this.state.email}/>
           </div>

           <button type="submit" className="btn btn-primary">Create Contact</button>
        </form>
      </div>
    );

  }


}
export default Create;
