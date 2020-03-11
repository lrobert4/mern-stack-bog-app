import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SingleCreature extends Component {
    render() {
        const { name, description } = this.props.currentCreature;
        return (
            <div>
                <h1>Creature Profile</h1>

                <div>Name: {name}</div>
                <div> Description: {description}</div>

                <Link to="/">Home</Link>
                
            </div>
        )
    }
}
