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
            btnx1: [],
            btny1: [],
            data: [],
            btnstate: [],
            Xeye: [],

          };
            
        this.divRef= React.createRef();
      }
    
      
  
    componentDidMount() {
        
      this.connect();

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
                ybtn1: styles.webkitTransform.match(/(-?[0-9.]+)/g)[5],
                btnx1: Math.round(this.state.xbtn1),
                btny1: Math.round(this.state.ybtn1),
            })}catch (error) {
              
              console.log(error)
          }
  
          }, 1000);
          
          return () => clearInterval(interval);  
          
      }
      

      
      connect = () => {
        var ws = new WebSocket("ws://192.168.43.228:8000/gazethru");
        
        ws.onopen = () => {
          const interval = setInterval(() => {
            //console.log(styles.transform.match(/(-?[0-9.]+)/g));
            //console.log(styles.transform.split('(')[1].split(')')[0].split(',')[5]);
            try{
              var json = JSON.stringify({
                Xbtn1 : this.state.btnx1,
                Ybtn1 : this.state.btny1,                 
              })
              ws.send(json)
              console.log('Sent:'+ json);
               
            }catch (error) {
              
              console.log(error)
          }

          }, 1000);

          
        ws.onmessage = evt => {
          // listen to data sent from the websocket server
          const message = JSON.parse(evt.data)
          this.setState({data : message.buttonId})
          console.log(this.state.data)

    
          }

          return () => clearInterval(interval);  
          
  
         
        };

        ws.onclose = () => {
          console.log('disconnected')
  
          };
        
       
    };
   
    
    

      

      
    componentWillUnmount() {
        clearInterval(this.interval);
      }



    render(){
       

    return (


        

      <body className='Body'>
        
         <div>Nilai x : {this.state.btnx1} <br/>
         Nilai y : {this.state.btny1} <br/>
         print data: {this.state.data}</div> 
        <motion.div     
      animate={{
        x:100,
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
      <Progress class='ui inverted progress' percent={this.state.data} indicating attached='bottom' />
      
      </motion.div>
      

       
      </body>
    );
  }
}

  
  export default TestValue;