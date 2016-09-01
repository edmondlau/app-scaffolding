import React from 'react';
import ReactDOM from 'react-dom';
import './app.less';

class App extends React.Component {
    render() {
        return <div className="App">
            <h2>Hello World from React!</h2>
        </div>;
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
