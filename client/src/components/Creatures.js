import React, { Component } from 'react'
import axios from 'axios'

export default class Creatures extends Component {

    state = {

        creatureList: {

                name: '',
                description: '',
                imageUrl: ''
            
            },
        
        }
     
    getCreatures = () => {
        axios.get('/').then((creatures) => {
            this.setState({
                creatures
            });
        });
    }

    componentDidMount() {
        this.getCreatures();
    }

    handleChange = (e) => {
        const updatedCreature = {...this.state.creatureList}
        const inputField = e.target.name
        const inputValue = e.target.value
        updatedCreature[inputField] = inputValue
    
        this.setState({creature: updatedCreature})
      }
    
      handleSubmit = (e) => {
        e.preventDefault()
        this.props.creatureLog(this.state.creatureList)
        this.setState({redirect: true})
      }

    toggleFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

    render() {
        return (
            <div>

                <button onClick="toggleFunction()"> Get Creature!</button>

                {/*<input type="text" placeholder="Enter movie title..."
                    onChange={ this.onTextInputChange }/>*/} 


                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Creature Name</label>
                        <input type="text" name="userName" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="description">Creature Description</label>
                        <input type="text" name="description" />
                    </div>
                    <button>Create Bog Profile</button>
                </form>
                
            </div>
        )
    }
}
