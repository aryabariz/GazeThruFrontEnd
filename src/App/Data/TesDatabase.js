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
        fetch('https://gazethru-project.herokuapp.com/api/pengumuman/')
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
            return <div>
                LOADING BOSS
            </div>;
        }
        else {

        
        return (
            <body className="Body">
                    Gambar
                    {posters.map(poster =>(
                        <div key={poster.id}>
                            <img class="ui fluid image" src={poster.pengumuman_text} alt="poster"/>
                            <p>{poster.pengumuman}</p>
                        </div>
                    ))}
                
            </body>
            );
        }
    }
    }
    export default TestDatabase