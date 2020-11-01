import React, {Component} from 'react';
import './Box.css';
import {choice} from './helper';

class Box extends Component{
    static defaultProps = {
        Allcolor: ['magenta','red','yellow','purple','black','pink', 'green', 'orange']
    };
    constructor(props){
        super(props);
        this.state = {color: choice(this.props.Allcolor)};
        this.handleClick = this.handleClick.bind(this);
    }
    colorPicker(){
        let newColor;
        do{
            newColor = choice(this.props.Allcolor);
        }while(newColor === this.state.color);
        this.setState(
            {color: newColor}
        )
    }
    handleClick(){
        this.colorPicker();
    }

    render(){
        return(
            <div className="Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>

            </div>
        )
    }
} 

export default Box;