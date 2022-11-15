
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import GeneralInfo from './components/GeneralInfo';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = { 
      name: '',
      email: '',
      disabled: false,
  }

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    //window.alert('hi')
    this.setState( prevState => ({
      name: prevState.name,
      disabled: !prevState.disabled,
    }))
    e.preventDefault();
  }

  handleChange(e){
    if (e.target.id === 'name') {
      this.setState({
        name: e.target.value 
      })
    }
    if (e.target.id === 'email') {
      this.setState({
        email: e.target.value
      })
    }
    console.log(e.target.id);
  }

  render() {
    return(
      <Container>
        <GeneralInfo name={this.state.name} email={this.state.email} disabled={this.state.disabled} handlechange={this.handleChange} handlesubmit={this.handleSubmit}/>

      </Container>
    )
  }
}

export default App;
