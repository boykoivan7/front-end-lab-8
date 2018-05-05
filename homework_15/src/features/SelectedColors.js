import React, { Component } from 'react';

export default class SelectedColors extends Component {
    render () {
        return (
        <div class="selected-colors">
            {this.props.colors.length > 0 ? 
                this.props.colors.map((color, index) => (
                    <div key={color.id} className="selected" style={{background: color.color}}><a href="#" class="deleteButton" onClick={() => this.props.removeColor(color)}><i className="material-icons">clear</i></a></div>
                ))
                :
                <React.Fragment>
                    <div className="no-selected light-violet"></div>
                    <div className="no-selected light-blue"></div>
                    <div className="no-selected violet"></div>
                </React.Fragment>
            }
        </div>
        )
    }
}