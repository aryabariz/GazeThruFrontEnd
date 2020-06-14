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
        fetch('https://5edf40429ed06d001696cf4a.mockapi.io/petabesar')
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
                   {posters.filter(poster => poster.lantai < 20 && poster.lokasi>30).map(filteredPoster => (
        <li>
          {filteredPoster.namaruang}
        </li>
      ))}
                
            </body>
            );
        }
    }
    }
    export default TestDatabase