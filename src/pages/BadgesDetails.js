import React from 'react';
import confLogo from '../images/logo.jpg'
import './styles/BadgeDetails.css'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';

class BadgesDetails extends React.Component{
    render(){
        const badge = this.props.badge;
        return  (
            <React.Fragment>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt="Logo" />
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name ">
                                <h1>{badge.firstName} {badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName={badge.firstName}
                                lastName={badge.lastName  || 'Last Name'}
                                twitter={badge.twitter  || 'Twitter Username'}
                                jobTitle={badge.jobTitle  || 'Job Title'}
                                email={badge.email  || 'Email'}
                                avatarUrl={badge.avatarUrl} />

                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div>
                                <div><Link className="btn btn-success mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link> </div>
                                <div><button className="btn btn-danger" >Delete</button> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )    
    }
}

export default BadgesDetails;