import React, {Component} from 'react';
import "../Layout/Style.css"
import Slider from "react-slick"

class Pengumuman extends Component {

    constructor(props){
        super(props);
        this.state ={
          Pdatas: [],
        }
      }
  
    componentDidMount() {
        fetch('https://5edf40429ed06d001696cf4a.mockapi.io/Poster')
            .then(res => res.json())
            .then(json => {
                    this.setState({
                        Pdatas: json,
                    })
            });
      }

    render(){
        var { Pdatas} =this.state;

        const settings ={
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slodesToScroll: 1, 
            arrows: false,
            autoplay: true,
            autoplaySpeed: 20000,
            

        };
        
        return (
            <div class="TextKonten TextInformasi">
                <Slider {...settings}>
                {Pdatas.map(Pdata =>(
                    <p key={Pdata.id}>
                        {Pdata.pengumuman}
                         </p>
                                     
                ))}
                </Slider>
            </div>
            );
        }
    }
    
    export default Pengumuman