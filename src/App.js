import React, { Component } from "react";
import { TextInput, Button, Card, Col } from "react-materialize";
import "./App.css";
import Nav from './component/Navbar';


const female = {
duration: 1,
background: "linear-gradient(to bottom right, rgb(205, 37, 207), rgb(256, 13, 175))",
border: "solid 2px #2B2D41",
color: "white",
}

const male = {
  duration: 1,
  background: "linear-gradient(to bottom right, rgb(65, 77, 247), rgb(56, 103, 255))",
  border: "solid 2px #2B2D41",
  color: "white",
  }


class App extends Component {

  state = {
    female: false,
    male: false,
    height: 0,
    weight: 0, 
    BMI: 0,
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  femaleButton = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      female: !prevState.female,
      male: false
    }));
  }

  maleButton = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      male: !prevState.male,
      female: false
    }));
  }
  
  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  
 
  handleSubmit=(e) => {
    e.preventDefault()
    const weight = this.state.weight
    const height = this.state.height
    const weightCalculation = (weight * 0.45)
    const heightCalculations = (height * 0.025)
    const squarerootOfHeight = (heightCalculations**2)
    const YourBMI = (weightCalculation / squarerootOfHeight)

    this.setState({
      BMI: YourBMI.toFixed(2)
    })
  }



  render() {
    const BMI = this.state.BMI;
    let weightCalc ;
    let weightText;

    if(BMI > 0){
      weightCalc = <div>{BMI}</div>
    } else {
      weightCalc = <div></div>
    }

    if(BMI < 18.5 && BMI > 0){
      weightText = <p className="bmi-text underweight">UnderWeight</p>
    } else if (BMI > 18.5 && BMI < 24.99){
      weightText = <p className="bmi-text normal">Normal</p>
    } else if(BMI > 25 && BMI < 29.9){
      weightText = <p className="bmi-text overweight">Overweight</p>
    } else if (BMI > 30){
      weightText = <p className="bmi-text obese">Obese</p>
    }
      
    
    return (
      <div className="container-App">

       {/* <Nav/>
     */}

      <div className="App">
      <h1 className="title-of-app">Body Mass Index</h1>
    
          <Col m={12} s={12}>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <Card>
            <div className="sex-orientation">

            {this.state.female === true ? 
                        <div onClick={this.femaleButton} style={female} className="sex female"><i className="fas fa-female"></i></div>
                     : <div onClick={this.femaleButton} className="sex female"><i className="fas fa-female"></i></div>
                    }

          {this.state.male === true ? 
                        <div onClick={this.maleButton} style={male} className="sex male"><i className="fas fa-male"></i></div>
                     : <div onClick={this.maleButton} className="sex male"><i className="fas fa-male"></i></div>
                    }                  
            </div>


            <TextInput className="input" placeholder="Weight: lbs" name="weight" onChange={this.handleChange} required/>
            <TextInput className="input" placeholder="Height: in" name="height" onChange={this.handleChange} required/>

            <div>

        

            </div>

            <Button type="submit">Calculate BMI</Button>
            <div className="weight-container"> 
            <h3 className="weightCalc">{weightCalc}</h3>
                    {weightText}
             </div>
           

            </Card>

            </form>
          </Col>
        
  
      </div>
      </div>
     
   
    );

  }
  
}


export default App;
