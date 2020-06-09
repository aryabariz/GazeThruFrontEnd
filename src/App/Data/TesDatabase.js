import React, {Component} from 'react';
import '../Layout/Style.css';

class TestDatabase extends Component {

    constructor(props){
        super(props);
        this.state ={
          posters: [],
          isLoaded: false,
        }
      }
  
    componentDidMount() {
        fetch('https://5edf40429ed06d001696cf4a.mockapi.io/Poster')
            .then(res => res.json())
            .then(json => {
                    this.setState({
                        isLoaded: true,
                        posters: json,
                    })
            });
      }

    render(){
        var {isLoaded, posters} =this.state;
        if (!isLoaded){
            return <div ClassName="Body">
                LOADING BOSS
            </div>;
        }
        else {

        
        return (
            <body className="Body">
                    Gambar
                    {posters.map(poster =>(
                        <div key={poster.id}>
                            <img class="ui fluid image" src={poster.image} alt="poster"/>
                        </div>
                    ))}
                
            </body>
            );
        }
    }
    }
    export default TestDatabase