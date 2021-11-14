import React, { Component, Fragment } from "react";
import Modal from "../../components/UI/Modal/Modal";

const WithErrorHandler = (Children, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentDidMount() {
      axios.interceptors.request.use((req) => {
        console.log("Request is being sent...");
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
          return Promise.reject(error);
        }
      );
    }
    render() {
      return (
        <Fragment>
          <Children {...this.props} />
          <Modal show={this.state.error}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
        </Fragment>
      );
    }
  };
};
export default WithErrorHandler;
