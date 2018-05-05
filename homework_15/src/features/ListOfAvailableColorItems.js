import React, { Component } from 'react';

export default class ListOfAvailableColorItems extends Component {
    render () {
        return (
        <React.Fragment>
        {this.props.colors.length > 0 ? 
        <div className="available-colors">
            {this.props.colors.map((color, index) => (
                <div key={color.id} className="item" style={{background : color.color}}><a href="#" class="addButton" onClick={() => this.props.addColor(color)}><i className="material-icons">add</i> Add</a></div>
            ))}
        </div> : <div className="no-colors">There are no colors found</div>}
        </React.Fragment>
        )
    }
}