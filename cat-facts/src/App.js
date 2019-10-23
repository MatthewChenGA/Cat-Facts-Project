import React from 'react';
import './App.css';
import { getCatFacts } from './services/api-helper';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import ShowCat from './components/ShowCat';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: [],
      selectedText: ''
    }
  }

  componentDidMount = async (cat) => {
    const response = await getCatFacts();
    console.log(response)
    this.setState({
      cat: cat
    })
  }

  handleChange = (selectedText) => {
    this.setState({ selectedText });
  }

  handleSubmit = async () => {
    const catFact = await catFact(this.state.selectedText);
    this.setState({
      catFact
    })
  }

  render() {
    return (
      <div className="App" >
        <Header href="index.html" logoSrc="https://github.githubassets.com/images/modules/logos_page/Octocat.png" />
        <Main />
        <ShowCat />
        <Footer />
      </div>
    );
  }
}

export default App;
