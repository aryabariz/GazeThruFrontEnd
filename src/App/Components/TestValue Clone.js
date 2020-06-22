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
            xbtn1:[],
            ws: null,
          };
            
        this.divRef= React.createRef();
      }

  
    componentDidMount() {
        //this.connect();
        const styles = window.getComputedStyle(document.getElementById("ButtonSatu"));
        //const matrix = styles.transform|| styles.webkitTransform || styles.mozTransform;
        //const ubah = matrix.match(/matrix.*\((.+)\)/);
        //const ubah = new window.WebKitCSSMatrix(styles.transform);
        const interval = setInterval(() => {
            //console.log(styles.transform.match(/(-?[0-9.]+)/g));
            //console.log(styles.transform.split('(')[1].split(')')[0].split(',')[5]);
            try{
            this.setState({
                xbtn1: styles.webkitTransform.match(/(-?[0-9.]+)/g)[4],
                xbtn2: styles.webkitTransform.match(/(-?[0-9.]+)/g)[5],
                btn1: Math.round(this.state.xbtn1),
                btn2: Math.round(this.state.xbtn2),
            })}catch (error) {
              
              console.log(error)
          }
  
          }, 10000);
          
          return () => clearInterval(interval);  
          
      }

      
      connect = () => {
        var ws = new WebSocket("ws://localhost:3000");
        let that = this; // cache the this
        var connectInterval;
    
        // websocket onopen event listener
        ws.onopen = () => {
            console.log("connected websocket main component");
    
            this.setState({ ws: ws });
    
            that.timeout = 250; // reset timer to 250 on open of websocket connection 
            clearTimeout(connectInterval); // clear Interval on on open of websocket connection
        };
    
        // websocket onclose event listener
        ws.onclose = e => {
            console.log(
                `Socket is closed. Reconnect will be attempted in ${Math.min(
                    10000 / 1000,
                    (that.timeout + that.timeout) / 1000
                )} second.`,
                e.reason
            );
    
            that.timeout = that.timeout + that.timeout; //increment retry interval
            connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
        };
    
        // websocket onerror event listener
        ws.onerror = err => {
            console.error(
                "Socket encountered error: ",
                err.message,
                "Closing socket"
            );
    
            ws.close();
        };

        ws.sendMessage=()=>{
          try {
            ws.send(JSON.stringify({
              Xbtn1 : this.state.btn1,
              Xbtn2 : this.state.btn2,
            }));
            
        } catch (error) {
            console.log(error) 
        }
        }
    };
    
    check = () => {
      const { ws } = this.state;
      if (!ws || ws.readyState === WebSocket.CLOSED) this.connect(); //check if websocket instance is closed, if so call `connect` function.
    };
    
    
    

      

      
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
        x:100,
        y:100,
        
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