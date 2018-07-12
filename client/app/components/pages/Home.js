import React, {Component} from "react";
import { Player } from 'video-react';
import Header from '../Header/Header';


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
              
            <div>
            <Header/ >
       
           
         
              <img src="https://i.ytimg.com/vi/--ztGaF4m2U/maxresdefault.jpg " width="1800" height="900" alt="Internet"/>
    
          <div className="jumbotron">
      
      
       
          </div> 
          
      </div> 
  
            );
      }
}
export default Home;
