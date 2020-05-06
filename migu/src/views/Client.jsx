import React, { Component } from "react";

export default class Client extends Component {
  render() {
    return (
      <div style={style.div}>
        <img style={style.img} src={require("../assets/img/down_0.jpg")} />
        <img style={style.img} src={require("../assets/img/down_1.png")} />
        <img style={style.img} src={require("../assets/img/down_2.png")} />
        <img style={style.img} src={require("../assets/img/down_3.png")} />
        <img style={style.img} src={require("../assets/img/down_4.png")} />
        <img style={style.img} src={require("../assets/img/down_5.png")} />
        <img style={style.img} src={require("../assets/img/down_6.png")} />
        <img style={style.img} src={require("../assets/img/down_7.png")} />
        <img style={style.btn} src={require("../assets/img/down_btn.png")} />
      </div>
    );
  }
}
const style = {
  div: {
    position: "relative",
  },
  img: {
    width: "100%",
    display: "block",
  },
  btn: {
    width: "43%",
    position: "fixed",
    index: "2",
    bottom: "18%",
    transform: "translate(-50%,-50%)",
    margin: "0 auto",
  },
};
