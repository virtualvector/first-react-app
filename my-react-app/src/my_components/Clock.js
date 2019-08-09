import React, { Component } from 'react';
import OwnButton from './OwnButton';

class Clock extends Component {

    constructor(){
        super();
        this.state={

                show: false,
                caption: "kempi"
        }
    }
    toggler(){
        this.setState({show: !this.state.show})
        console.log("toggle")
    }

    refresh()
    {
        this.setState({d: new Date()})
        
    }
    changeCaption(val){

        this.setState({caption: val})
        this.toggler()
    }
    render() {
        return (
               <div class="dropdown">
                <OwnButton caption={this.state.caption} whenClick={this.toggler.bind(this)}></OwnButton>
                <div class={this.state.show? "dropdown-menu show": "dropdown-menu"} aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" onClick={this.changeCaption.bind(this,"Action")} href="#">Action</a>
                   
                </div>
            </div>
        );
    }
}

export default Clock;