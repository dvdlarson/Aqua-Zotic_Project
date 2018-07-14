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
       
           
         
              <img src="https://www.domashnilubimci.com/uploads/blog/6eee858dda6fc77cda3190a0f43b6630.jpg" width="100%" height="900" alt="Internet"/>
    
          <div className="jumbotron">
      
      
       
          </div> 
          
      </div> 
  
            );
      }
}
export default Home;
