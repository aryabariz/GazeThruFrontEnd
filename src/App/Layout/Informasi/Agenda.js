import React, {Component} from 'react';
import '.././Style.css';
import './StyleInformasi.css'
import { Button, Progress} from 'semantic-ui-react';
import { motion } from "framer-motion";
import logo from '../../Asset/logo.png';
import gmbragenda from '../../Asset/GmbrAgenda.png'


class Agenda extends Component {
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
                    <div class="IlusAgenda">
                        <img class="ui fluid image" src={gmbragenda} alt="gmbragenda"/>
                    </div>

                    <div id="pengumumankedua">
                        <p class="PosisiJudulInformasi TextHitamNotif">Keterangan</p>
                        <p class="TextInformasi TextKonten">   Agenda Internal merupakan kegiatan yang dikhusukan untuk warga DTETI <br></br>
                                                                Agenda Eksternal merupakan kegiatan yang terbuka untuk umum dan warga DTETI
                        </p>
                    </div>

                    <motion.div     
                        animate={{
                            y: -400,
                            
                        }}
                        transition={{
                            yoyo: Infinity,
                            duration: 5,
                        }}
                        style={{
                            position : 'absolute',
                            top : '25.10%',
                            right : '17.81%',
                        }}
                        >             
                            
                        <Button className="Button" color={"blue"} >
                            <p id="FontButton">Internal</p>
                        </Button>
                        <Progress class='ui inverted progress' percent={20} indicating attached='bottom' />             
                    </motion.div>

                    <motion.div     
                        animate={{
                            y: 400,
                            
                        }}
                        transition={{
                            yoyo: Infinity,
                            duration: 5,
                        }}
                        style={{
                            position : 'absolute',
                            top : '34.13%',
                            right : '17.81%',
                        }}
                        >             
                            
                        <Button className="Button" color={"blue"} >
                            <p id="FontButton">Eksternal</p>
                        </Button>
                        <Progress class='ui inverted progress' percent={20} indicating attached='bottom' />             
                    </motion.div>

                </div>
      </div> 

            </body>
        );
}
}

export default Agenda

