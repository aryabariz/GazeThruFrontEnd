import React, {Component} from 'react';
import '.././Style.css';
import './StyleInformasi.css'
import { Button, Progress, Segment, Card} from 'semantic-ui-react';
import { motion } from "framer-motion";
import logo from '../../Asset/logo.png';
import gmbrprestasi from '../../Asset/GmbrPrestasi.png'


class Prestasi extends Component {
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
                    <div class="IlusPrestasi">
                        <img class="ui fluid image" src={gmbrprestasi} alt="gmbrprestasi"/>
                    </div>

                    <div id="pengumumankedua">
                    <p class="PosisiJudulInformasi TextHitamNotif">Keterangan</p>
                        <p class="TextInformasi TextKonten">   Kejuaraan nasional merupakan penghargaan yang didapat dalam negeri Indonesia <br></br>
                                                                Kejuaraan internasional didapat diluar negeri Indonesia
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
                            <p id="FontButton">Nasional</p>
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
                            <p id="FontButton">Internasional</p>
                        </Button>
                        <Progress class='ui inverted progress' percent={20} indicating attached='bottom' />             
                    </motion.div>

                </div>
      </div> 

            </body>
        );
}
}

export default Prestasi

