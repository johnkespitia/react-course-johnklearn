import React from 'react'
import './styles/BadgeNew.css'
import Navbar from '../components/Navbar'
import header from '../images/badge.header.jpg'
import Badge from '../components/Badge'
class BadgeNew extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="header"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName="JohnK"
                                lastName="Espitia"
                                twitter="johnkespitia"
                                jobTitle="FullStack Developer"
                                avatarUrl="https://www.gravatar.com/avatar/0628601f7d228fda7a1bc239335ce680?d=identicon" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;