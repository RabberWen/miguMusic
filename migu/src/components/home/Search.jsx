// 搜索组件，点击进入搜索路由
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Search extends Component {
  render() {
    return (
      <NavLink to={"/search"}>
        <div style={style.search}>
          <i className={"iconfont icon-fangdajing"} style={style.i}></i>搜索
        </div>
      </NavLink>
    );
  }
}
const style = {
  search: {
    width: "100%",
    height: "8%",
    color: "#999",
    fontSize: "14px",
    lineHeight: "50px",
  },
  i: {
    fontSize: "20px",
    margin: "3px",
  },
};
