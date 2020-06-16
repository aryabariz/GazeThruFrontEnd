import React, {Component} from 'react';
import '../.././Style.css';
import '.././StylePeta.css'
import { Button, Progress} from 'semantic-ui-react';
import { motion } from "framer-motion";
import logo from '../../../Asset/logo.png';
import Slider from 'react-slick';

class LantaiTigaBarat extends Component {
    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state ={
          Prestasis: [],
        }
      }
  
    componentDidMount() {
        fetch('https://5edf40429ed06d001696cf4a.mockapi.io/agenda')
            .then(res => res.json())
            .then(json => {
                    this.setState({
                        Prestasis: json,
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
    var {Prestasis} =this.state;
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
                        {Prestasis.map (Prestasi =>(
                    <div key={Prestasi.id}>
                     <div class="GambarRuang centerImage "  > 
                     <img  class="ui fluid image " src={Prestasi.image_agenda} alt="poster"/>
                     </div>
                    <p class="NamaRuang">{Prestasi.nama_agenda}</p>
                    <p class="FontTextRuang TextKetRuang">{Prestasi.nama_agenda}</p>
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


export default LantaiTigaBarat;