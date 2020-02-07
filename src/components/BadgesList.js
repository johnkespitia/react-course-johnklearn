import React from 'react'
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';
class BadgesListItem extends React.Component{
    render(){
        return (
            <div className="BadgesListItem">
                <img
                className="BadgesListItem__avatar"
                src={this.props.badge.avatarUrl}
                alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
                />

                <div>
                    <strong>
                        {this.props.badge.firstName} {this.props.badge.lastName}
                    </strong>
                    <br />@{this.props.badge.twitter}
                    <br />
                    {this.props.badge.jobTitle}
                </div>
            </div>

        )
    }
}


function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function  BadgesList(props){
    
    const badges = props.badges;

    const {query, setQuery, filteredBadges } = useSearchBadges(badges)
    
        if(filteredBadges.length === 0){
            return (
                <div className="BadgesList">
                    <div className="form-group">
                        <label>
                            Filter badges
                        </label>
                        <input type="text" className="form-control" value={query} onChange={(e)=> setQuery(e.target.value) }/>
                    </div>
                    <h3>No Badges found</h3>
                    <Link className="btn btn-primary" to="/badges/new">Create New Badge</Link>
                </div>
            )
        }else{
            return (
                <div className="BadgesList">
                    <div className="form-group">
                        <label>
                            Filter badges
                        </label>
                        <input type="text" className="form-control" value={query} onChange={(e)=> setQuery(e.target.value) }/>
                    </div>
                    <ul className="list-unstyled">
                        {filteredBadges.map((badge) => 
                            (
                            <li key={badge.id}>
                                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                    <BadgesListItem badge={badge} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
}


export default BadgesList;