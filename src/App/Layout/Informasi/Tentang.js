import React, {Component} from 'react';
import '.././Style.css';
import './StyleInformasi.css'
import { Button, Progress, Segment, Card} from 'semantic-ui-react';
import { motion } from "framer-motion";
import logo from '../../Asset/logo.png';


class Tentang extends Component {
    render(){
        return (

            <body className="Body">
                <div class="Atas">
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
                    className='TombolBack'
                    >             
                        
                    <Button className="Button" color={"red"} >
                        <p id="FontButton">Kembali</p>
                    </Button>

                    <Progress class='ui inverted progress' percent={20} indicating attached='bottom' />
                
                </motion.div>

                <div class="Bawah">
                    <div id="ZonaVideo">

                    </div>

                    <div id="ZonaArtikel">

                    </div>

                    <motion.div     
                        animate={{
                            x:-400,
                            
                        }}
                        transition={{
                            yoyo: Infinity,
                            duration: 5,
                        }}
                        style={{
                            position : 'absolute',
                            bottom : '18.84%',
                            left : '30%',
                        }}
                        >             
                            
                        <Button className="Button" color={"blue"} >
                            <p id="FontButton">Prestasi</p>
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
                            position : 'absolute',
                            bottom : '49.95%',
                            right : '15.32%',
                        }}
                        >             
                            
                        <Button className="Button" color={"blue"} >
                            <p id="FontButton">Prestasi</p>
                        </Button>
                        <Progress class='ui inverted progress' percent={20} indicating attached='bottom' />             
                    </motion.div>

                </div>
      </div> 

            </body>
        );
}
}

export default Tentang

