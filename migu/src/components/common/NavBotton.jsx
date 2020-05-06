// 底部导航组件
import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
class NavBotton extends Component {
  render() {
    return (
      <React.Fragment>
        <nav style={style.nav}>
          <NavLink style={style.a} to={"/client"}>
            客户端
          </NavLink>
          <NavLink style={style.a} to={"/service"}>
            在线客服
          </NavLink>
          <NavLink style={style.a} to={"/user"}>
            个人中心
          </NavLink>
          <NavLink style={style.a} to={"/"}>
            返回首页
          </NavLink>
        </nav>
      </React.Fragment>
    );
  }
}
export default withRouter(NavBotton);
const style = {
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
    width: "100%",
    background: "#fff",
  },
  a: {
    width: "25%",
    height: "100%",
    lineHeight: "40px",
    fontSize: "15px",
    color: "#333",
  },
};
