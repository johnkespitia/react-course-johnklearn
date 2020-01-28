import React from 'react'
import './styles/BadgeNew.css'
import Navbar from '../components/Navbar'
import header from '../images/badge.header.jpg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
class BadgeNew extends React.Component{
    state = { 
        form: {
            jobTitle: 'Designer',
            firstname:'JohnK',
            lastName:'',
            email:'',
            twitter:''
        } 
    };

    handleChange = e => {
        //const nextForm = this.state.form;
        //nextForm[e.target.name]= e.target.value;
        //this.setState({
        //    form: nextForm
        //})
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

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
                                firstName={this.state.form.firstname}
                                lastName={this.state.form.lastName}//"Espitia"
                                twitter={this.state.form.twitter}//"johnkespitia"
                                jobTitle={this.state.form.jobTitle}//"FullStack Developer"
                                email={this.state.form.email}//"FullStack Developer"
                                avatarUrl="https://www.gravatar.com/avatar/0628601f7d228fda7a1bc239335ce680?d=identicon" />
                        </div>
                        <div className="col">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;