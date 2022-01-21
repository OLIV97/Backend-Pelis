import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React ,{ useEffect, useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import CrearCuenta from './components/CreateAcount';
function App() {
  const [Listesp, setListesp] = useState()
  const [kword, setkword] = useState("")
  const [kwordS, setkwordS] = useState("")
  const EventokwordsChange=  (e) =>{
    setkwordS( e.target.value);
    // console.log(correo,e.target.value);
 }

 const entersearch = (e) =>{
   e.preventDefault()
   getkword(kword)
 }
 const getkword = async () =>  {
  const Url = `http://127.0.0.1:8000/api/pelicula/search-titulo/${kwordS}/`;
        await fetch(Url,{
                method: 'GET',
                headers:{
                  'Content-Type': 'application/json'
                }
              })
          .then((res) => res.json())
          .then(async (resp) => {
               await setListesp(resp)
            // console.log(resp)
        })
}
  return (
    <div className="App">
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase navbar-shrink" id="mainNav">
                        <div className="container">
                            <a className="navbar-brand" href="#page-top">App pelis</a>
                            <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                Menu
                                <i className="fas fa-bars"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/">Inicio</Link></li>
                                    <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/login">Iniciar Sesion</Link></li>
                                    <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/create-user">Crear Cuenta</Link></li>
                                    {/* <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create-user">
            <CrearCuenta />
          </Route>
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
