import React, { Component } from 'react';

export default class AmountOfColorItems extends Component {
    render () {
        return (
        <div class="colors-amount">Colors: {this.props.amount}</div>
        )
    }
}