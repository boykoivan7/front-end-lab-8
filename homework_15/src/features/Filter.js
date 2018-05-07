import React, { Component } from 'react';

export default class Filter extends Component {
    render () {
        return (
            <div class="filter"><input autoFocus placeholder="Color's name, tags." type="text" onChange={this.props.handleSearch} /></div>
        )
    }
}