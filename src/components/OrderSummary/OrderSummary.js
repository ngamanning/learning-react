import React, { Component } from "react";
import Button from "../UI/Button/Button";

export default class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("Order summary did update");
  }  
  render() {
    const { ingredients } = this.props;
    return (
      <React.Fragment>
        <ul>
          {Object.keys(ingredients).map((key) => {
            return (
              <li key={key}>
                <span>
                  {key} : {ingredients[key]}
                </span>
              </li>
            );
          })}
        </ul>
        <p>Total: ${(this.props.total / 100).toFixed(2)}</p>
        <Button btnType="danger" clicked={this.props.cancel}>
          CANCEL
        </Button>
        <Button btnType="success" clicked={this.props.continue}>
          ORDER
        </Button>
      </React.Fragment>
    );
  }
}
