import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";




import Login from './login/Login';
import Navigationbar from '../components/navigationbar/Navigationbar';
import ExcelUpload from './Excelupload/Excelupload';



const MainRouter = () => {
    return ( 
        <Router>                
          <Switch>
            <Route exact path="/" component={Login} />            
            
            <Route exact path="/Navbar">
               <Navigationbar ><ExcelUpload /></Navigationbar>          
            </Route>
            <Route path="/dashboard">              
            </Route>
          </Switch>       
        </Router>
     );
}

export default MainRouter;