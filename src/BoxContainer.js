import React, {Component} from 'react';
import './BoxContainer.css';
import Box from './Box';

class BoxContainer extends Component{
    static defaultProps = {
        numBoxes : 18
    }
    render(){
        const boxes = Array.from({ length: this.props.numBoxes}).map(() =>(
            <Box />
        ))
        return(
        <div className='BoxContainer'>{boxes}</div>
        )
    }
}

export default BoxContainer;