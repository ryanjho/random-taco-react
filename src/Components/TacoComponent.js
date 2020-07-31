import React, { Component } from 'react';

class TacoComponent extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.component.name}</p>
                <p>{this.props.component.recipe}</p>
            </div>
        );
    }
}

export default TacoComponent;