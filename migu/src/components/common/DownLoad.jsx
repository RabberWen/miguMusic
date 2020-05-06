import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class DownLoad extends Component {
  render() {
    return (
      <div>
        <img
          onClick={() => this.props.history.push("/client")}
          style={style.img}
          src={require("../../assets/img/logo.png")}
          alt=""
        />
      </div>
    );
  }
}
export default withRouter(DownLoad);
const style = {
  img: {
    display: "block",
    width: "50px",
    height: "50px",
    position: "fixed",
    right: "8px",
    borderRadius: "10px",
    bottom: "43%",
  },
};
