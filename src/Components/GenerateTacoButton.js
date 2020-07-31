import React, { Component } from 'react'

export class GenerateTacoButton extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input type="submit" value="Get Taco" />
                </form>
            </div>
        )
    }
}

export default GenerateTacoButton;