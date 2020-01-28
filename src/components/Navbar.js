import React from 'react'
import logo from '../images/logo.jpg'
import './styles/Navbar.css'
class Navbar extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <a href="/" className="Navbar__brand" >
                        <img className="Navbar__brand-logo" src={logo} alt="" />
                        <span className="font-weight-light">Johnk</span>
                        <span className="font-weight-blod">Learn</span>
                    </a>
                </div>
            </div>

        )
    }
}

export default Navbar;