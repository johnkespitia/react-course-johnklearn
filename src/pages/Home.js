import React from 'react'

import logoImage from '../images/logo.jpg';
import wellcomeImage from '../images/logo.svg';
import './styles/Home.css';
import { Link } from 'react-router-dom';


class Home extends React.Component{
    render(){
        return (
            <div className="Home">
                <div className="container">
                <div className="row">
                    <div className="Home__col col-12 col-md-4">
                    <img
                        src={logoImage}
                        alt="Platzi Conf Logo"
                        className="img-fluid mb-2"
                    />

                    <h1>Badge Management System</h1>
                    <Link className="btn btn-primary" to="/badges">
                        Start
                    </Link>
                    </div>

                    <div className="Home__col d-none d-md-block col-md-8">
                    <img
                        src={wellcomeImage}
                        alt="Astronauts"
                        className="img-fluid p-4"
                    />
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Home;