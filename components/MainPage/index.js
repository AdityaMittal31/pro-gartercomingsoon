import React from 'react';
import Img from '../Images/Coming_Soon.jpg'
import './style.css';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
const MainPage = () => {
    return (
        <div class = "row">
            <div class = "column">
            <img  src={Img} width="90%"/>
            </div>
            <div class = "column">
            <div className="container">
               <h1> We are Launching soon!
               </h1>
               
            </div>
            <div className="st">
            India's first Clinical Career Counselling Initiative
            </div>
            <div className="st2">
            <h2>Book your free session today with us</h2>
            </div>
           
            <div className="form-group">
            <InputGroup className="mb-3 custom-form">
            <FormControl
              placeholder="Your Email"
              className="custom-input"
            />
              <Button className="button">Subscibe</Button>
          </InputGroup>
       </div>
            
            
           
            </div>
        </div>
    )
}
export default MainPage;
