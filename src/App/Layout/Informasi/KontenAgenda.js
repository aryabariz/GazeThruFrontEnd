import React, {Component} from 'react';
import '.././Style.css';
import './StyleInformasi.css'
import { Button, Progress} from 'semantic-ui-react';
import { motion } from "framer-motion";
import logo from '../../Asset/logo.png';
import Slider from "react-slick";


class KontenAgenda extends Component {
    
    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state ={
          Agendas: [],
        }
      }
  
    componentDidMount() {
        fetch('https://5edf40429ed06d001696cf4a.mockapi.io/agenda')
            .then(res => res.json())
            .then(json => {
                    this.setState({
                        Agendas: json,
                    })
            });
      }

    next() {
        this.slider.slickNext();
        }
    previous() {
        this.slider.slickPrev();
        }    

  render(){
    var {Agendas} =this.state;
    const settings ={
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slodesToScroll: 1, 
        arrows: false,
        autoplay: false,
        fade: true,
        speed: 0,

    };

  return (
    <body className='Body'>
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
      </div> 
      <div class="Bawah">
          <div class="ZonaKonten">
                  
                  <Slider ref={c => (this.slider = c)} {...settings}>
                        {Agendas.map (Agenda =>(
                    <div key={Agenda.id}>
                     <div class="GambarAgenda"  > 
                     <img  class="ui fluid image" src={Agenda.image_agenda} alt="poster"/>
                     </div>
                     <p class="TextHitamJudul KeteranganAgenda BatasAtas">Judul Agenda</p>
                    <p class="FontJudul KeteranganAgenda">{Agenda.nama_agenda}</p>
                    <p class="TextHitamJudul SpacerAgenda KeteranganAgenda">Waktu & Tempat</p>
                    <p class="FontTextAgenda WaktuTempat KeteranganAgenda">{Agenda.nama_agenda} <br></br> {Agenda.tanggal_agenda}<br></br> {Agenda.jam_agenda} </p>
                    <p class="TextHitamJudul SpacerAgenda KeteranganAgenda">Keterangan</p>
                    <p class="FontTextAgenda KetAgenda KeteranganAgenda">{Agenda.nama_agenda}</p>
                    </div>
                     
                    
                ))}
                </Slider>
                </div>
                
                
                    
                     
          
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
                top : '9.74%',
                left : '6.56%',
              }}
              >             
                  
              <Button className="Button" color={"blue"} onClick={this.previous} >
                  <p id="FontButton">Sebelumnya</p>
              </Button>
              <Progress class='ui inverted progress' percent={20} indicating attached='bottom' />             
          </motion.div>

          <motion.div     
              animate={{
                y:-400,
                
              }}
              transition={{
                yoyo: Infinity,
                duration: 5,
              }}
              style={{
                position : 'absolute',
                bottom : '31.9%',
                right : '6.56%',
              }}
              >             
                  
              <Button className="Button" color={"blue"} onClick={this.next} >
                  <p id="FontButton">Berikutnya</p>
              </Button>
              <Progress class='ui inverted progress' percent={20} indicating attached='bottom' />             
          </motion.div>

      </div>

     
    </body>
  );
}
}


export default KontenAgenda;