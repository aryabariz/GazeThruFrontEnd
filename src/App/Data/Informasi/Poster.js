import React, {Component} from 'react';
import "../../Layout/Style.css";
import Slider from "react-slick";


class Poster extends Component {

    constructor(props){
        super(props);
        this.state ={
          posters: [],
        }
      }
  
    componentDidMount() {
        fetch('https://gazethru-project.herokuapp.com/api/poster/')
            .then(res => res.json())
            .then(json => {
                    this.setState({
                        isLoaded: true,
                        posters: json,
                    })
            });
      }
      


    render(){
        var {posters} =this.state;
        
        const settings ={
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slodesToScroll: 1, 
            arrows: false,
            autoplay: true,
            autoplaySpeed: 20000,
            fade: true,

        };

        return (
            <div class="ContainerAutoSlide">
            <Slider {...settings}> 
                {posters.map(poster =>(
                <div key={poster.id}>
                    <img  class="ui fluid image" src={poster.poster_image} alt="poster"/>                 
                
                </div>
                ))}
            </Slider> 
            </div>
            )
        }
    }
    
    export default Poster