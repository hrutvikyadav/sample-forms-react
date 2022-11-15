
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import GeneralInfo from './components/GeneralInfo';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = { 
      server: '',
      database: '',
      deviceId: '',
      disabled: false,
  }

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    //window.alert('hi')
    this.setState( prevState => ({
      disabled: !prevState.disabled,
    }))
    e.preventDefault();
  }

  handleChange(e){
    if (e.target.id === 'server') {
      this.setState({
        server: e.target.value 
      })
    }
    if (e.target.id === 'database') {
      this.setState({
        database: e.target.value
      })
    }
    if (e.target.id === 'device-id') {
      this.setState({
        deviceId: e.target.value
      })
    }
    console.log(e.target.id);
  }

  render() {
    return(
      <Container>
        <GeneralInfo 
          server={this.state.server}
          deviceid={this.state.deviceId}
          database={this.state.database}
          disabled={this.state.disabled}
          handlechange={this.handleChange}
          handlesubmit={this.handleSubmit}/>

      </Container>
    )
  }
}

export default App;
