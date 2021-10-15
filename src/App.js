import React, { Component } from 'react';
import './App.css';

const load = 'https://a-static.mlcdn.com.br/1500x1500/adesivo-parede-decorativo-loading-carregando-palavra-barra-aartedecor/aartedecor/1541-1863/bbc74def4e1116a12776398372101bcd.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogLink: '',
      loading: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  handleClick() {
    this.fetchDog();
  }

  async fetchDog() {
    this.setState(
      { loading: true },
      async () => {
        const fetchDog = await fetch('https://dog.ceo/api/breeds/image/random');
        const response = await fetchDog.json();
        this.setState({
          dogLink: response.message,
          loading: false,
        });
      },
    );
  }

  render() {
    const { dogLink, loading } = this.state;
    return (
      <div>
        <h1>Random Dog</h1>
        <div className="dog-card">
          {loading ? <img src={ load } alt="loading" />
            : <img src={ dogLink } alt="dog" />}
          <button onClick={ this.handleClick } type="button">New Dog</button>
        </div>
      </div>
    );
  }
}

export default App;
