import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Form from './Form';
import PaySlip from './Payslip';

class App extends Component {
  render() {
    return (
        <Router>
          <div className='container'>
          <NavBar/>
          <Route exact path={'/'} component={Form}/>
         <Route path={'/payslip'} component={PaySlip}/>
         </div>
        </Router>
    );
  }
}

export default App;
