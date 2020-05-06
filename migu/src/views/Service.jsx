import React, { Component } from "react";
export default class Service extends Component {
  render() {
    return (
      <div style={{ background: "#f8f8f8" }}>
        <h2 style={style.h2}>意见反馈</h2>
        <p style={style.p}>在线客服</p>
        <p style={style.p}>咪咕用户服务协议</p>
        <p style={style.last}>隐私权政策</p>
        <div style={style.kong}></div>
        <this.PromotImg></this.PromotImg>
        <this.DownLoad></this.DownLoad>
        <this.NavBotton></this.NavBotton>
      </div>
    );
  }
}
const style = {
  h2: {
    height: "40px",
    width: "100%",
    background: "#fff",
    color: "#2b9bbb",
    textAlign: "center",
    lineHeight: "40px",
    fontSize: "16px",
    borderBottom: "1px solid #ddd",
  },
  p: {
    height: "36px",
    color: "#2b9bbb",
    textAlign: "left",
    lineHeight: "36px",
    fontSize: "13px",
    paddingLeft: "20px",
    borderBottom: "1px solid #ddd",
  },
  last: {
    height: "36px",
    color: "#2b9bbb",
    textAlign: "left",
    lineHeight: "36px",
    fontSize: "13px",
    paddingLeft: "20px",
    borderBottom: "1px solid #ddd",
    marginBottom: "275px",
  },
};
