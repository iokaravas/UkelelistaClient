import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

// import logo from './logo.svg';
import './App.css';

import Nav from './components/nav';
import Footer from './components/footer'

import Index from './routes/main'
import Library from './routes/library'
import AddNew from './routes/addnew'
import Play from './routes/play'


function App() {
  return (
      <div>
          <Router>
            <Nav />
            <div className="container">
                <Route exact path="/" component={Index} />
                <Route path="/library" component={Library} />
                <Route path="/addnew" component={AddNew} />
                <Route path="/play/:songName" component={Play} />
            </div>
          </Router>
        <Footer />
      </div>
  )
}

export default App;
