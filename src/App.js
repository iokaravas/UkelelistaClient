import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
// import logo from './logo.svg';
import './App.css';

import Nav from './components/nav';
import Footer from './components/footer'

import Index from './routes/main'
import Library from './routes/library'
import AddNew from './routes/addnew'

function App() {
  return (
      <div>
          <Router>
            <Nav />
            <div className="container">
                <Route path="/" exact  component={Index} />
                <Route path="/library" component={Library} />
                <Route path="/addnew" component={AddNew} />
            </div>
          </Router>
        <Footer />
      </div>
  )
}

export default App;
