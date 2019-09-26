import React, { Component } from "react";
import Componente2 from "./Componente2";


class MeuH1 extends Component{
  render(){
    console.log(this.props);
    return <h1>{this.props.title}</h1>
  }
}

class MeuBtn extends Component{
  render(){
    return <button onClick={()=> this.props.change(this.props.name)}>{this.props.name}</button>
  }
}

export default class App  extends Component{
  constructor(props){
    super(props);
    this.state ={
      actualBtn: '',
    }
  }
handleChange = (name)=>{ //jeito de escrever função
   this.setState({
     actualBtn: name
   });
}

  render(){
    console.log(this.state);
    return (
    <>
      <MeuH1 title={this.state.actualBtn} />
    <MeuBtn change={this.handleChange} name= "botão" />
    <MeuBtn change={this.handleChange} name= "botão 1"/>
    <MeuBtn change={this.handleChange} name= "botão 2"/>
  
  
    </>
    );
  }


}