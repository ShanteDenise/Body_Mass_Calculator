import React, { Component } from "react";
import { TextInput, Button, Card, Col, Row, Toast} from "react-materialize";
import "./App.css";
import Nav from "./component/Navbar";

const female = {
  duration: 1,
  background: "linear-gradient(to bottom right, rgb(205, 37, 207), rgb(256, 13, 175))",
  border: "solid 2px #2B2D41",
  color: "white"
};

const male = {
  duration: 1,
  background:"linear-gradient(to bottom right, rgb(65, 77, 247), rgb(56, 103, 255))",
  border: "solid 2px #2B2D41",
  color: "white"
};

class App extends Component {
  state = {
    female: false,
    male: false,
    height: 0,
    feet: 0,
    inches: 0,
    weight: 0,
    BMI: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  femaleButton = e => {
    e.preventDefault();
    this.setState(prevState => ({
      female: !prevState.female,
      male: false
    }));
  };

  maleButton = e => {
    e.preventDefault();
    this.setState(prevState => ({
      male: !prevState.male,
      female: false
    }));
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleSubmit = e => {
    e.preventDefault();
    const state = this.state
    const weightCalculation = state.weight * 0.45;
    const feetPlusInchesCalc = state.feet * 12 + parseInt(state.inches)
    const heightCalc = feetPlusInchesCalc * 0.025;
    const squarerootOfHeight = heightCalc ** 2;
    const YourBMI = weightCalculation / squarerootOfHeight;

    this.setState({
      BMI: YourBMI.toFixed(2)
    });
  };

  render() {
    let weightCalc;
    let weightText;
    const values = this.state;
  
    if (values.BMI > 0) {
      weightCalc = <div>{values.BMI}</div>;
    } else {
      weightCalc = <div />;
    }

    if (values.BMI < 18.5 && values.BMI > 0) {
      weightText = <p className="bmi-text underweight">UnderWeight</p>;
    } else if (values.BMI > 18.5 && values.BMI < 24.99) {
      weightText = <p className="bmi-text normal">Normal</p>;
    } else if (values.BMI > 25 && values.BMI < 29.9) {
      weightText = <p className="bmi-text overweight">Overweight</p>;
    } else if (values.BMI > 30) {
      weightText = <p className="bmi-text obese">Obese</p>;
    }

    return (
      <div className="container-App">
        <div className="App">
          <h1 className="title-of-app">Body Mass Index</h1>

          <Col m={12} s={12}>
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <Card>
                <div className="sex-orientation"> 
                {values.female === true ? (
                <div
                      onClick={this.femaleButton}
                      style={female}
                      className="sex female">
                      <i className="fas fa-female" />
                    </div> ) : (
                    <div onClick={this.femaleButton} className="sex female">
                      <i className="fas fa-female" />
                    </div>
                  )}

                  {values.male === true ? (
                    <div
                      onClick={this.maleButton}
                      style={male}
                      className="sex male">
                      <i className="fas fa-male" />
                    </div>
                  ) : (
                    <div onClick={this.maleButton} className="sex male">
                      <i className="fas fa-male" />
                    </div>
                  )}
                </div>
                <TextInput
                  className="input"
                  placeholder="Weight:"
                  name="weight"
                  onChange={this.handleChange}
                  required
                />
                <Row>
                <TextInput
                  className="input-feet"
                  placeholder="Feet"
                  name="feet"
                  onChange={this.handleChange}
                  required
                />
                 <TextInput
                  className="input-inches"
                  placeholder="Inches"
                  name="inches"
                  onChange={this.handleChange}
                  required
                />
                </Row>

                <div />

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
