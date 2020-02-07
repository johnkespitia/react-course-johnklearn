import React from 'react';
import './styles/BadgeDetails.css'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api';
import BadgesDetails from './BadgesDetails';

class BadgesDetailsContainers extends React.Component{
    
    state = {
        loading:true,
        error:null,
        data:undefined,
        modalIsOpen:false
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData= async () => {
        this.setState({
            loading:true,
            error:null
        })
        try {
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({
                loading:false,
                data:data
            })
        } catch (error) {
            this.setState({
                loading:false,
                error:error
            })
        }
    }

    HandleCloseModal = e => {
        this.setState({
            modalIsOpen:false
        })
    }
    HandleOpenModal = e => {
        this.setState({
            modalIsOpen:true
        })
    }

    handleDeleteBadge = async e =>{
        this.setState({
            loading:true,
            error:null
        })
        try {
            await api.badges.remove(this.props.match.params.badgeId)
            this.setState({
                loading:false
            })
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({
                loading:false,
                error:error
            }) 
        }
    }

    render(){
        if(this.state.loading){
            return (<PageLoading />)
        }else if(this.state.error){
            return (<PageError error={this.state.error}/>)
        }else{
            return  (
                <BadgesDetails badge={this.state.data} onCloseModal={this.HandleCloseModal} onOpenModal={this.HandleOpenModal} 
                modalIsOpen={this.state.modalIsOpen} 
                onDeleteBadge={this.handleDeleteBadge}
                />
            )    
        } 
    }

}

export default BadgesDetailsContainers;