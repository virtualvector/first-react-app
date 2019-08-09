import React, { Component } from 'react';

class BadgeComponent extends Component {

    constructor(){
        super();
        this.state = {  count: 0 }
        //state concept is important in react
    }

    increment()
    {
          this.setState({count: ++this.state.count})
    }

  


    render() {
        return (
            
            <button  onClick={this.increment.bind(this)}  type="button" class="btn btn-primary">
            Notifications <span class="badge badge-light"> {this.state.count}</span>
            </button>
            
        );
    }
}

export default BadgeComponent;