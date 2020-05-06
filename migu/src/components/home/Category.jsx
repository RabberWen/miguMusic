// 搜索下方分类,不同分类进入不同路由模块
// 完成1.0
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Category extends Component {
  render() {
    return (
      <ul style={style.ul}>
        <li
          style={style.li}
          onClick={() => this.props.history.push("/playList")}
        >
          <img style={style.img} src={require("../../assets/img/歌单.png")} />
          <span style={style.span}>歌单</span>
        </li>
        <li style={style.li} onClick={() => this.props.history.push("/video")}>
          <img style={style.img} src={require("../../assets/img/现场.png")} />
          <span style={style.span}>现场</span>
        </li>
        <li
          style={style.li}
          onClick={() => this.props.history.push("/musicTop")}
        >
          <img style={style.img} src={require("../../assets/img/榜单.png")} />
          <span style={style.span}>榜单</span>
        </li>
        <li style={style.li} onClick={() => this.props.history.push("/client")}>
          <img
            style={style.img}
            src={require("../../assets/img/数字专辑.png")}
          />
          <span style={style.span}>数字专辑</span>
        </li>
        <li style={style.li} onClick={() => this.props.history.push("/crbt")}>
          <img style={style.img} src={require("../../assets/img/彩铃.png")} />
          <span style={style.span}>彩铃</span>
        </li>
      </ul>
    );
  }
}
export default withRouter(Category);
const style = {
  ul: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5% auto",
    height: "76px",
  },
  img: {
    width: "50%",
    display: "block",
  },
  span: {
    fontSize: "15px",
    color: "#333",
  },
  li: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "20%",
    height: "100%",
    fontSize: "14px",
  },
};
