import React, {Component} from 'react';
import './Style.css';
import { Button, Progress, Segment, Card} from 'semantic-ui-react';
import { motion } from "framer-motion";
import logo from '../Asset/logo.png';

class ContentVideo extends Component {
    render(){
        return (

            <body className="Body">
                <div class="LogoTengah">
                    <img class="ui fluid image" src={logo} alt="logo"/>
                </div>
      
                <motion.div  
        
                    animate={{
                    x:400,
                    
                    }}
                    transition={{
                    yoyo: Infinity,
                    duration: 5,
                    }}
                    
                    className='TombolBack'>             
                        
                    <Button className="Button" color={"red"} >
                        KEMBALI
                    </Button>
                    <Progress class='ui inverted progress' percent={100} indicating attached='bottom' />
                
                </motion.div>

                <div className="JudulHalaman">
                    Video Player
                </div>
               
                <motion.div    
                    animate={{
                        y:-400,
                        
                    }}
                    transition={{
                        yoyo: Infinity,
                        duration: 5,
                    }}
                    style={{
                    
                        position:'absolute',
                        left:'101px',
                        top: '706px',
                        width: '286px',
                        height: '64px'
                    }}
                    >             
                        
                    <Button className="Button" color={"blue"} >
                        SEBELUMNYA
                    </Button>
                    <Progress class='ui inverted progress' percent={20} indicating attached='bottom' />
                
                </motion.div>

                <motion.div    
                    animate={{
                        y:400,
                        
                    }}
                    transition={{
                        yoyo: Infinity,
                        duration: 5,
                    }}
                    style={{
                    
                        position:'absolute',
                        top: '370px',
                        right: '59px',
                        width: '286px',
                        height: '64px'
                    }}
                    >             
                        
                    <Button className="Button" color={"blue"} >
                        SELANJUTNYA
                    </Button>
                    <Progress class='ui inverted progress' percent={20} indicating attached='bottom' />


                </motion.div>
                <div
                style={{
                    position: 'absolute',
                    width: '1051px',
                    height: '592px',
                    left: '435px',
                    top: '237px',

                    background: '#D8D8D8',
                    border: '1px solid #979797',
                }}>
                    Ini video
                </div>
                
            </body>
        );
}
}

export default ContentVideo

