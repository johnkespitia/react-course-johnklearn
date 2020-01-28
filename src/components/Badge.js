import React from 'react';
import logo from '../images/header-bg.png'
import "./styles/Badge.css"
class Badge extends React.Component{
    render(){
        return (
           <div className="Badge">
               <div className="Badge__Header">
                   <img className="Badge__Header__img" src={logo} alt="Logo de la conferencia"/>
               </div>
               <div className="Badge__section-name">
                    <img className="Badge__avatar" src={this.props.avatarUrl} alt="avatar"/>
                   <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
               </div>
               <div className="Badge__section-info">
                   <h3>{this.props.jobTitle}</h3>
                   <div>@{this.props.twitter}</div>
               </div>
               <div className="Badge__footer">
                   #JohnkLearn
               </div>
           </div>
        )
    }
}

export default Badge;