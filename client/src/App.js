import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Creatures from './components/Creatures'
import SingleCreature from './components/SingleCreature'
import { Link } from 'react-router-dom';

class App extends Component {

  state = {
    imageUrl: "https://vignette.wikia.nocookie.net/peppapedia/images/e/e1/Missstephaniespotions.png/revision/latest?cb=20170808183518",
    currentCreature: {
      name: '"BoogerWooger"',
      description: "Dripping snout and his head is made of hard boogers!",
    },
  }

  

  creatureLog = (creatureInfo) => {
    const newCreature = { ...this.state.currentCreature };
    newCreature.name = creatureInfo.name;
    this.setState({
      currentCreature: newCreature,
    });
  }

  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Creatures}/>
            <Route path="/:creatureId" component={SingleCreature}/>
            <div><Link to="/">Creatures</Link></div>
            <div><Link to="/:creatureId">Creature Profile</Link></div>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App