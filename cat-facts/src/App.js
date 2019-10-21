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
      cat: []
    }
  }

  componentDidMount = async (cat) => {
    const response = await getCatFacts();
    console.log(response)
    this.setState({
      cat: cat
    })
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <main>

        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
