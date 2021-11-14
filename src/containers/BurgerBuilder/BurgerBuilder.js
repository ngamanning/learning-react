import React, { Component, Suspense } from "react";
import Wrapper from "../../hoc/Wrapper";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import axios from "../../axios-order";
import Spinner from "../../components/UI/Spinner/Spinner";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import AsyncComponent from "../../hoc/AsyncComponent";

const AsyncOrderSummary = AsyncComponent(() => {
  return import("../../components/OrderSummary/OrderSummary");
});
// With React lazy - must use default export
const OrderSummary = React.lazy(() => {
  return import("../../components/OrderSummary/OrderSummary");
});

const INGREDIENT_PRICE = {
  cheese: 50,
  meat: 300,
  bacon: 150,
  vegetables: 100,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      meat: 0,
      bacon: 0,
      vegetables: 0,
    },
    totalPrice: 200,
    purchasable: false,
    purchasing: false,
    loading: false,
  };

  updatePurchase = (ingredients) => {
    const sumIngredients = Object.keys(ingredients)
      .map((key) => ingredients[key])
      .reduce((sum, el) => sum + el, 0);
    this.setState({
      purchasable: sumIngredients > 0,
    });
  };

  addIngredient = (type) => {
    const newIngredientCount = this.state.ingredients[type] + 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = newIngredientCount;
    const updatedPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    this.setState({ ingredients: updatedIngredient, totalPrice: updatedPrice });
    this.updatePurchase(updatedIngredient);
  };

  removeIngredient = (type) => {
    if (this.state.ingredients[type] === 0) return;
    const newIngredientCount = this.state.ingredients[type] - 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = newIngredientCount;
    const updatedPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
    this.setState({ ingredients: updatedIngredient, totalPrice: updatedPrice });
    this.updatePurchase(updatedIngredient);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  cancelPurchaseHandler = () => {
    this.setState({ purchasing: false });
  };

  continuePurchase = () => {
    this.setState({ loading: true });
    axios
      .post("/orders.jsons", {
        ingredients: this.state.ingredients,
        price: this.state.totalPrice,
        customer: {
          name: "Max",
          address: {
            street: "Teststreet 1",
            zipCode: "12345",
            country: "Germany",
          },
        },
      })
      .then((response) => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients,
    };
    for (const key in disableInfo) {
      disableInfo[key] = disableInfo[key] === 0;
    }

    let orderSummary = (
      <AsyncOrderSummary
        ingredients={this.state.ingredients}
        total={this.state.totalPrice}
        cancel={this.cancelPurchaseHandler}
        continue={this.continuePurchase}
      />
    );

    if (this.state.loading) orderSummary = <Spinner />;

    let orderSummaryWithReactLazy = (
      <OrderSummary
        ingredients={this.state.ingredients}
        total={this.state.totalPrice}
        cancel={this.cancelPurchaseHandler}
        continue={this.continuePurchase}
      />
    );   

    return (
      <Wrapper>
        <Modal
          show={this.state.purchasing}
          modalClose={this.cancelPurchaseHandler}
        >
          {orderSummary}
          <Suspense fallback={<Spinner />}>
              {orderSummaryWithReactLazy}
          </Suspense>         
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addHandler={this.addIngredient}
          removeHandler={this.removeIngredient}
          disableInfo={disableInfo}
          totalPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchaseHandler={this.purchaseHandler}
        />
      </Wrapper>
    );
  }
}
export default WithErrorHandler(BurgerBuilder, axios);
