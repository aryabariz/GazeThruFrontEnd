import React, {Component} from 'react';
import { Button, Progress, Segment, Card} from 'semantic-ui-react'
import {Animate} from 'react-move';
import { motion } from "framer-motion";
import _ from 'lodash';

class tombol extends Component{
     state = { percent: 33 }
     increment = () =>
      this.setState((prevState) => ({
        percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
      }))


      render(){
    
        return(
        <div>              
            <Card>
        <Button onClick={this.increment} color={"blue"}>
            Menu 
        </Button>
        <Progress class='ui inverted progress' percent={this.state.percent} indicating attached='bottom' />
        </Card>
        </div>
    );

      }
}
  


export default tombol
