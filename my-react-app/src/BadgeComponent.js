import React, { Component } from 'react';

class BadgeComponent extends Component {
    state = {  }
    render() {
        return (
           
            <button type="button" class="btn btn-primary">
            Notifications <span class="badge badge-light">{this.props.badgeNumber}</span>
            </button>
            
        );
    }
}

export default BadgeComponent;