import React, { Component } from 'react';

export default class Filter extends Component {
    render () {
        return (
            <div autoFocus class="filter"><input placeholder="Color's name, tags." type="text" onChange={this.props.handleSearch} /></div>

        )
    }
}