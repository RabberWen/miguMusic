import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <div style={style.root}>
        {/* 导航栏 */}
        <h2 style={style.h2}>
          <i
            onClick={() => this.props.history.go(-1)}
            style={{ marginLeft: "20px", fontSize: "25px" }}
            className={"iconfont icon-right-angle-copy"}
          ></i>
          <span>个人中心</span>
          <i
            style={{ marginRight: "20px", fontSize: "25px" }}
            className={"iconfont icon-shezhi"}
          ></i>
        </h2>
        {/* 点击登录 */}
        <div style={style.div}>
          <img
            style={style.head}
            src={require("../assets/img/head.png")}
            onClick={() =>
              sessionStorage.userName
                ? false
                : this.props.history.push("/login")
            }
          />
          <h4
            style={style.userName}
            onClick={() =>
              sessionStorage.userName
                ? false
                : this.props.history.push("/login")
            }
          >
            {sessionStorage.userName ? sessionStorage.userName : "点击登录"}
          </h4>
          <div style={style.right}>
            <img
              style={style.vip}
              onClick={() => this.props.history.push("/client")}
              src={require("../assets/img/VIP.png")}
            />
            <img
              style={style.vip}
              onClick={() => this.props.history.push("/client")}
              src={require("../assets/img/BI.png")}
            />
          </div>
        </div>
        {/* 下方链接 */}
        <div style={style.box}>
          <div
            style={style.one}
            onClick={() => this.props.history.push("/client")}
          >
            <img
              style={style.link}
              src={require("../assets/img/我的彩铃.png")}
            />
            <div style={style.outer}>
              <h5 style={style.h5}>我的彩铃</h5>
              <span style={style.span}>随心变换</span>
            </div>
          </div>
          <div
            style={style.one}
            onClick={() => this.props.history.push("/client")}
          >
            <img style={style.link} src={require("../assets/img/客户端.png")} />
            <div style={style.outer}>
              <h5 style={style.h5}>客户端</h5>
              <span style={style.span}>享音乐风采</span>
            </div>
          </div>
          <div
            style={style.one}
            onClick={() => this.props.history.push("/client")}
          >
            <img
              style={style.link}
              src={require("../assets/img/咪咕特会.png")}
            />
            <div style={style.outer}>
              <h5 style={style.h5}>咪咕特会</h5>
              <span style={style.span}>海量优惠</span>
            </div>
          </div>
          <div
            style={style.one}
            onClick={() => this.props.history.push("/client")}
          >
            <img
              style={style.link}
              src={require("../assets/img/白金会员.png")}
            />
            <div style={style.outer}>
              <h5 style={style.h5}>白金会员</h5>
              <span style={style.span}>免费下载</span>
            </div>
          </div>
          <div
            style={style.one}
            onClick={() => this.props.history.push("/client")}
          >
            <img
              style={style.link}
              src={require("../assets/img/成长体系.png")}
            />
            <div style={style.outer}>
              <h5 style={style.h5}>成长体系</h5>
              <span style={style.span}>专属特权</span>
            </div>
          </div>
          <div
            style={style.one}
            onClick={() => this.props.history.push("/client")}
          >
            <img
              style={style.link}
              src={require("../assets/img/咪咕视频.png")}
            />
            <div style={style.outer}>
              <h5 style={style.h5}>咪咕视频</h5>
              <span style={style.span}>让生活更有戏</span>
            </div>
          </div>
        </div>
        <this.PromotImg></this.PromotImg>
        <this.DownLoad></this.DownLoad>
      </div>
    );
  }
}
const style = {
  root: {
    background: "#f8f8f8",
    height: "100%",
    position: "relative",
  },
  h2: {
    height: "40px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "19px",
    color: "#333",
    background: "#fff",
  },
  div: {
    width: "100%",
    height: "90px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
  },
  head: {
    height: "55px",
    width: "55px",
    borderRadius: "50%",
    background: "#eee",
  },
  vip: {
    width: "135px",
    height: "30px",
    marginBottom: "5px",
  },
  userName: {
    height: "50px",
    width: "150px",
    textAlign: "left",
    color: "#000",
    fontSize: "19px",
    fontWeight: "900",
    margin: "0 5px",
    lineHeight: "50px",
  },
  right: {
    width: "135px",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "38%",
    flexFlow: "wrap",
    width: "100%",
  },
  one: {
    margin: "5px 0 0 0",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "49%",
    height: "60px",
  },
  outer: {
    width: "120px",
    textAlign: "left",
  },
  h5: {
    color: "#333",
    fontSize: "15px",
    fontWeight: "900",
    marginBottom: "5px",
  },
  span: {
    color: "#a1a1a1",
    fontSize: "12px",
  },
  link: {
    width: "40px",
    height: "40px",
    display: "block",
    margin: "0 10px",
  },
};
