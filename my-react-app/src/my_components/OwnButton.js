import React, { Component } from 'react';

class OwnButton extends Component {
    constructor() {
        super();
        this.state = {  

        };
    }
    inChanger(){
        this.props.whenClick();
    }
    render() {
        return (
            <button onClick={this.inChanger.bind(this)} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {this.props.caption}
  </button>
        );
    }
}

export default OwnButton;