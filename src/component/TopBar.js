import React, { Component, Fragment } from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import logo from "./LOGO.png"

export class TopBar extends Component {
  handleLogout=()=>{
    this.props.onLogout()
    this.props.history.push('/login')
  }
    render() {
        return (
          <Fragment>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Navbar expand="lg">
            <Navbar.Brand href="/home" className="navbar-left"><img id="logo" src={logo} alt='PairUp!'/></Navbar.Brand>
              <Nav className="mr-auto">
               <Navbar.Text> <Link to="/play">Play!</Link></Navbar.Text> 
               <Navbar.Text> <Link to="/home">Home</Link></Navbar.Text>
               <Navbar.Text> <Link to="/leaderboard">Leaderboards</Link></Navbar.Text>
               <Navbar.Text> <Link to="/about">About</Link></Navbar.Text>
               {this.props.user? <Navbar.Text onClick={()=>this.handleLogout()}>Logout</Navbar.Text>: null}
              </Nav>
          </Navbar>
          {/* <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links --> */}
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
          </Fragment>
        )
    }
}

export default TopBar