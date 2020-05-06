// 三千鸦杀宣传图，点击进入下载客户端路由模块
// 完成1.0
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class PromotImg extends Component {
  render() {
    return (
      <nav>
        <NavLink to={"/client"}>
          <img
            style={style.img}
            src={require("../../assets/img/三千鸦杀.jpg")}
            alt=""
          />
        </NavLink>
      </nav>
    );
  }
}
const style = {
  img: {
    width: "100%",
    display: "block",
  },
};
