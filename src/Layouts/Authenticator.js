import React from "react";
import { Redirect } from "react-router-dom";

import { Icon } from "antd";

import { systemPing } from "../Models/Auth";

export default class Authenticator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      authenticated: false,
      errorMessage: "",
      status: null,
      newLink: null
    };
  }

  componentDidMount() {
    this.authenticate();
  }

  authenticate = () => {
    systemPing({
      onSuccess: function (data) {
        if (this.props.reverse) {
          this.setState({
            loading: false,
            authenticated: true,
            newLink: "/parking-spots"
          });
        } else {
          this.setState({
            loading: false,
            authenticated: true
          });
        }
      }.bind(this),
      onError: function (data) {
        if (!this.props.reverse) {
          this.setState({
            newLink: "/login"
          });
        } else {
          this.setState({
            loading: false,
            authenticated: false
          });
        }
      }.bind(this)
    });
  };

  renderLoader() {
    return (
      <div className="loader-container">
        <Icon type="loading" />
        <p>Please wait, loading...</p>
      </div>
    );
  }

  render() {
    if (this.state.newLink) {
      return (
        <Redirect
          to={{
            pathname: this.state.newLink
          }}
        />
      );
    }

    if (this.state.loading) {
      return this.renderLoader();
    }

    return <div>{this.props.children}</div>;
  }
}
