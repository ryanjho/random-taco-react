import React, { Component } from 'react';
import TacoComponent from './TacoComponent';
import GenerateTacoButton from './GenerateTacoButton';

class Taco extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        taco: null
      };
    }
    async retrieveData() {
      try {
        const result = await fetch(
          "https://taco-randomizer.herokuapp.com/random/?full-tack=true"
        );
        const taco = await result.json();
        this.setState({ taco: taco }, () => {
          console.log(Object.entries(this.state.taco));
        });
      } catch (err) {
        console.log(err);
      }
    }
    handleSubmit = async (event) => {
      this.retrieveData();
    };
    componentDidMount() {
      this.retrieveData();
    }
    render() {
      if (this.state.taco) {
        return (
          <div>
            <GenerateTacoButton handleSubmit={this.handleSubmit} />
            {Object.entries(this.state.taco).map((element) => {
              console.log(element);
              return (
                <TacoComponent
                  component={element[1]}
                  title={element[0].toUpperCase()}
                />
              );
            })}
          </div>
        );
      } else {
        return (
          <div>
            <p>Loading Data...</p>
          </div>
        );
      }
    }
  }

export default Taco;

  