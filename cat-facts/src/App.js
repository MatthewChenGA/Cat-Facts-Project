import React from 'react';
import './App.css';
import { getCatFacts, getOtherFacts } from './services/api-helper';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import CatFact from './components/CatFact';
import RandomFact from './components/RandomFact';
import DarkModeToggle from './components/DarkModeToggle';
import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catfact: "",
      randomfact: ""
    }
  }

  handleClick = async () => {
    const catfact = await getCatFacts();
    this.setState({
      catfact
    })
  }

  handleRandomClick = async () => {
    const randomfact = await getOtherFacts();
    this.setState({
      randomfact
    })
  }

  render() {
    return (
      <div className="App" >
        <Header logoSrc="https://github.githubassets.com/images/modules/logos_page/Octocat.png" />
        <main>
          <Route exact path="/" render={() => (
            <Main handleClick={this.handleClick} handleRandomClick={this.handleRandomClick} />
          )} />

          <Route path="/catfact" render={() => (
            <CatFact catfact={this.state.catfact} handleClick={this.handleClick} handleRandomClick={this.handleRandomClick} />
          )} />

          <Route path="/randomfact" render={() => (
            <RandomFact randomfact={this.state.randomfact} handleRandomClick={this.handleRandomClick} handleClick={this.handleClick} />
          )} />
          <div className="navbar">
            <DarkModeToggle />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
