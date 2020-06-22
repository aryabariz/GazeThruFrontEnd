import React, {Component} from 'react';
import { Progress, Button } from 'semantic-ui-react';
import '../Layout/Style.css';
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";



class TestValue extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            ybtn1:[],
            xbtn1:[]};
            
        this.divRef= React.createRef();
      }
    componentDidMount() {
        const styles = window.getComputedStyle(this.divRef.current);
        //const matrix = styles.transform|| styles.webkitTransform || styles.mozTransform;
        //const ubah = matrix.match(/matrix.*\((.+)\)/);
        //const ubah = new window.WebKitCSSMatrix(styles.transform);

        const interval = setInterval(() => {
            //console.log(styles.transform.match(/(-?[0-9.]+)/g));
            //console.log(styles.transform.split('(')[1].split(')')[0].split(',')[5]);
            this.setState({
                xbtn1: styles.webkitTransform.match(/(-?[0-9.]+)/g)[4],
                xbtn2: styles.webkitTransform.match(/(-?[0-9.]+)/g)[5],
            })
          }, 100);
          return () => clearInterval(interval);

        
      }
    
      

      
    componentWillUnmount() {
        clearInterval(this.interval);
      }

    render(){
        

    return (


        

      <body className='Body'>
         <div>Nilai x : {Math.round(this.state.xbtn1)}
         Nilai y : {Math.round(this.state.xbtn2)}</div> 
        <motion.div     
      animate={{
        x:400,
        y:200,
        
      }}
      transition={{
        yoyo: Infinity,
        duration: 5,
      }}
      style={{
        position : 'absolute',
        top : '200px',
        left : '200px',
      }}
       ref={this.divRef}
       
       id="ButtonSatu">             
          
      <Button className="Button" color={"blue"} >
          <p id="FontButton">Informasi</p>
      </Button>
      <Progress class='ui inverted progress' percent={100} indicating attached='bottom' />
      
      </motion.div>
      

       
      </body>
    );
  }
}

  
  export default TestValue;