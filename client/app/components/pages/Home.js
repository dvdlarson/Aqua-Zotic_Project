import React, {Component} from "react";
import { Player } from 'video-react';

class Home extends Component {
      constructor(props) {
        super(props);
    
        this.state = {
          products: [],
          formIsVisible:false
        };

      
    //this.addProduct = this.addProduct.bind(this);
  }
      
  render(){
        return (
              
                  <div className="jumbotron">
                  <h1>Aqua-Zotic</h1>
                  </div> 
  
            );
      }
}
export default Home;
