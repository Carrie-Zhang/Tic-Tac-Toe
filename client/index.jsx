const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: '',
      value: null,
      winner: ''
    };
  }

  player1MakeMove() {
    this.state.value = 'o';
  }

  player2MakeMove() {
    this.state.value = 'x';
  }

  render() {
    return (
      <button>
        {this.state.value}
      </button>
    )
  }
}

// ReactDOM.render(
//   <App />
//   document.getElementById('app');
// );