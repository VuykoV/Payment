import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: 100,
            left: 100
        };
    }

    random(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    yes () {
        alert('мы так и думали')
    };

    no =() => {
        this.setState({
            top: this.random(window.screen.height),
            left: this.random(window.screen.width)
        })
    };

    render() {

        const {top, left} = this.state;

    return (
      <div className="div">
        <text children="вас устраивает ваша зарплата?" className="question"/>
        <button
            children="да"
            onClick={this.yes}
        />
        <button
            children="нет"
            style={{top, left}}
            onMouseEnter={this.no}
        />
      </div>
    );
  }
}

export default App;
