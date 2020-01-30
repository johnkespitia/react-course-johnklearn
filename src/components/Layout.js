import React from 'react'
import Navbar from './Navbar'

class Layout extends React.Component{
    childer = this.props.children;
    render(){
        return (
            <React.Fragment>
                <Navbar />
                {this.childer}
            </React.Fragment>
        )
    }
}

export default Layout;