import React, { Component } from 'react';

class Item extends Component{

    render(){
        return(
            <div>
                <p key={this.props.key}>{this.props.prenoms} {this.props.nom} a {this.props.age} et comme profession {this.props.profession}</p>
            </div>
        )
    }
}

export default Item;